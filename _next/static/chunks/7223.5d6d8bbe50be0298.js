(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7223,2511],{1781:function(t,e,n){var r=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),f=Object.prototype.toString,p=Math.max,v=Math.min,m=function(){return s.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==f.call(e))return r;if(g(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var c=u.test(t);return c||l.test(t)?a(t.slice(2),c?2:8):o.test(t)?r:+t}t.exports=function(t,e,n){var r,i,o,u,l,a,c=0,d=!1,s=!1,f=!0;if("function"!=typeof t)throw TypeError("Expected a function");function h(e){var n=r,o=i;return r=i=void 0,c=e,u=t.apply(o,n)}function E(t){var n=t-a,r=t-c;return void 0===a||n>=e||n<0||s&&r>=o}function y(){var t,n,r,i=m();if(E(i))return w(i);l=setTimeout(y,(t=i-a,n=i-c,r=e-t,s?v(r,o-n):r))}function w(t){return(l=void 0,f&&r)?h(t):(r=i=void 0,u)}function x(){var t,n=m(),o=E(n);if(r=arguments,i=this,a=n,o){if(void 0===l)return c=t=a,l=setTimeout(y,e),d?h(t):u;if(s)return l=setTimeout(y,e),h(a)}return void 0===l&&(l=setTimeout(y,e)),u}return e=b(e)||0,g(n)&&(d=!!n.leading,o=(s="maxWait"in n)?p(b(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),x.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=a=i=l=void 0},x.flush=function(){return void 0===l?u:w(m())},x}},77223:function(t,e,n){"use strict";n.r(e);let r=n(71009).Un;e.default=r},22109:function(t,e,n){"use strict";n.d(e,{Fu:function(){return s},Lm:function(){return c},aF:function(){return d}});var r=n(38139),i=n(38900),o=n(30748),u=n(74193),l=n(67175);n(87217),(0,u.z)("div")({name:"SkeletonWrapper",class:"svidjoo",propsAsIs:!1,vars:{"svidjoo-0":[t=>{let{width:e}=t;return e?"string"==typeof e?e:"".concat(e,"px"):"100%"}],"svidjoo-1":[t=>{let{height:e}=t;return e?"string"==typeof e?e:"".concat(e,"px"):"100%"}],"svidjoo-2":[t=>{let{margin:e}=t;return e||0}],"svidjoo-3":[t=>{let{padding:e}=t;return e||0}],"svidjoo-4":[t=>{let{borderRadius:e,circle:n}=t;return n?"50%":"string"==typeof e?e:"".concat(e,"px")}],"svidjoo-5":[t=>{let{isImage:e}=t;return e?"block":"none"}]}});let a=t=>{let{width:e=40,height:n=40,circle:r=!1,borderRadius:i=6,isImage:u,style:a}=t;return(0,o.jsx)(l.default,{width:e,height:n,borderRadius:i,style:a})},c=t=>{let{width:e=40,height:n=40,circle:r=!0,style:i,borderRadius:u="50%"}=t;return(0,o.jsx)(a,{circle:r,height:n,width:e,style:i,borderRadius:u})},d=t=>{let{width:e=40,height:n=40,borderRadius:r=6,style:i}=t;return(0,o.jsx)(a,{height:n,width:e,borderRadius:r,style:i})},s=t=>{let{width:e=90,height:n=64,style:u}=t;return(0,o.jsx)(a,{isImage:!0,width:e,height:n,style:(0,i._)((0,r._)({},u),{borderRadius:"6px"})})}},42844:function(t,e,n){"use strict";n.d(e,{Fu:function(){return r.Fu},Lm:function(){return r.Lm},aF:function(){return r.aF}});var r=n(22109)},13125:function(t,e,n){"use strict";var r,i;n.d(e,{T:function(){return r}}),(i=r||(r={})).MOBILE="mobile",i.DESKTOP="desktop",i.ALL="all"},71009:function(t,e,n){"use strict";n.d(e,{QA:function(){return r.AD_EMPTY_EVENT},Un:function(){return r.default},f5:function(){return r.AD_RENDERED_EVENT}});var r=n(47320),i=n(24486);n(94229),r.default,i.default,r.AD_RENDERED_EVENT,r.AD_EMPTY_EVENT},47320:function(t,e,n){"use strict";n.d(e,{AD_EMPTY_EVENT:function(){return p},AD_RENDERED_EVENT:function(){return f}});var r=n(30748),i=n(42844),o=n(16511),u=n(74193),l=n(1781),a=n.n(l),c=n(90275);n(87217);var d=n(13125),s=n(33787);let f="google-ad-slot-rendered",p="google-ad-is-empty",v=(0,u.z)("div")({name:"AdContainer",class:"awl4ieb",propsAsIs:!1,vars:{"awl4ieb-0":[t=>{let{adWidth:e}=t;return e?"number"==typeof e?"".concat(e,"px"):e:"auto"}],"awl4ieb-1":[t=>{let{adHeight:e}=t;return e?"number"==typeof e?"".concat(e,"px"):e:"auto"}],"awl4ieb-2":[t=>{let{adMinWidth:e}=t;return e?"".concat(e,"px"):"auto"}],"awl4ieb-3":[t=>{let{adMinHeight:e}=t;return e?"".concat(e,"px"):"auto"}],"awl4ieb-4":[t=>t.marginTop||0,"px"],"awl4ieb-5":[t=>t.marginBottom||0,"px"],"awl4ieb-6":[t=>{let{marginLeft:e}=t;return e?"".concat(e,"px"):"auto"}],"awl4ieb-7":[t=>{let{marginRight:e}=t;return e?"".concat(e,"px"):"auto"}],"awl4ieb-8":[t=>{let{device:e}=t;return e===d.T.MOBILE?"none":"block"}]}}),m=t=>{let e=window.googletag||null;return!!window.googletag&&!!window.googletag.pubads&&e.pubads().getSlots().some(e=>e.getSlotElementId()===t)};e.default=(0,c.memo)(t=>{var e;let{profile:n}=t,u=(0,c.useRef)(null),l=(0,c.useCallback)(t=>{setTimeout(()=>{!t||(null==t?void 0:t.querySelector("iframe"))||(0,s.b)(u.current)},250)},[]);(0,c.useEffect)(()=>(o.C5&&g(),()=>{let t=window.googletag||null;t&&t.cmd.push(function(){t.pubads().removeEventListener("slotRenderEnded",d)}),(0,s.t)(null==u?void 0:u.current)}),[n,o.C5]);let d=a()(t=>{if(t.slot.getSlotElementId()===S){if(t.isEmpty){window.dispatchEvent(new CustomEvent(p,{detail:S}));return}o.C5&&window.dispatchEvent(new CustomEvent(f,{detail:S}))}},100),g=()=>{let t=window.googletag||null;if(t){var e;null===(e=t.cmd)||void 0===e||e.push(function(){if(t.pubads().addEventListener("slotRenderEnded",d),!m(S)){var e;u.current=null==t?void 0:null===(e=t.defineSlot(E,h,S))||void 0===e?void 0:e.addService(t.pubads()),t.enableServices(),t.display(S)}})}};if(!n)return null;let{name:b,size:h,path:E,marginTop:y,marginBottom:w,marginLeft:x,marginRight:T,device:j,checkAdIsLoaded:_,enabledDefaultHeight:R=!0}=n,S="div-gpt-ad-".concat(b),[N,k]=null!==(e=null==h?void 0:h[0])&&void 0!==e?e:[],[L,A]=R&&(null==h?void 0:h[0])||[],D="number"==typeof L&&L>0&&"number"==typeof A&&A>0,C=D?i.Fu:i.aF;return(0,r.jsx)(v,{id:S,adWidth:D?L:"100%",adHeight:D?A:"100%",adMinWidth:Number(N),adMinHeight:Number(k),marginTop:y,marginBottom:w,marginLeft:x,marginRight:T,device:j,ref:_?l:null,children:(0,r.jsx)(C,{width:"100%",height:"100%"})})}),n(42101)},24486:function(t,e,n){"use strict";n.d(e,{default:function(){return g}});var r=n(30748),i=n(84136),o=n(74193),u=n(1781),l=n.n(u),a=n(90275),c=n(67175);n(87217);let d=[[970,250]],s=[[320,100],[300,100],[300,250]];var f=n(13125),p=n(33787);let v=(0,o.z)("div")({name:"Container",class:"c15omtcn",propsAsIs:!1,vars:{"c15omtcn-0":[t=>{let{width:e}=t;return"".concat(e,"px")||0}],"c15omtcn-1":[t=>{let{height:e}=t;return e?"".concat(e,"px"):"auto"}],"c15omtcn-2":[t=>t.marginTop||0,"px"],"c15omtcn-3":[t=>t.marginBottom||0,"px"],"c15omtcn-4":[t=>{let{marginLeft:e}=t;return e?"".concat(e,"px"):"auto"}],"c15omtcn-5":[t=>{let{marginRight:e}=t;return e?"".concat(e,"px"):"auto"}],"c15omtcn-6":[t=>{let{device:e}=t;return e===f.T.MOBILE?"none":"block"}],"c15omtcn-7":[t=>{let{mobileWidth:e}=t;return e?"".concat(e,"px"):"auto"}],"c15omtcn-8":[t=>{let{mobileHeight:e}=t;return e?"".concat(e,"px"):"auto"}]}}),m=t=>{let e=t.filter(t=>"string"!=typeof t),n=[0,0],[r,o]=e.find(t=>t[0]>i.y.TABLET)||n,[u,l]=e.find(t=>t[0]<i.y.TABLET)||n;return[r,o,u,l]};var g=t=>{let{profile:e}=t,{name:n,size:o,path:u,marginTop:f,marginBottom:g,marginLeft:b,marginRight:h,device:E}=e,y="div-gpt-ad-".concat(n),w=(0,a.useRef)(null),[x,T,j,_]=m(o),R=()=>{let t=window.googletag||null;if(null==t?void 0:t.apiReady){var e,n,r,l;let a=null==t?void 0:null===(r=t.sizeMapping())||void 0===r?void 0:null===(n=r.addSize([i.y.DESKTOP,0],d))||void 0===n?void 0:null===(e=n.addSize([0,0],s))||void 0===e?void 0:e.build();null===(l=t.cmd)||void 0===l||l.push(function(){var e;w.current=null==t?void 0:null===(e=t.defineSlot(u,o,y))||void 0===e?void 0:e.defineSizeMapping(a).addService(t.pubads()),t.enableServices()}),t.display(y)}},S=l()(()=>{(0,p.b)()},500);return(0,a.useEffect)(()=>(R(),window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S),(0,p.t)(null==w?void 0:w.current)}),[]),(0,r.jsx)(v,{id:y,marginTop:f,marginBottom:g,marginLeft:b,marginRight:h,height:T,width:x,mobileHeight:_,mobileWidth:j,device:E,children:(0,r.jsx)(c.default,{height:"100%"})})};n(13396)},94229:function(t,e,n){"use strict";n.d(e,{Initialize:function(){return i}});var r=n(30748);let i=()=>(0,r.jsx)("script",{async:!0,src:"https://securepubads.g.doubleclick.net/tag/js/gpt.js"})},33787:function(t,e,n){"use strict";n.d(e,{b:function(){return i},t:function(){return r}});let r=t=>{let e=window.googletag||{cmd:[]};if(e&&t){var n;null===(n=e.cmd)||void 0===n||n.push(()=>{e.destroySlots([t])})}},i=t=>{let e=window.googletag||null;(null==e?void 0:e.pubadsReady)&&(e.cmd=e.cmd||[],t&&e.cmd.push(()=>{e.pubads().refresh([t])}))}},87217:function(){},42101:function(t){t.exports={awl4ieb:"awl4ieb"}},13396:function(t){t.exports={c15omtcn:"c15omtcn"}},67175:function(t,e,n){"use strict";n.r(e),n.d(e,{SkeletonTheme:function(){return c},default:function(){return a}});var r=n(38139),i=n(38900),o=n(45497),u=n(90275);let l=u.createContext({});function a(t){var e,n,a,{count:c=1,wrapper:d,className:s,containerClassName:f,containerTestId:p,circle:v=!1,style:m}=t,g=(0,o._)(t,["count","wrapper","className","containerClassName","containerTestId","circle","style"]);let b=u.useContext(l),h=(0,r._)({},g);for(let[t,e]of Object.entries(g))void 0===e&&delete h[t];let E=(0,i._)((0,r._)({},b,h),{circle:v}),y=(0,r._)({},m,function(t){let{baseColor:e,highlightColor:n,width:r,height:i,borderRadius:o,circle:u,direction:l,duration:a,enableAnimation:c=!0}=t,d={};return"rtl"===l&&(d["--animation-direction"]="reverse"),"number"==typeof a&&(d["--animation-duration"]="".concat(a,"s")),c||(d["--pseudo-element-display"]="none"),("string"==typeof r||"number"==typeof r)&&(d.width=r),("string"==typeof i||"number"==typeof i)&&(d.height=i),("string"==typeof o||"number"==typeof o)&&(d.borderRadius=o),u&&(d.borderRadius="50%"),void 0!==e&&(d["--base-color"]=e),void 0!==n&&(d["--highlight-color"]=n),d}(E)),w="react-loading-skeleton";s&&(w+=" ".concat(s));let x=null!==(e=E.inline)&&void 0!==e&&e,T=[],j=Math.ceil(c);for(let t=0;t<j;t++){let e=y;if(j>c&&t===j-1){let t=null!==(n=e.width)&&void 0!==n?n:"100%",o=c%1,u="number"==typeof t?t*o:"calc(".concat(t," * ").concat(o,")");e=(0,i._)((0,r._)({},e),{width:u})}let o=u.createElement("span",{className:w,style:e,key:t},"‌");x?T.push(o):T.push(u.createElement(u.Fragment,{key:t},o,u.createElement("br",null)))}return u.createElement("span",{className:f,"data-testid":p,"aria-live":"polite","aria-busy":null===(a=E.enableAnimation)||void 0===a||a},d?T.map((t,e)=>u.createElement(d,{key:e},t)):T)}function c(t){var{children:e}=t,n=(0,o._)(t,["children"]);return u.createElement(l.Provider,{value:n},e)}}}]);
//# sourceMappingURL=7223.5d6d8bbe50be0298.js.map