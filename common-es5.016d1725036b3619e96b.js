function asyncGeneratorStep(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){asyncGeneratorStep(s,r,i,o,a,"next",e)}function a(e){asyncGeneratorStep(s,r,i,o,a,"throw",e)}o(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return s}));var r=n("dSyh"),i=n("kBU6");const s=e=>new Promise((t,n)=>{Object(r.m)(()=>{o(e),a(e).then(n=>{n.animation&&n.animation.destroy(),c(e),t(n)},t=>{c(e),n(t)})})}),o=e=>{const t=e.enteringEl,n=e.leavingEl;x(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),y(t,!1),n&&y(n,!1)},a=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return n=e.sent,e.abrupt("return",n?l(n,t):d(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=e=>{const t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.leavingEl||!t.animated||0===t.duration){e.next=16;break}if(!t.animationBuilder){e.next=5;break}e.t0=t.animationBuilder,e.next=15;break;case 5:if("ios"!==t.mode){e.next=11;break}return e.next=8,n.e(100).then(n.bind(null,"Lu00"));case 8:e.t1=e.sent.iosTransitionAnimation,e.next=14;break;case 11:return e.next=13,n.e(101).then(n.bind(null,"wxTh"));case 13:e.t1=e.sent.mdTransitionAnimation;case 14:e.t0=e.t1;case 15:return e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){var i,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r,!0);case 2:return e.prev=2,e.next=5,n.e(5).then(n.bind(null,"gHMO"));case 5:return s=e.sent,e.next=8,s.create(t,r.baseEl,r);case 8:i=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),i=t(r.baseEl,r);case 14:return m(r.enteringEl,r.leavingEl),e.next=17,p(i,r);case 17:return o=e.sent,e.abrupt("return",(r.progressCallback&&r.progressCallback(void 0),o&&b(r.enteringEl,r.leavingEl),{hasCompleted:o,animation:i}));case 19:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.enteringEl,r=t.leavingEl,e.next=3,h(t,!1);case 3:return m(n,r),b(n,r),e.abrupt("return",{hasCompleted:!0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(void 0!==t.deepWait?t.deepWait:n)?[w(t.enteringEl),w(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)],e.next=3,Promise.all(r);case 3:return e.next=5,f(t.viewIsReady,t.enteringEl);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=4;break}return e.next=4,t(n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=(e,t)=>{const n=t.progressCallback,r=new Promise(t=>{e.onFinish(n=>{"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)})});return n?(e.progressStart(!0),n(e)):e.play(),r},m=(e,t)=>{v(t,i.c),v(e,i.a)},b=(e,t)=>{v(e,i.b),v(t,i.d)},v=(e,t)=>{if(e){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},g=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),w=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t)){e.next=12;break}if(e.t0=null!=n.componentOnReady,!e.t0){e.next=8;break}return e.next=6,n.componentOnReady();case 6:e.t1=e.sent,e.t0=null!=e.t1;case 8:if(!e.t0){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Promise.all(Array.from(n.children).map(w));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},x=(e,t,n)=>{void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e},D0XW:function(e,t,n){"use strict";var r=n("quSY");class i extends r.a{constructor(e,t){super()}schedule(e,t=0){return this}}let s=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class o extends s{constructor(e,t=s.now){super(e,()=>o.delegate&&o.delegate!==this?o.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return o.delegate&&o.delegate!==this?o.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const t=this.actions;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}n.d(t,"a",(function(){return a}));const a=new o(class extends i{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r=void 0;try{this.work(e)}catch(i){n=!0,r=!!i&&i||new Error(i)}if(n)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}})},Dl6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));const r=(e,t)=>null!==t.closest(e),i=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,["ion-color-".concat(e)]:!0}:void 0,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},o=/^[a-z][a-z0-9+\-.]*:/,a=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||o.test(t)){e.next=4;break}if(!(i=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),i.push(t,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},PqYM:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("HDdC"),i=n("D0XW"),s=n("Y7HM"),o=n("z+Ro");function a(e=0,t,n){let a=-1;return Object(s.a)(t)?a=Number(t)<1?1:Number(t):Object(o.a)(t)&&(n=t),Object(o.a)(n)||(n=i.a),new r.a(t=>{const r=Object(s.a)(e)?e:+e-n.now();return n.schedule(c,r,{index:0,period:a,subscriber:t})})}function c(e){const t=e.index,n=e.period,r=e.subscriber;if(r.next(t),!r.closed){if(-1===n)return r.complete();e.index=t+1,this.schedule(e,n)}}},Xy44:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("IheW"),i=n("ZZ/e"),s=n("8Y7J");let o=(()=>{class e{constructor(e,t){this.http=e,this.events=t}getData(){const e={headers:new r.g({"Content-Type":"application/json; charset=utf-8",Authorization:"Bearer "+localStorage.getItem("token")})};return this.http.post("https://crossfacerecognition.herokuapp.com/userData/",{},e)}}return e.ngInjectableDef=s.Xb({factory:function(){return new e(s.Yb(r.c),s.Yb(i.e))},token:e,providedIn:"root"}),e})()},Y7HM:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("DH7j");function i(e){return!Object(r.a)(e)&&e-parseFloat(e)+1>=0}},YtD4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const o=s(e);for(let t=0;t<o.length;t++)i(o[t])}});const r=s(t);for(let e=0;e<r.length;e++)i(r[e]);const o=document.createElement("div");o.appendChild(t);const c=o.querySelector("div");return null!==c?c.innerHTML:o.innerHTML}catch(t){return console.error(t),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),r=t.name;if(!o.includes(r.toLowerCase())){e.removeAttribute(r);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=s(e);for(let n=0;n<t.length;n++)i(t[n])},s=e=>null!=e.children?e.children:e.childNodes,o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},l5mm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("HDdC"),i=n("D0XW"),s=n("Y7HM");function o(e=0,t=i.a){return(!Object(s.a)(e)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=i.a),new r.a(n=>(n.add(t.schedule(a,e,{subscriber:n,counter:0,period:e})),n))}function a(e){const t=e.subscriber,n=e.counter,r=e.period;t.next(n),this.schedule({subscriber:t,counter:n+1,period:r},r)}},m9yc:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r,i,s){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,s,i));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach(e=>o.classList.add(e)),s&&Object.assign(o,s),n.appendChild(o),e.t0=o.componentOnReady,!e.t0){e.next=12;break}return e.next=12,o.componentOnReady();case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),i=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},"nN+u":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));const r=(e,t,n)=>{const r=new MutationObserver(e=>{n(i(e,t))});return r.observe(e,{childList:!0,subtree:!0}),r},i=(e,t)=>{let n;return e.forEach(e=>{for(let r=0;r<e.addedNodes.length;r++)n=s(e.addedNodes[r],t)||n}),n},s=(e,t)=>{if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(e=>!0===e.checked)}},opz7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r}));const r=()=>{const e=window.TapticEngine;e&&e.selection()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},s=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}},qaSm:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));class r{constructor(e,t){this.x=e,this.y=t}}const i=(e,t,n,r,i)=>{const a=o(e.y,t.y,n.y,r.y,i);return s(e.x,t.x,n.x,r.x,a[0])},s=(e,t,n,r,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-e*Math.pow(i-1,3),o=(e,t,n,r,i)=>a((r-=i)-3*(n-=i)+3*(t-=i)-(e-=i),3*n-6*t+3*e,3*t-3*e,e).filter(e=>e>=0&&e<=1),a=(e,t,n,r)=>{if(0===e)return((e,t,n)=>{const r=t*t-4*e*n;return r<0?[]:[(-t+Math.sqrt(r))/(2*e),(-t-Math.sqrt(r))/(2*e)]})(t,n,r);const i=(3*(n/=e)-(t/=e)*t)/3,s=(2*t*t*t-9*t*n+27*(r/=e))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];const o=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(s/2,.5)-t/3];if(o>0)return[Math.pow(-s/2+Math.sqrt(o),1/3)-Math.pow(s/2+Math.sqrt(o),1/3)-t/3];const a=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),u=2*Math.pow(a,1/3);return[u*Math.cos(c/3)-t/3,u*Math.cos((c+2*Math.PI)/3)-t/3,u*Math.cos((c+4*Math.PI)/3)-t/3]}}}]);