"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6767],{6767:(O,v,i)=>{i.r(v),i.d(v,{ArcadePageModule:()=>I});var f=i(177),P=i(4341),s=i(5374),p=i(9858),h=i(467),A=i(617),j=i(8326),e=i(3953),C=i(4234),k=i(8065),y=i(4237),M=i(3656),b=i(9347),x=i(482),R=i(755);const B=["ArcadeQRShare"];function L(a,c){1&a&&(e.j41(0,"div",14),e.nrm(1,"div",15),e.k0s())}const U=[{path:"",component:(()=>{var a;class c{constructor(n,t,o,r,u,l,d){this.lang=n,this.statusBar=t,this.nakama=o,this.navCtrl=r,this.client=u,this.global=l,this.indexed=d,this.ArcadeList=[],this.WillLeave=!1}ngOnInit(){}ionViewWillEnter(){var n=this;return(0,h.A)(function*(){n.WillLeave=!1;let t=n.nakama.get_all_online_server();for(let r=0,u=t.length;r<u;r++)try{let l=yield t[r].client.readStorageObjects(t[r].session,{object_ids:[{collection:"arcade",key:"url"}]});if(l.objects.length){let d=l.objects[0].value.data,m=yield fetch(d);console.log("\uc77d\uc5b4\ubcf4\uae30 \uacbd\uacfc: ",m)}}catch(l){console.log("\ub9ac\uc2a4\ud2b8 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328: ",l)}n.ArcadeList=[]})()}WaitingCurrent(){var n=this;return(0,h.A)(function*(){for(;n.WillLeave;)yield new Promise(t=>setTimeout(t,0))})()}ionViewWillLeave(){this.WillLeave=!0}QuickLinkAct(){var n=this;return(0,h.A)(function*(){let t=yield n.global.GetValueFromClipboard();switch(t.type){case"text/plain":n.global.PageDismissAct["voiddraw-remote"]=r=>{delete n.global.PageDismissAct["voiddraw-remote"]},n.global.ActLikeModal("portal/arcade/void-draw",{dismiss:"voiddraw-remote"});break;case"image/png":n.SelectVoidDrawBackgroundImage({target:{files:[t.value]}})}})()}QuickLinkContextmenu(){return document.getElementById("arcade_voiddraw_img").click(),!1}SelectVoidDrawBackgroundImage(n){var t=this;return(0,h.A)(function*(){const o=n.target.files[0],r=`tmp_files/quick_act/${o.name}`;yield t.indexed.saveBlobToUserPath(o,r);let u=yield t.indexed.loadBlobFromUserPath(r,o.type),l=URL.createObjectURL(u);new j(d=>{d.setup=()=>{document.getElementById("arcade_voiddraw_img").value="",d.noCanvas(),d.loadImage(l,m=>{t.global.PageDismissAct["voiddraw-remote"]=V=>{delete t.global.PageDismissAct["voiddraw-remote"]},t.global.ActLikeModal("portal/arcade/void-draw",{path:r,width:m.width,height:m.height,type:o.type,dismiss:"voiddraw-remote"}),URL.revokeObjectURL(l),d.remove()},m=>{console.log("\ube60\ub978 \ud3b8\uc9d1\uae30 \uc774\ub3d9 \uc2e4\ud328: ",m),URL.revokeObjectURL(l),d.remove()})}})})()}JoinSmallTalk(){"online"!=this.statusBar.settings.dedicated_groupchat&&"certified"!=this.statusBar.settings.dedicated_groupchat&&(this.statusBar.settings.dedicated_groupchat="pending"),this.client.RejoinGroupChat()}JoinInstantCall(){this.navCtrl.navigateForward("portal/arcade/instant-call",{animation:A.NC})}}return(a=c).\u0275fac=function(n){return new(n||a)(e.rXU(C.y),e.rXU(k.j),e.rXU(y.X),e.rXU(M.q9),e.rXU(b.z),e.rXU(x.z3),e.rXU(R.n))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-arcade"]],viewQuery:function(n,t){if(1&n&&e.GBs(B,5),2&n){let o;e.mGM(o=e.lsd())&&(t.ArcadeQRShare=o.first)}},decls:20,vars:5,consts:[["ArcadeQRShare",""],[1,"ion-no-border"],["src","assets/icon/voidDraw.png",1,"add_group","top_icon_override_2",2,"width","32px","height","32px",3,"click","contextmenu"],["hidden","","type","file","id","arcade_voiddraw_img","accept","image/*",3,"change"],[1,"add_group","top_icon_override_1",3,"click"],["button","","name","call-outline",2,"width","24px","height","24px"],[1,"add_group",3,"click"],["button","","name","chatbubbles-outline",2,"width","24px","height","24px"],[1,"header_online_circle",3,"click"],[3,"fullscreen"],[1,"disconnect_info"],["color","medium","name","game-controller-outline",2,"width","60px","height","60px"],["color","medium"],[1,"transparent-modal"],[2,"display","flex","justify-content","center","align-items","center","height","100%"],[2,"width","400px","height","455px","background-color","var(--chatroom-background)","text-align","center","padding","16px"]],template:function(n,t){if(1&n){const o=e.RV6();e.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"img",2),e.bIt("click",function(){return e.eBV(o),e.Njj(t.QuickLinkAct())})("contextmenu",function(){return e.eBV(o),e.Njj(t.QuickLinkContextmenu())}),e.k0s(),e.j41(5,"input",3),e.bIt("change",function(u){return e.eBV(o),e.Njj(t.SelectVoidDrawBackgroundImage(u))}),e.k0s(),e.j41(6,"div",4),e.bIt("click",function(){return e.eBV(o),e.Njj(t.JoinInstantCall())}),e.nrm(7,"ion-icon",5),e.k0s(),e.j41(8,"div",6),e.bIt("click",function(){return e.eBV(o),e.Njj(t.JoinSmallTalk())}),e.nrm(9,"ion-icon",7),e.k0s(),e.j41(10,"div",8),e.bIt("click",function(){return e.eBV(o),e.Njj(t.nakama.toggle_all_session())}),e.k0s()()(),e.j41(11,"ion-content",9)(12,"div",10),e.nrm(13,"ion-icon",11),e.j41(14,"div")(15,"ion-label",12),e.EFF(16),e.k0s()()(),e.j41(17,"ion-modal",13,0),e.DNE(19,L,2,0,"ng-template"),e.k0s()()}2&n&&(e.R7$(3),e.JRh(t.lang.text.Arcade.Title),e.R7$(7),e.Aen("background-color: "+t.statusBar.colors[t.statusBar.settings.groupServer]+"; cursor: pointer;"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(5),e.JRh(t.lang.text.Arcade.Preparing))},dependencies:[s.W9,s.eU,s.iq,s.he,s.BC,s.ai,s.Sb],styles:[".md[_ngcontent-%COMP%]   .add_group[_ngcontent-%COMP%]{position:absolute;right:68px;top:16px;cursor:pointer}.ios[_ngcontent-%COMP%]   .add_group[_ngcontent-%COMP%]{position:absolute;right:58px;top:10px;cursor:pointer}.md[_ngcontent-%COMP%]   .top_icon_override_1[_ngcontent-%COMP%]{right:116px}.ios[_ngcontent-%COMP%]   .top_icon_override_1[_ngcontent-%COMP%]{right:96px}.md[_ngcontent-%COMP%]   .top_icon_override_2[_ngcontent-%COMP%]{right:164px;top:13px}.ios[_ngcontent-%COMP%]   .top_icon_override_2[_ngcontent-%COMP%]{right:134px;top:7px}"]}),c})()},{path:"instant-call",loadChildren:()=>i.e(6524).then(i.bind(i,6524)).then(a=>a.InstantCallPageModule)},{path:"void-draw",loadChildren:()=>i.e(2655).then(i.bind(i,2655)).then(a=>a.VoidDrawPageModule)}];let T=(()=>{var a;class c{}return(a=c).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[p.iI.forChild(U),p.iI]}),c})(),I=(()=>{var a;class c{}return(a=c).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[f.MD,P.YN,s.bv,T]}),c})()}}]);