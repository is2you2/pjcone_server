"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6524],{6524:(O,p,o)=>{o.r(p),o.d(p,{InstantCallPageModule:()=>Q});var I=o(177),m=o(4341),c=o(5374),_=o(9858),b=o(467),f=o(617),v=o(5402),S=o(8326),t=o(3953),R=o(482),P=o(4234),x=o(4020),T=o(345),w=o(4237),W=o(9900),G=o(3656),A=o(7476);const E=["InstantCallServer"];function y(a,s){1&a&&t.nrm(0,"div",7)}function j(a,s){if(1&a&&(t.j41(0,"ion-select-option",14),t.EFF(1),t.k0s()),2&a){const n=s.$implicit;t.Y8G("value",n),t.R7$(),t.JRh(n.info.name)}}function N(a,s){if(1&a){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-select",11,0),t.bIt("ionChange",function(e){t.eBV(n);const i=t.XpG(2);return t.Njj(i.SelectAddressTarget(e))}),t.j41(3,"ion-select-option",12),t.EFF(4),t.k0s(),t.DNE(5,j,2,2,"ion-select-option",13),t.k0s()()}if(2&a){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.AddGroup.SelectServer),t.R7$(3),t.JRh(n.lang.text.voidDraw.InternalConn),t.R7$(),t.Y8G("ngForOf",n.ServerList)}}function k(a,s){if(1&a){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",15),t.mxI("ngModelChange",function(e){t.eBV(n);const i=t.XpG(2);return t.DH7(i.UserInputCustomAddress,e)||(i.UserInputCustomAddress=e),t.Njj(e)}),t.k0s(),t.j41(2,"ion-icon",16),t.bIt("click",function(){t.eBV(n);const e=t.XpG(2);return t.Njj(e.global.open_custom_site(e.UserInputCustomAddress))}),t.k0s()()}if(2&a){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.voidDraw.InputAddress),t.R50("ngModel",n.UserInputCustomAddress)}}function $(a,s){if(1&a){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",17),t.mxI("ngModelChange",function(e){t.eBV(n);const i=t.XpG(2);return t.DH7(i.Port,e)||(i.Port=e),t.Njj(e)}),t.k0s()()}if(2&a){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.GroupServer.WebRTCPort),t.R50("ngModel",n.Port),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (3478)")}}function B(a,s){if(1&a){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",17),t.mxI("ngModelChange",function(e){t.eBV(n);const i=t.XpG(2);return t.DH7(i.signalPort,e)||(i.signalPort=e),t.Njj(e)}),t.k0s()()}if(2&a){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.GroupServer.SquarePort),t.R50("ngModel",n.signalPort),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (12013)")}}function M(a,s){if(1&a){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",17),t.mxI("ngModelChange",function(e){t.eBV(n);const i=t.XpG(2);return t.DH7(i.Username,e)||(i.Username=e),t.Njj(e)}),t.k0s()()}if(2&a){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.WebRTCDevManager.Username),t.R50("ngModel",n.Username),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (username)")}}function U(a,s){if(1&a){const n=t.RV6();t.j41(0,"ion-item")(1,"ion-input",17),t.mxI("ngModelChange",function(e){t.eBV(n);const i=t.XpG(2);return t.DH7(i.Password,e)||(i.Password=e),t.Njj(e)}),t.k0s()()}if(2&a){const n=t.XpG(2);t.R7$(),t.Y8G("label",n.lang.text.WebRTCDevManager.Credential),t.R50("ngModel",n.Password),t.Y8G("placeholder",n.lang.text.Settings.joinDedi_placeholder+" (password)")}}function X(a,s){if(1&a){const n=t.RV6();t.j41(0,"div",8),t.DNE(1,N,6,3,"ion-item",6)(2,k,3,2,"ion-item",6)(3,$,2,3,"ion-item",6)(4,B,2,3,"ion-item",6)(5,M,2,3,"ion-item",6)(6,U,2,3,"ion-item",6),t.j41(7,"ion-item",9),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.LinkToServer())}),t.j41(8,"ion-label",10),t.EFF(9),t.k0s()()()}if(2&a){const n=t.XpG();t.R7$(),t.Y8G("ngIf",n.ServerList.length),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(),t.Y8G("ngIf",n.NeedInputCustomAddress),t.R7$(3),t.JRh(n.lang.text.voidDraw.ConnectToAddress)}}function D(a,s){if(1&a){const n=t.RV6();t.j41(0,"img",19),t.bIt("click",function(){t.eBV(n);const e=t.XpG(2);return t.Njj(e.copy_qr_address())}),t.k0s()}if(2&a){const n=t.XpG(2);t.Y8G("src",n.QRCodeSRC,t.B4B)}}function Y(a,s){if(1&a){const n=t.RV6();t.j41(0,"div"),t.DNE(1,D,1,1,"img",18),t.j41(2,"ion-item",9),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.copy_qr_address())}),t.j41(3,"ion-label",10),t.EFF(4),t.k0s()()()}if(2&a){const n=t.XpG();t.R7$(),t.Y8G("ngIf",n.QRCodeSRC),t.R7$(3),t.JRh(n.QRCodeAsString)}}function V(a,s){if(1&a&&(t.j41(0,"div")(1,"div",20),t.nrm(2,"ion-icon",21),t.j41(3,"div")(4,"ion-label",22),t.EFF(5),t.k0s()()()()),2&a){const n=t.XpG();t.R7$(5),t.JRh(n.webrtc.StatusText||n.lang.text.InstantCall.Waiting)}}const F=[{path:"",component:(()=>{var a;class s{constructor(l,e,i,C,d,g,r,h,u,z){this.global=l,this.lang=e,this.webrtc=i,this.title=C,this.nakama=d,this.router=g,this.route=r,this.p5toast=h,this.navCtrl=u,this.floatbutton=z,this.UserInputCustomAddress="",this.NeedInputCustomAddress=!1,this.AlreadyExistServer=!1,this.isCustomServer=!1,this.PageOut=!1,this.CallClosed=!1}ngOnInit(){this.ServerList=this.nakama.get_all_online_server(),setTimeout(()=>{this.InstantCallServer?(this.InstantCallServer.value=this.ServerList[0]||"local",this.SelectAddressTarget({detail:{value:this.InstantCallServer.value}})):this.NeedInputCustomAddress=!0},0),this.route.queryParams.subscribe(l=>{const e=this.router.getCurrentNavigation().extras.state;e&&(this.UserInputCustomAddress=e.address,this.ChannelId=e.channel,this.Port=e.port,this.signalPort=e.square_port,this.Username=e.username,this.Password=e.password,this.LinkToServer(!0))}),this.webrtc.StatusText||(this.webrtc.StatusText=this.lang.text.InstantCall.Waiting)}SelectAddressTarget(l){if("local"===(this.title.setTitle(`Project: ${this.lang.text.InstantCall.Title}`),this.Port=void 0,this.signalPort=void 0,l.detail.value))this.UserInputCustomAddress="",this.NeedInputCustomAddress=!0;else{let e=l.detail.value.info;this.UserInputCustomAddress=`${e.useSSL?"wss":"ws"}://${e.address}`,this.Port=e.webrtc_port,12013!=e.square_port&&(this.signalPort=e.square_port),this.NeedInputCustomAddress=!1}}LinkToServer(l=!1){var e=this;if(v.R.requestAudioRecordingPermission(),l&&!this.ChannelId)return this.p5toast.show({text:this.lang.text.InstantCall.MissingInfo}),void this.navCtrl.pop();let g,i=this.UserInputCustomAddress.split("://"),C=i.pop(),d=i.pop();d||(d=this.global.checkProtocolFromAddress(C)?"wss":"ws"),this.isCustomServer=l||!this.InstantCallServer||"local"==this.InstantCallServer.value,this.isCustomServer&&this.nakama.SaveWebRTCServer({urls:[`stun:${C}:${this.Port||("wss"==d?5349:3478)}`,`turn:${C}:${this.Port||("wss"==d?5349:3478)}`],username:this.Username||"username",credential:this.Password||"password"}).then(r=>this.AlreadyExistServer=r),this.global.InstantCallWSClient=new WebSocket(`${d}://${C}:${this.signalPort||12013}`),this.global.InstantCallWSClient.onopen=(0,b.A)(function*(){e.global.WaitingConnect=!0,e.p5toast.show({text:e.lang.text.InstantCall.Waiting}),e.ChannelId?(e.global.InstantCallSend(JSON.stringify({type:"join",channel:e.ChannelId})),yield new Promise(r=>setTimeout(r,e.global.WebsocketRetryTerm)),e.webrtc.StatusText=e.lang.text.InstantCall.Connecting,e.global.PeerConnected=!0,e.webrtc.initialize("audio").then(()=>{e.webrtc.HangUpCallBack=()=>{e.global.InstantCallWSClient&&e.global.InstantCallWSClient.close(1e3,"hangup_webrtc")},e.ShowWaiting(),e.webrtc.CreateOffer(),e.webrtc.StatusText=e.lang.text.InstantCall.Connecting,e.global.PeerConnected=!0,e.global.InstantCallSend(JSON.stringify({type:"init_req"}))})):e.global.InstantCallSend(JSON.stringify({type:"init",max:2}))}),this.global.InstantCallWSClient.onmessage=r=>{let h=JSON.parse(r.data);if(void 0===g)g=h.uid;else if(g==h.uid)return;switch(h.type){case"leave":this.global.InstantCallWSClient.close(1e3,"leave_pair");break;case"init_id":this.global.InstantCallSend(JSON.stringify({type:"join",channel:h.id})),this.ChannelId=h.id,this.global.GetHeaderAddress().then(u=>{this.QRCodeAsString=`${u}?instc=${this.UserInputCustomAddress},${this.ChannelId},${this.Port||""},${this.Username||""},${this.Password||""},${this.signalPort||""}`,this.QRCodeSRC=this.global.readasQRCodeFromString(this.QRCodeAsString)});break;case"block":console.error("\uc774\ubbf8 \uc5f0\uacb0\ub41c \ud1b5\ud654\uac00 \uc788\uc74c"),this.global.InstantCallWSClient.close(1e3,"block");break;case"init_req":this.webrtc.StatusText=this.lang.text.InstantCall.Connecting,this.global.PeerConnected=!0,this.webrtc.initialize("audio").then((0,b.A)(function*(){e.webrtc.HangUpCallBack=()=>{e.global.InstantCallWSClient&&e.global.InstantCallWSClient.close(1e3,"hangup_callback")},e.ShowWaiting(),e.webrtc.CreateOffer(),yield new Promise(u=>setTimeout(u,e.global.WebsocketRetryTerm)),e.global.InstantCallSend(JSON.stringify({type:"socket_react",channel:e.ChannelId,act:"WEBRTC_INIT_REQ_SIGNAL"}))}));break;case"socket_react":switch(h.act){case"WEBRTC_REPLY_INIT_SIGNAL":this.webrtc.WEBRTC_REPLY_INIT_SIGNAL(h.data_str,{client:this.global.InstantCallWSClient,channel:this.ChannelId}),"EOL"==h.data_str&&this.webrtc.CreateAnswer({client:this.global.InstantCallWSClient,channel:this.ChannelId});break;case"WEBRTC_REPLY_INIT_SIGNAL_PART":this.webrtc.WEBRTC_REPLY_INIT_SIGNAL_PART({client:this.global.InstantCallWSClient,channel:this.ChannelId});break;case"WEBRTC_ICE_CANDIDATES":this.webrtc.WEBRTC_ICE_CANDIDATES(h.data_str,{client:this.global.InstantCallWSClient,channel:this.ChannelId}),this.global.InstantCallSend(JSON.stringify({type:"init_end",channel:this.ChannelId})),this.global.InitEnd=!0,this.webrtc.StatusText=this.lang.text.InstantCall.Connected;break;case"WEBRTC_INIT_REQ_SIGNAL":this.webrtc.WEBRTC_INIT_REQ_SIGNAL({client:this.global.InstantCallWSClient,channel:this.ChannelId});break;case"WEBRTC_RECEIVE_ANSWER":this.webrtc.WEBRTC_RECEIVE_ANSWER(h.data_str,{client:this.global.InstantCallWSClient,channel:this.ChannelId})}break;case"init_end":this.global.InitEnd=!0,this.webrtc.StatusText=this.lang.text.InstantCall.Connected}},this.global.InstantCallWSClient.onerror=r=>{console.error("\uc989\uc11d \ud1b5\ud654 \uc6f9\uc18c\ucf13 \uc624\ub958: ",r),this.global.InstantCallWSClient.close(1e3,"error")},this.global.InstantCallWSClient.onclose=()=>{this.p5toast.show({text:this.lang.text.InstantCall.CallEnd}),this.floatbutton.RemoveFloatButton("instant-call"),this.global.WaitingConnect=!1,this.global.InitEnd=!1,this.global.PeerConnected=!1,this.global.InstantCallWSClient.onopen=null,this.global.InstantCallWSClient.onclose=null,this.global.InstantCallWSClient.onmessage=null,this.global.InstantCallWSClient.onerror=null,this.global.InstantCallWSClient=null,this.webrtc.close_webrtc(),this.CallClosed=!0,this.PageOut||this.navCtrl.pop()}}copy_qr_address(l=this.QRCodeAsString){this.global.WriteValueToClipboard("text/plain",l)}ShowWaiting(){this.QRCodeSRC=void 0,this.QRCodeAsString="",!this.p5canvas&&(this.p5canvas=new S(l=>{let e=document.getElementById("InstantCallCanvasDiv"),i=1;l.setup=()=>{l.pixelDensity(1),l.createCanvas(e.clientWidth,e.clientHeight).parent(e),l.noStroke()};class C{constructor(){this.color={r:0,g:0,b:0},this.size=1,this.targetSize=100,this.opacity=200,this.pos=l.createVector(0,0),this.dir=l.createVector(l.random(-1.4,1.4),l.random(-2,-4)),this.color.r=l.random(0,255),this.color.g=l.random(0,255),this.color.b=l.random(0,255),this.targetSize=l.random(80,150)}display(){this.size<this.targetSize&&(this.size+=6),this.size>this.targetSize&&(this.size=this.targetSize),l.push(),l.fill(this.color.r,this.color.g,this.color.b,this.opacity),l.circle(this.pos.x,this.pos.y,this.size*i),l.pop(),this.pos.add(this.dir),this.dir.y+=.04,this.opacity-=1}}let d=[],g=!0;l.draw=()=>{g&&(d.push(new C),g=!1,setTimeout(()=>{g=!0},500)),l.clear(),l.push(),l.translate(l.width/2,l.height/2);for(let r=d.length-1;r>=0;r--)d[r].display(),d[r].opacity<=0&&d.splice(r,1);l.pop(),this.global.InitEnd&&(i-=.02),i<=0&&l.remove()},l.windowResized=()=>{l.resizeCanvas(e.clientWidth,e.clientHeight)}}))}ionViewWillEnter(){this.floatbutton.RemoveFloatButton("instant-call"),this.PageOut=!1,this.p5canvas&&this.p5canvas.windowResized(),this.global.StoreShortCutAct("instant-call"),this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()},this.CallClosed&&this.navCtrl.pop()}ionViewWillLeave(){this.title.setTitle("Project: Cone"),this.PageOut=!0,(this.global.WaitingConnect||this.global.InitEnd)&&this.floatbutton.AddFloatButton("instant-call","call-outline").mouseClicked(()=>{this.navCtrl.navigateForward("portal/arcade/instant-call",{animation:f.NC})}),delete this.global.p5KeyShortCut.Escape,this.global.RestoreShortCutAct("instant-call")}ngOnDestroy(){this.p5canvas&&this.p5canvas.remove(),this.isCustomServer&&!this.AlreadyExistServer&&this.nakama.RemoveWebRTCServer(this.UserInputCustomAddress.split("://").pop()),!this.global.InitEnd&&!this.global.PeerConnected&&this.global.InstantCallWSClient&&this.global.InstantCallWSClient.close(1e3),this.route.queryParams.unsubscribe()}}return(a=s).\u0275fac=function(l){return new(l||a)(t.rXU(R.z3),t.rXU(P.y),t.rXU(x.j),t.rXU(T.hE),t.rXU(w.X),t.rXU(_.Ix),t.rXU(_.nX),t.rXU(W.G),t.rXU(G.q9),t.rXU(A.u))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-instant-call"]],viewQuery:function(l,e){if(1&l&&t.GBs(E,5),2&l){let i;t.mGM(i=t.lsd())&&(e.InstantCallServer=i.first)}},decls:11,vars:5,consts:[["InstantCallServer",""],[1,"ion-no-border"],["slot","start"],["defaultHref","portal/arcade"],["id","InstantCallCanvasDiv","style","position: absolute; width: 100%; height: 100%; overflow: hidden; pointer-events: none;",4,"ngIf"],["style","flex: 0 1 auto;",4,"ngIf"],[4,"ngIf"],["id","InstantCallCanvasDiv",2,"position","absolute","width","100%","height","100%","overflow","hidden","pointer-events","none"],[2,"flex","0 1 auto"],["button","",3,"click"],[1,"ion-text-center"],["value","local",2,"pointer-events","none",3,"ionChange","label"],["value","local"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","(wss://)0.0.0.0",1,"ion-text-right",3,"ngModelChange","label","ngModel"],["slot","end","name","open-outline",3,"click"],[1,"ion-text-right",3,"ngModelChange","label","ngModel","placeholder"],["style","width: 100%; height: auto; cursor: copy;","alt","QRCode",3,"src","click",4,"ngIf"],["alt","QRCode",2,"width","100%","height","auto","cursor","copy",3,"click","src"],[1,"disconnect_info"],["color","medium","name","call-outline",2,"width","60px","height","60px"],["color","medium"]],template:function(l,e){1&l&&(t.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s(),t.j41(4,"ion-buttons",2),t.nrm(5,"ion-back-button",3),t.k0s()()(),t.j41(6,"ion-content"),t.DNE(7,y,1,0,"div",4)(8,X,10,7,"div",5)(9,Y,5,2,"div",6)(10,V,6,1,"div",6),t.k0s()),2&l&&(t.R7$(3),t.JRh(e.lang.text.InstantCall.Title),t.R7$(4),t.Y8G("ngIf",e.global.WaitingConnect),t.R7$(),t.Y8G("ngIf",!e.global.WaitingConnect),t.R7$(),t.Y8G("ngIf",e.QRCodeAsString&&e.global.WaitingConnect),t.R7$(),t.Y8G("ngIf",!e.QRCodeAsString&&(e.global.WaitingConnect||e.global.InitEnd)))},dependencies:[I.Sq,I.bT,m.BC,m.vS,c.QW,c.W9,c.eU,c.iq,c.$w,c.uz,c.he,c.Nm,c.Ip,c.BC,c.ai,c.Je,c.Gw,c.el]}),s})()}];let L=(()=>{var a;class s{}return(a=s).\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[_.iI.forChild(F),_.iI]}),s})(),Q=(()=>{var a;class s{}return(a=s).\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[I.MD,m.YN,c.bv,L]}),s})()}}]);