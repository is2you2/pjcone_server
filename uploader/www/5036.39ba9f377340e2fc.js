"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5036],{5036:(w,y,l)=>{l.r(y),l.d(y,{CommunityPageModule:()=>H});var _=l(177),P=l(4341),h=l(5374),k=l(9858),g=l(467),t=l(3953),b=l(8065),S=l(4237),I=l(4234),A=l(7100),x=l(3656),O=l(755),R=l(3307);function $(o,d){1&o&&(t.j41(0,"div",9),t.EFF(1,"A"),t.k0s())}function j(o,d){if(1&o&&(t.j41(0,"div",21),t.EFF(1),t.k0s()),2&o){const a=t.XpG().index;t.R7$(),t.JRh((a+1)%10)}}function T(o,d){if(1&o&&t.nrm(0,"img",22),2&o){const a=t.XpG().$implicit;t.Aen(a.isNSFW?"filter: blur(16px);":""),t.Y8G("src",a.mainImage.thumbnail,t.B4B)}}function F(o,d){if(1&o&&(t.j41(0,"span",23),t.EFF(1),t.k0s()),2&o){const a=t.XpG().$implicit,e=t.XpG(2);t.R7$(),t.SpI(" ","("+(a.server?a.server.name||a.server.target:e.lang.text.AddGroup.UseLocalStorage)+")"," ")}}function G(o,d){if(1&o&&(t.j41(0,"span",23),t.EFF(1),t.k0s()),2&o){const a=t.XpG(3);t.R7$(),t.SpI(" ","("+a.lang.text.Community.AfterOnline+")"," ")}}function D(o,d){if(1&o&&(t.j41(0,"span",23),t.EFF(1),t.k0s()),2&o){const a=t.XpG(3);t.R7$(),t.SpI(" ","("+a.lang.text.Community.WillBeRemove+")"," ")}}function B(o,d){1&o&&t.nrm(0,"ion-icon",24)}function E(o,d){if(1&o){const a=t.RV6();t.j41(0,"ion-card",12),t.bIt("click",function(){const n=t.eBV(a),r=n.$implicit,c=n.index,i=t.XpG(2);return t.Njj(i.open_post(r,c))})("contextmenu",function(){const n=t.eBV(a).index,r=t.XpG(2);return t.Njj(r.PostContextMenu(n))}),t.DNE(1,j,2,1,"div",13),t.j41(2,"div",14),t.DNE(3,T,1,3,"img",15),t.k0s(),t.j41(4,"ion-card-header")(5,"ion-card-subtitle",16)(6,"span"),t.EFF(7),t.k0s(),t.DNE(8,F,2,1,"span",17)(9,G,2,1,"span",17)(10,D,2,1,"span",17),t.k0s(),t.j41(11,"ion-card-title",18),t.DNE(12,B,1,0,"ion-icon",19),t.EFF(13),t.k0s()(),t.j41(14,"ion-card-content",20),t.EFF(15),t.k0s()()}if(2&o){const a=d.$implicit,e=d.index,n=t.XpG(2);t.R7$(),t.Y8G("ngIf",n.global.ShowHint&&e<10),t.R7$(2),t.Y8G("ngIf",a.mainImage),t.R7$(3),t.Aen("color: #"+a.UserColor),t.R7$(),t.SpI(" ",n.nakama.usernameOverride[a.server.isOfficial]&&n.nakama.usernameOverride[a.server.isOfficial][a.server.target]&&n.nakama.usernameOverride[a.server.isOfficial][a.server.target][a.creator_id]||a.creator_name," "),t.R7$(),t.Y8G("ngIf",n.nakama.showServer&&!a.originalInfo),t.R7$(),t.Y8G("ngIf","edit"==a.offlineAct),t.R7$(),t.Y8G("ngIf","remove"==a.offlineAct),t.R7$(2),t.Y8G("ngIf",a.OutSource),t.R7$(),t.SpI(" ",a.title,""),t.R7$(2),t.SpI(" ",a.content," ")}}function M(o,d){if(1&o&&(t.j41(0,"div",10),t.DNE(1,E,16,11,"ion-card",11),t.k0s()),2&o){const a=t.XpG();t.R7$(),t.Y8G("ngForOf",a.nakama.posts)}}function X(o,d){if(1&o){const a=t.RV6();t.j41(0,"div")(1,"div",25),t.bIt("click",function(){t.eBV(a);const n=t.XpG();return t.Njj(n.add_post())}),t.nrm(2,"ion-icon",26),t.j41(3,"div")(4,"ion-label",27),t.EFF(5),t.k0s()()()()}if(2&o){const a=t.XpG();t.R7$(5),t.JRh(a.lang.text.Community.NoPosts)}}const N=[{path:"",component:(()=>{var o;class d{constructor(e,n,r,c,i,s,p,u){this.statusBar=e,this.nakama=n,this.lang=r,this.global=c,this.navCtrl=i,this.alertCtrl=s,this.indexed=p,this.p5loading=u,this.is_loadable=!0,this.is_auto_load_end=!1,this.forceBlockLoadable=!1,this.loadBlock=!1,this.QueuedOfflineAct=[],this.isOfflineActing=!1}ngOnInit(){this.nakama.CommunityGoToEditPost=this.add_post,this.global.PortalBottonTabAct.Community=()=>{this.ContentScroll&&this.ContentScroll.scrollTo({top:0,behavior:"smooth"})}}add_post(e){this.global.RemoveAllModals(()=>{this.navCtrl.navigateForward("portal/community/add-post",{state:{data:e,act:!0}})}),this.global.portalHint=!1}ionViewDidEnter(){var e=this;return(0,g.A)(function*(){e.try_add_shortcut(),e.is_loadable=!0,e.forceBlockLoadable=!1,e.nakama.has_new_post=!1,yield e.load_post_cycles(),e.is_auto_load_end=!0,e.ContentDiv&&e.ContentScroll&&e.ContentDiv.clientHeight-(e.ContentScroll.scrollTop+e.ContentScroll.clientHeight)<450&&e.load_post_cycles(),e.nakama.socket_reactive.try_load_post=()=>{setTimeout(()=>{e.ContentDiv&&e.ContentScroll&&e.ContentDiv.clientHeight-(e.ContentScroll.scrollTop+e.ContentScroll.clientHeight)<450&&e.load_post_cycles()},0)}})()}open_post(e,n){e.offlineAct?this.QueueOfflineAct(e):(this.forceBlockLoadable=!0,this.nakama.open_post(e,n,"portal/community/"))}load_post_cycles(){var e=this;return(0,g.A)(function*(){e.loadBlock||(e.loadBlock=!0,!e.forceBlockLoadable&&e.is_loadable&&(yield e.load_posts()),e.loadBlock=!1,setTimeout(()=>{try{e.ContentDiv||(e.ContentDiv=document.getElementById("CommunityMainContent")),e.ContentScroll||(e.ContentScroll=document.getElementById("CommunityScrollDiv")),e.ContentScroll.onscroll||(e.ContentScroll.onscroll=n=>{e.ContentDiv.clientHeight-(e.ContentScroll.scrollTop+e.ContentScroll.clientHeight)<450&&e.load_post_cycles()}),e.is_loadable&&e.ContentDiv.clientHeight-(e.ContentScroll.scrollTop+e.ContentScroll.clientHeight)<450&&e.load_post_cycles()}catch(n){console.log("\uac8c\uc2dc\ubb3c \uc2a4\ud06c\ub864 \ud589\ub3d9 \uc0dd\uc131 \uc624\ub958: ",n)}},100))})()}PostContextMenu(e){let n=!1;try{n=this.nakama.posts[e].server.local||this.nakama.posts[e].creator_id==this.nakama.servers[this.nakama.posts[e].server.isOfficial][this.nakama.posts[e].server.target].session.user_id,this.nakama.posts[e].server.local||(n=n&&"online"==this.statusBar.groupServer[this.nakama.posts[e].server.isOfficial][this.nakama.posts[e].server.target])}catch{n="deleted"==this.nakama.posts[e].server.isOfficial}return n=n||this.nakama.posts[e].is_me,n&&"remove"!=this.nakama.posts[e].offlineAct&&this.alertCtrl.create({header:this.nakama.posts[e].title,message:this.nakama.posts[e].content,buttons:[{text:this.lang.text.ChatRoom.EditChat,handler:()=>{this.nakama.EditPost(this.nakama.posts[e])}},{text:this.lang.text.ChatRoom.Delete,handler:()=>{this.nakama.RemovePost(this.nakama.posts[e])},cssClass:"redfont"}]}).then(r=>r.present()),!1}try_add_shortcut(){this.global.p5KeyShortCut?this.AddShortcut():setTimeout(()=>{this.try_add_shortcut()},100)}load_posts(){var e=this;return(0,g.A)(function*(){let n=!1,r=Object.keys(e.nakama.post_counter);for(let c of r){let i=Object.keys(e.nakama.post_counter[c]);for(let s of i){let p=Object.keys(e.nakama.post_counter[c][s]);for(let u of p){let f="me"==u;try{"me"!=u&&(f=u==e.nakama.servers[c][s].session.user_id)}catch{}let v=e.nakama.post_counter[c][s][u];yield e.load_post_step_by_step(v,c,s,u,f),!n&&e.nakama.post_counter[c][s][u]>=0&&(n=!0)}}}e.is_loadable=n,e.nakama.rearrange_posts()})()}load_post_step_by_step(e,n,r,c,i){var s=this;return(0,g.A)(function*(){if(e<0)return;let p=yield s.nakama.load_local_post_with_id(`LocalPost_${e}`,n,r,c);if(!p&&"me"!=c)try{p=yield s.nakama.load_server_post_with_id(`ServerPost_${e}`,n,r,c,i)}catch{}if(p&&"me"==c){const u=s.nakama.posts_orig[n][r][c][`LocalPost_${e}`];u.offlineAct&&s.QueueOfflineAct(u)}s.nakama.post_counter[n][r][c]--,p||(yield s.load_post_step_by_step(s.nakama.post_counter[n][r][c],n,r,c,i))})()}QueueOfflineAct(e){this.QueuedOfflineAct.push(e),this.isOfflineActing||this.ApplyOfflineAct()}ApplyOfflineAct(){var e=this;return(0,g.A)(function*(){var n,r;for(e.isOfflineActing=!0;e.QueuedOfflineAct.length;){let i=e.QueuedOfflineAct.shift(),s=i.originalInfo;const f="postOfflineAct";if("online"==e.statusBar.groupServer[(null==s?void 0:s.server.isOfficial)||i.server.isOfficial][(null==s?void 0:s.server.target)||i.server.target])switch(i.offlineAct){case"edit":const v=JSON.parse(JSON.stringify(i));["id","UserColor","creator_id","server","OutSource"].forEach(m=>i[m]=s[m]),delete i.offlineAct,delete i.originalInfo,null!==(n=i.mainImage)&&void 0!==n&&n.path&&!i.mainImage.blob&&(i.mainImage.blob=yield e.indexed.loadBlobFromUserPath(i.mainImage.path,i.mainImage.type));for(let m=0,C=null==i?void 0:i.attachments.length;m<C;m++){var c;null!==(c=i.attachments[m])&&void 0!==c&&c.path&&!i.attachments[m].blob&&(i.attachments[m].blob=yield e.indexed.loadBlobFromUserPath(i.attachments[m].path,i.attachments[m].type)),delete i.attachments[m].thumbnail}yield e.p5loading.update({id:f,message:`${e.lang.text.AddPost.WIP}: ${i.title}`,progress:null,forceEnd:null}),yield e.nakama.RemovePost(s,void 0,f),yield e.nakama.AddPost(i,f,!0,!1,null===(r=i.mainImage)||void 0===r?void 0:r.thumbnail),yield e.nakama.RemovePost(v,void 0,f),e.nakama.rearrange_posts(),yield e.p5loading.update({id:f,message:`${e.lang.text.AddPost.WIP}: ${i.title}`,progress:1,forceEnd:350});for(let m=0,C=null==i?void 0:i.attachments.length;m<C;m++)delete i.attachments[m].blob;break;case"remove":yield e.nakama.RemovePost(s,void 0,f),yield e.nakama.RemovePost(i,void 0,f),e.p5loading.remove(f),e.nakama.rearrange_posts()}}e.isOfflineActing=!1})()}AddShortcut(){this.global.p5KeyShortCut&&(this.global.p5KeyShortCut.Digit=e=>{this.nakama.posts.length>e?this.open_post(this.nakama.posts[e],e):this.add_post()}),this.global.p5KeyShortCut&&!this.global.p5KeyShortCut.AddAct&&(this.global.p5KeyShortCut.AddAct=()=>{this.add_post()})}ionViewWillLeave(){delete this.global.p5KeyShortCut.Digit,delete this.global.p5KeyShortCut.AddAct,delete this.nakama.socket_reactive.try_load_post,this.ContentScroll&&(this.ContentScroll.onscroll=null)}}return(o=d).\u0275fac=function(e){return new(e||o)(t.rXU(b.j),t.rXU(S.X),t.rXU(I.y),t.rXU(A.z3),t.rXU(x.q9),t.rXU(h.hG),t.rXU(O.n),t.rXU(R.f))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-community"]],decls:13,vars:6,consts:[[1,"ion-no-border"],[1,"add_post",3,"click"],["class","shortcut_hint shortcut_top_add",4,"ngIf"],["button","","name","add-circle-outline",2,"width","24px","height","24px"],[1,"header_online_circle",3,"click"],["id","CommunityScrollDiv",2,"height","100%","overflow-y","auto"],["id","CommunityMainContent"],["class","CardContainerDiv CardContainerDivShared",4,"ngIf"],[4,"ngIf"],[1,"shortcut_hint","shortcut_top_add"],[1,"CardContainerDiv","CardContainerDivShared"],["button","","class","card_style",3,"click","contextmenu",4,"ngFor","ngForOf"],["button","",1,"card_style",3,"click","contextmenu"],["class","shortcut_hint",4,"ngIf"],[1,"thumbnail_image"],["alt","","loading","lazy",3,"src","style",4,"ngIf"],[1,"cardCreator"],["style","color: #888; font-weight: normal;",4,"ngIf"],[1,"cardTitle"],["name","link-outline",4,"ngIf"],[1,"cardContent"],[1,"shortcut_hint"],["alt","","loading","lazy",3,"src"],[2,"color","#888","font-weight","normal"],["name","link-outline"],[1,"disconnect_info",3,"click"],["color","medium","name","document-text-outline",2,"width","60px","height","60px"],["color","medium"]],template:function(e,n){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s(),t.j41(4,"div",1),t.bIt("click",function(){return n.add_post()}),t.DNE(5,$,2,0,"div",2),t.nrm(6,"ion-icon",3),t.k0s(),t.j41(7,"div",4),t.bIt("click",function(){return n.nakama.toggle_all_session()}),t.k0s()()(),t.j41(8,"ion-content")(9,"div",5)(10,"div",6),t.DNE(11,M,2,1,"div",7)(12,X,6,1,"div",8),t.k0s()()()),2&e&&(t.R7$(3),t.JRh(n.lang.text.Community.Title),t.R7$(2),t.Y8G("ngIf",n.global.ShowHint),t.R7$(2),t.Aen("background-color: "+n.statusBar.colors[n.statusBar.settings.groupServer]+"; cursor: pointer;"),t.R7$(4),t.Y8G("ngIf",n.nakama.posts.length),t.R7$(),t.Y8G("ngIf",!n.nakama.posts.length))},dependencies:[_.Sq,_.bT,h.b_,h.I9,h.ME,h.HW,h.tN,h.W9,h.eU,h.iq,h.he,h.BC,h.ai],styles:[".add_post[_ngcontent-%COMP%]{position:absolute;right:68px;top:16px;cursor:pointer}.CardContainerDiv[_ngcontent-%COMP%]{padding-top:14px}.CardContainerDivShared[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:16px;column-gap:0px;padding:16px 0 16px 16px}.card_style[_ngcontent-%COMP%]{width:90%;margin-top:0}.cardCreator[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;font-weight:700;max-height:20px;overflow-y:hidden}.cardTitle[_ngcontent-%COMP%]{max-height:24px;overflow-y:hidden}.cardContent[_ngcontent-%COMP%]{max-height:40px;overflow-y:hidden;padding-bottom:0;margin-bottom:13px}.thumbnail_image[_ngcontent-%COMP%]{width:100%;max-height:240px;object-fit:cover;overflow:hidden}"]}),d})()},{path:"add-post",loadChildren:()=>Promise.all([l.e(2076),l.e(7759)]).then(l.bind(l,7759)).then(o=>o.AddPostPageModule)},{path:"post-viewer",loadChildren:()=>Promise.all([l.e(222),l.e(526)]).then(l.bind(l,526)).then(o=>o.PostViewerPageModule)}];let U=(()=>{var o;class d{}return(o=d).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[k.iI.forChild(N),k.iI]}),d})(),H=(()=>{var o;class d{}return(o=d).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[_.MD,P.YN,h.bv,U]}),d})()}}]);