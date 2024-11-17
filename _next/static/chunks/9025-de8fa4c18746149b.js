"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9025],{19025:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let r=n(38139),i=n(38900),o=n(45497);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return j}});let l=n(98207),a=n(85873),s=n(30748),d=a._(n(90275)),u=l._(n(70395)),c=l._(n(5403)),f=n(86545),p=n(93694),g=n(91095);n(24465);let m=n(33255),h=l._(n(26723)),y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function _(e,t,n,o,l,a,s){let d=null==e?void 0:e.src;e&&e["data-loaded-src"]!==d&&(e["data-loaded-src"]=d,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&l(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;n.current(i._(r._({},t),{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}}))}function b(e){let[t,n]=d.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,d.forwardRef)((e,t)=>{let{src:n,srcSet:l,sizes:a,height:u,width:c,decoding:f,className:p,style:g,fetchPriority:m,placeholder:h,loading:y,unoptimized:v,fill:w,onLoadRef:j,onLoadingCompleteRef:S,setBlurComplete:x,setShowAltText:C,sizesInput:P,onLoad:O,onError:z}=e,E=o._(e,["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","sizesInput","onLoad","onError"]);return(0,s.jsx)("img",i._(r._({},E,b(m)),{loading:y,width:c,height:u,decoding:f,"data-nimg":w?"fill":"1",className:p,style:g,sizes:a,srcSet:l,src:n,ref:(0,d.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&_(e,h,j,S,x,v,P))},[n,h,j,S,x,z,v,P,t]),onLoad:e=>{_(e.currentTarget,h,j,S,x,v,P)},onError:e=>{C(!0),"empty"!==h&&x(!0),z&&z(e)}}))});function w(e){let{isAppRouter:t,imgAttributes:n}=e,i=r._({as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy},b(n.fetchPriority));return t&&u.default.preload?(u.default.preload(n.src,i),null):(0,s.jsx)(c.default,{children:(0,s.jsx)("link",r._({rel:"preload",href:n.srcSet?void 0:n.src},i),"__nimg-"+n.src+n.srcSet+n.sizes)})}let j=(0,d.forwardRef)((e,t)=>{let n=(0,d.useContext)(m.RouterContext),o=(0,d.useContext)(g.ImageConfigContext),l=(0,d.useMemo)(()=>{let e=y||o||p.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i._(r._({},e),{allSizes:t,deviceSizes:n})},[o]),{onLoad:a,onLoadingComplete:u}=e,c=(0,d.useRef)(a);(0,d.useEffect)(()=>{c.current=a},[a]);let _=(0,d.useRef)(u);(0,d.useEffect)(()=>{_.current=u},[u]);let[b,j]=(0,d.useState)(!1),[S,x]=(0,d.useState)(!1),{props:C,meta:P}=(0,f.getImgProps)(e,{defaultLoader:h.default,imgConf:l,blurComplete:b,showAltText:S});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,i._(r._({},C),{unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:c,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:x,sizesInput:e.sizes,ref:t})),P.priority?(0,s.jsx)(w,{isAppRouter:!n,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},294:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(98207)._(n(90275)).default.createContext({})},64773:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},86545:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let r=n(38139),i=n(38900),o=n(45497);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),n(24465);let l=n(41387),a=n(93694);function s(e){return void 0!==e.default}function d(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var n;let u,c,f,{src:p,sizes:g,unoptimized:m=!1,priority:h=!1,loading:y,className:_,quality:b,width:v,height:w,fill:j=!1,style:S,overrideSrc:x,onLoad:C,onLoadingComplete:P,placeholder:O="empty",blurDataURL:z,fetchPriority:E,layout:M,objectFit:I,objectPosition:R,lazyBoundary:k,lazyRoot:A}=e,D=o._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","overrideSrc","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]),{imgConf:L,showAltText:N,blurComplete:U,defaultLoader:T}=t,B=L||a.imageConfigDefault;if("allSizes"in B)u=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);u=i._(r._({},B),{allSizes:e,deviceSizes:t})}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=D.loader||T;delete D.loader,delete D.srcSet;let G="__next_img_default"in F;if(G){if("custom"===u.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:n}=t;return e(o._(t,["config"]))}}if(M){"fill"===M&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(S=r._({},S,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!g&&(g=t)}let W="",q=d(v),H=d(w);if("object"==typeof(n=p)&&(s(n)||void 0!==n.src)){let e=s(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,f=e.blurHeight,z=z||e.blurDataURL,W=e.src,!j){if(q||H){if(q&&!H){let t=q/e.width;H=Math.round(e.height*t)}else if(!q&&H){let t=H/e.height;q=Math.round(e.width*t)}}else q=e.width,H=e.height}}let V=!h&&("lazy"===y||void 0===y);(!(p="string"==typeof p?p:W)||p.startsWith("data:")||p.startsWith("blob:"))&&(m=!0,V=!1),u.unoptimized&&(m=!0),G&&p.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(m=!0),h&&(E="high");let $=d(b),J=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},N?{}:{color:"transparent"},S),Y=U||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:c,blurHeight:f,blurDataURL:z||"",objectFit:J.objectFit})+'")':'url("'+O+'")',X=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},K=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),u=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:a({config:t,src:n,quality:o,width:s[u]})}}({config:u,src:p,unoptimized:m,width:q,quality:$,sizes:g,loader:F});return{props:i._(r._({},D),{loading:V?"lazy":y,fetchPriority:E,width:q,height:H,decoding:"async",className:_,style:r._({},J,X),sizes:K.sizes,srcSet:K.srcSet,src:x||K.src}),meta:{unoptimized:m,priority:h,placeholder:O,fill:j}}}},5403:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let r=n(38139);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return f}});let i=n(98207),o=n(85873),l=n(30748),a=o._(n(90275)),s=i._(n(66702)),d=n(294),u=n(500),c=n(64773);function f(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(24465);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=r._({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,n=(0,a.useContext)(d.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41387:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r?40*r:t,s=i?40*i:n,d=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},91095:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(98207)._(n(90275)),i=n(93694),o=r.default.createContext(i.imageConfigDefault)},93694:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},26723:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},66702:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(90275),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,l=i?()=>{}:r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}}]);
//# sourceMappingURL=9025-de8fa4c18746149b.js.map