(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(89260)}])},85484:function(e,n,c){"use strict";c.d(n,{Z:function(){return i}});var r=c(41799),s=c(85893),t=c(67294);function i(e){return(0,t.useEffect)(function(){try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){console.log(e)}},[]),(0,s.jsx)("ins",(0,r.Z)({className:"adsbygoogle adbanner-customize",style:{display:"block",overflow:"hidden"},"data-ad-client":"ca-pub-9922372801835318"},e))}},50265:function(e,n,c){"use strict";c.d(n,{Z:function(){return u}});var r=c(85893),s=c(20050),t=c(95117),i=c(67841),o=c(25963),l=c(41664),a=c.n(l);function u(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.r,{justify:"center",children:(0,r.jsx)(s.r.Col,{span:12,children:(0,r.jsx)(t.x,{size:"xl",weight:500,children:"Login to proceed"})})}),(0,r.jsx)(s.r,{children:(0,r.jsx)(s.r.Col,{span:12,children:(0,r.jsx)(t.x,{children:"You need to login to play this game"})})}),(0,r.jsx)(s.r,{justify:"center",children:(0,r.jsx)(s.r.Col,{span:12,children:(0,r.jsx)(a(),{href:"/auth/login",passHref:!0,children:(0,r.jsx)(i.z,{onClick:function(){return o.qk.closeAll()},color:"orange",component:"a",children:"Go to login page"})})})})]})}},45973:function(e,n,c){"use strict";c.d(n,{Z:function(){return t}});var r=c(85893),s=c(8193);function t(e){var n=e.size,c=e.onClick,t=e.color;return(0,r.jsx)(s.$0k,{enableBackground:1,color:t,onClick:c,size:n})}},73711:function(e,n,c){"use strict";c.d(n,{Z:function(){return t}});var r=c(85893),s=c(38138);function t(e){var n=e.size,c=e.color;return(0,r.jsx)(s.od$,{size:n,color:c})}},89260:function(e,n,c){"use strict";c.r(n),c.d(n,{__N_SSG:function(){return R},default:function(){return Q}});var r=c(85893),s=c(523),t=c(72445),i=c(20050),o=c(43523),l=c(19236),a=c(95117),u=c(21017),d=c(71232),f=c(97564),x=c(67294),h=c(41533),j=c(33299),k=c(73711),m=c(27484),p=c.n(m),v=c(17857),y=c(58044),C=c(74922),g=c(828),w=c(49834),Z=c(45973),z=c(60619),b=c(45164),_=c(51032),E=c(17789),M=c(47516);function S(e){var n=e.size,c=e.color;return(0,r.jsx)(M.xBX,{size:n,color:c})}var A=c(63750);function P(e){var n=e.size,c=e.color;return(0,r.jsx)(A.mz0,{size:n,color:c})}function N(e){var n=e.autoclicker,c=e.setAutoclicker,s=e.type,t=e.clickFunction,i=(0,j.useSession)().status,o=(0,x.useMemo)(function(){return n.type===s&&n.active},[n,s]);(0,x.useEffect)(function(){if(o){var e=setInterval(t,120);return function(){clearInterval(e)}}},[o,t]);var l=function(){o?c({active:!1,type:s}):c({active:!0,type:s})};return(0,r.jsxs)(f.K,{align:"center",spacing:0,children:[(0,r.jsx)(a.x,{children:"Autoclicker"}),(0,r.jsx)(E.C,{onClick:"authenticated"===i?l:null,leftSection:(0,r.jsx)(w.A,{size:16,children:o?(0,r.jsx)(S,{size:16}):(0,r.jsx)(P,{size:16})}),color:o?"green":"red",children:o?"Active":"Inactive"})]})}var I=c(25963),Y=c(50265);function F(e){var n=e.autoclicker,c=e.setAutoclicker,s=(0,j.useSession)().status,t=(0,x.useState)(0),i=t[0],o=t[1],l=(0,x.useContext)(y.Z).socket,k=(0,x.useContext)(h.Z),m=k.moneyPerClick,p=k.setMoney,v=(0,g.Z)((0,z.Z)("/sounds/moneyClick.mp3",{volume:.02}),1)[0];(0,x.useEffect)(function(){if(l)return l.emit("clicks"),l.on("clicks",function(e){return o(e)}),l.on("clicked",function(e){o(e)}),l.on("savedClicks",function(e){p(e),o(0)}),function(){l.off("clicks"),l.off("clicked")}},[l]);var C=(0,x.useMemo)(function(){return i*m},[i,m]),E=function(){if("unauthenticated"===s)return I.qk.open({children:(0,r.jsx)(Y.Z,{})});l&&(l.emit("click"),v())};return(0,r.jsx)(u.Z,{withBorder:!0,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(b.E.div,{whileTap:{scale:1.1},children:(0,r.jsx)(w.A,{onClick:E,"aria-label":"clicker",variant:"transparent",size:150,children:(0,r.jsx)(Z.Z,{size:150,onClick:void 0,color:"yellow"})})}),(0,r.jsxs)(f.K,{sx:{cursor:"pointer"},onClick:E,spacing:0,maw:"40%",children:[(0,r.jsx)(a.x,{size:30,children:(0,_.l)(C||0)}),(0,r.jsxs)(a.x,{children:[(0,_.l)(m||.01,3)," per click"]}),(0,r.jsx)(a.x,{size:"sm",color:"dark.2",children:"Your collected money is not directly available. It is credited to your account every minute."})]}),(0,r.jsx)(N,{autoclicker:n,setAutoclicker:c,type:"money",clickFunction:E})]})})}var O=c(39954),T=c(3941),q=c(67051);function B(e){var n=e.autoclicker,c=e.setAutoclicker,s=(0,j.useSession)().status,t=(0,x.useContext)(y.Z).socket,i=(0,x.useContext)(h.Z),o=i.casesPerClick,l=i.casesPerClickMaxPrice,k=(0,x.useState)(0),m=k[0],p=k[1],v=(0,g.Z)((0,z.Z)("/sounds/caseclick.wav",{volume:.05}),1)[0];(0,x.useEffect)(function(){if(t)return t.emit("caseclicks"),t.on("caseclicks",function(e){return p(e>100?100:e)}),t.on("caseclicked",function(e){p(e)}),t.on("newClickedCase",function(e){p(0),C.N9.show({icon:(0,r.jsx)(O.E,{alt:"case image",src:"/pictures/cases/".concat(e.iconUrl)}),message:"",title:"You got a ".concat(e.name),color:"gray"})}),function(){t.off("caseclicks"),t.off("caseclicked"),t.off("newClickedCase")}},[t,n]);var Z=function(){if("unauthenticated"===s)return I.qk.open({children:(0,r.jsx)(Y.Z,{})});t&&(v(),t.emit("caseclick"))};return(0,r.jsx)(u.Z,{withBorder:!0,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(b.E.div,{whileTap:{scale:1.1},children:(0,r.jsx)(w.A,{onClick:Z,size:150,"aria-label":"case clicker",variant:"transparent",children:(0,r.jsx)(q.Z,{size:150,color:"saddlebrown"})})}),(0,r.jsxs)(f.K,{onClick:Z,sx:{cursor:"pointer"},miw:"40%",spacing:0,maw:"40%",children:[(0,r.jsx)(T.E,{label:"".concat(Math.floor(100*m)/100,"%"),size:"xl",color:"orange",value:m}),(0,r.jsxs)(a.x,{mt:5,children:[Math.floor(100*o)/100||1,"% per click"]}),(0,r.jsxs)(a.x,{size:"sm",color:"dark.2",children:["When you reach 100% you get a random unlocked case under"," ",(0,_.l)(l,0),"."]})]}),(0,r.jsx)(N,{autoclicker:n,setAutoclicker:c,type:"cases",clickFunction:Z})]})})}var K=c(85484);function V(){var e=(0,x.useContext)(y.Z).socket,n=(0,x.useContext)(h.Z),c=n.money,s=n.setMoney,m=n.vaultCapacity,g=n.vaultLastCollected,w=n.vaultMoneyPerMinute,Z=n.setVaultCapacity,z=n.setVaultLastCollected,b=n.setVaultMoneyPerMinute,E=n.membership,M=(0,j.useSession)().status,S=(0,x.useState)(0),A=S[0],P=S[1],N=(0,x.useState)(!1),O=N[0],T=N[1],q=(0,x.useState)({active:!1,type:"money"}),V=q[0],D=q[1];return(0,x.useEffect)(function(){var e=function(){var e=p()(),n=p()(g),c=e.diff(n,"seconds")/60;w*c>m?T(!0):T(!1),P(w*c<m?w*c:m)};e();var n=setInterval(function(){e()},1e3);return function(){return clearInterval(n)}},[m,g,w]),(0,x.useEffect)(function(){if(e&&(e.emit("vaultInfo"),e.on("vaultInfo",function(e){Z(e.vaultCapacity),z(e.vaultLastCollected),b(e.vaultMoneyPerMinute),s(e.money)}),e.on("connect_error",function(e){console.log(e.message)}),e.on("blocked",function(e){C.N9.show({title:"You are blocked",message:"You are blocked because you are clicking too fast.\nPlease wait another ".concat(e,"ms until your next click"),color:"red"})}),e))return function(){e.off("connect"),e.off("connect_error"),e.off("vaultInfo"),e.off("blocked")}},[e]),(0,r.jsxs)(t.W,{children:["unauthenticated"===M&&(0,r.jsx)(i.r,{children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(o.M,{children:(0,r.jsx)(l.D,{sx:{fontSize:20},children:"Case Clicker Online is a free cs2 case opening simulator"})})})}),(0,r.jsx)(i.r,{mt:20,justify:"center",children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(o.M,{children:(0,r.jsx)(a.x,{weight:500,size:50,children:(0,_.l)(c||0)})})})}),"basic"===E&&(0,r.jsx)(i.r,{children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(K.Z,{"data-ad-slot":"6077876111","data-ad-format":"auto","data-full-width-responsive":"true"})})}),(0,r.jsx)(i.r,{children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(F,{autoclicker:V,setAutoclicker:D})})}),(0,r.jsx)(i.r,{children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(B,{autoclicker:V,setAutoclicker:D})})}),(0,r.jsx)(i.r,{children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(u.Z,{sx:{cursor:"pointer"},onClick:function(){if("unauthenticated"===M)return I.qk.open({children:(0,r.jsx)(Y.Z,{})});e&&e.emit("collectVault")},withBorder:!0,children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(k.Z,{size:150,color:"gray"}),(0,r.jsxs)(f.K,{maw:"40%",spacing:0,children:[(0,r.jsx)(v.ZP,{end:A,duration:1,decimals:2,prefix:"$",preserveValue:!0,useEasing:!1,children:function(e){var n=e.countUpRef;return(0,r.jsx)(a.x,{ref:n,color:O&&"red",size:30})}}),(0,r.jsxs)(a.x,{children:[(0,_.l)(m||100)," capacity"]}),(0,r.jsxs)(a.x,{children:[(0,_.l)(w||10)," per minute"]}),(0,r.jsx)(a.x,{size:"sm",color:"dark.2",children:"Your vault automatically generates money for you. Click to collect."})]})]})})})})]})}var D=c(9567);function L(){return(0,x.useContext)(D.Z).isMobileWidth,(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(t.W,{fluid:!0,mt:50,children:[(0,r.jsx)(i.r,{children:(0,r.jsx)(l.D,{order:2,children:"News and Informations"})}),(0,r.jsx)(i.r,{mt:30,children:(0,r.jsx)(f.K,{spacing:5,children:(0,r.jsx)(a.x,{"data-umami-event":"join-discord",color:"yellow",weight:500,children:(0,r.jsx)("a",{href:"https://discord.gg/hdPqd2z5NZ",target:"_blank",rel:"noreferrer",children:"Join our Discord for news, regular promo codes and giveaways!"})})})})]})})}var W=c(9008),G=c.n(W),X=c(5152),$=c.n(X),J=c(41664),U=c.n(J),H=$()(function(){return Promise.all([c.e(6556),c.e(1072),c.e(8699)]).then(c.bind(c,6612))},{loadableGenerated:{webpack:function(){return[6612]}},ssr:!1}),R=!0;function Q(e){var n=e.currentEvent,c=e.isTest;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(G(),{children:[(0,r.jsx)("title",{children:"Case Clicker Online | A CS2 Case Simulator"}),(0,r.jsx)("meta",{name:"description",content:"Case Clicker Online is a cs2 case simulator where you open cases, collect skins in your inventory, play casebattles and much more."}),(0,r.jsx)("meta",{name:"keywords",content:"cs2, csgo, cs:go, case clicker, case clicker online, case simulator, cs2 clicker, cs2 case opener, cs2 case simulation, case clicker 2, cs2 case simulator, cs2 simulator"}),(0,r.jsx)("link",{rel:"canonical",href:"https://case-clicker.com/"})]}),(0,r.jsxs)(s.Z,{children:[c&&(0,r.jsx)(i.r,{children:(0,r.jsx)(i.r.Col,{span:12,children:(0,r.jsx)(o.M,{children:(0,r.jsx)(U(),{href:"https://case-clicker.com",children:(0,r.jsx)(l.D,{style:{cursor:"pointer"},color:"red",children:"This is a test server! You cannot play here without an invite. Click here to visit the live site to play."})})})})}),(0,r.jsx)(H,{event:JSON.parse(n)}),(0,r.jsx)(V,{}),(0,r.jsx)(L,{})]})]})}}},function(e){e.O(0,[1228,4980,5937,5445,4617,9866,2013,3874,9401,8237,2457,5675,3617,2005,5924,523,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);