(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,a){e.exports=a(84)},52:function(e,t,a){},53:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/lit.dfb842d8.png"},79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(43),r=a.n(l),s=(a(52),a(3)),o=(a(53),a(12)),i=a.n(o),u=a(46),m=a(29);a(78),a(79);var d=function(e){var t=Object(n.useRef)();return e.trigger?c.a.createElement("div",{className:"popup",ref:t,onClick:function(a){t.current==a.target&&e.setTrigger(!1)}},e.children):""},b=a(22),g=(a(80),a(81),a(45));a(19),a(83);var h=function(e){var t=e.chartData,a=e.chartOptions;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(g.a,{type:"line",data:t,options:a})))};var f=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),g=o[0],f=o[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),v=p[0],O=p[1],j=Object(n.useState)(""),_=Object(s.a)(j,2),S=_[0],w=_[1],y=Object(n.useState)(localStorage.getItem("local_storage_wager")||100),C=Object(s.a)(y,2),N=C[0],k=C[1],x=Object(n.useState)(localStorage.getItem("local_storage_multiplier")||2),T=Object(s.a)(x,2),I=T[0],A=T[1],F=Object(n.useState)(null),L=Object(s.a)(F,2),B=L[0],P=L[1],D=Object(n.useState)(null),R=Object(s.a)(D,2),U=(R[0],R[1]),M=Object(n.useState)("CONNECTING..."),G=Object(s.a)(M,2),H=G[0],J=G[1],$=Object(n.useState)(!1),K=Object(s.a)($,2),W=K[0],q=K[1],Y=Object(n.useState)(""),z=Object(s.a)(Y,2),Q=(z[0],z[1]),V=Object(n.useState)(null),X=Object(s.a)(V,2),Z=(X[0],X[1]),ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)([]),le=Object(s.a)(ce,2),re=le[0],se=le[1],oe=Object(n.useState)([]),ie=Object(s.a)(oe,2),ue=ie[0],me=ie[1],de=Object(n.useState)(!1),be=Object(s.a)(de,2),ge=be[0],he=be[1],fe=Object(n.useState)(-1),Ee=Object(s.a)(fe,2),pe=Ee[0],ve=Ee[1],Oe=Object(n.useState)(!1),je=Object(s.a)(Oe,2),_e=je[0],Se=je[1],we=Object(n.useState)(!1),ye=Object(s.a)(we,2),Ce=ye[0],Ne=ye[1],ke=Object(n.useState)(""),xe=Object(s.a)(ke,2),Te=xe[0],Ie=xe[1],Ae=Object(n.useState)(),Fe=Object(s.a)(Ae,2),Le=Fe[0],Be=Fe[1],Pe=Object(n.useState)(),De=Object(s.a)(Pe,2),Re=De[0],Ue=De[1],Me=Object(n.useState)(""),Ge=Object(s.a)(Me,2),He=Ge[0],Je=Ge[1],$e=Object(n.useState)(""),Ke=Object(s.a)($e,2),We=Ke[0],qe=Ke[1],Ye=Object(n.useState)(0),ze=Object(s.a)(Ye,2),Qe=ze[0],Ve=ze[1],Xe=Object(n.useState)(!1),Ze=Object(s.a)(Xe,2),et=Ze[0],tt=Ze[1],at=Object(n.useState)(!1),nt=Object(s.a)(at,2),ct=nt[0],lt=nt[1],rt=Object(n.useState)({datasets:[]}),st=Object(s.a)(rt,2),ot=st[0],it=st[1],ut=Object(n.useState)({}),mt=Object(s.a)(ut,2),dt=mt[0],bt=mt[1],gt=Object(n.useState)(!1),ht=Object(s.a)(gt,2),ft=ht[0],Et=ht[1],pt=Object(n.useState)(),vt=Object(s.a)(pt,2),Ot=vt[0],jt=vt[1],_t=Object(n.useState)([0]),St=Object(s.a)(_t,2),wt=(St[0],St[1],Object(n.useState)([0])),yt=Object(s.a)(wt,2),Ct=(yt[0],yt[1],Object(n.useState)(["this is the first value!"])),Nt=Object(s.a)(Ct,2),kt=(Nt[0],Nt[1],Object(n.useState)()),xt=Object(s.a)(kt,2),Tt=(xt[0],xt[1]),It=Object(n.useState)([]),At=Object(s.a)(It,2),Ft=At[0],Lt=At[1],Bt=Object(n.useState)(),Pt=Object(s.a)(Bt,2),Dt=(Pt[0],Pt[1],Object(n.useState)([0,1,2,3,4,5,6,7,8,9])),Rt=Object(s.a)(Dt,2),Ut=Rt[0],Mt=Rt[1],Gt=Object(n.useRef)([]),Ht=Object(n.useRef)([]),Jt=Object(n.useRef)(5);Object(n.useEffect)((function(){Wt();var e=u.a.connect("https://crash-be-final-repo-production.up.railway.app/");return Z(e),e.on("news_by_server",(function(e){Q(e)})),e.on("start_multiplier_count",(function(e){Ve(Date.now()),q(!0)})),e.on("stop_multiplier_count",(function(e){J(e),q(!1),ne(!1)})),e.on("update_user",(function(e){Kt()})),e.on("crash_history",(function(e){se(e);for(var t=[],a=e,n=0,c=0,l=0;l<e.length;l++)a[l]>=2?(n+=1,c=0,t.push(n)):(c+=1,n=0,t.push(c));Lt(t.reverse())})),e.on("get_round_id_list",(function(e){me(e.reverse())})),e.on("start_betting_phase",(function(e){Ve(Date.now()),J("Starting..."),he(!0),Ue(null),Ne(!0),Xt(),Gt.current=[],Ht.current=[]})),e.on("receive_message_for_chat_box",(function(e){Vt()})),e.on("receive_live_betting_table",(function(e){Ue(e),e=JSON.parse(e),Mt(Array(10-e.length).fill(2))})),function(){e.disconnect()}}),[]),Object(n.useEffect)((function(){Ce&&(_e&&qt(),Ne(!1),Se(!1))}),[Ce]),Object(n.useEffect)((function(){ae&&I<=H&&(B.balance+=N*I,zt(),ne(!1))}),[H]),Object(n.useEffect)((function(){var e=null;return W&&(J("1.00"),e=setInterval((function(){var e=(Date.now()-Qe)/1e3;jt(e),J((1.0024*Math.pow(1.0718,e)).toFixed(2)),Gt.current.length<1&&(Gt.current=Gt.current.concat([1]),Ht.current=Ht.current.concat([0])),Jt.current%5==0&&(Gt.current=Gt.current.concat([(1.0024*Math.pow(1.0718,e)).toFixed(2)]),Ht.current=Ht.current.concat([e])),Jt.current+=1}),1)),function(){clearInterval(e)}}),[W]),Object(n.useEffect)((function(){var e=null;return ge&&(e=setInterval((function(){var e=(5-(Date.now()-Qe)/1e3).toFixed(2);ve(e),e<0&&he(!1)}),10)),function(){clearInterval(e),ve("Starting...")}}),[ge]),Object(n.useEffect)((function(){}),[_e]),Object(n.useEffect)((function(){localStorage.setItem("local_storage_wager",N),localStorage.setItem("local_storage_multiplier",I)}),[N,I]),Object(n.useEffect)((function(){Yt(),Kt(),Et(!0),Tt(Date.now());var e=setTimeout((function(){return Vt()}),1e3),t=setTimeout((function(){return Xt()}),1e3),a=setTimeout((function(){return Zt()}),1e3),n=setTimeout((function(){return ea()}),1e3);return function(){clearTimeout(e),clearTimeout(t),clearTimeout(a),clearTimeout(n)}}),[]),Object(n.useEffect)((function(){}),[Re]);var $t="https://crash-be-final-repo-production.up.railway.app",Kt=function(){i()({method:"GET",withCredentials:!0,url:$t+"/user"}).then((function(e){P(e.data)}))},Wt=function(){i.a.get($t+"/retrieve",{withCredentials:!0}).then((function(e){U(e.data)}))},qt=function(){i()({method:"POST",data:{bet_amount:N,payout_multiplier:I},withCredentials:!0,url:$t+"/send_bet"}).then((function(e){ne(!0),B.balance-=N,P(B)})).catch((function(e){e.response}))},Yt=function(){i.a.get($t+"/get_game_status",{withCredentials:!0}).then((function(e){"betting_phase"===e.data.phase?(Ve(e.data.info),he(!0)):"game_phase"===e.data.phase&&(Ve(e.data.info),q(!0))}))},zt=function(){i.a.get($t+"/auto_cashout_early",{withCredentials:!0}).then((function(e){P(e.data),ne(!1)}))},Qt=function(){Se(!_e)},Vt=function(){i.a.get($t+"/get_chat_history",{withCredentials:!0}).then((function(e){Be(e.data)}))},Xt=function(){i.a.get($t+"/retrieve_active_bettors_list",{withCredentials:!0}).then((function(e){}))},Zt=function(){i.a.get($t+"/retrieve_bet_history",{withCredentials:!0}).then((function(e){}))},ea=function(){i.a.get($t+"/retrieve_round_id_list",{withCredentials:!0}).then((function(e){console.log(e)}))},ta=function(e){"Enter"===e.key&&(ge?qt():Qt())},aa=function(){b.c.success("Login Successful",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"dark",transition:b.a})},na=function(){b.c.info("Account Created and Logged In",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"dark",transition:b.a})},ca=function(){b.c.success("You have been logged out",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"dark",transition:b.a})};Date.now(),Object(n.useEffect)((function(){var e=setInterval((function(){Et(!1),la()}),1);return function(){clearInterval(e),Et(!0)}}),[ft]);var la=function(){it({labels:Ht.current,datasets:[{data:Gt.current,backgroundColor:"rgba(75,192,192,0.2)",borderColor:"rgba(75,192,192,1)",color:"rgba(255, 255, 255,1)",pointRadius:0,borderDash:[35,5],lineTension:.1}]}),bt({events:[],maintainAspectRatio:!1,elements:{line:{tension:.1}},scales:{yAxes:{type:"linear",title:{display:!1,text:"value"},min:1,max:H>2?H:2,ticks:{color:"rgba(255, 255, 255,1)",maxTicksLimit:5,callback:function(e,t,a){if(e%.5==0)return parseFloat(e).toFixed(2)}},grid:{display:!0,color:"white"}},xAxes:{type:"linear",title:{display:!1,text:"value"},max:Ot>2?Ot:2,ticks:{color:"rgba(255, 255, 255,1)",maxTicksLimit:5,callback:function(e,t,a){if(Ot<10){if(e%1==0)return e}else if(e%10==0)return e}},grid:{display:!0,color:"white"}}},plugins:{legend:{display:!1}},animation:{x:{type:"number",easing:"linear",duration:0,from:5,delay:0},y:{type:"number",easing:"linear",duration:0,from:5,delay:0},loop:!0}})};return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(b.b,null),c.a.createElement(d,{trigger:et,setTrigger:tt},c.a.createElement("div",{className:"login-modal"},c.a.createElement("div",null,We?c.a.createElement("p",{class:"err-msg"},We):"",c.a.createElement("h1",null,"Login")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Username: "),c.a.createElement("input",{placeholder:"Enter your username",onChange:function(e){return O(e.target.value)}})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Password:"),c.a.createElement("input",{placeholder:"Enter your password",onChange:function(e){return w(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{className:"modal-submit",onClick:function(){i()({method:"POST",data:{username:v,password:S},withCredentials:!0,url:$t+"/login"}).then((function(e){qe(e.data),Kt(),"Login Successful"===e.data&&(tt(!1),aa())}))}},"Submit"),c.a.createElement("br",null))))),c.a.createElement("div",null,c.a.createElement(d,{trigger:ct,setTrigger:lt},c.a.createElement("div",{className:"login-modal"},c.a.createElement("div",null,We?c.a.createElement("p",{class:"err-msg"},We):"",c.a.createElement("h1",null,"Register")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Username: "),c.a.createElement("input",{placeholder:"Enter your username",onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Password:"),c.a.createElement("input",{placeholder:"Enter your password",onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{className:"modal-submit",onClick:function(){i()({method:"POST",data:{username:a,password:g},withCredentials:!0,url:$t+"/register"}).then((function(e){qe(e.data),"Username already exists"!=e.data&&i()({method:"POST",data:{username:a,password:g},withCredentials:!0,url:$t+"/login"}).then((function(e){qe(e.data),Kt(),"Login Successful"===e.data&&(lt(!1),na())}))}))}},"Submit"),c.a.createElement("br",null)),""!==a&&a.length<3?c.a.createElement("span",{className:"register_errors"},"Username must have at least 3 characters"):""," ",c.a.createElement("br",null),""!==g&&g.length<3?c.a.createElement("span",{className:"register_errors"},"Password must have at least 3 characters"):""),c.a.createElement("div",null))),c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"logo"},"Crash Gambling Simulator"),c.a.createElement("ul",{className:"nav"},B&&"No User Authentication"!==B?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,"User: ",B.username),c.a.createElement("li",null,"Balance: ",B.balance.toFixed(2)),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(){i.a.get($t+"/logout",{withCredentials:!0}).then((function(e){Kt(),ca()}))}},"Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(){tt(!0),qe("")}},"Login")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:function(){lt(!0),qe("")}},"Register")))))),c.a.createElement("div",{className:"grid-container-main"},c.a.createElement("div",{className:"grid-elements"},c.a.createElement("div",{className:"effects-box"},c.a.createElement("div",{className:"basically-the-graph",style:{height:"90%",width:"90%",position:"absolute",top:"12%"}},ot?c.a.createElement(h,{chartData:ot,chartOptions:dt}):""),c.a.createElement("div",{style:{position:"absolute",zIndex:12,top:"40%"}},ge?c.a.createElement("h1",null,pe):c.a.createElement("h1",{className:" ".concat(W||"Starting..."===H||"CONNECTING..."===H?"":"multipler_crash_value_message")},"Starting..."!==H?H+"x":"Starting...")))),c.a.createElement("div",{className:"grid-elements"},B&&"No User Authentication"!==B?c.a.createElement("div",null,c.a.createElement("h1",{className:"makeshift-input-group"}," Bet Amount"),c.a.createElement("input",{className:"input_box",placeholder:"Type Your Bet Amount",onChange:function(e){return function(e){e.match(/^(\d*\.{0,1}\d{0,2}$)/);(""===e||/^[0-9\b]+$/.test(e))&&k(e),e>B.balance?Je("Bet greater than balance"):Je("")}(e.target.value)},value:N,disabled:ae?"disabled":null,onKeyDown:ta}),c.a.createElement("br",null),c.a.createElement("h1",{className:"makeshift-input-group"}," Auto Cashout Multiplier"),c.a.createElement("input",{className:"input_box",placeholder:"Payout Multiplier",onChange:function(e){var t;(t=e.target.value).match(/^(\d*\.{0,1}\d{0,2}$)/)&&A(t)},onKeyDown:ta,value:I,disabled:ae?"disabled":null}),c.a.createElement("br",null),ge&&!ae?c.a.createElement("button",{class:"css-button css-button-3d css-button-3d--grey",onClick:qt},"Send Bet"):c.a.createElement(c.a.Fragment,null,ae?c.a.createElement("div",null,c.a.createElement("button",{class:"css-button css-button-3d css-button-3d--grey",onClick:function(){i.a.get($t+"/manual_cashout_early",{withCredentials:!0}).then((function(e){P(e.data),ne(!1)}))}}," ",ae&&H>1?c.a.createElement("span",null,"Cashout at ",(H*N).toFixed(2)):"Starting...")):c.a.createElement("div",null,c.a.createElement("button",{class:"css-button css-button-3d css-button-3d--grey ".concat(_e?"bet_for_next_round_active":""),onClick:Qt},_e?"Cancel Bet":"Bet Next round"," ")))):c.a.createElement("h1",null," ",c.a.createElement("a",{href:"#",onClick:function(){tt(!0),qe("")},className:"quickLoginOrRegister"}," Login "),"or",c.a.createElement("a",{href:"#",onClick:function(){lt(!0),qe("")},className:"quickLoginOrRegister"}," Register "),"to place a bet"),c.a.createElement("div",{style:{color:"red",fontWeight:600,marginTop:"5px"}},He)),c.a.createElement("div",{className:"grid-elements"},"Chat ",c.a.createElement("br",null),c.a.createElement("div",{className:"chat-box-wrapper"},c.a.createElement("div",{className:"chat-box-rectangle"},Le?c.a.createElement(c.a.Fragment,null,Le.map((function(e){return c.a.createElement("div",{className:"individual-chat-message",key:Object(m.v4)()},c.a.createElement("span",{className:"message_top"},e.the_username," "),c.a.createElement("span",{className:"message_top_time"},e.the_time," -\xa0",e.the_date," ")," ",c.a.createElement("br",null),c.a.createElement("span",{className:"message_bottom"},e.message_body))}))):c.a.createElement("h1",null,"Loading Chat history "))),B&&"No User Authentication"!==B?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"input_box_for_chat",placeholder:"Send A Message",onChange:function(e){return Ie(e.target.value)},value:Te,onKeyDown:function(e){"Enter"===e.key&&i()({method:"POST",data:{message_to_textbox:Te},withCredentials:!0,url:$t+"/send_message_to_chatbox"}).then((function(e){Ie("")}))}}),c.a.createElement("br",null)):c.a.createElement("h3",null,"Log in to send a chat message")),c.a.createElement("div",{className:"grid-elements"},"Crash History",c.a.createElement("div",{class:"container-crash-history"},c.a.createElement("ul",{class:"history-table"},c.a.createElement("li",{class:"history-table-header"},c.a.createElement("div",{class:"col col-1"},"Game Id"),c.a.createElement("div",{class:"col col-2"},"Crash At"),c.a.createElement("div",{class:"col col-3"},"Streak")),re.slice(0).reverse().map((function(e,t,a){return c.a.createElement("div",{className:"row-history-wrapper",key:Object(m.v4)()},c.a.createElement("li",{class:e>=2?"table-row-blue":"table-row-red"},c.a.createElement("div",{class:"col col-1"},ue[t]," "),c.a.createElement("div",{class:"col col-2"},e,"x"),c.a.createElement("div",{class:"col col-3"},Ft[t])))}))))),c.a.createElement("div",{className:"grid-elements"},"Live Bets Tracker",c.a.createElement("ul",{class:"active-bet-table"},c.a.createElement("li",{class:"active-bet-table-header"},c.a.createElement("div",{class:"col col-1"},"User"),c.a.createElement("div",{class:"col col-2"},"Bet Amount"),c.a.createElement("div",{class:"col col-3"},"Cashout Multiplier"),c.a.createElement("div",{class:"col col-4"},"Profit"))),c.a.createElement("div",null,Re&&"[]"!==Re?c.a.createElement(c.a.Fragment,null,JSON.parse(Re).map((function(e){return c.a.createElement("div",{class:"container-crash-history"},c.a.createElement("ul",{class:"active-bet-table"},c.a.createElement("div",{className:"row-bet-wrapper",key:Object(m.v4)()},c.a.createElement("li",{class:e.cashout_multiplier?"table-row-green":"table-row-blue"},c.a.createElement("div",{class:"col col-1"},e.the_username," "),c.a.createElement("div",{class:"col col-2"},e.bet_amount),c.a.createElement("div",{class:"col col-3"},e.cashout_multiplier?e.cashout_multiplier:"--"),c.a.createElement("div",{class:"col col-4"},e.profit?e.profit.toFixed(2):"--")," "))))}))):"",c.a.createElement("div",{class:"container-crash-history"},c.a.createElement("ul",{class:"active-bet-table"},Ut.map((function(e,t,a){return c.a.createElement("div",{className:"row-bet-wrapper",key:Object(m.v4)()},c.a.createElement("li",{class:"table-row-blue"},c.a.createElement("div",{class:"col col-1"},"-- "),c.a.createElement("div",{class:"col col-2"},"--"),c.a.createElement("div",{class:"col col-3"},"--"),c.a.createElement("div",{class:"col col-4"},"--")))})))),c.a.createElement("div",null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.37dbecb6.chunk.js.map