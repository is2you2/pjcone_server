"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8036],{8036:(y,p,s)=>{s.r(p),s.d(p,{CreatorPageModule:()=>T});var _=s(177),d=s(4341),r=s(5374),g=s(9858),l=s(8326),o=s(3953),m=s(4234),u=s(482),v=s(3656);function h(t,a){if(1&t&&(o.j41(0,"ion-avatar"),o.nrm(1,"img",15),o.k0s()),2&t){const i=o.XpG().$implicit;o.R7$(),o.Y8G("src",i.avatar,o.B4B)}}function f(t,a){1&t&&o.nrm(0,"ion-icon",16)}function C(t,a){if(1&t){const i=o.RV6();o.j41(0,"ion-chip",13),o.bIt("click",function(){const e=o.eBV(i).$implicit,c=o.XpG(2);return o.Njj(c.global.open_link(e.url))}),o.DNE(1,h,2,1,"ion-avatar",8)(2,f,1,0,"ion-icon",14),o.j41(3,"ion-label"),o.EFF(4),o.k0s()()}if(2&t){const i=a.$implicit,n=o.XpG(2);o.Aen(i.mvp?"filter: drop-shadow(0px 0px 12px var(--ion-color-dark))":""),o.R7$(),o.Y8G("ngIf",i.avatar),o.R7$(),o.Y8G("ngIf",!i.avatar),o.R7$(2),o.JRh(i[n.lang.lang])}}function k(t,a){if(1&t&&(o.j41(0,"div")(1,"ion-item-divider")(2,"ion-label"),o.EFF(3),o.k0s()(),o.j41(4,"div",9),o.DNE(5,C,5,5,"ion-chip",10),o.k0s()()),2&t){const i=o.XpG();o.R7$(3),o.JRh(i.lang.text.CreatorInfo.contributors),o.R7$(2),o.Y8G("ngForOf",i.contributors)}}function R(t,a){if(1&t&&(o.j41(0,"ion-avatar"),o.nrm(1,"img",15),o.k0s()),2&t){const i=o.XpG().$implicit;o.R7$(),o.Y8G("src",i.avatar,o.B4B)}}function b(t,a){1&t&&o.nrm(0,"ion-icon",16)}function j(t,a){if(1&t){const i=o.RV6();o.j41(0,"ion-chip",13),o.bIt("click",function(){const e=o.eBV(i).$implicit,c=o.XpG();return o.Njj(c.global.open_link(e.url))}),o.DNE(1,R,2,1,"ion-avatar",8)(2,b,1,0,"ion-icon",14),o.j41(3,"ion-label"),o.EFF(4),o.k0s()()}if(2&t){const i=a.$implicit,n=o.XpG();o.Aen(i.mvp?"filter: drop-shadow(0px 0px 12px var(--ion-color-dark))":""),o.R7$(),o.Y8G("ngIf",i.avatar),o.R7$(),o.Y8G("ngIf",!i.avatar),o.R7$(2),o.JRh(i[n.lang.lang])}}function $(t,a){if(1&t&&(o.j41(0,"ion-avatar"),o.nrm(1,"img",15),o.k0s()),2&t){const i=o.XpG().$implicit;o.R7$(),o.Y8G("src",i.avatar,o.B4B)}}function P(t,a){1&t&&o.nrm(0,"ion-icon",16)}function x(t,a){if(1&t){const i=o.RV6();o.j41(0,"ion-chip",13),o.bIt("click",function(){const e=o.eBV(i).$implicit,c=o.XpG(2);return o.Njj(c.global.open_link(e.url))}),o.DNE(1,$,2,1,"ion-avatar",8)(2,P,1,0,"ion-icon",14),o.j41(3,"ion-label"),o.EFF(4),o.k0s()()}if(2&t){const i=a.$implicit,n=o.XpG(2);o.Aen(i.mvp?"filter: drop-shadow(0px 0px 12px var(--ion-color-dark))":""),o.R7$(),o.Y8G("ngIf",i.avatar),o.R7$(),o.Y8G("ngIf",!i.avatar),o.R7$(2),o.JRh(i[n.lang.lang])}}function F(t,a){if(1&t&&(o.j41(0,"div"),o.DNE(1,x,5,5,"ion-chip",10),o.k0s()),2&t){const i=o.XpG();o.R7$(),o.Y8G("ngForOf",i.patreons)}}function G(t,a){if(1&t&&(o.j41(0,"div",17)(1,"div",18),o.nrm(2,"ion-icon",19),o.j41(3,"div")(4,"ion-label",20),o.EFF(5),o.k0s()(),o.j41(6,"div")(7,"ion-label",20),o.EFF(8),o.k0s()()()()),2&t){const i=o.XpG();o.R7$(5),o.JRh(i.lang.text.CreatorInfo.EmptyPatreons),o.R7$(3),o.JRh(i.lang.text.CreatorInfo.HowAboutPatreons)}}const I=[{path:"",component:(()=>{var t;class a{constructor(n,e,c){this.lang=n,this.global=e,this.navCtrl=c,this.info={name:void 0},this.contributors=[],this.special_thanks_to=[],this.patreons=[]}ngOnInit(){new l(n=>{n.setup=()=>{n.noCanvas(),n.loadJSON(`assets/data/infos/${this.lang.lang}/creator.json`,e=>{this.info=e,n.remove()},e=>{console.error("\ubc88\uc5ed\uac00 \uc815\ubcf4 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328: ",e),n.remove()})}}),new l(n=>{n.setup=()=>{n.noCanvas(),n.loadJSON("assets/data/infos/contributors.json",e=>{this.contributors=e,n.remove()},e=>{console.error("\uae30\uc5ec\uc790\ub4e4 \uc815\ubcf4 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328: ",e),n.remove()})}}),new l(n=>{n.setup=()=>{n.noCanvas(),n.loadJSON("assets/data/infos/thanks_to.json",e=>{this.special_thanks_to=e,n.remove()},e=>{console.error("\ub3c4\uc6c0\uc8fc\uc2e0\ubd84\ub4e4 \uc815\ubcf4 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328: ",e),n.remove()})}}),new l(n=>{n.setup=()=>{n.noCanvas(),n.loadJSON("assets/data/infos/patreons.json",e=>{this.patreons=e,n.remove()},e=>{console.error("\ud6c4\uc6d0\uc790 \uc815\ubcf4 \ubd88\ub7ec\uc624\uae30 \uc2e4\ud328: ",e),n.remove()})}})}open_patreon(){window.open("https://www.patreon.com/is2you2","_blank")}ionViewDidEnter(){this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()}}ionViewWillLeave(){delete this.global.p5KeyShortCut.Escape}}return(t=a).\u0275fac=function(n){return new(n||t)(o.rXU(m.y),o.rXU(u.z3),o.rXU(v.q9))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-creator"]],decls:31,vars:10,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","portal/settings"],[1,"profile_img_form",2,"cursor","pointer",3,"click"],["src","assets/data/creator_img.jpg","alt","CreatorImg",1,"profile_img"],[1,"fore-gradient"],[1,"username"],["disabled","",1,"infobox","content_size"],[4,"ngIf"],[1,"infobox","content_size","thanks_bg"],[3,"style","click",4,"ngFor","ngForOf"],["style","position: relative;",4,"ngIf"],["src","assets/data/asset-preview.png","alt","patreon_link",2,"cursor","pointer","padding","16px","border-radius","32px","max-height","300px",3,"click"],[3,"click"],["name","person-circle-outline",4,"ngIf"],[3,"src"],["name","person-circle-outline"],[2,"position","relative"],[2,"text-align","center","position","absolute","width","100%"],["color","medium","name","happy-outline",2,"width","48px","height","48px"],["color","medium"]],template:function(n,e){1&n&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o.EFF(3),o.k0s(),o.j41(4,"ion-buttons",1),o.nrm(5,"ion-back-button",2),o.k0s()()(),o.j41(6,"ion-content")(7,"div",3),o.bIt("click",function(){return e.global.open_link("https://is2you2.github.io/")}),o.nrm(8,"img",4)(9,"div",5),o.j41(10,"div",6),o.EFF(11),o.k0s()(),o.j41(12,"ion-item-divider")(13,"ion-label"),o.EFF(14),o.k0s()(),o.j41(15,"textarea",7),o.EFF(16),o.k0s(),o.DNE(17,k,6,2,"div",8),o.j41(18,"ion-item-divider")(19,"ion-label"),o.EFF(20),o.k0s()(),o.j41(21,"div",9),o.DNE(22,j,5,5,"ion-chip",10),o.k0s(),o.j41(23,"ion-item-divider")(24,"ion-label"),o.EFF(25),o.k0s()(),o.j41(26,"div",9),o.DNE(27,F,2,1,"div",8)(28,G,9,2,"div",11),o.k0s(),o.j41(29,"div")(30,"img",12),o.bIt("click",function(){return e.open_patreon()}),o.k0s()()()),2&n&&(o.R7$(3),o.JRh(e.lang.text.Settings.AppCreator),o.R7$(8),o.JRh(e.info.name),o.R7$(3),o.JRh(e.lang.text.CreatorInfo.creatorComment),o.R7$(2),o.JRh(e.info.text),o.R7$(),o.Y8G("ngIf",e.contributors.length),o.R7$(3),o.JRh(e.lang.text.CreatorInfo.thanks_to),o.R7$(2),o.Y8G("ngForOf",e.special_thanks_to),o.R7$(3),o.JRh(e.lang.text.Settings.Sponsorship),o.R7$(2),o.Y8G("ngIf",e.patreons.length),o.R7$(),o.Y8G("ngIf",!e.patreons.length))},dependencies:[_.Sq,_.bT,r.mC,r.QW,r.ZB,r.W9,r.eU,r.iq,r.Dg,r.he,r.BC,r.ai,r.el],styles:[".content_size[_ngcontent-%COMP%]{height:14vh}.fore-gradient[_ngcontent-%COMP%]{position:relative;background-image:linear-gradient(to top,#000,#0000);width:100%;height:100%}.thanks_bg[_ngcontent-%COMP%]{background-color:var(--wsclient-logs-background);overflow-y:auto}"]}),a})()}];let E=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[g.iI.forChild(I),g.iI]}),a})(),T=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[_.MD,d.YN,r.bv,E]}),a})()}}]);