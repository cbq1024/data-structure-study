(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{9549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(2430),o=r(1778),n=r(2676),s=o._(r(5271)),l=i._(r(967)),a=i._(r(6644)),u=r(2730),d=r(8918),c=r(1617);r(7746);let f=r(5485),g=i._(r(7429)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,o,n,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:p,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:j,sizesInput:S,onLoad:_,onError:C,...z}=e;return(0,n.jsx)("img",{...z,...m(f),loading:p,width:a,height:l,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:o,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,g,w,y,x,v,S))},[r,g,w,y,x,C,v,S,t]),onLoad:e=>{h(e.currentTarget,g,w,y,x,v,S)},onError:e=>{j(!0),"empty"!==g&&x(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(c.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=p||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let m=(0,s.useRef)(a);(0,s.useEffect)(()=>{m.current=a},[a]);let[w,y]=(0,s.useState)(!1),[x,j]=(0,s.useState)(!1),{props:S,meta:_}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:w,showAltText:x});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.priority?(0,n.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(7746);let i=r(7853),o=r(8918);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:h,quality:m,width:v,height:b,fill:w=!1,style:y,overrideSrc:x,onLoad:j,onLoadingComplete:S,placeholder:_="empty",blurDataURL:C,fetchPriority:z,decoding:P="async",layout:E,objectFit:M,objectPosition:O,lazyBoundary:R,lazyRoot:I,...k}=e,{imgConf:N,showAltText:A,blurComplete:D,defaultLoader:G}=t,B=N||o.imageConfigDefault;if("allSizes"in B)l=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);l={...B,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||G;delete k.loader,delete k.srcSet;let L="__next_img_default"in F;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let W="",T=s(v),U=s(b);if("object"==typeof(r=d)&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,W=e.src,!w){if(T||U){if(T&&!U){let t=T/e.width;U=Math.round(e.height*t)}else if(!T&&U){let t=U/e.height;T=Math.round(e.width*t)}}else T=e.width,U=e.height}}let V=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),L&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(z="high");let q=s(m),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},A?{}:{color:"transparent"},y),Y=D||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+_+'")',$=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:n,width:a[d]})}}({config:l,src:d,unoptimized:f,width:T,quality:q,sizes:c,loader:F});return{props:{...k,loading:V?"lazy":p,fetchPriority:z,width:T,height:U,decoding:P,className:h,style:{...J,...$},sizes:H.sizes,srcSet:H.srcSet,src:x||H.src},meta:{unoptimized:f,priority:g,placeholder:_,fill:w}}}},7853:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=i?40*i:t,a=o?40*o:r,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5639:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return l}});let i=r(2430),o=r(2730),n=r(9549),s=i._(r(7429));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=n.Image},7429:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},2492:function(e,t,r){e.exports=r(5639)},4512:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var i=r(5635),o=r(2492),n=r.n(o),s=r(5271);let l={img:e=>(0,s.createElement)("object"==typeof e.src?n():"img",e)},a=e=>(0,i.a)({...l,...e})},4367:function(e,t,r){"use strict";r.d(t,{c:function(){return u}});var i=r(2676),o=r(2351),n=r(4835);let s=(0,r(5271).createContext)({}),l=s.Provider;s.displayName="SSG";var a=r(4512);function u(e,t,r,i){let n=globalThis[o.ud];return n.route=t,n.pageMap=r.pageMap,n.context[t]={Content:e,pageOpts:r,useTOC:i},d}function d({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...r}){let s=globalThis[o.ud],{Layout:a,themeConfig:u}=s,{route:d,locale:f}=(0,n.t)(),g=s.context[d];if(!g)throw Error(`No content found for the "${d}" route. Please report it as a bug.`);let{pageOpts:p,useTOC:h,Content:m}=g;if(d.startsWith("/["))p.pageMap=e;else for(let{route:t,children:r}of e){let e=t.split("/").slice(f?2:1);(function e(t,[r,...i]){for(let o of t)if("children"in o&&r===o.name)return i.length?e(o.children,i):o})(p.pageMap,e).children=r}if(t){let{title:e,frontMatter:r}=t;p={...p,title:e,frontMatter:r}}return(0,i.jsx)(a,{themeConfig:u,pageOpts:p,pageProps:r,children:(0,i.jsx)(l,{value:r,children:(0,i.jsx)(c,{useTOC:h,children:(0,i.jsx)(m,{...r})})})})}function c({children:e,useTOC:t}){let{wrapper:r}=(0,a.a)();return(0,i.jsx)(f,{useTOC:t,wrapper:r,children:e})}function f({children:e,useTOC:t,wrapper:r,...o}){let n=t(o);return r?(0,i.jsx)(r,{toc:n,children:e}):e}}}]);