(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5675],{79361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},28045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(79361).Z,o=i(94941).Z,r=i(53929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l=e.src,c=e.sizes,p=e.unoptimized,h=void 0!==p&&p,w=e.priority,k=void 0!==w&&w,I=e.loading,E=e.lazyRoot,_=e.lazyBoundary,O=e.className,R=e.quality,C=e.width,L=e.height,q=e.style,M=e.objectFit,N=e.objectPosition,P=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,Z=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(m.ImageConfigContext),V=u.useMemo(function(){var e=v||U||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[U]),F=c?"responsive":"intrinsic";"layout"in D&&(D.layout&&(F=D.layout),delete D.layout);var H=j;if("loader"in D){if(D.loader){var G=D.loader;H=function(e){e.config;var t=s(e,["config"]);return G(t)}}delete D.loader}var T="";if(function(e){var t;return"object"==typeof e&&(z(e)||void 0!==e.src)}(l)){var J=z(l)?l.default:l;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(Z=Z||J.blurDataURL,T=J.src,(!F||"fill"!==F)&&(L=L||J.height,C=C||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}l="string"==typeof l?l:T;var Q=!k&&("lazy"===I||void 0===I);(l.startsWith("data:")||l.startsWith("blob:"))&&(h=!0,Q=!1),b.has(l)&&(Q=!1),V.unoptimized&&(h=!0);var K=o(u.useState(!1),2),X=K[0],Y=K[1],$=o(g.useIntersection({rootRef:void 0===E?null:E,rootMargin:_||"200px",disabled:!Q}),3),ee=$[0],et=$[1],ei=$[2],en=!Q||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=A(C),ec=A(L),es=A(R),eu=Object.assign({},q,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),ed="blur"!==B||X?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===F)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==el&&void 0!==ec){var ef=ec/el,eg=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===F?(eo.display="block",eo.position="relative",ea=!0,er.paddingTop=eg):"intrinsic"===F?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",ea=!0,er.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===F&&(eo.display="inline-block",eo.position="relative",eo.width=el,eo.height=ec)}var em={src:y,srcSet:void 0,sizes:void 0};en&&(em=S({config:V,src:l,unoptimized:h,layout:F,width:el,quality:es,sizes:c,loader:H}));var ep=l,eh="imagesizes";eh="imageSizes";var ev=(n(i={},"imageSrcSet",em.srcSet),n(i,eh,em.sizes),n(i,"crossOrigin",D.crossOrigin),i),eb=u.default.useLayoutEffect,ey=u.useRef(P),ew=u.useRef(l);u.useEffect(function(){ey.current=P},[P]),eb(function(){ew.current!==l&&(ei(),ew.current=l)},[ei,l]);var ez=a({isLazy:Q,imgAttributes:em,heightInt:ec,widthInt:el,qualityInt:es,layout:F,className:O,imgStyle:eu,blurStyle:ed,loading:I,config:V,unoptimized:h,placeholder:B,loader:H,srcString:ep,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:c},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:eo},ea?u.default.createElement("span",{style:er},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(x,Object.assign({},ez))),k?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+em.src+em.srcSet+em.sizes,rel:"preload",as:"image",href:em.srcSet?void 0:em.src},ev))):null)};var a=i(6495).Z,l=i(92648).Z,c=i(91598).Z,s=i(17273).Z,u=c(i(67294)),d=l(i(5443)),f=i(99309),g=i(57190),m=i(59977);i(63794);var p=i(82392);function h(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(h(i))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,o=e.width,r=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(r).concat(h(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(h(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function z(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(n);s)c.push(parseInt(s[2]));if(c.length){var s,u,d=.01*(u=Math).min.apply(u,r(c));return{widths:a.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map(function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function A(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function k(e,t,i,n,o,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}}))}var x=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,A=e.onError,j=(e.isVisible,e.noscriptSizes),x=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,c),ref:u.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&k(e,m,o,f,b,y)},[w,m,o,f,b,y,]),onLoad:function(e){k(e.currentTarget,m,o,f,b,y),z&&z(e)},onError:function(e){"blur"===f&&y(!0),A&&A(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,S({config:p,src:m,unoptimized:h,layout:o,width:i,quality:n,sizes:j,loader:v}),{decoding:"async","data-nimg":o,style:l,className:r,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,s=e.rootMargin,u=e.disabled||!a,d=n(o.useState(!1),2),f=d[0],g=d[1],m=n(o.useState(null),2),p=m[0],h=m[1];return o.useEffect(function(){if(a){if(!u&&!f&&p&&p.tagName){var e,t,n,o,d,m,h;return t=function(e){return e&&g(e)},d=(o=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:o},c.push(i),l.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:s})).id,m=o.observer,(h=o.elements).set(p,t),m.observe(p),function(){if(h.delete(p),m.unobserve(p),0===h.size){m.disconnect(),l.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=r.requestIdleCallback(function(){return g(!0)});return function(){return r.cancelIdleCallback(v)}}},[p,u,s,i,f]),[h,f,o.useCallback(function(){g(!1)},[])]};var o=i(67294),r=i(9311),a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},25675:function(e,t,i){e.exports=i(28045)}}]);