const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let s=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(o,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,m=globalThis,p=m.trustedTypes,_=p?p.emptyScript:"",f=m.reactiveElementPolyfillSupport,g=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{if(e)i.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=o;const n=s.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const n=this.constructor;if(!1===o&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??w)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[g("elementProperties")]=new Map,y[g("finalized")]=new Map,f?.({ReactiveElement:y}),(m.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,x=t=>t,k=$.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+E,C=`<${M}>`,O=document,T=()=>O.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,D="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,H=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,B=/"/g,j=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,V=O.createTreeWalker(O,129);function Z(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===R?"!--"===c[1]?r=P:void 0!==c[1]?r=U:void 0!==c[2]?(j.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=H):void 0!==c[3]&&(r=H):r===H?">"===c[0]?(r=s??R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?H:'"'===c[3]?B:I):r===B||r===I?r=H:r===P||r===U?r=R:(r=H,s=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===R?i+C:l>=0?(o.push(a),i.slice(0,l)+S+i.slice(l)+E+d):i+E+(-2===l?e:d)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=q.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=V.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=l[n++],i=o.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Q}),o.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(j.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),V.nextNode(),a.push({type:2,index:++s});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===M)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,o){if(e===L)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=z(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=G(t,s._$AS(t,e.values),s,o)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);V.currentNode=o;let s=V.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new ot(s,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(s=V.nextNode(),n++)}return V.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),z(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Y(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new q(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new X(this.O(T()),this.O(T()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=G(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=G(this,o[i+r],e,r),a===L&&(a=this._$AH[r]),n||=!z(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===L)return;const i=this._$AH,o=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(q,X),($.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new X(e.insertBefore(T(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const at=nt.litElementPolyfillSupport;at?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.2");const ct={en:{card:{name:"RoomMind Card",description:"Controls a RoomMind room: target temperature, duration, presets, mode, windows and more.",no_entity:"Please select a RoomMind climate entity (climate.roommind_…).",not_found:"Entity not found: {entity}",unavailable:"Unavailable"},action:{heating:"Heating",cooling:"Cooling",idle:"Idle",off:"Off",fan:"Fan",drying:"Drying"},hvac:{off:"Off",heat:"Heat",cool:"Cool",heat_cool:"Auto",auto:"Auto"},preset:{none:"Schedule",comfort:"Comfort",eco:"Eco",manual:"Hold"},target:{title:"Target",heat:"Heat to",cool:"Cool above",pending:"applying …",decrease:"Decrease temperature",increase:"Increase temperature"},duration:{title:"Duration",schedule:"Until schedule",permanent:"Permanent",hint_idle:"applies to the next change",hint_active:"changes the active override",minutes:"{n} min",hours:"{n} h",hours_minutes:"{h} h {m} min",until:"until {time}",custom:"Custom …",custom_for:"For",custom_until:"Until",custom_hours:"Hours",custom_minutes:"Minutes",custom_end:"End",apply:"Apply",apply_active:"Update override",custom_hint_idle:"Applies to the next change of temperature or preset.",custom_hint_active:"Changes the duration of the active override.",in_past:"This point in time is in the past.",too_short:"Please enter a duration of at least 1 minute."},override:{schedule:"Following the schedule",active:"{preset} active",until:"until {time}",remaining:"{time} left",permanent:"Permanent – until you end it",end:"End",extend:"Extend",suppressed:"Override paused (nobody home)"},chip:{window_open:"Window open",window_closed:"Window closed",away:"Away",vacant:"Room empty",vacation:"Vacation",vacation_until:"Vacation until {time}",mold_warning:"Mold risk",mold_critical:"Mold danger",mold_prevention:"Mold prevention +{delta}",control_paused:"Control paused",preheat:"Preheating"},schedule:{title:"Schedule",now:"Now",until:"until {time}",next_block:"Next block: {time} · {temp}",next_change:"Next schedule change: {time}",comfort:"Comfort",block:"Block",eco:"Eco",off:"Off",override_until:"The override takes precedence – the schedule applies again from {time}.",override_permanent:"The override takes precedence until you end it."},windows:{title:"Windows & doors",open:"Open",closed:"Closed",unknown:"Unknown",delays:"Pause after {open} · resume after {close}",paused:"Heating paused while a window is open",none:"No window/door sensors configured in RoomMind."},toggle:{title:"Switches",vacation:"Vacation mode",climate_control:"Climate control",cover_auto:"Cover automation",cover_paused:"Cover automation paused (moved manually)",cover_resume:"Resume"},info:{humidity:"Humidity",power:"Power",device:"Device",outdoor:"Outdoor",confidence:"Model"},settings:{title:"Room settings",comfort:"Comfort",eco:"Eco",comfort_heat:"Comfort (heat)",comfort_cool:"Comfort (cool)",eco_heat:"Eco (heat)",eco_cool:"Eco (cool)",window_open_delay:"Window: pause after",window_close_delay:"Window: resume after",seconds:"s",save:"Save",saved:"Saved"},error:{action:"Action failed: {message}",no_api:"RoomMind API not reachable – only basic functions available."},time:{today:"{time}",tomorrow:"tomorrow {time}",min:"{m} min",hour_min:"{h} h {m} min",day_hour:"{d} d {h} h"},editor:{decimal:".",group_room:"Room",extra_durations:"More durations in hours (e.g. 5; 10; 1.25)",helper_extra_durations:"Separate several values with semicolons or spaces.",show_custom_duration:"“Custom …” button (enter any duration or end time)",vacation_entity:"Vacation switch (optional, default: switch.roommind_vacation)",hint_duration:"These durations can be picked in the card. With “Custom …” you enter any duration or an end date and time in the card.",helper_area_id:"Only needed when the room is not detected automatically.",helper_apply_delay:"Time after the last tap on + / − before the temperature is sent.",entity:"RoomMind room (climate entity)",name:"Name (optional)",icon:"Icon (optional)",area_id:"RoomMind room (optional)",durations:"Durations to choose from",default_duration:"Default duration",sections:"Sections",show_status:"Status chips (window, away, vacation …)",show_target:"Target temperature",show_duration:"Show duration selector",show_presets:"Presets (schedule, comfort, eco, hold)",show_modes:"HVAC mode (off, heat, cool, auto)",show_schedule:"Schedule (next blocks with temperature)",schedule_items:"Number of schedule entries shown",helper_schedule_items:"Now and the following periods of the active RoomMind schedule.",show_windows:"Windows & doors",show_toggles:"Switches (vacation, cover automation …)",show_climate_control:"Show the “climate control” switch",show_info:"Extra info (power, outdoor temperature …)",show_settings:"Room settings (comfort/eco, window delay)",settings_open:"Show room settings expanded",apply_delay:"Delay before the temperature is applied (ms)",appearance:"Appearance & advanced",compact:"Compact"}},de:{card:{name:"RoomMind Karte",description:"Steuert einen RoomMind-Raum: Zieltemperatur, Laufzeit, Presets, Modus, Fenster und mehr.",no_entity:"Bitte eine RoomMind-Klima-Entität auswählen (climate.roommind_…).",not_found:"Entität nicht gefunden: {entity}",unavailable:"Nicht verfügbar"},action:{heating:"Heizt",cooling:"Kühlt",idle:"Bereit",off:"Aus",fan:"Lüftet",drying:"Trocknet"},hvac:{off:"Aus",heat:"Heizen",cool:"Kühlen",heat_cool:"Auto",auto:"Auto"},preset:{none:"Zeitplan",comfort:"Komfort",eco:"Eco",manual:"Halten"},target:{title:"Ziel",heat:"Heizen auf",cool:"Kühlen ab",pending:"wird übernommen …",decrease:"Temperatur senken",increase:"Temperatur erhöhen"},duration:{title:"Laufzeit",schedule:"Bis Zeitplan",permanent:"Dauerhaft",hint_idle:"gilt für die nächste Änderung",hint_active:"ändert den aktiven Override",minutes:"{n} min",hours:"{n} h",hours_minutes:"{h} h {m} min",until:"bis {time}",custom:"Eigene …",custom_for:"Für",custom_until:"Bis",custom_hours:"Stunden",custom_minutes:"Minuten",custom_end:"Ende",apply:"Übernehmen",apply_active:"Override anpassen",custom_hint_idle:"Gilt für die nächste Änderung von Temperatur oder Preset.",custom_hint_active:"Ändert die Laufzeit des aktiven Overrides.",in_past:"Der Zeitpunkt liegt in der Vergangenheit.",too_short:"Bitte eine Laufzeit von mindestens 1 Minute eingeben."},override:{schedule:"Folgt dem Zeitplan",active:"{preset} aktiv",until:"bis {time}",remaining:"noch {time}",permanent:"Dauerhaft – bis du ihn beendest",end:"Beenden",extend:"Verlängern",suppressed:"Override pausiert (niemand zuhause)"},chip:{window_open:"Fenster offen",window_closed:"Fenster zu",away:"Abwesend",vacant:"Raum leer",vacation:"Urlaub",vacation_until:"Urlaub bis {time}",mold_warning:"Schimmelrisiko",mold_critical:"Schimmelgefahr",mold_prevention:"Schimmelschutz +{delta}",control_paused:"Steuerung pausiert",preheat:"Vorheizen"},schedule:{title:"Zeitplan",now:"Jetzt",until:"bis {time}",next_block:"Nächster Block: {time} · {temp}",next_change:"Nächster Wechsel im Zeitplan: {time}",comfort:"Komfort",block:"Block",eco:"Eco",off:"Aus",override_until:"Der Override hat Vorrang – der Zeitplan greift wieder ab {time}.",override_permanent:"Der Override hat Vorrang, bis du ihn beendest."},windows:{title:"Fenster & Türen",open:"Offen",closed:"Geschlossen",unknown:"Unbekannt",delays:"Pause nach {open} · Fortsetzen nach {close}",paused:"Heizung pausiert, solange ein Fenster offen ist",none:"Keine Fenster-/Türsensoren in RoomMind hinterlegt."},toggle:{title:"Schalter",vacation:"Urlaubsmodus",climate_control:"Klimasteuerung",cover_auto:"Rollo-Automatik",cover_paused:"Rollo-Automatik pausiert (manuell verstellt)",cover_resume:"Fortsetzen"},info:{humidity:"Luftfeuchte",power:"Leistung",device:"Gerät",outdoor:"Außen",confidence:"Modell"},settings:{title:"Raum-Einstellungen",comfort:"Komfort",eco:"Eco",comfort_heat:"Komfort (Heizen)",comfort_cool:"Komfort (Kühlen)",eco_heat:"Eco (Heizen)",eco_cool:"Eco (Kühlen)",window_open_delay:"Fenster: Pause nach",window_close_delay:"Fenster: Fortsetzen nach",seconds:"s",save:"Speichern",saved:"Gespeichert"},error:{action:"Aktion fehlgeschlagen: {message}",no_api:"RoomMind-API nicht erreichbar – nur Grundfunktionen verfügbar."},time:{today:"{time}",tomorrow:"morgen {time}",min:"{m} min",hour_min:"{h} h {m} min",day_hour:"{d} T {h} h"},editor:{decimal:",",group_room:"Raum",extra_durations:"Weitere Laufzeiten in Stunden (z. B. 5; 10; 1,25)",helper_extra_durations:"Mehrere Werte mit Semikolon oder Leerzeichen trennen.",show_custom_duration:"Knopf „Eigene …“ (Dauer oder Endzeit frei eingeben)",vacation_entity:"Urlaubs-Schalter (optional, Standard: switch.roommind_vacation)",hint_duration:"Diese Laufzeiten stehen in der Karte zur Auswahl. Mit „Eigene …“ gibst du in der Karte eine beliebige Dauer oder ein Enddatum mit Uhrzeit ein.",helper_area_id:"Nur nötig, wenn der Raum nicht automatisch erkannt wird.",helper_apply_delay:"Wartezeit nach dem letzten Klick auf + / −, bevor die Temperatur gesendet wird.",entity:"RoomMind-Raum (Klima-Entität)",name:"Name (optional)",icon:"Icon (optional)",area_id:"RoomMind-Raum (optional)",durations:"Laufzeiten zur Auswahl",default_duration:"Standard-Laufzeit",sections:"Bereiche",show_status:"Status-Chips (Fenster, Abwesenheit, Urlaub …)",show_target:"Zieltemperatur",show_duration:"Laufzeit-Auswahl anzeigen",show_presets:"Presets (Zeitplan, Komfort, Eco, Halten)",show_modes:"Betriebsart (Aus, Heizen, Kühlen, Auto)",show_schedule:"Zeitplan (nächste Blöcke mit Temperatur)",schedule_items:"Anzahl angezeigter Zeitplan-Einträge",helper_schedule_items:"Jetzt und die folgenden Zeiträume des aktiven RoomMind-Zeitplans.",show_windows:"Fenster & Türen",show_toggles:"Schalter (Urlaub, Rollo-Automatik …)",show_climate_control:"Schalter „Klimasteuerung“ anzeigen",show_info:"Zusatzinfos (Leistung, Außentemperatur …)",show_settings:"Raum-Einstellungen (Komfort/Eco, Fenster-Verzögerung)",settings_open:"Raum-Einstellungen aufgeklappt anzeigen",apply_delay:"Verzögerung bis zum Übernehmen der Temperatur (ms)",appearance:"Darstellung & Erweitert",compact:"Kompakt"}}};function lt(t,e){return e.split(".").reduce((t,e)=>null==t?void 0:t[e],ct[t])}function ht(t){return(t?.locale?.language||t?.language||navigator.language||"en").split("-")[0].toLowerCase()}function dt(t,e,i){let o=lt(ht(t),e)??lt("en",e)??e;if(i)for(const[t,e]of Object.entries(i))o=o.replace(`{${t}}`,e);return o}const ut=n`
  :host {
    --rm-heat: var(--state-climate-heat-color, #ff8100);
    --rm-cool: var(--state-climate-cool-color, #2b9af9);
    --rm-idle: var(--state-climate-idle-color, #8a8a8a);
    --rm-off: var(--state-climate-off-color, var(--disabled-color, #9e9e9e));
    --rm-comfort: var(--orange-color, #ff9800);
    --rm-eco: var(--green-color, #4caf50);
    --rm-manual: var(--blue-color, #2196f3);
    --rm-warn: var(--warning-color, #ffa600);
    --rm-error: var(--error-color, #db4437);
    --rm-radius: var(--ha-card-border-radius, 12px);
    --rm-chip-bg: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.06);
    --rm-gap: 16px;
    display: block;
  }

  ha-card {
    padding: var(--rm-gap);
    display: flex;
    flex-direction: column;
    gap: 14px;
    overflow: hidden;
    position: relative;
    container-type: inline-size;
    --rm-accent: var(--rm-idle);
  }
  ha-card.action-heating {
    --rm-accent: var(--rm-heat);
  }
  ha-card.action-cooling {
    --rm-accent: var(--rm-cool);
  }
  ha-card.action-off {
    --rm-accent: var(--rm-off);
  }
  ha-card.compact {
    --rm-gap: 12px;
    gap: 10px;
  }

  button {
    font: inherit;
    color: inherit;
  }

  /* Header -------------------------------------------------------------- */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    min-width: 0;
  }
  .icon-bubble {
    flex: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--rm-accent);
    background: color-mix(in srgb, var(--rm-accent) 18%, transparent);
    transition: color 0.3s, background 0.3s;
  }
  .compact .icon-bubble {
    width: 36px;
    height: 36px;
  }
  .heading {
    flex: 1;
    min-width: 0;
  }
  .name {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status {
    font-size: 0.875em;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--rm-accent);
    flex: none;
  }
  ha-card.action-heating .status .dot,
  ha-card.action-cooling .status .dot {
    animation: pulse 1.6s ease-in-out infinite;
  }
  @keyframes pulse {
    50% {
      opacity: 0.35;
    }
  }
  .current {
    text-align: right;
    flex: none;
  }
  .current .temp {
    font-size: 1.9em;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .compact .current .temp {
    font-size: 1.5em;
  }
  .current .temp .unit {
    font-size: 0.5em;
    vertical-align: top;
    margin-left: 2px;
    color: var(--secondary-text-color);
  }
  .current .humidity {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin-top: 4px;
    --mdc-icon-size: 14px;
  }

  /* Chips --------------------------------------------------------------- */
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px 4px 8px;
    border-radius: 16px;
    font-size: 0.8em;
    font-weight: 500;
    background: var(--rm-chip-bg);
    color: var(--primary-text-color);
    border: none;
    --mdc-icon-size: 16px;
    --chip-color: var(--secondary-text-color);
  }
  .chip ha-icon {
    color: var(--chip-color);
  }
  .chip.warn {
    --chip-color: var(--rm-warn);
    background: color-mix(in srgb, var(--rm-warn) 16%, transparent);
  }
  .chip.error {
    --chip-color: var(--rm-error);
    background: color-mix(in srgb, var(--rm-error) 14%, transparent);
  }
  .chip.info {
    --chip-color: var(--rm-cool);
    background: color-mix(in srgb, var(--rm-cool) 14%, transparent);
  }
  .chip.ok {
    --chip-color: var(--rm-eco);
  }
  .chip.clickable {
    cursor: pointer;
  }

  /* Target -------------------------------------------------------------- */
  .targets {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .target {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    border-radius: var(--rm-radius);
    background: var(--rm-chip-bg);
  }
  .target .value {
    flex: 1;
    text-align: center;
    min-width: 0;
  }
  .target .value .label {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .target .value .number {
    font-size: 2.2em;
    font-weight: 400;
    line-height: 1.15;
    font-variant-numeric: tabular-nums;
    transition: opacity 0.2s;
  }
  .compact .target .value .number {
    font-size: 1.7em;
  }
  .targets.dual .target .value .number {
    font-size: 1.6em;
  }
  .target .value .number .unit {
    font-size: 0.45em;
    vertical-align: top;
    margin-left: 2px;
    color: var(--secondary-text-color);
  }
  .target.pending .number {
    color: var(--rm-accent);
  }
  .target.disabled {
    opacity: 0.5;
  }
  .step {
    flex: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: grid;
    place-items: center;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    transition: transform 0.1s, background 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .compact .step {
    width: 40px;
    height: 40px;
  }
  .step:hover {
    background: color-mix(in srgb, var(--rm-accent) 12%, var(--card-background-color, #fff));
  }
  .step:active {
    transform: scale(0.92);
  }
  .step:disabled {
    cursor: default;
    opacity: 0.4;
    transform: none;
  }
  .step.heat {
    color: var(--rm-heat);
  }
  .step.cool {
    color: var(--rm-cool);
  }

  /* Override bar -------------------------------------------------------- */
  .override {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 8px 8px 12px;
    border-radius: var(--rm-radius);
    --ov-color: var(--secondary-text-color);
    background: var(--rm-chip-bg);
    --mdc-icon-size: 20px;
  }
  .override.active {
    background: color-mix(in srgb, var(--ov-color) 14%, transparent);
  }
  .override.comfort {
    --ov-color: var(--rm-comfort);
  }
  .override.eco {
    --ov-color: var(--rm-eco);
  }
  .override.manual {
    --ov-color: var(--rm-manual);
  }
  .override > ha-icon {
    color: var(--ov-color);
    flex: none;
  }
  .override .text {
    flex: 1;
    min-width: 0;
    font-size: 0.875em;
    line-height: 1.35;
  }
  .override .text .title {
    font-weight: 500;
  }
  .override .text .sub {
    color: var(--secondary-text-color);
    font-size: 0.92em;
  }
  .override .progress {
    height: 3px;
    border-radius: 2px;
    margin-top: 5px;
    background: color-mix(in srgb, var(--ov-color) 20%, transparent);
    overflow: hidden;
  }
  .override .progress > div {
    height: 100%;
    background: var(--ov-color);
    transition: width 1s linear;
  }
  .override .actions {
    display: flex;
    gap: 6px;
    flex: none;
  }
  .small-btn {
    border: none;
    cursor: pointer;
    border-radius: 16px;
    padding: 6px 12px;
    font-size: 0.8em;
    font-weight: 500;
    background: var(--card-background-color, #fff);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    white-space: nowrap;
  }
  .small-btn:hover {
    background: color-mix(in srgb, var(--ov-color, var(--primary-color)) 12%, var(--card-background-color, #fff));
  }
  .small-btn.primary {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  /* Sections ------------------------------------------------------------ */
  .section-title {
    font-size: 0.8em;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .section-title .hint {
    text-transform: none;
    letter-spacing: 0;
    font-weight: 400;
    opacity: 0.85;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Duration chips ------------------------------------------------------ */
  .durations {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .dur {
    flex: none;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    background: transparent;
    border-radius: 16px;
    padding: 6px 12px;
    font-size: 0.85em;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .dur:hover {
    border-color: var(--primary-color);
  }
  .dur.custom-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    --mdc-icon-size: 16px;
  }
  .dur.custom-chip.open:not(.selected) {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  .custom {
    margin-top: 10px;
    padding: 12px;
    border-radius: var(--rm-radius);
    background: var(--rm-chip-bg);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .custom-modes {
    display: flex;
    gap: 6px;
  }
  .custom-modes .dur {
    transition: none;
    min-width: 64px;
  }
  .custom-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .custom .field .input {
    background: var(--card-background-color, #fff);
  }
  .custom input[type="datetime-local"] {
    padding: 6px 8px;
    font-size: 1em;
    min-height: 22px;
    color-scheme: light dark;
  }
  .custom-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .custom-actions .note {
    padding: 0;
  }
  .dur.selected {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  /* Segmented buttons (presets, modes) --------------------------------- */
  .segments {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    gap: 6px;
  }
  .seg {
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 8px 4px;
    background: var(--rm-chip-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 0;
    --mdc-icon-size: 20px;
    --seg-color: var(--primary-color);
    transition: background 0.15s, color 0.15s;
    -webkit-tap-highlight-color: transparent;
  }
  .seg .seg-label {
    font-size: 0.78em;
    font-weight: 500;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .seg .seg-sub {
    font-size: 0.7em;
    color: var(--secondary-text-color);
  }
  .seg ha-icon {
    color: var(--seg-color);
  }
  .seg:hover {
    background: color-mix(in srgb, var(--seg-color) 14%, transparent);
  }
  .seg.active {
    background: var(--seg-color);
    color: #fff;
  }
  .seg.active ha-icon,
  .seg.active .seg-sub {
    color: #fff;
  }
  .seg.none {
    --seg-color: var(--primary-color);
  }
  .seg.comfort {
    --seg-color: var(--rm-comfort);
  }
  .seg.eco {
    --seg-color: var(--rm-eco);
  }
  .seg.manual {
    --seg-color: var(--rm-manual);
  }
  .seg.off {
    --seg-color: var(--rm-off);
  }
  .seg.heat {
    --seg-color: var(--rm-heat);
  }
  .seg.cool {
    --seg-color: var(--rm-cool);
  }
  .seg.heat_cool,
  .seg.auto {
    --seg-color: var(--green-color, #4caf50);
  }
  .compact .seg {
    flex-direction: row;
    justify-content: center;
    gap: 6px;
    padding: 7px 4px;
  }
  .compact .seg .seg-sub {
    display: none;
  }
  @container (max-width: 380px) {
    .compact .seg {
      flex-direction: column;
      gap: 2px;
    }
  }

  /* Schedule ------------------------------------------------------------ */
  .section-title.clickable {
    cursor: pointer;
  }
  .sched {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .sched-row {
    display: grid;
    grid-template-columns: 14px minmax(0, 1fr) auto auto;
    align-items: center;
    gap: 10px;
    min-height: 36px;
    padding: 0 4px;
    position: relative;
    --sched-color: var(--rm-comfort);
  }
  .sched-row.block {
    --sched-color: var(--rm-heat);
  }
  .sched-row.eco {
    --sched-color: var(--rm-eco);
  }
  .sched-row.off {
    --sched-color: var(--rm-off);
  }
  .sched-row:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 10px;
    top: 24px;
    bottom: -12px;
    width: 2px;
    background: var(--divider-color, rgba(0, 0, 0, 0.12));
  }
  .sched-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--sched-color);
    background: var(--card-background-color, #fff);
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }
  .sched-row.now .sched-dot {
    background: var(--sched-color);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--sched-color) 25%, transparent);
  }
  .sched-when {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 6px;
    min-width: 0;
  }
  .sched-start {
    font-weight: 500;
    white-space: nowrap;
  }
  .sched-end {
    font-size: 0.82em;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .sched-kind {
    font-size: 0.75em;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 10px;
    color: var(--sched-color);
    background: color-mix(in srgb, var(--sched-color) 14%, transparent);
    white-space: nowrap;
  }
  .sched-temp {
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    min-width: 56px;
    text-align: right;
  }
  .override .text .sub + .sub {
    margin-top: 2px;
  }

  /* Rows (windows, switches) ------------------------------------------- */
  .rows {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 40px;
    padding: 0 4px;
    border-radius: 8px;
    cursor: pointer;
    --mdc-icon-size: 22px;
  }
  .row:hover {
    background: var(--rm-chip-bg);
  }
  .row > ha-icon {
    color: var(--secondary-text-color);
    flex: none;
  }
  .row.on > ha-icon {
    color: var(--rm-warn);
  }
  .row.on.toggle > ha-icon {
    color: var(--primary-color);
  }
  .row .row-name {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .row .row-name .sub {
    display: block;
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }
  .row .row-state {
    color: var(--secondary-text-color);
    font-size: 0.9em;
  }
  .row.on .row-state {
    color: var(--rm-warn);
    font-weight: 500;
  }
  .note {
    font-size: 0.8em;
    color: var(--secondary-text-color);
    padding: 2px 4px;
  }

  /* Toggle switch ------------------------------------------------------- */
  .switch {
    position: relative;
    width: 36px;
    height: 20px;
    flex: none;
    border-radius: 10px;
    background: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.26);
    transition: background 0.2s;
  }
  .switch::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s;
  }
  .switch.on {
    background: var(--primary-color);
  }
  .switch.on::after {
    transform: translateX(16px);
  }

  /* Info ---------------------------------------------------------------- */
  .info {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    font-size: 0.82em;
    color: var(--secondary-text-color);
  }
  .info span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    --mdc-icon-size: 16px;
  }
  .info b {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Settings ------------------------------------------------------------ */
  details {
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    padding-top: 10px;
  }
  summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9em;
    font-weight: 500;
    color: var(--secondary-text-color);
    --mdc-icon-size: 20px;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary .chev {
    margin-left: auto;
    transition: transform 0.2s;
  }
  details[open] summary .chev {
    transform: rotate(180deg);
  }
  .settings {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 10px;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }
  .field .input {
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--rm-chip-bg);
    overflow: hidden;
  }
  .field .input button {
    border: none;
    background: transparent;
    width: 32px;
    height: 34px;
    cursor: pointer;
    font-size: 1.2em;
    flex: none;
  }
  .field .input button:hover {
    background: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.08);
  }
  .field input {
    flex: 1;
    min-width: 0;
    width: 100%;
    border: none;
    background: transparent;
    text-align: center;
    font: inherit;
    font-size: 1.15em;
    color: var(--primary-text-color);
    -moz-appearance: textfield;
  }
  .field input::-webkit-outer-spin-button,
  .field input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .field .suffix {
    padding-right: 8px;
    color: var(--secondary-text-color);
  }
  .settings-actions {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }

  /* Messages ------------------------------------------------------------ */
  .message {
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.85em;
  }
  .message.error {
    background: color-mix(in srgb, var(--rm-error) 14%, transparent);
    color: var(--rm-error);
  }
  .message.warning {
    background: color-mix(in srgb, var(--rm-warn) 16%, transparent);
  }
  .busy {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2px;
    overflow: hidden;
  }
  .busy::after {
    content: "";
    position: absolute;
    left: -40%;
    width: 40%;
    height: 100%;
    background: var(--primary-color);
    animation: busy 1s ease-in-out infinite;
  }
  @keyframes busy {
    to {
      left: 100%;
    }
  }
`,mt="roommind-card",pt="roommind-card-editor",_t=["schedule",.25,.5,1,1.5,2,3,4,6,8,12,24,48,"permanent"],ft={durations:["schedule",1,2,4,"permanent"],default_duration:"schedule",show_status:!0,show_target:!0,show_duration:!0,show_custom_duration:!0,show_presets:!0,show_modes:!0,show_windows:!0,show_toggles:!0,show_climate_control:!1,show_info:!0,show_settings:!0,show_schedule:!0,schedule_items:3,settings_open:!1,compact:!1,apply_delay:1200};function gt(t,e,i={}){const o=new CustomEvent(e,{bubbles:!0,composed:!0,detail:i});return t.dispatchEvent(o),o}function vt(t){if("schedule"===t||"permanent"===t)return t;const e=Number(t);return Number.isFinite(e)&&e>0?e:void 0}function wt(t,e){if("schedule"===e)return dt(t,"duration.schedule");if("permanent"===e)return dt(t,"duration.permanent");if(e&&"object"==typeof e&&e.until)return dt(t,"duration.until",{time:Mt(t,e.until)});const i=Math.round(60*Number(e)),o=Math.floor(i/60),s=i%60;return 0===o?dt(t,"duration.minutes",{n:s}):0===s?dt(t,"duration.hours",{n:o}):dt(t,"duration.hours_minutes",{h:o,m:s})}function bt(t){const e=t=>String(t).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}:${e(t.getMinutes())}`}function yt(t){return"°F"===t?.config?.unit_system?.temperature}function $t(t){return t?.config?.unit_system?.temperature||"°C"}function xt(t,e){return null==e?e:yt(t)?5*(e-32)/9:e}function kt(t,e){return null==e?e:yt(t)?9*e/5+32:e}function At(t,e){const i=e||.5;return Math.round(Math.round(t/i)*i*100)/100}function St(t,e,i=1){if(null==e||Number.isNaN(Number(e)))return"–";const o=Number(e);try{return new Intl.NumberFormat(t?.locale?.language||ht(t),{maximumFractionDigits:i,minimumFractionDigits:0}).format(o)}catch(t){return String(Math.round(o*10**i)/10**i)}}function Et(t,e,i=1){return`${St(t,e,i)} ${$t(t)}`}function Mt(t,e){const i=new Date(1e3*e),o=new Date,s=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),n=Math.round((s(i)-s(o))/864e5),r=function(t,e){try{return new Intl.DateTimeFormat(t?.locale?.language||ht(t),{hour:"2-digit",minute:"2-digit"}).format(e)}catch(t){return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}}(t,i);if(0===n)return dt(t,"time.today",{time:r});if(1===n)return dt(t,"time.tomorrow",{time:r});try{return`${new Intl.DateTimeFormat(t?.locale?.language||ht(t),{weekday:"short",day:"2-digit",month:"2-digit"}).format(i)} ${r}`}catch(t){return`${i.toLocaleDateString()} ${r}`}}function Ct(t,e){const i=Math.max(0,Math.round(e/60)),o=Math.floor(i/1440),s=Math.floor(i%1440/60),n=i%60;return o>0?dt(t,"time.day_hour",{d:o,h:s}):s>0?dt(t,"time.hour_min",{h:s,m:n}):dt(t,"time.min",{m:Math.max(n,1)})}function Ot(t,e){if(e&&e.override_active)return"number"==typeof e.override_until?e.override_until:null;const i=t?.attributes?.override_until;if(!i)return null;const o=Date.parse(i);return Number.isNaN(o)?null:o/1e3}const Tt={comfort:"boost",eco:"eco",manual:"custom"},zt={boost:"comfort",eco:"eco",custom:"manual"};const Nt=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],Dt=86400;function Rt(t){const e=/^(\d{1,2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?$/.exec(String(t??"").trim());if(!e)return;const i=3600*Number(e[1])+60*Number(e[2])+Number(e[3]||0);return i>=86399?Dt:i}function Pt(t,e){if(!e)return 6e4*-new Date(t).getTimezoneOffset();try{const i=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(new Date(t)).map(t=>[t.type,t.value]));return Date.UTC(i.year,i.month-1,i.day,i.hour%24,i.minute,i.second)-1e3*Math.floor(t/1e3)}catch(e){return 6e4*-new Date(t).getTimezoneOffset()}}function Ut(t,e,i,o,s){const n=Date.UTC(t,e,i)+1e3*o;let r=n-Pt(n,s);return r=n-Pt(r,s),r}function Ht(t){const e=t=>null==t||""===t||Number.isNaN(Number(t))?void 0:Number(t),i=e(t?.heat_temperature),o=e(t?.cool_temperature);if(void 0!==i||void 0!==o)return{heat:i,cool:o,custom:!0};const s=e(t?.temperature);return void 0!==s?{heat:s,cool:s,custom:!0}:{custom:!1}}function It(t,e,i,{days:o=8,timeZone:s}={}){const n=[],r=function(t,e){const i=new Date(t+Pt(t,e));return{y:i.getUTCFullYear(),m:i.getUTCMonth(),d:i.getUTCDate()}}(i,s);for(let e=-1;e<=o;e+=1){const i=new Date(Date.UTC(r.y,r.m,r.d+e)),o=i.getUTCFullYear(),a=i.getUTCMonth(),c=i.getUTCDate(),l=i.getUTCDay();for(const e of t?.[Nt[l]]||[]){const t=Rt(e.from),i=Rt(e.to);void 0===t||void 0===i||i<=t||n.push({start:Ut(o,a,c,t,s),end:Ut(o,a,c,i,s),...Ht(e.data)})}}n.sort((t,e)=>t.start-e.start);const a=i+o*Dt*1e3,c="off"===e.offAction,l=(t,i)=>({start:t,end:i,inBlock:!1,heat:c?null:e.ecoHeat,cool:c?null:e.ecoCool,custom:!1}),h=[];let d=i;for(const t of n)if(!(t.end<=d)){if(t.start>d&&h.push(l(d,Math.min(t.start,a))),t.start>=a)break;h.push({start:Math.max(t.start,d),end:t.end,inBlock:!0,heat:t.heat??e.comfortHeat,cool:t.cool??e.comfortCool,custom:t.custom}),d=t.end}d<a&&h.push(l(d,a));const u=[];for(const t of h){const e=u[u.length-1];e&&e.end===t.start&&e.inBlock===t.inBlock&&e.heat===t.heat&&e.cool===t.cool?e.end=t.end:u.push({...t})}return u}const Bt=["show_status","show_target","show_presets","show_modes","show_schedule","show_windows","show_toggles","show_climate_control","show_info","show_settings","settings_open"];let jt;const Ft=t=>String(t),Lt=t=>{const e=[...new Set(t.filter(t=>"number"==typeof t))].sort((t,e)=>t-e);return[...t.includes("schedule")?["schedule"]:[],...e,...t.includes("permanent")?["permanent"]:[]]};function Wt(t){return String(t||"").replace(/(\d),(\d)/g,"$1.$2").split(/[;,\s]+/).filter(Boolean).map(Number).filter(t=>Number.isFinite(t)&&t>0&&t<=999).map(t=>Math.round(1e3*t)/1e3)}class Kt extends rt{static properties={hass:{attribute:!1},_config:{state:!0},_ready:{state:!0},_rooms:{state:!0}};static styles=n`
    .group {
      margin-top: 20px;
    }
    .group-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      margin: 0 0 8px;
      color: var(--primary-text-color);
      --mdc-icon-size: 20px;
    }
    .group-title ha-icon {
      color: var(--secondary-text-color);
    }
    .hint {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      margin: -4px 0 8px;
    }
  `;connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-form")){jt||(jt=window.loadCardHelpers?window.loadCardHelpers():Promise.resolve());try{const t=await jt;if(t){t.createCardElement({type:"entities",entities:[]}),await customElements.whenDefined("hui-entities-card");const e=customElements.get("hui-entities-card");e?.getConfigElement&&await e.getConfigElement()}}catch(t){}}}().then(()=>{this._ready=!0})}setConfig(t){if(this._config=t,void 0!==this._extraText){const t=Wt(this._extraText).filter(t=>!_t.includes(t));JSON.stringify(Lt(t))!==JSON.stringify(this._extraDurations())&&(this._extraText=void 0)}}updated(t){t.has("hass")&&this.hass&&void 0===this._rooms&&(this._rooms=null,this.hass.callWS({type:"roommind/rooms/list"}).then(t=>{this._rooms=t?.rooms||{}}).catch(()=>{this._rooms={}}))}_t(t,e){return dt(this.hass,`editor.${t}`,e)}_durations(){return(this._config?.durations??ft.durations).map(vt).filter(t=>void 0!==t)}_extraDurations(){return this._durations().filter(t=>"number"==typeof t&&!_t.includes(t))}get _roomSchema(){return[{name:"entity",required:!0,selector:{entity:{domain:"climate",integration:"roommind"}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]}]}get _durationSchema(){const t=_t.map(t=>({value:Ft(t),label:wt(this.hass,t)})),e=this._durations().map(t=>({value:Ft(t),label:wt(this.hass,t)}));return[{name:"show_duration",selector:{boolean:{}}},{name:"durations",selector:{select:{multiple:!0,mode:"dropdown",options:t}}},{name:"extra_durations",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"default_duration",selector:{select:{mode:"dropdown",options:e}}},{name:"show_custom_duration",selector:{boolean:{}}}]}]}get _sectionSchema(){return[{type:"grid",name:"",column_min_width:"220px",schema:Bt.map(t=>({name:t,selector:{boolean:{}}}))}]}get _advancedSchema(){const t=this._rooms||{},e=Object.entries(t).map(([t,e])=>({value:t,label:e.display_name?`${e.display_name} (${t})`:t}));return[{type:"grid",name:"",schema:[{name:"compact",selector:{boolean:{}}},{name:"schedule_items",selector:{number:{min:1,max:8,step:1,mode:"box"}}},{name:"apply_delay",selector:{number:{min:300,max:5e3,step:100,mode:"box",unit_of_measurement:"ms"}}}]},e.length?{name:"area_id",selector:{select:{mode:"dropdown",custom_value:!0,options:e}}}:{name:"area_id",selector:{text:{}}},{name:"vacation_entity",selector:{entity:{domain:"switch"}}}]}_computeLabel=t=>this._t(t.name)||t.name;_computeHelper=t=>{const e=`helper_${t.name}`,i=this._t(e);return i===`editor.${e}`?void 0:i};_data(){const t={...ft,...this._config};return{...t,durations:this._durations().filter(t=>_t.includes(t)).map(Ft),extra_durations:this._extraText??this._extraDurations().map(t=>String(t).replace(".",dt(this.hass,"editor.decimal"))).join("; "),default_duration:Ft(vt(t.default_duration)??"schedule"),area_id:t.area_id||"",vacation_entity:t.vacation_entity||""}}_names(t){return t.flatMap(t=>t.schema?this._names(t.schema):[t.name])}_changed(t){t.stopPropagation();const e={...t.detail.value},i={...this._config};let o=this._durations();if("durations"in e){const t=new Set(e.durations||[]);o=[..._t.filter(e=>t.has(Ft(e))),...this._extraDurations()]}if("extra_durations"in e){this._extraText=e.extra_durations||"";const t=Wt(e.extra_durations).filter(t=>!_t.includes(t));o=[...o.filter(t=>_t.includes(t)||"number"!=typeof t),...t]}o=Lt(o),JSON.stringify(o)===JSON.stringify(ft.durations)?delete i.durations:i.durations=o;for(const[t,o]of Object.entries(e))if("durations"!==t&&"extra_durations"!==t){if("default_duration"===t){const t=vt(o);void 0===t||"schedule"===t?delete i.default_duration:i.default_duration=t;continue}""!==o&&null!=o?t in ft&&ft[t]===o?delete i[t]:i[t]=o:delete i[t]}void 0===i.default_duration||o.includes(i.default_duration)||delete i.default_duration,this._config=i,gt(this,"config-changed",{config:i})}_form(t){const e=this._data(),i=Object.fromEntries(this._names(t).filter(t=>t in e).map(t=>[t,e[t]]));return F`<ha-form
      .hass=${this.hass}
      .data=${i}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      .computeHelper=${this._computeHelper}
      @value-changed=${this._changed}
    ></ha-form>`}_group(t,e,i,o){return F`<div class="group">
      <div class="group-title"><ha-icon .icon=${t}></ha-icon>${e}</div>
      ${o?F`<div class="hint">${o}</div>`:W} ${i}
    </div>`}render(){return this.hass&&this._config?F`
      ${this._group("mdi:home-thermometer-outline",this._t("group_room"),this._form(this._roomSchema))}
      ${this._group("mdi:timer-outline",dt(this.hass,"duration.title"),this._form(this._durationSchema),this._t("hint_duration"))}
      ${this._group("mdi:view-dashboard-outline",this._t("sections"),this._form(this._sectionSchema))}
      ${this._group("mdi:cog-outline",this._t("appearance"),this._form(this._advancedSchema))}
    `:W}}customElements.get(pt)||customElements.define(pt,Kt);const Vt=["none","comfort","eco","manual"],Zt={none:"mdi:calendar-clock",comfort:"mdi:sofa-outline",eco:"mdi:leaf",manual:"mdi:hand-back-right-outline"},Jt=["off","heat","cool","heat_cool","auto"],qt={off:"mdi:power",heat:"mdi:fire",cool:"mdi:snowflake",heat_cool:"mdi:sun-snowflake-variant",auto:"mdi:thermostat-auto"};class Gt extends rt{static properties={hass:{attribute:!1},_config:{state:!0},_rooms:{state:!0},_areaId:{state:!0},_apiOk:{state:!0},_pending:{state:!0},_duration:{state:!0},_busy:{state:!0},_error:{state:!0},_draft:{state:!0},_saved:{state:!0},_now:{state:!0},_customOpen:{state:!0},_customMode:{state:!0},_customHours:{state:!0},_customMinutes:{state:!0},_customUntil:{state:!0},_customError:{state:!0},_schedules:{state:!0}};static styles=ut;static getConfigElement(){return document.createElement(pt)}static getStubConfig(t){const e=Object.keys(t?.states||{});return{entity:e.find(t=>t.startsWith("climate.roommind_")&&!t.endsWith("_override"))||e.find(t=>t.startsWith("climate."))||""}}constructor(){super(),this._now=Date.now(),this._apiOk=void 0,this._busy=0}setConfig(t){if(!t)throw new Error("Invalid configuration");const e=this._config;this._config={...ft,...t};const i=(this._config.durations||[]).map(vt).filter(t=>void 0!==t);if(this._durations=i.length?i:["schedule"],!e||e.default_duration!==t.default_duration||void 0===this._duration){const t=vt(this._config.default_duration)??"schedule";this._duration=t}!e||e.entity===t.entity&&e.area_id===t.area_id||(this._areaId=void 0,this._rooms=void 0,this._draft=void 0,this._fetchRooms())}getCardSize(){return this._config?.compact?5:8}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),this._fetchRooms(),this._poll=setInterval(()=>{this._now=Date.now(),this._fetchRooms()},3e4),this._tick=setInterval(()=>{this._overrideActive()&&(this._now=Date.now());const t=this._duration;t&&"object"==typeof t&&t.until&&t.until<=Date.now()/1e3&&(this._duration=vt(this._config.default_duration)??"schedule")},1e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._poll),clearInterval(this._tick),clearTimeout(this._applyTimer),clearTimeout(this._refetchTimer),clearTimeout(this._errorTimer)}get _stateObj(){return this.hass?.states?.[this._config?.entity]}get _room(){return this._areaId?this._rooms?.rooms?.[this._areaId]:void 0}get _live(){return this._room?.live}get _entityArea(){if(this._areaId)return this._areaId;const t=/^climate\.roommind_(.+)$/.exec(this._config?.entity||"");return t?t[1]:void 0}_relatedEntities(){const t=this._entityArea;return{vacation:this._config.vacation_entity||"switch.roommind_vacation",climate_control:t?`switch.roommind_${t}_climate_control`:void 0,cover_auto:t?`switch.roommind_${t}_cover_auto`:void 0,cover_paused:t?`binary_sensor.roommind_${t}_cover_paused`:void 0}}_watchedEntities(){const t=[this._config?.entity,...Object.values(this._relatedEntities())];for(const e of this._room?.window_sensors||[])t.push(e);for(const e of this._room?.schedules||[])t.push(e.entity_id);return t.push(this._room?.schedule_selector_entity),t.filter(Boolean)}_scheduleEntity(){const t=this._room,e=function(t,e){const i=t?.schedules||[];if(!i.length)return-1;const o=t?.live?.active_schedule_index;if("number"==typeof o&&o>=0&&o<i.length)return o;const s=t?.schedule_selector_entity,n=s?e?.states?.[s]:void 0;if(!n||["unavailable","unknown"].includes(n.state))return 0;if(s.startsWith("input_boolean."))return"on"===n.state?1:0;if(s.startsWith("input_number.")){const t=Math.trunc(Number(n.state))-1;return t>=0&&t<i.length?t:-1}return 0}(t,this.hass);return e>=0&&t.schedules[e]?.entity_id||void 0}async _fetchSchedule(t=!1){const e=this._scheduleEntity();if(!e||!e.startsWith("schedule.")||!this.hass)return;const i=this._schedules?.[e];if(!(!t&&i&&Date.now()-i.fetched<3e5)&&this._scheduleLoading!==e){this._scheduleLoading=e;try{const t=await this.hass.callWS({type:"call_service",domain:"schedule",service:"get_schedule",target:{entity_id:e},return_response:!0}),i=t?.response?.[e];this._schedules={...this._schedules||{},[e]:{blocks:i,fetched:Date.now()}}}catch(t){this._schedules={...this._schedules||{},[e]:{blocks:void 0,fetched:Date.now()}}}finally{this._scheduleLoading=void 0}}}async _fetchRooms(){if(this.hass&&this._config?.entity&&this.isConnected)if(this._fetching)this._refetch=!0;else{this._fetching=!0;try{const t=await this.hass.callWS({type:"roommind/rooms/list"});this._areaId||(this._areaId=await async function(t,e,i,o){if(o)return o;const s=Object.keys(i||{}),n=/^climate\.roommind_(.+)$/.exec(e||"");if(n&&s.includes(n[1]))return n[1];try{const i=await t.callWS({type:"config/entity_registry/get",entity_id:e}),o=/^roommind_(.+)_climate$/.exec(i?.unique_id||"");if(o&&s.includes(o[1]))return o[1];if(i?.area_id&&s.includes(i.area_id))return i.area_id}catch(t){}const r=t.entities?.[e]?.area_id;return r&&s.includes(r)?r:n?n[1]:void 0}(this.hass,this._config.entity,t?.rooms,this._config.area_id)),this._rooms=t,this._apiOk=Boolean(this._areaId&&t?.rooms?.[this._areaId]),!1!==this._config.show_schedule&&this._fetchSchedule()}catch(t){this._apiOk=!1}finally{this._fetching=!1,this._refetch&&(this._refetch=!1,this._fetchRooms())}}}_scheduleFetch(t=800){clearTimeout(this._refetchTimer),this._refetchTimer=setTimeout(()=>this._fetchRooms(),t)}shouldUpdate(t){if(!this._config)return!1;if(t.size>1||!t.has("hass"))return!0;const e=t.get("hass");return!e||e.locale!==this.hass.locale||e.themes!==this.hass.themes||this._watchedEntities().some(t=>e.states[t]!==this.hass.states[t])}willUpdate(t){if(t.has("hass")){const e=t.get("hass"),i=this._stateObj,o=e?.states?.[this._config.entity];e&&i&&o&&i!==o&&(this._scheduleFetch(),this._pending&&this._appliedAt&&this._bandMatches(this._pending)&&(this._pending=void 0)),e||void 0!==this._apiOk||this._fetchRooms();const s=this._scheduleEntity();if(e&&s&&e.states?.[s]!==this.hass.states?.[s]){const t=e.states?.[s]?.attributes,i=this.hass.states?.[s]?.attributes;t&&i&&JSON.stringify({...t,next_event:0})===JSON.stringify({...i,next_event:0})||this._fetchSchedule(!0)}}}async _run(t){this._busy+=1;try{await t()}catch(t){this._showError(t)}finally{this._busy-=1}}_showError(t){this._error=dt(this.hass,"error.action",{message:t?.message||t?.code||String(t)}),clearTimeout(this._errorTimer),this._errorTimer=setTimeout(()=>{this._error=void 0},7e3)}_climate(t,e={}){return this.hass.callService("climate",t,{entity_id:this._config.entity,...e})}async _setOverride(t,e,i,o){const s={type:"roommind/override/set",area_id:this._areaId,override_type:t};"custom"===t&&(null!=e&&(s.heat=Math.round(100*e)/100),null!=i&&(s.cool=Math.round(100*i)/100));const n="number"==typeof(r=o)?r:r&&"object"==typeof r&&r.until?Math.round((r.until-Date.now()/1e3)/3600*1e3)/1e3:void 0;var r;if(void 0!==n){if(n<=0)throw new Error(dt(this.hass,"duration.in_past"));s.duration=n}await this.hass.callWS(s),this._scheduleFetch(300)}_bandMatches(t){const e=this._currentBand();return Object.entries(t).every(([t,i])=>void 0===i||void 0!==e[t]&&Math.abs(e[t]-i)<.01)}get _hvacMode(){return this._stateObj?.state}get _isDual(){const t=this._stateObj?.attributes||{};return void 0!==t.target_temp_low&&null!==t.target_temp_low&&(void 0===t.temperature||null===t.temperature)}_currentBand(){const t=this._stateObj?.attributes||{};return this._isDual?{heat:t.target_temp_low,cool:t.target_temp_high}:"cool"===this._hvacMode||"cool_only"===this._room?.climate_mode?{cool:t.temperature}:{heat:t.temperature}}_overrideActive(){const t=this._stateObj?.attributes?.preset_mode;return Boolean(t&&"none"!==t||this._live?.override_active)}_overridePreset(){const t=this._stateObj?.attributes?.preset_mode;if(t&&"none"!==t)return t;const e=this._live;return e?.override_active&&e.override_type?zt[e.override_type]||"manual":void 0}_step(t,e){const i=this._stateObj.attributes,o=Number(i.target_temp_step)||.5,s=Number(i.min_temp??5),n=Number(i.max_temp??35),r={...this._currentBand(),...this._pending||{}},a=r[t]??("heat"===t?r.cool:r.heat)??i.current_temperature??20,c=Math.min(n,Math.max(s,At(Number(a)+e*o,o))),l={...r,[t]:c};this._isDual&&void 0!==l.heat&&void 0!==l.cool&&l.cool<l.heat&&("heat"===t?l.cool=l.heat:l.heat=l.cool),this._pending=l,this._appliedAt=void 0,clearTimeout(this._applyTimer),this._applyTimer=setTimeout(()=>this._applyPending(),Number(this._config.apply_delay)||1200)}async _applyPending(){const t=this._pending;if(!t)return;const e=this._duration;this._appliedAt=Date.now(),await this._run(async()=>{this._apiOk&&"schedule"!==e?await this._setOverride("custom",xt(this.hass,t.heat),xt(this.hass,t.cool),e):this._isDual?await this._climate("set_temperature",{target_temp_low:t.heat,target_temp_high:t.cool}):await this._climate("set_temperature",{temperature:t.heat??t.cool})}),this._pending===t&&this._bandMatches(t)&&(this._pending=void 0),setTimeout(()=>{this._pending===t&&(this._pending=void 0)},8e3)}_selectPreset(t){const e=this._duration;return clearTimeout(this._applyTimer),this._pending=void 0,this._run(async()=>{if("none"!==t&&this._apiOk&&"schedule"!==e){if("manual"===t){const t=this._currentBand();return void await this._setOverride("custom",xt(this.hass,t.heat),xt(this.hass,t.cool),e)}await this._setOverride(Tt[t],null,null,e)}else await this._climate("set_preset_mode",{preset_mode:t})})}_selectDuration(t){if(this._duration=t,!this._overrideActive()||!this._apiOk)return;const e=this._overridePreset()||"manual";return this._run(async()=>{if("schedule"===t){if("comfort"===e||"eco"===e)await this._climate("set_preset_mode",{preset_mode:e});else{const t=this._currentBand();await this._climate("set_preset_mode",{preset_mode:"none"}),this._isDual?await this._climate("set_temperature",{target_temp_low:t.heat,target_temp_high:t.cool}):await this._climate("set_temperature",{temperature:t.heat??t.cool})}return}const{type:i,heat:o,cool:s}=this._activeOverride();await this._setOverride(i,o,s,t)})}_activeOverride(){const t=this._live||{},e=t.override_active&&t.override_type||Tt[this._overridePreset()]||"custom";if(t.override_active&&(null!=t.override_heat||null!=t.override_cool))return{type:e,heat:t.override_heat,cool:t.override_cool};const i=this._currentBand();return{type:e,heat:xt(this.hass,i.heat),cool:xt(this.hass,i.cool)}}_extendOverride(t){const e=Ot(this._stateObj,this._live);if(!e||!this._apiOk)return;const i=Math.max(0,e-Date.now()/1e3)/3600,{type:o,heat:s,cool:n}=this._activeOverride();return this._run(()=>this._setOverride(o,s,n,Math.round(1e3*(i+t))/1e3))}_endOverride(){return this._run(async()=>{this._apiOk?(await this.hass.callWS({type:"roommind/override/clear",area_id:this._areaId}),this._scheduleFetch(300)):await this._climate("set_preset_mode",{preset_mode:"none"})})}_setMode(t){return this._run(()=>this._climate("set_hvac_mode",{hvac_mode:t}))}_toggle(t){const e=t.split(".")[0];return this._run(async()=>{await this.hass.callService("switch"===e?"switch":"homeassistant","toggle",{entity_id:t}),this._scheduleFetch(1500)})}_resumeCovers(){return this._run(async()=>{await this.hass.callWS({type:"roommind/covers/clear_override",area_id:this._areaId}),this._scheduleFetch(300)})}_moreInfo(t){gt(this,"hass-more-info",{entityId:t})}_settingFields(){const t=this._room;if(!t)return[];const e=t.climate_mode||"auto",i=[];return"cool_only"!==e&&i.push({key:"comfort_heat",temp:!0},{key:"eco_heat",temp:!0}),"heat_only"!==e&&i.push({key:"comfort_cool",temp:!0},{key:"eco_cool",temp:!0}),(t.window_sensors||[]).length&&i.push({key:"window_open_delay",seconds:!0},{key:"window_close_delay",seconds:!0}),i}_settingValue(t){if(this._draft&&void 0!==this._draft[t.key])return this._draft[t.key];const e=this._room?.[t.key];return null==e?t.seconds?0:void 0:t.temp?At(kt(this.hass,e),.5):e}_changeSetting(t,e){if(""===e||Number.isNaN(Number(e)))return;let i=Number(e);i=t.seconds?Math.max(0,Math.round(i)):Math.min(kt(this.hass,35),Math.max(kt(this.hass,5),i)),this._draft={...this._draft||{},[t.key]:i},this._saved=!1}_saveSettings(){const t=this._draft;if(!t||!this._areaId)return;const e={type:"roommind/rooms/save",area_id:this._areaId};for(const i of this._settingFields())void 0!==t[i.key]&&(e[i.key]=i.temp?Math.round(10*xt(this.hass,t[i.key]))/10:Math.round(t[i.key]));return this._run(async()=>{await this.hass.callWS(e),this._draft=void 0,this._saved=!0,setTimeout(()=>{this._saved=!1},3e3),await this._fetchRooms()})}render(){if(!this._config||!this.hass)return W;const t=(t,e)=>dt(this.hass,t,e);if(!this._config.entity)return F`<ha-card><div class="message warning">${t("card.no_entity")}</div></ha-card>`;const e=this._stateObj;if(!e)return F`<ha-card
        ><div class="message warning">${t("card.not_found",{entity:this._config.entity})}</div></ha-card
      >`;const i="unavailable"===e.state||"unknown"===e.state,o=i?"off":this._action(e),s=!i&&0!==Number(e.attributes.supported_features||0),n=this._config;return F`
      <ha-card class="action-${o} ${n.compact?"compact":""}">
        ${this._busy?F`<div class="busy"></div>`:W} ${this._renderHeader(e,o,i)}
        ${n.show_status?this._renderChips(e):W}
        ${s&&n.show_target?this._renderTargets(e):W}
        ${s&&(n.show_target||n.show_presets)?this._renderOverride(e):W}
        ${s&&n.show_duration?this._renderDurations():W}
        ${s&&n.show_presets?this._renderPresets(e):W}
        ${s&&n.show_modes?this._renderModes(e):W}
        ${n.show_schedule?this._renderSchedule():W}
        ${n.show_windows?this._renderWindows():W} ${n.show_toggles?this._renderToggles():W}
        ${n.show_info?this._renderInfo(e):W}
        ${n.show_settings?this._renderSettings():W}
        ${this._error?F`<div class="message error">${this._error}</div>`:W}
      </ha-card>
    `}_action(t){if("off"===t.state)return"off";const e=t.attributes.hvac_action;return"heating"===e||"preheating"===e?"heating":"cooling"===e?"cooling":"off"===e?"off":e||"idle"}_renderHeader(t,e,i){const o=(t,e)=>dt(this.hass,t,e),s=t.attributes,n=this._config.name||s.friendly_name||this._config.entity,r=this._config.icon||s.icon||"mdi:home-thermometer",a=this._live;let c=o(i?"card.unavailable":`action.${e}`);!i&&"heating"===e&&a?.heating_power&&(c+=` · ${a.heating_power} %`),!i&&s.window_open&&(c+=` · ${o("chip.window_open")}`);const l=s.current_humidity??a?.current_humidity;return F`
      <div class="header" @click=${()=>this._moreInfo(this._config.entity)}>
        <div class="icon-bubble"><ha-icon .icon=${r}></ha-icon></div>
        <div class="heading">
          <div class="name">${n}</div>
          <div class="status"><span class="dot"></span><span>${c}</span></div>
        </div>
        <div class="current">
          <div class="temp">
            ${St(this.hass,s.current_temperature,1)}<span class="unit">${$t(this.hass)}</span>
          </div>
          ${null!=l?F`<div class="humidity">
                <ha-icon icon="mdi:water-percent"></ha-icon>${St(this.hass,l,0)} %
              </div>`:W}
        </div>
      </div>
    `}_renderChips(t){const e=(t,e)=>dt(this.hass,t,e),i=t.attributes,o=this._live||{},s=this._rooms||{},n=[],r=this._room?.window_sensors||[];if(i.window_open||o.window_open?n.push(F`<button class="chip warn clickable" @click=${()=>this._scrollTo("windows")}>
        <ha-icon icon="mdi:window-open-variant"></ha-icon>${e("chip.window_open")}
      </button>`):r.length&&n.push(F`<span class="chip ok"><ha-icon icon="mdi:window-closed-variant"></ha-icon>${e("chip.window_closed")}</span>`),i.vacation||s.vacation_active){const t=s.vacation_until,i=t&&t>Date.now()/1e3+31536e4;n.push(F`<span class="chip info"><ha-icon icon="mdi:beach"></ha-icon>${t&&!i?e("chip.vacation_until",{time:Mt(this.hass,t)}):e("chip.vacation")}</span>`)}if((i.presence_away||o.presence_away)&&n.push(F`<span class="chip"><ha-icon icon="mdi:home-export-outline"></ha-icon>${e("chip.away")}</span>`),(i.occupancy_vacant||o.occupancy_vacant)&&n.push(F`<span class="chip"><ha-icon icon="mdi:account-off-outline"></ha-icon>${e("chip.vacant")}</span>`),o.mold_risk_level&&"ok"!==o.mold_risk_level){const t="critical"===o.mold_risk_level;n.push(F`<span class="chip ${t?"error":"warn"}"
        ><ha-icon icon="mdi:alert-circle-outline"></ha-icon>${e(t?"chip.mold_critical":"chip.mold_warning")}</span
      >`)}return o.mold_prevention_active&&o.mold_prevention_delta&&n.push(F`<span class="chip info"><ha-icon icon="mdi:shield-check-outline"></ha-icon>${e("chip.mold_prevention",{delta:`${St(this.hass,o.mold_prevention_delta,1)} K`})}</span>`),!1===s.climate_control_active&&n.push(F`<span class="chip warn"><ha-icon icon="mdi:pause-circle-outline"></ha-icon>${e("chip.control_paused")}</span>`),"preheating"===i.hvac_action&&n.push(F`<span class="chip"><ha-icon icon="mdi:clock-fast"></ha-icon>${e("chip.preheat")}</span>`),n.length?F`<div class="chips">${n}</div>`:W}_scrollTo(t){this.renderRoot.querySelector(`#${t}`)?.scrollIntoView({behavior:"smooth",block:"nearest"})}_renderTargets(t){const e=(t,e)=>dt(this.hass,t,e),i="off"===t.state,o=this._currentBand(),s=this._pending||{},n=this._isDual,r=t.attributes,a=Number(r.min_temp??5),c=Number(r.max_temp??35),l=(t,n)=>{const r=void 0!==s[t]&&s[t]!==o[t],l=s[t]??o[t];return F`
        <div class="target ${r?"pending":""} ${i?"disabled":""}">
          <button
            class="step ${t}"
            ?disabled=${i||void 0!==l&&l<=a}
            title=${e("target.decrease")}
            @click=${()=>this._step(t,-1)}
          >
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <div class="value">
            <div class="label">${r?e("target.pending"):n}</div>
            <div class="number">
              ${null==l?"–":St(this.hass,l,1)}<span class="unit">${$t(this.hass)}</span>
            </div>
          </div>
          <button
            class="step ${t}"
            ?disabled=${i||void 0!==l&&l>=c}
            title=${e("target.increase")}
            @click=${()=>this._step(t,1)}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      `};if(n)return F`<div class="targets dual">${l("heat",e("target.heat"))} ${l("cool",e("target.cool"))}</div>`;const h=void 0!==o.cool&&void 0===o.heat?"cool":"heat";return F`<div class="targets">${l(h,e("target.title"))}</div>`}_renderOverride(t){const e=(t,e)=>dt(this.hass,t,e);if(!this._overrideActive()){const t=!1!==this._config.show_schedule?this._nextBlock():void 0;return F`<div class="override">
        <ha-icon icon="mdi:calendar-clock"></ha-icon>
        <div class="text">
          <div class="title">${e("override.schedule")}</div>
          ${t?F`<div class="sub">
                ${e("schedule.next_block",{time:Mt(this.hass,t.start/1e3),temp:this._periodTemp(t)})}
              </div>`:W}
        </div>
      </div>`}const i=this._overridePreset()||"manual",o=Ot(t,this._live),s=this._now/1e3;let n;n=Boolean(this._live?.override_suppressed)?e("override.suppressed"):o?`${e("override.remaining",{time:Ct(this.hass,o-s)})} · ${e("override.until",{time:Mt(this.hass,o)})}`:e("override.permanent");const r="number"==typeof this._duration?this._duration:1,a=Boolean(o&&this._apiOk);return F`
      <div class="override active ${i}">
        <ha-icon .icon=${Zt[i]||"mdi:hand-back-right-outline"}></ha-icon>
        <div class="text">
          <div class="title">${e("override.active",{preset:e(`preset.${i}`)})}</div>
          <div class="sub">${n}</div>
        </div>
        <div class="actions">
          ${a?F`<button class="small-btn" title=${e("override.extend")} @click=${()=>this._extendOverride(r)}>
                +${wt(this.hass,r)}
              </button>`:W}
          <button class="small-btn" @click=${()=>this._endOverride()}>${e("override.end")}</button>
        </div>
      </div>
    `}_isCustomDuration(t=this._duration){return t&&"object"==typeof t||"number"==typeof t&&!this._durations.includes(t)}_renderDurations(){const t=(t,e)=>dt(this.hass,t,e);if(!this._apiOk)return W;const e=this._durations,i=this._overrideActive(),o=!1!==this._config.show_custom_duration,s=this._isCustomDuration();return F`
      <div>
        <div class="section-title">
          ${t("duration.title")}
          <span class="hint">· ${t(i?"duration.hint_active":"duration.hint_idle")}</span>
        </div>
        <div class="durations">
          ${e.map(t=>F`<button
              class="dur ${this._duration===t?"selected":""}"
              @click=${()=>{this._customOpen=!1,this._selectDuration(t)}}
            >
              ${wt(this.hass,t)}
            </button>`)}
          ${o?F`<button
                class="dur custom-chip ${s?"selected":""} ${this._customOpen?"open":""}"
                @click=${()=>this._toggleCustom()}
              >
                <ha-icon icon="mdi:pencil-outline"></ha-icon>
                ${s?wt(this.hass,this._duration):t("duration.custom")}
              </button>`:W}
        </div>
        ${o&&this._customOpen?this._renderCustomDuration(i):W}
      </div>
    `}_toggleCustom(){if(this._customOpen=!this._customOpen,!this._customOpen)return;this._customError=void 0;const t=this._duration;if(t&&"object"==typeof t&&t.until)this._customMode="until",this._customUntil=bt(new Date(1e3*t.until));else{const e="number"==typeof t?t:2;this._customMode=this._customMode||"for",this._customHours=Math.floor(e),this._customMinutes=Math.round(60*(e-Math.floor(e)))}if(!this._customUntil){const t=new Date(Date.now()+72e5);t.setMinutes(15*Math.ceil(t.getMinutes()/15),0,0),this._customUntil=bt(t)}}_customStep(t,e){if("hours"===t)this._customHours=Math.max(0,Math.min(999,Number(this._customHours||0)+e));else{let t=Number(this._customMinutes||0)+e,i=Number(this._customHours||0);t>=60?(t-=60,i+=1):t<0&&(i>0?(t+=60,i-=1):t=0),this._customHours=i,this._customMinutes=t}this._customError=void 0}_applyCustom(){let t;if("until"===this._customMode){const e=new Date(this._customUntil);if(!this._customUntil||Number.isNaN(e.getTime())||e.getTime()<=Date.now()+3e4)return void(this._customError=dt(this.hass,"duration.in_past"));t={until:Math.floor(e.getTime()/1e3)}}else{const e=Number(this._customHours||0)+Number(this._customMinutes||0)/60;if(!(e>=1/60))return void(this._customError=dt(this.hass,"duration.too_short"));t=Math.round(1e3*e)/1e3}return this._customError=void 0,this._customOpen=!1,this._selectDuration(t)}_renderCustomDuration(t){const e=(t,e)=>dt(this.hass,t,e),i=this._customMode||"for",o=(t,e,i,o,s)=>F`<label class="field">
      ${e}
      <div class="input">
        <button type="button" @click=${()=>this._customStep(t,-s)}>−</button>
        <input
          type="number"
          inputmode="numeric"
          min="0"
          max=${o}
          .value=${String(i??0)}
          @change=${e=>{const i=Math.max(0,Math.round(Number(e.target.value)||0));"hours"===t?this._customHours=Math.min(999,i):this._customMinutes=Math.min(59,i),this._customError=void 0}}
        />
        <button type="button" @click=${()=>this._customStep(t,s)}>+</button>
      </div>
    </label>`;return F`
      <div class="custom">
        <div class="custom-modes">
          <button class="dur ${"for"===i?"selected":""}" @click=${()=>this._customMode="for"}>
            ${e("duration.custom_for")}
          </button>
          <button class="dur ${"until"===i?"selected":""}" @click=${()=>this._customMode="until"}>
            ${e("duration.custom_until")}
          </button>
        </div>
        ${"for"===i?F`<div class="custom-fields">
              ${o("hours",e("duration.custom_hours"),this._customHours,999,1)}
              ${o("minutes",e("duration.custom_minutes"),this._customMinutes,59,15)}
            </div>`:F`<label class="field">
              ${e("duration.custom_end")}
              <div class="input">
                <input
                  type="datetime-local"
                  .value=${this._customUntil||""}
                  min=${bt(new Date)}
                  @input=${t=>{this._customUntil=t.target.value,this._customError=void 0}}
                />
              </div>
            </label>`}
        ${this._customError?F`<div class="message error">${this._customError}</div>`:W}
        <div class="custom-actions">
          <span class="note">${e(t?"duration.custom_hint_active":"duration.custom_hint_idle")}</span>
          <button class="small-btn primary" @click=${()=>this._applyCustom()}>
            ${e(t?"duration.apply_active":"duration.apply")}
          </button>
        </div>
      </div>
    `}_presetTemp(t){const e=this._room;if(!e||"comfort"!==t&&"eco"!==t)return;const i=e[`${t}_${"cool_only"===e.climate_mode?"cool":"heat"}`]??("comfort"===t?e.comfort_temp:e.eco_temp);return null==i?void 0:kt(this.hass,i)}_renderPresets(t){const e=(t,e)=>dt(this.hass,t,e),i=t.attributes.preset_modes||[];if(!i.length)return W;const o=this._overrideActive()?this._overridePreset()||"manual":"none",s=[...Vt.filter(t=>i.includes(t)),...i.filter(t=>!Vt.includes(t))];return F`
      <div class="segments">
        ${s.map(i=>{const s=this._presetTemp(i);return F`<button
            class="seg ${i} ${o===i?"active":""}"
            ?disabled=${"off"===t.state}
            @click=${()=>this._selectPreset(i)}
          >
            <ha-icon .icon=${Zt[i]||"mdi:tune-variant"}></ha-icon>
            <span class="seg-label">${e(`preset.${i}`)}</span>
            ${void 0!==s?F`<span class="seg-sub">${Et(this.hass,s,1)}</span>`:W}
          </button>`})}
      </div>
    `}_renderModes(t){const e=(t,e)=>dt(this.hass,t,e),i=t.attributes.hvac_modes||[];if(i.length<2)return W;const o=[...Jt.filter(t=>i.includes(t)),...i.filter(t=>!Jt.includes(t))];return F`
      <div class="segments">
        ${o.map(i=>F`<button
            class="seg ${i} ${t.state===i?"active":""}"
            @click=${()=>this._setMode(i)}
          >
            <ha-icon .icon=${qt[i]||"mdi:thermostat"}></ha-icon>
            <span class="seg-label">${e(`hvac.${i}`)}</span>
          </button>`)}
      </div>
    `}_timeline(){const t=this._room,e=this._scheduleEntity(),i=e?this._schedules?.[e]?.blocks:void 0;if(!t||!i)return;const o=`${e}|${this._schedules[e].fetched}|${Math.floor(this._now/6e4)}|${this._rooms?.schedule_off_action}|${t.comfort_heat}|${t.comfort_cool}|${t.eco_heat}|${t.eco_cool}`;if(this._timelineKey===o)return this._timelineCache;const s=(t,e)=>At(kt(this.hass,t??e),.1);return this._timelineCache=It(i,{comfortHeat:s(t.comfort_heat??t.comfort_temp,21),comfortCool:s(t.comfort_cool,24),ecoHeat:s(t.eco_heat??t.eco_temp,17),ecoCool:s(t.eco_cool,27),offAction:this._rooms?.schedule_off_action||"eco"},Date.now(),{days:8,timeZone:this.hass.config?.time_zone}),this._timelineKey=o,this._timelineCache}_nextBlock(){return this._timeline()?.find((t,e)=>t.inBlock&&(e>0||t.start>Date.now()))}_periodTemp(t){const e=this._room?.climate_mode||"auto",{heat:i,cool:o}=t;return null===i&&null===o?((t,e)=>dt(this.hass,t,e))("schedule.off"):"heat_only"===e||null==o?Et(this.hass,i,1):"cool_only"===e||null==i?Et(this.hass,o,1):i===o?Et(this.hass,i,1):`${St(this.hass,i,1)}–${Et(this.hass,o,1)}`}_periodKind(t){return t.inBlock?t.custom?"block":"comfort":null===t.heat&&null===t.cool?"off":"eco"}_renderSchedule(){const t=(t,e)=>dt(this.hass,t,e),e=this._scheduleEntity();if(!e)return W;const i=this.hass.states[e],o=i?.attributes?.friendly_name||e,s=this._timeline(),n=Math.max(1,Math.min(8,Number(this._config.schedule_items)||3));let r;if(s){r=s.slice(0,n).map((e,i)=>{const o=this._periodKind(e),n=e.end>=s[s.length-1].end&&i===s.length-1;return F`<div class="sched-row ${0===i?"now":""} ${o}">
          <span class="sched-dot"></span>
          <span class="sched-when">
            <span class="sched-start">${0===i?t("schedule.now"):Mt(this.hass,e.start/1e3)}</span>
            <span class="sched-end"
              >${n?"":t("schedule.until",{time:Mt(this.hass,e.end/1e3)})}</span
            >
          </span>
          <span class="sched-kind">${t(`schedule.${o}`)}</span>
          <span class="sched-temp">${this._periodTemp(e)}</span>
        </div>`})}else{if(!i?.attributes?.next_event)return W;{const e=Date.parse(i.attributes.next_event);r=F`<div class="note">
        ${t("schedule.next_change",{time:Mt(this.hass,e/1e3)})}
      </div>`}}let a=W;if(this._overrideActive()){const e=Ot(this._stateObj,this._live);a=F`<div class="note">
        ${e?t("schedule.override_until",{time:Mt(this.hass,e)}):t("schedule.override_permanent")}
      </div>`}return F`
      <div id="schedule">
        <div class="section-title clickable" @click=${()=>this._moreInfo(e)}>
          ${t("schedule.title")}<span class="hint">· ${o}</span>
        </div>
        <div class="sched">${r}</div>
        ${a}
      </div>
    `}_renderWindows(){const t=(t,e)=>dt(this.hass,t,e),e=this._room;if(!e)return W;const i=e.window_sensors||[];if(!i.length)return W;const o=Boolean(this._live?.window_open||this._stateObj?.attributes?.window_open),s=e.window_open_delay||0,n=e.window_close_delay||0;return F`
      <div id="windows">
        <div class="section-title">${t("windows.title")}</div>
        <div class="rows">
          ${i.map(e=>{const i=this.hass.states[e],o=!!i&&function(t){return["on","open","opening","true"].includes(String(t).toLowerCase())}(i.state),s=i&&"unavailable"!==i.state&&"unknown"!==i.state?t(o?"windows.open":"windows.closed"):t("windows.unknown");return F`<div class="row ${o?"on":""}" @click=${()=>this._moreInfo(e)}>
              <ha-icon .icon=${function(t,e){const i=t?.attributes?.device_class;return"door"===i||"garage_door"===i?e?"mdi:door-open":"mdi:door-closed":e?"mdi:window-open-variant":"mdi:window-closed-variant"}(i,o)}></ha-icon>
              <span class="row-name">${i?.attributes?.friendly_name||e}</span>
              <span class="row-state">${s}</span>
            </div>`})}
        </div>
        ${o?F`<div class="note">${t("windows.paused")}</div>`:W}
        ${s||n?F`<div class="note">
              ${t("windows.delays",{open:`${s} s`,close:`${n} s`})}
            </div>`:W}
      </div>
    `}_renderToggles(){const t=(t,e)=>dt(this.hass,t,e),e=this._relatedEntities(),i=[],o=(t,e,o)=>{const s=this.hass.states[t];if(!s)return;const n="on"===s.state;i.push(F`<div class="row toggle ${n?"on":""}" @click=${()=>this._toggle(t)}>
        <ha-icon .icon=${o}></ha-icon>
        <span class="row-name">${e}</span>
        <span class="switch ${n?"on":""}" role="switch" aria-checked=${n?"true":"false"}></span>
      </div>`)};this._config.show_climate_control&&e.climate_control&&o(e.climate_control,t("toggle.climate_control"),"mdi:thermostat"),o(e.vacation,t("toggle.vacation"),"mdi:beach"),e.cover_auto&&o(e.cover_auto,t("toggle.cover_auto"),"mdi:blinds-horizontal");return(e.cover_paused&&"on"===this.hass.states[e.cover_paused]?.state||this._live?.cover_auto_paused)&&i.push(F`<div class="row" @click=${()=>this.hass.states[e.cover_paused]&&this._moreInfo(e.cover_paused)}>
        <ha-icon icon="mdi:hand-back-right"></ha-icon>
        <span class="row-name">${t("toggle.cover_paused")}</span>
        ${this._apiOk?F`<button
              class="small-btn"
              @click=${t=>{t.stopPropagation(),this._resumeCovers()}}
            >
              ${t("toggle.cover_resume")}
            </button>`:W}
      </div>`),i.length?F`<div class="rows">${i}</div>`:W}_renderInfo(t){const e=(t,e)=>dt(this.hass,t,e),i=this._live||{},o=[];i.heating_power&&"idle"!==t.attributes.hvac_action&&o.push(F`<span><ha-icon icon="mdi:gauge"></ha-icon>${e("info.power")} <b>${i.heating_power} %</b></span>`),void 0!==i.device_setpoint&&null!==i.device_setpoint&&o.push(F`<span
        ><ha-icon icon="mdi:radiator"></ha-icon>${e("info.device")}
        <b>${Et(this.hass,kt(this.hass,i.device_setpoint),1)}</b></span
      >`);const s=this._rooms?.outdoor_temp;return null!=s&&o.push(F`<span
        ><ha-icon icon="mdi:home-thermometer-outline"></ha-icon>${e("info.outdoor")}
        <b>${Et(this.hass,kt(this.hass,s),1)}</b></span
      >`),o.length?F`<div class="info">${o}</div>`:W}_renderSettings(){const t=(t,e)=>dt(this.hass,t,e),e=this._settingFields();if(!e.length||!this._apiOk)return W;const i=$t(this.hass);return F`
      <details ?open=${this._config.settings_open}>
        <summary>
          <ha-icon icon="mdi:tune-variant"></ha-icon>${t("settings.title")}
          <ha-icon class="chev" icon="mdi:chevron-down"></ha-icon>
        </summary>
        <div class="settings">
          ${e.map(e=>{const o=this._settingValue(e),s=e.seconds?30:.5;return F`<label class="field">
              ${t(`settings.${e.key}`)}
              <div class="input">
                <button type="button" @click=${()=>this._changeSetting(e,Number(o||0)-s)}>−</button>
                <input
                  type="number"
                  inputmode="decimal"
                  .value=${void 0===o?"":String(o)}
                  step=${s}
                  @change=${t=>this._changeSetting(e,t.target.value)}
                />
                <span class="suffix">${e.seconds?t("settings.seconds"):i}</span>
                <button type="button" @click=${()=>this._changeSetting(e,Number(o||0)+s)}>+</button>
              </div>
            </label>`})}
          <div class="settings-actions">
            ${this._saved?F`<span>${t("settings.saved")}</span>`:W}
            <button class="small-btn primary" ?disabled=${!this._draft} @click=${()=>this._saveSettings()}>
              ${t("settings.save")}
            </button>
          </div>
        </div>
      </details>
    `}}customElements.get(mt)||customElements.define(mt,Gt),window.customCards=window.customCards||[],window.customCards.some(t=>t.type===mt)||window.customCards.push({type:mt,name:"RoomMind Card",description:"Steuert RoomMind-Räume: Zieltemperatur, Laufzeit, Presets, Modus, Fenster & Schalter.",preview:!0,documentationURL:"https://github.com/Ga-Re/RoomMindeHACard"}),console.info("%c ROOMMIND-CARD %c v1.2.0 ","color:#fff;background:#ff8100;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px","color:#ff8100;background:#fff3e6;font-weight:700;border-radius:0 4px 4px 0;padding:2px 4px");export{Gt as RoomMindCard};
