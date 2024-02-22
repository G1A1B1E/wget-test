(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9107],{72445:function(e,n,r){"use strict";r.d(n,{W:function(){return g}});var t=r(67294),i=r(96768),o=r(64761),l=r(56817),a=r(14258),c=(0,l.k)((e,{fluid:n,sizes:r},{size:t})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:n?"100%":(0,a.a)({size:t,sizes:r}),marginLeft:"auto",marginRight:"auto"}})),s=r(7414),u=Object.defineProperty,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&p(e,r,n[r]);if(d)for(var r of d(n))h.call(n,r)&&p(e,r,n[r]);return e},b=(e,n)=>{var r={};for(var t in e)f.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&d)for(var t of d(e))0>n.indexOf(t)&&h.call(e,t)&&(r[t]=e[t]);return r};let y={sizes:{xs:(0,i.h)(540),sm:(0,i.h)(720),md:(0,i.h)(960),lg:(0,i.h)(1140),xl:(0,i.h)(1320)}},g=(0,t.forwardRef)((e,n)=>{let r=(0,o.N4)("Container",y,e),{className:i,fluid:l,size:a,unstyled:u,sizes:d,variant:f}=r,h=b(r,["className","fluid","size","unstyled","sizes","variant"]),{classes:p,cx:g}=c({fluid:l,sizes:d},{unstyled:u,name:"Container",variant:f,size:a});return t.createElement(s.x,m({className:g(p.root,i),ref:n},h))});g.displayName="@mantine/core/Container"},38623:function(e,n,r){"use strict";r.d(n,{O:function(){return z}});var t=r(67294),i=r(64761),o=r(70917),l=r(56817),a=r(96768),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))f.call(n,r)&&p(e,r,n[r]);if(d)for(var r of d(n))h.call(n,r)&&p(e,r,n[r]);return e},b=(e,n)=>s(e,u(n));let y=(0,o.F4)({"from, to":{opacity:.4},"50%":{opacity:1}});var g=(0,l.k)((e,{height:n,width:r,radius:t,circle:i,animate:o})=>({root:{height:(0,a.h)(n),width:i?(0,a.h)(n):(0,a.h)(r),borderRadius:i?(0,a.h)(n):e.fn.radius(t),position:"relative",WebkitTransform:"translateZ(0)"},visible:{overflow:"hidden","&::before":b(m({},e.fn.cover(0)),{content:'""',background:"dark"===e.colorScheme?e.colors.dark[7]:e.white,zIndex:10}),"&::after":b(m({},e.fn.cover(0)),{content:'""',background:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],animation:o?`${y} 1500ms linear infinite`:"none",zIndex:11})}})),v=r(7414),j=Object.defineProperty,x=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(e,n,r)=>n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,C=(e,n)=>{for(var r in n||(n={}))O.call(n,r)&&w(e,r,n[r]);if(x)for(var r of x(n))k.call(n,r)&&w(e,r,n[r]);return e},S=(e,n)=>{var r={};for(var t in e)O.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&x)for(var t of x(e))0>n.indexOf(t)&&k.call(e,t)&&(r[t]=e[t]);return r};let P={height:"auto",width:"100%",visible:!0,animate:!0},z=(0,t.forwardRef)((e,n)=>{let r=(0,i.N4)("Skeleton",P,e),{height:o,width:l,visible:a,animate:c,className:s,circle:u,radius:d,unstyled:f,variant:h}=r,p=S(r,["height","width","visible","animate","className","circle","radius","unstyled","variant"]),{classes:m,cx:b}=g({height:o,width:l,circle:u,radius:d,animate:c},{name:"Skeleton",unstyled:f,variant:h});return t.createElement(v.x,C({className:b(m.root,{[m.visible]:a},s),ref:n},p))});z.displayName="@mantine/core/Skeleton"},19236:function(e,n,r){"use strict";r.d(n,{D:function(){return S}});var t=r(67294),i=r(64761),o=r(96768),l=r(56817),a=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))d.call(n,r)&&h(e,r,n[r]);if(u)for(var r of u(n))f.call(n,r)&&h(e,r,n[r]);return e},m=(e,n)=>c(e,s(n)),b=(0,l.k)((e,{element:n,weight:r,inline:t},{size:i})=>{var l,a,c,s,u,d;return{root:m(p({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:r||e.headings.sizes[n].fontWeight||e.headings.fontWeight,fontSize:void 0!==i?i in e.headings.sizes?e.headings.sizes[i].fontSize:(0,o.h)(i):e.headings.sizes[n].fontSize,lineHeight:t?1:void 0!==i&&i in e.headings.sizes?e.headings.sizes[i].lineHeight:e.headings.sizes[n].lineHeight,margin:0})}}),y=r(95117),g=Object.defineProperty,v=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,O=(e,n,r)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,k=(e,n)=>{for(var r in n||(n={}))j.call(n,r)&&O(e,r,n[r]);if(v)for(var r of v(n))x.call(n,r)&&O(e,r,n[r]);return e},w=(e,n)=>{var r={};for(var t in e)j.call(e,t)&&0>n.indexOf(t)&&(r[t]=e[t]);if(null!=e&&v)for(var t of v(e))0>n.indexOf(t)&&x.call(e,t)&&(r[t]=e[t]);return r};let C={order:1},S=(0,t.forwardRef)((e,n)=>{let r=(0,i.N4)("Title",C,e),{className:o,order:l,children:a,unstyled:c,size:s,weight:u,inline:d,variant:f}=r,h=w(r,["className","order","children","unstyled","size","weight","inline","variant"]),{classes:p,cx:m}=b({element:`h${l}`,weight:u,inline:d},{name:"Title",unstyled:c,variant:f,size:s});return[1,2,3,4,5,6].includes(l)?t.createElement(y.x,k({variant:f,component:`h${l}`,ref:n,className:m(p.root,o)},h),a):null});S.displayName="@mantine/core/Title"},14470:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skinCollection",function(){return r(91155)}])},66110:function(e,n){"use strict";var r=function(e){return fetch(e).then(function(e){return e.json()})};n.Z=r},91155:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return S}});var t=r(85893),i=r(9008),o=r.n(i),l=r(29815),a=r(72445),c=r(20050),s=r(19236),u=r(95117),d=r(38623),f=r(21017),h=r(43523),p=r(39954),m=r(97564),b=r(67841),y=r(67294),g=r(11163),v=r(41664),j=r.n(v);function x(e){var n=e.skinCollection,r=e.userSkinCollection,i=(0,g.useRouter)(),o=(0,y.useMemo)(function(){var e=0,t=!0,i=!1,o=void 0;try{for(var l,a=n.skingroupIds[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){var c,s=l.value;(null==r?void 0:null===(c=r.submittedSkingroupIds)||void 0===c?void 0:c.includes(s))&&e++}}catch(u){i=!0,o=u}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}return e},[r,n]);return(0,t.jsxs)(f.Z,{shadow:"xl",h:"100%",sx:{display:"flex",flexDirection:"column"},children:[(0,t.jsx)(h.M,{children:(0,t.jsx)(j(),{href:"/cases/".concat("Collection"===n.name.split(" ").pop()?"collection":"case","/").concat(n.name),children:(0,t.jsx)(p.E,{style:{cursor:"pointer"},src:"/pictures/cases/".concat(n.image),alt:"collection image",width:130,fit:"contain"})})}),(0,t.jsx)(h.M,{children:(0,t.jsx)(u.x,{children:n.name})}),(0,t.jsxs)(m.K,{mt:"auto",spacing:0,align:"center",children:[(0,t.jsxs)(u.x,{color:n.totalSkins-o==0?"green":"dark.2",children:[o," / ",n.totalSkins]}),(0,t.jsx)(u.x,{color:"dark.2",size:"xs",children:"Collected"})]}),(0,t.jsx)(b.z,{onClick:function(){return i.push("/skinCollection/".concat(n.name))},mt:5,color:"orange",variant:"subtle",children:"View"})]})}var O=r(59734),k=r(66110);function w(){var e,n=(0,O.ZP)("/api/skinCollection?all=true",k.Z),r=n.data,i=n.isLoading;return(0,t.jsxs)(a.W,{fluid:!0,children:[(0,t.jsx)(c.r,{children:(0,t.jsx)(c.r.Col,{span:12,children:(0,t.jsx)(s.D,{children:"Skin Collection"})})}),(0,t.jsx)(c.r,{children:(0,t.jsx)(c.r.Col,{span:12,children:(0,t.jsx)(u.x,{children:"Collect skins and earn rewards for completed collections"})})}),i||!r?(0,t.jsx)(c.r,{grow:!0,children:(0,l.Z)(Array(45)).map(function(e,n){return(0,t.jsx)(c.r.Col,{span:"auto",children:(0,t.jsx)(d.O,{miw:150,height:200})},n)})}):(0,t.jsx)(c.r,{grow:!0,children:null==r?void 0:null===(e=r.skinCollections)||void 0===e?void 0:e.map(function(e){return(0,t.jsx)(c.r.Col,{span:"auto",children:(0,t.jsx)(x,{skinCollection:e,userSkinCollection:null==r?void 0:r.userSkinCollection})},e.name)})})]})}var C=r(523);function S(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"Skin Collection | Case Clicker Online"}),(0,t.jsx)("meta",{name:"description",content:"complete your skin collection"}),(0,t.jsx)("link",{rel:"canonical",href:"https://case-clicker.com/skinCollection"})]}),(0,t.jsx)(C.Z,{children:(0,t.jsx)(w,{})})]})}}},function(e){e.O(0,[1228,4980,5937,5445,4617,9866,8237,2457,5675,3617,2005,9734,523,9774,2888,179],function(){return e(e.s=14470)}),_N_E=e.O()}]);