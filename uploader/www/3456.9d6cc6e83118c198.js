"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3456],{3456:(B,f,l)=>{l.r(f),l.d(f,{ServerDetailPageModule:()=>y});var h=l(177),u=l(4341),d=l(5374),g=l(9858),c=l(467),e=l(3953),S=l(4234),v=l(9900),C=l(755),D=l(3307),b=l(4237),j=l(482),R=l(3656);const I=["ServerDetailuseSSL"];function M(r,_){if(1&r){const s=e.RV6();e.j41(0,"img",26),e.bIt("click",function(){e.eBV(s);const t=e.XpG();return e.Njj(t.copy_startup_address())}),e.k0s()}if(2&r){const s=e.XpG();e.Y8G("src",s.QRCodeSRC,e.B4B)}}function k(r,_){1&r&&(e.j41(0,"div",27),e.EFF(1,"Ctrl + Enter"),e.k0s())}const P=[{path:"",component:(()=>{var r;class _{constructor(i,t,a,o,n,p,m,T,N){this.lang=i,this.p5toast=t,this.indexed=a,this.p5loading=o,this.nakama=n,this.global=p,this.route=m,this.router=T,this.navCtrl=N,this.dedicated_info={},this.index=0}ngOnDestroy(){this.global.RestoreShortCutAct("server-detail"),this.route.queryParams.unsubscribe(),this.global.PageDismissAct["quick-server-detail"]&&this.global.PageDismissAct["quick-server-detail"]()}ngOnInit(){this.route.queryParams.subscribe(i=>{const t=this.router.getCurrentNavigation().extras.state;this.dedicated_info=t.data,this.GenerateQRCode()})}GenerateQRCode(){var i=this;return(0,c.A)(function*(){let t=yield i.nakama.GenerateQRCode(i.dedicated_info);i.QRCodeSRC=i.global.readasQRCodeFromString(t)})()}open_custom_check(){this.global.open_custom_site((this.dedicated_info.useSSL?"https://":"http://")+this.dedicated_info.address,this.dedicated_info.cdn_port)}reGenerateWebRTCInfo(){var i=this;return(0,c.A)(function*(){yield i.nakama.AutoGenWebRTCInfo(i.dedicated_info),i.p5loading.toast(i.lang.text.ServerDetail.RegenWebRTCDone)})()}ionViewDidEnter(){this.ServerDetailuseSSL.checked=this.dedicated_info.useSSL,this.global.StoreShortCutAct("server-detail"),this.global.p5KeyShortCut.EnterAct=i=>{i.ctrlKey&&this.apply_changed_info()},this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()}}copy_startup_address(){this.global.GetHeaderAddress().then(i=>{let t=`${i}?server=${this.dedicated_info.useSSL?"https":"http"}://${this.dedicated_info.address||""}${this.dedicated_info.nakama_port?`:${this.dedicated_info.nakama_port}`:""},${this.dedicated_info.key||""},${this.dedicated_info.cdn_port||""},${this.dedicated_info.apache_port||""},${this.dedicated_info.square_port||""},${this.dedicated_info.webrtc_port||""}`.replace(" ","%20");this.global.WriteValueToClipboard("text/plain",t)})}apply_changed_info(){var i=this;return(0,c.A)(function*(){if(!i.dedicated_info.name)return void i.p5toast.show({text:i.lang.text.GroupServer.NeedSetDIsplayName});i.dedicated_info.name=i.dedicated_info.name,i.dedicated_info.target=i.dedicated_info.target||i.dedicated_info.name,i.dedicated_info.address=i.dedicated_info.address||"192.168.0.1",i.dedicated_info.nakama_port=i.dedicated_info.nakama_port,i.dedicated_info.cdn_port=i.dedicated_info.cdn_port,i.dedicated_info.apache_port=i.dedicated_info.apache_port,i.dedicated_info.square_port=i.dedicated_info.square_port,i.dedicated_info.webrtc_port=i.dedicated_info.webrtc_port,i.dedicated_info.useSSL=i.ServerDetailuseSSL.checked||!1,i.dedicated_info.isOfficial=i.dedicated_info.isOfficial||"unofficial",i.dedicated_info.key=i.dedicated_info.key||"defaultkey";let t=(new Date).getTime().toString();t+=`,${i.dedicated_info.isOfficial}`,t+=`,${i.dedicated_info.name}`,t+=`,${i.dedicated_info.target}`,t+=`,${i.dedicated_info.address}`,t+=`,${i.dedicated_info.nakama_port||""}`,t+=`,${i.dedicated_info.useSSL||""}`,t+=`,${i.dedicated_info.cdn_port||""}`,t+=`,${i.dedicated_info.apache_port||""}`,t+=`,${i.dedicated_info.square_port||""}`,t+=`,${i.dedicated_info.webrtc_port||""}`;let a=yield i.indexed.loadTextFromUserPath("servers/list_detail.csv"),o=[];a&&(o=a.split("\n"));for(let n=0,p=o.length;n<p;n++)if(o[n].split(",")[3]==i.dedicated_info.target){o.splice(n,1);break}o.push(t),yield i.indexed.saveTextFileToUserPath(o.join("\n"),"servers/list_detail.csv"),i.nakama.init_server(i.dedicated_info),i.nakama.servers[i.dedicated_info.isOfficial][i.dedicated_info.target].info={...i.dedicated_info};try{i.nakama.servers[i.dedicated_info.isOfficial][i.dedicated_info.target].socket.disconnect(!0)}catch{}i.global.PageDismissAct["quick-server-detail"]&&i.global.PageDismissAct["quick-server-detail"](),i.navCtrl.pop()})()}ionViewWillLeave(){delete this.global.p5KeyShortCut.Escape,delete this.global.p5KeyShortCut.EnterAct}}return(r=_).\u0275fac=function(i){return new(i||r)(e.rXU(S.y),e.rXU(v.G),e.rXU(C.n),e.rXU(D.f),e.rXU(b.X),e.rXU(j.z3),e.rXU(g.nX),e.rXU(g.Ix),e.rXU(R.q9))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-server-detail"]],viewQuery:function(i,t){if(1&i&&e.GBs(I,5),2&i){let a;e.mGM(a=e.lsd())&&(t.ServerDetailuseSSL=a.first)}},decls:52,vars:29,consts:[["ServerDetailInfo",""],["ServerDetailuseSSL",""],[1,"ion-no-border"],["slot","start"],["defaultHref",""],["style","width: 100%; height: auto; cursor: copy;","alt","Loading",3,"src","click",4,"ngIf"],["button",""],[1,"ion-text-right",3,"ionInput","ngModelChange","label","ngModel","placeholder"],["placeholder","192.168.0.1",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],["slot","end","name","open-outline",3,"click"],["value","Detail"],["slot","header"],["slot","content"],["button","",3,"click"],["color","warning",1,"ion-text-center"],["button","","disabled",""],["placeholder","defaultkey",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],["type","number","placeholder","7350",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],["type","number","placeholder","9001",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],["type","number","placeholder","9002",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],["type","number","placeholder","12013",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],["type","number","placeholder","3478",1,"ion-text-right",3,"ngModelChange","ionInput","label","ngModel"],[2,"pointer-events","none",3,"ngModelChange","ionChange","ngModel"],[2,"position","relative"],["class","shortcut_hint",4,"ngIf"],[1,"ion-text-center"],["alt","Loading",2,"width","100%","height","auto","cursor","copy",3,"click","src"],[1,"shortcut_hint"]],template:function(i,t){if(1&i){const a=e.RV6();e.j41(0,"ion-header",2)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",3),e.nrm(5,"ion-back-button",4),e.k0s()()(),e.j41(6,"ion-content")(7,"ion-item-divider")(8,"ion-label"),e.EFF(9),e.k0s()(),e.DNE(10,M,1,1,"img",5),e.j41(11,"ion-item-divider")(12,"ion-label"),e.EFF(13,"\uc11c\ubc84 \uc124\uc815"),e.k0s()(),e.j41(14,"ion-item",6)(15,"ion-input",7),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.name,n)||(t.dedicated_info.name=n),e.Njj(n)}),e.k0s()(),e.j41(16,"ion-item",6)(17,"ion-input",8),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.address,n)||(t.dedicated_info.address=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s(),e.j41(18,"ion-icon",9),e.bIt("click",function(){return e.eBV(a),e.Njj(t.open_custom_check())}),e.k0s()(),e.j41(19,"ion-accordion-group",null,0)(21,"ion-accordion",10)(22,"ion-item",11)(23,"ion-label"),e.EFF(24),e.k0s()(),e.j41(25,"div",12)(26,"ion-item",13),e.bIt("click",function(){return e.eBV(a),e.Njj(t.reGenerateWebRTCInfo())}),e.j41(27,"ion-label",14),e.EFF(28),e.k0s()(),e.j41(29,"ion-item",15)(30,"ion-input",7),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.target,n)||(t.dedicated_info.target=n),e.Njj(n)}),e.k0s()(),e.j41(31,"ion-item",6)(32,"ion-input",16),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.key,n)||(t.dedicated_info.key=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s()(),e.j41(33,"ion-item",6)(34,"ion-input",17),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.nakama_port,n)||(t.dedicated_info.nakama_port=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s()(),e.j41(35,"ion-item",6)(36,"ion-input",18),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.cdn_port,n)||(t.dedicated_info.cdn_port=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s()(),e.j41(37,"ion-item",6)(38,"ion-input",19),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.apache_port,n)||(t.dedicated_info.apache_port=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s()(),e.j41(39,"ion-item",6)(40,"ion-input",20),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.square_port,n)||(t.dedicated_info.square_port=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s()(),e.j41(41,"ion-item",6)(42,"ion-input",21),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.webrtc_port,n)||(t.dedicated_info.webrtc_port=n),e.Njj(n)}),e.bIt("ionInput",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.k0s()(),e.j41(43,"ion-item",13),e.bIt("click",function(){return e.eBV(a),e.Njj(t.dedicated_info.useSSL=!t.dedicated_info.useSSL)}),e.j41(44,"ion-toggle",22,1),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(t.dedicated_info.useSSL,n)||(t.dedicated_info.useSSL=n),e.Njj(n)}),e.bIt("ionChange",function(){return e.eBV(a),e.Njj(t.GenerateQRCode())}),e.EFF(46),e.k0s()()()()(),e.j41(47,"div",23),e.DNE(48,k,2,0,"div",24),e.j41(49,"ion-item",13),e.bIt("click",function(){return e.eBV(a),e.Njj(t.apply_changed_info())}),e.j41(50,"ion-label",25),e.EFF(51),e.k0s()()()()}2&i&&(e.R7$(3),e.JRh(t.lang.text.GroupServer.ServerDetail),e.R7$(6),e.JRh(t.lang.text.ServerDetail.copy_scan_below),e.R7$(),e.Y8G("ngIf",t.QRCodeSRC),e.R7$(5),e.Y8G("label",t.lang.text.GroupServer.DisplayName),e.R50("ngModel",t.dedicated_info.name),e.Y8G("placeholder",t.lang.text.GroupServer.DisplayName_placeholder),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.Address),e.R50("ngModel",t.dedicated_info.address),e.R7$(7),e.JRh(t.lang.text.ServerDetail.detailInfo),e.R7$(4),e.JRh(t.lang.text.ServerDetail.RegenWebRTC),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.DivisionName),e.R50("ngModel",t.dedicated_info.target),e.Y8G("placeholder",t.dedicated_info.name||t.lang.text.GroupServer.DivisionName_placeholder),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.Key),e.R50("ngModel",t.dedicated_info.key),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.Port),e.R50("ngModel",t.dedicated_info.nakama_port),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.cdnPort),e.R50("ngModel",t.dedicated_info.cdn_port),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.apachePort),e.R50("ngModel",t.dedicated_info.apache_port),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.SquarePort),e.R50("ngModel",t.dedicated_info.square_port),e.R7$(2),e.Y8G("label",t.lang.text.GroupServer.WebRTCPort),e.R50("ngModel",t.dedicated_info.webrtc_port),e.R7$(2),e.R50("ngModel",t.dedicated_info.useSSL),e.R7$(2),e.JRh(t.lang.text.GroupServer.isSSL),e.R7$(2),e.Y8G("ngIf",t.global.ShowHint),e.R7$(3),e.JRh(t.lang.text.ServerDetail.ApplyChangeServerInfo))},dependencies:[h.bT,u.BC,u.vS,d.xk,d.YH,d.QW,d.W9,d.eU,d.iq,d.$w,d.uz,d.Dg,d.he,d.BC,d.BY,d.ai,d.hB,d.su,d.Gw,d.el],styles:[".icon_style[_ngcontent-%COMP%]{width:22px;height:22px;transform:translateY(2px);margin-left:4px;margin-right:4px}"]}),_})()}];let G=(()=>{var r;class _{}return(r=_).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[g.iI.forChild(P),g.iI]}),_})(),y=(()=>{var r;class _{}return(r=_).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[h.MD,u.YN,d.bv,G]}),_})()}}]);