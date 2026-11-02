/**
 * RoomMind schedule helpers: turns the blocks of a Home Assistant schedule helper
 * (schedule.get_schedule) into a timeline of upcoming periods with their target temperatures,
 * following the same rules as RoomMind:
 *   - inside a block: the block's heat_temperature / cool_temperature / temperature, else comfort
 *   - outside of all blocks: eco (or "off" when RoomMind's schedule_off_action is "off")
 * Block temperatures are in the Home Assistant unit, comfort/eco temperatures in °C.
 */

export const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const DAY = 86400;

/** "06:30:00" / "24:00:00" / "23:59:59.999999" → seconds since midnight (end of day → 86400). */
export function parseTimeOfDay(value) {
  const match = /^(\d{1,2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?$/.exec(String(value ?? "").trim());
  if (!match) return undefined;
  const seconds = Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3] || 0);
  return seconds >= DAY - 1 ? DAY : seconds;
}

/** Offset (ms) of a time zone against UTC at a given instant. */
function tzOffset(ts, timeZone) {
  if (!timeZone) return -new Date(ts).getTimezoneOffset() * 60000;
  try {
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
        .formatToParts(new Date(ts))
        .map((p) => [p.type, p.value]),
    );
    const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour % 24, parts.minute, parts.second);
    return asUtc - Math.floor(ts / 1000) * 1000;
  } catch (_err) {
    return -new Date(ts).getTimezoneOffset() * 60000;
  }
}

/** Calendar date (y, m, d) and weekday of an instant in a time zone. */
function zonedDate(ts, timeZone) {
  const local = new Date(ts + tzOffset(ts, timeZone));
  return { y: local.getUTCFullYear(), m: local.getUTCMonth(), d: local.getUTCDate() };
}

/** Epoch ms of a wall-clock time (seconds since midnight) on a calendar date in a time zone. */
function wallToEpoch(y, m, d, seconds, timeZone) {
  const guess = Date.UTC(y, m, d) + seconds * 1000;
  let ts = guess - tzOffset(guess, timeZone);
  // Second pass handles days with a DST switch
  ts = guess - tzOffset(ts, timeZone);
  return ts;
}

/** Temperatures of a block's data: { heat, cool, custom } in display units, undefined = room default. */
function blockTemps(data) {
  const num = (v) => (v === null || v === undefined || v === "" || Number.isNaN(Number(v)) ? undefined : Number(v));
  const heat = num(data?.heat_temperature);
  const cool = num(data?.cool_temperature);
  if (heat !== undefined || cool !== undefined) return { heat, cool, custom: true };
  const single = num(data?.temperature);
  if (single !== undefined) return { heat: single, cool: single, custom: true };
  return { custom: false };
}

/**
 * Builds the timeline from `nowMs` for `days` days.
 * Returns periods { start, end, inBlock, heat, cool, custom } (epoch ms; heat/cool in display units,
 * null = off). Adjacent periods with the same state and temperatures are merged.
 *
 * @param {object} blocks       schedule.get_schedule result for one entity ({ monday: [{from, to, data}], … })
 * @param {object} defaults     { comfortHeat, comfortCool, ecoHeat, ecoCool } in display units, offAction "eco"|"off"
 */
export function buildTimeline(blocks, defaults, nowMs, { days = 8, timeZone } = {}) {
  const intervals = [];
  const today = zonedDate(nowMs, timeZone);
  for (let offset = -1; offset <= days; offset += 1) {
    // Step through calendar days (not 24 h steps, which drift on DST switches)
    const date = new Date(Date.UTC(today.y, today.m, today.d + offset));
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth();
    const d = date.getUTCDate();
    const weekday = date.getUTCDay();
    for (const block of blocks?.[WEEKDAYS[weekday]] || []) {
      const from = parseTimeOfDay(block.from);
      const to = parseTimeOfDay(block.to);
      if (from === undefined || to === undefined || to <= from) continue;
      intervals.push({
        start: wallToEpoch(y, m, d, from, timeZone),
        end: wallToEpoch(y, m, d, to, timeZone),
        ...blockTemps(block.data),
      });
    }
  }
  intervals.sort((a, b) => a.start - b.start);

  const horizon = nowMs + days * DAY * 1000;
  const off = defaults.offAction === "off";
  const gap = (start, end) => ({
    start,
    end,
    inBlock: false,
    heat: off ? null : defaults.ecoHeat,
    cool: off ? null : defaults.ecoCool,
    custom: false,
  });
  const periods = [];
  let cursor = nowMs;
  for (const iv of intervals) {
    if (iv.end <= cursor) continue;
    if (iv.start > cursor) periods.push(gap(cursor, Math.min(iv.start, horizon)));
    if (iv.start >= horizon) break;
    periods.push({
      start: Math.max(iv.start, cursor),
      end: iv.end,
      inBlock: true,
      heat: iv.heat ?? defaults.comfortHeat,
      cool: iv.cool ?? defaults.comfortCool,
      custom: iv.custom,
    });
    cursor = iv.end;
  }
  if (cursor < horizon) periods.push(gap(cursor, horizon));

  // Merge seamless periods with identical state (e.g. a block running over midnight)
  const merged = [];
  for (const p of periods) {
    const last = merged[merged.length - 1];
    if (
      last &&
      last.end === p.start &&
      last.inBlock === p.inBlock &&
      last.heat === p.heat &&
      last.cool === p.cool
    ) {
      last.end = p.end;
    } else {
      merged.push({ ...p });
    }
  }
  return merged;
}

/** Index of the active schedule like RoomMind resolves it (selector entity or first schedule). */
export function activeScheduleIndex(room, hass) {
  const schedules = room?.schedules || [];
  if (!schedules.length) return -1;
  const live = room?.live?.active_schedule_index;
  if (typeof live === "number" && live >= 0 && live < schedules.length) return live;
  const selector = room?.schedule_selector_entity;
  const state = selector ? hass?.states?.[selector] : undefined;
  if (!state || ["unavailable", "unknown"].includes(state.state)) return 0;
  if (selector.startsWith("input_boolean.")) return state.state === "on" ? 1 : 0;
  if (selector.startsWith("input_number.")) {
    const idx = Math.trunc(Number(state.state)) - 1;
    return idx >= 0 && idx < schedules.length ? idx : -1;
  }
  return 0;
}
