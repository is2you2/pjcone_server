"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3362],{3362:(k,c,a)=>{a.r(c),a.d(c,{LicensesPageModule:()=>f});var h=a(177),d=a(4341),l=a(5374),u=a(9858),m=a(8326),e=a(3953),p=a(4234),b=a(482),j=a(3656);const L=[{path:"",component:(()=>{var s;class g{constructor(o,n,t){this.lang=o,this.global=n,this.navCtrl=t,this.licenses={godot:{engine:"",thirdparty:""},jsblend:"",zxing:"",modules:""},this.showMore=!1}ngOnInit(){this.loadTexts()}ionViewDidEnter(){this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()}}loadTexts(){this.p5canvas=new m(n=>{n.setup=()=>{n.noCanvas(),n.loadStrings("assets/data/docs/godot/godot.txt",t=>{this.licenses.godot.engine=t.join("\n")}),n.loadStrings("assets/data/docs/godot/thirdparty.txt",t=>{this.licenses.godot.thirdparty=t.join("\n")}),n.loadStrings("assets/data/docs/js.blend.txt",t=>{this.licenses.jsblend=t.join("\n")}),n.loadStrings("assets/data/docs/zxing.txt",t=>{this.licenses.zxing=t.join("\n")}),n.loadStrings("assets/data/docs/licenses.txt",t=>{this.licenses.modules=t.join("\n")})}})}ionViewWillLeave(){delete this.global.p5KeyShortCut.Escape}ngOnDestroy(){this.p5canvas.remove()}}return(s=g).\u0275fac=function(o){return new(o||s)(e.rXU(p.y),e.rXU(b.z3),e.rXU(j.q9))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-licenses"]],decls:36,vars:9,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],["disabled","",1,"infobox",3,"ngModelChange","ngModel"],[3,"click"]],template:function(o,n){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content")(7,"ion-list-header")(8,"ion-label"),e.EFF(9,"Ionic frameworks (Node.js packages)"),e.k0s()(),e.j41(10,"textarea",3),e.mxI("ngModelChange",function(i){return e.DH7(n.licenses.modules,i)||(n.licenses.modules=i),i}),e.k0s(),e.j41(11,"ion-list-header")(12,"ion-label"),e.EFF(13,"Godot engine 4.3"),e.k0s(),e.j41(14,"ion-button",4),e.bIt("click",function(){return n.global.open_link("https://godotengine.org/")}),e.EFF(15),e.k0s()(),e.j41(16,"ion-item-divider")(17,"ion-label"),e.EFF(18,"Godot engine"),e.k0s()(),e.j41(19,"textarea",3),e.mxI("ngModelChange",function(i){return e.DH7(n.licenses.godot.engine,i)||(n.licenses.godot.engine=i),i}),e.k0s(),e.j41(20,"ion-item-divider")(21,"ion-label"),e.EFF(22,"Third-party"),e.k0s()(),e.j41(23,"textarea",3),e.mxI("ngModelChange",function(i){return e.DH7(n.licenses.godot.thirdparty,i)||(n.licenses.godot.thirdparty=i),i}),e.k0s(),e.j41(24,"ion-list-header")(25,"ion-label"),e.EFF(26,"JS.BLEND"),e.k0s(),e.j41(27,"ion-button",4),e.bIt("click",function(){return n.global.open_link("https://github.com/acweathersby/js.blend")}),e.EFF(28),e.k0s()(),e.j41(29,"textarea",3),e.mxI("ngModelChange",function(i){return e.DH7(n.licenses.jsblend,i)||(n.licenses.jsblend=i),i}),e.k0s(),e.j41(30,"ion-list-header")(31,"ion-label"),e.EFF(32,"ZXing"),e.k0s(),e.j41(33,"ion-button",4),e.bIt("click",function(){return n.global.open_link("https://github.com/zxing/zxing")}),e.EFF(34),e.k0s()(),e.j41(35,"textarea",3),e.mxI("ngModelChange",function(i){return e.DH7(n.licenses.zxing,i)||(n.licenses.zxing=i),i}),e.k0s()()),2&o&&(e.R7$(5),e.JRh(n.lang.text.Settings.LicenseNotice),e.R7$(5),e.R50("ngModel",n.licenses.modules),e.R7$(5),e.JRh(n.lang.text.Licenses.open_link),e.R7$(4),e.R50("ngModel",n.licenses.godot.engine),e.R7$(4),e.R50("ngModel",n.licenses.godot.thirdparty),e.R7$(5),e.JRh(n.lang.text.Licenses.open_link),e.R7$(),e.R50("ngModel",n.licenses.jsblend),e.R7$(5),e.JRh(n.lang.text.Licenses.open_link),e.R7$(),e.R50("ngModel",n.licenses.zxing))},dependencies:[d.me,d.BC,d.vS,l.Jm,l.QW,l.W9,l.eU,l.Dg,l.he,l.AF,l.BC,l.ai,l.el]}),g})()}];let M=(()=>{var s;class g{}return(s=g).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[u.iI.forChild(L),u.iI]}),g})(),f=(()=>{var s;class g{}return(s=g).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[h.MD,d.YN,l.bv,M]}),g})()}}]);