"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[526],{526:(ue,E,P)=>{P.r(E),P.d(E,{PostViewerPageModule:()=>he});var A=P(177),L=P(4341),y=P(5374),O=P(9858),V=P(467),G=P(8326),U=P(222),t=P(3953),N=P(3656),H=P(4234),X=P(755),B=P(4237),Y=P(482),Q=P(9900),W=P(3307);const J=["QuickPostView"];function z(i,m){if(1&i){const r=t.RV6();t.j41(0,"ion-icon",15),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.showQuickMenu())}),t.k0s()}}function K(i,m){1&i&&(t.j41(0,"div",16)(1,"div",17),t.EFF(2,"A"),t.k0s()())}function Z(i,m){if(1&i){const r=t.RV6();t.j41(0,"ion-icon",18),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.ChangeToAnother(-1))}),t.k0s()}}function q(i,m){if(1&i){const r=t.RV6();t.j41(0,"ion-label",19),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.FocusOnIndexInput())}),t.EFF(1),t.k0s()}if(2&i){const r=t.XpG();t.R7$(),t.JRh(r.CurrentIndex+" / "+r.nakama.posts.length)}}function ee(i,m){if(1&i){const r=t.RV6();t.j41(0,"ion-label",20)(1,"input",21),t.bIt("change",function(o){t.eBV(r);const s=t.XpG();return t.Njj(s.ChangeRelevanceIndex(o))})("keydown",function(o){t.eBV(r);const s=t.XpG();return t.Njj(s.ChangeRelevanceIndex(o))}),t.k0s(),t.EFF(2),t.k0s()}if(2&i){const r=t.XpG();t.R7$(),t.Y8G("id",r.RelevancesInputId)("placeholder",r.CurrentIndex),t.R7$(),t.JRh(" / "+r.nakama.posts.length)}}function te(i,m){1&i&&(t.j41(0,"div",16)(1,"div",22),t.EFF(2,"D"),t.k0s()())}function oe(i,m){if(1&i){const r=t.RV6();t.j41(0,"ion-icon",23),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.ChangeToAnother(1))}),t.k0s()}}function ne(i,m){if(1&i&&t.nrm(0,"img",24),2&i){const r=t.XpG();t.Y8G("src",r.PostInfo.mainImage.MainThumbnail,t.B4B)}}function ie(i,m){1&i&&(t.j41(0,"div",30),t.EFF(1,"Shift + E"),t.k0s())}function se(i,m){1&i&&(t.j41(0,"div",30),t.EFF(1,"Shift + D"),t.k0s())}function ae(i,m){if(1&i){const r=t.RV6();t.j41(0,"table",25)(1,"tr")(2,"td")(3,"div",26),t.DNE(4,ie,2,0,"div",27),t.j41(5,"ion-button",28),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.EditPost())}),t.EFF(6),t.k0s()()(),t.j41(7,"td")(8,"div",26),t.DNE(9,se,2,0,"div",27),t.j41(10,"ion-button",29),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.RemovePost())}),t.EFF(11),t.k0s()()()()()}if(2&i){const r=t.XpG();t.R7$(4),t.Y8G("ngIf",r.global.ShowHint),t.R7$(2),t.SpI(" ",r.lang.text.AddPost.EditTitle," "),t.R7$(3),t.Y8G("ngIf",r.global.ShowHint),t.R7$(2),t.SpI(" ",r.lang.text.PostViewer.RemovePost," ")}}function re(i,m){if(1&i){const r=t.RV6();t.j41(0,"img",37),t.bIt("click",function(){t.eBV(r);const o=t.XpG(2);return t.Njj(o.global.WriteValueToClipboard("text/plain",o.ResultSharedAddress))}),t.k0s()}if(2&i){const r=t.XpG(2);t.Y8G("src",r.QRCodeSRC,t.B4B)}}function le(i,m){if(1&i){const r=t.RV6();t.j41(0,"div",31),t.bIt("click",function(o){t.eBV(r);const s=t.XpG();return t.Njj(s.CheckIfDismissAct(o))}),t.j41(1,"div",32)(2,"div",33),t.DNE(3,re,1,1,"img",34),t.j41(4,"ion-item",35),t.bIt("click",function(){t.eBV(r);const o=t.XpG();return t.Njj(o.global.WriteValueToClipboard("text/plain",o.ResultSharedAddress))}),t.j41(5,"ion-label",36),t.EFF(6),t.k0s()()()()()}if(2&i){const r=t.XpG();t.R7$(3),t.Y8G("ngIf",r.QRCodeSRC),t.R7$(3),t.JRh(r.ResultSharedAddress)}}const ce=[{path:"",component:(()=>{var i;class m{constructor(e,o,s,w,f,p,_,u,v,R){this.navCtrl=e,this.lang=o,this.indexed=s,this.nakama=w,this.alertCtrl=f,this.global=p,this.p5toast=_,this.route=u,this.router=v,this.p5loading=R,this.PostInfo={},this.isOwner=!1,this.HavePosts=!1,this.CurrentIndex=1,this.WaitingLoaded=!1,this.BackButtonPressed=!1,this.ScrollPostId="ScrollPostId",this.blenderViewers=[],this.FileURLs=[],this.PlayableElements=[],this.IsFocusOnHere=!0,this.RearrangedRelevance=[],this.RearrangedContents=[],this.ModalDismissId="postviewer_modal",this.ContentChanging=!1,this.PostContentId="PostContentId",this.AlreadyHaveGodot=!1,this.CanInputValue=!1,this.RelevancesInputId="RelevancesInputId"}ngOnInit(){this.ModalDismissId=`postviewer_modal_${Date.now()}`,this.cont=new AbortController,this.route.queryParams.subscribe(e=>{try{const o=this.router.getCurrentNavigation().extras.state;this.PostInfo=o.data,this.ScrollPostId=`ScrollPostId_${Date.now()}`,this.PostContentId=`PostContentId_${Date.now()}`,this.CurrentIndex=o.index}catch{}}),this.RelevancesInputId=`post-viewer_RelevancesInputId_${Date.now}`}showQuickMenu(){this.alertCtrl.create({header:this.PostInfo.title,message:this.global.truncateString(this.PostInfo.content,20),buttons:[{text:this.lang.text.ChatRoom.EditChat,handler:()=>this.EditPost()},{text:this.lang.text.Profile.remove_content,cssClass:"redfont",handler:()=>this.RemovePost()}]}).then(e=>e.present())}WaitingCurrent(){var e=this;return(0,V.A)(function*(){for(;!e.WaitingLoaded;)yield new Promise(o=>setTimeout(o,0))})()}ionViewWillEnter(){this.global.portalHint=!1,this.IsFocusOnHere&&this.initialize(),this.WaitingLoaded=!0,this.global.StoreShortCutAct("post-viewer"),this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()},this.IsFocusOnHere=!0}ChangeContentWithKeyInput(){var e=this;if(this.p5canvas){this.ScrollDiv||(this.ScrollDiv=document.getElementById(this.ScrollPostId)),this.p5canvas.keyPressed=function(){var f=(0,V.A)(function*(p){if(e.IsFocusOnHere)switch(p.code){case"KeyW":e.ScrollDiv.scrollTo({top:e.ScrollDiv.scrollTop-e.ScrollDiv.clientHeight/2,behavior:"smooth"});break;case"KeyS":e.ScrollDiv.scrollTo({top:e.ScrollDiv.scrollTop+e.ScrollDiv.clientHeight/2,behavior:"smooth"});break;case"KeyA":case"ArrowLeft":e.ChangeToAnother(-1);break;case"KeyE":p.shiftKey&&e.EditPost();break;case"KeyD":p.shiftKey&&e.RemovePost();case"ArrowRight":p.shiftKey||e.ChangeToAnother(1);break;case"KeyQ":if(!e.RearrangedRelevance.length)return;let _,u,v;e.global.PageDismissAct[e.ModalDismissId]=R=>{e.ExitModalAct(R)};try{v=e.PostInfo.creator_id,_=e.PostInfo.server.isOfficial,u=e.PostInfo.server.target}catch{_="local"}e.IsFocusOnHere=!1,e.global.ActLikeModal("portal/community/post-viewer/ionic-viewer",{info:{...e.RearrangedRelevance[0],sender_id:v},isOfficial:_,target:u,path:e.RearrangedRelevance[0].content.path,relevance:e.RearrangedRelevance,noEdit:!0,dismiss:e.ModalDismissId})}});return function(p){return f.apply(this,arguments)}}();let o=this.p5canvas.createVector(),s={};this.p5canvas.touchStarted=f=>{if(this.IsFocusOnHere&&"changedTouches"in f){for(let _=0,u=f.changedTouches.length;_<u;_++)s[f.changedTouches[_].identifier]=this.p5canvas.createVector(f.changedTouches[_].clientX,f.changedTouches[_].clientY);1===Object.keys(s).length&&(o=s[f.changedTouches[0].identifier].copy())}};const w=100;this.p5canvas.touchEnded=f=>{if(this.IsFocusOnHere&&"changedTouches"in f){let p;for(let u=0,v=f.changedTouches.length;u<v;u++)p=this.p5canvas.createVector(f.changedTouches[u].clientX,f.changedTouches[u].clientY),delete s[f.changedTouches[u].identifier];0===Object.keys(s).length&&(p.sub(o),p.x>w?this.ChangeToAnother(-1):p.x<-w&&this.ChangeToAnother(1))}}}}ExitModalAct(e){var o=this;return(0,V.A)(function*(){var s;yield o.WaitingCurrent(),e.data&&e.data.share&&o.navCtrl.pop(),o.IsFocusOnHere=!0,e.index<o.RearrangedContents.length&&(null===(s=o.RearrangedContents[e.index].elt)||void 0===s||s.scrollIntoView({block:"center",behavior:"smooth"})),delete o.global.PageDismissAct[o.ModalDismissId]})()}initialize(){if(this.RearrangedRelevance.length=0,this.RearrangedContents.length=0,this.PostInfo.mainImage)try{let e=this.PostInfo.mainImage.url;e||(e=URL.createObjectURL(this.PostInfo.mainImage.blob),setTimeout(()=>{URL.revokeObjectURL(e)},100)),this.PostInfo.mainImage.MainThumbnail=e}catch{}this.create_content();try{this.isOwner="me"==this.PostInfo.creator_id||this.PostInfo.creator_id==this.nakama.servers[this.PostInfo.server.isOfficial][this.PostInfo.server.target].session.user_id}catch{this.isOwner=!1}this.HavePosts=this.nakama.posts.length>1&&this.CurrentIndex>=0,this.ChangeContentWithKeyInput()}ChangeToAnother(e){var o=this;return(0,V.A)(function*(){var s;if(o.ContentChanging)return;o.ContentChanging=!0;let w=o.CurrentIndex+e;if(w<=0||w>o.nakama.posts.length)return o.ContentChanging=!1,void(yield o.p5loading.update({id:"postviewer",message:`${o.lang.text.ContentViewer.EndOfList}: ${o.CurrentIndex} / ${o.nakama.posts.length}`,progress:1,forceEnd:350}));o.ScrollDiv.scrollTo({top:0}),o.p5canvas&&o.p5canvas.remove(),o.CurrentIndex=w,yield o.p5loading.update({id:"postviewer",message:`${o.lang.text.PostViewer.PreparingPost}: ${null===(s=o.nakama.posts[o.CurrentIndex-1])||void 0===s?void 0:s.title} (${o.CurrentIndex} / ${o.nakama.posts.length})`,progress:null,forceEnd:null}),o.PostInfo=o.nakama.posts[o.CurrentIndex-1],o.CanInputValue=!1,o.initialize()})()}create_content(){var e=this;let o=document.getElementById(this.PostContentId);this.p5canvas=new G(s=>{s.setup=(0,V.A)(function*(){s.noCanvas();let f=s.createDiv(`${e.PostInfo.OutSource?'<ion-icon id="title_link" style="cursor: pointer;" slot="start" name="link-outline"></ion-icon> ':""}${e.PostInfo.title}`);e.PostInfo.OutSource&&(document.getElementById("title_link").onclick=(0,V.A)(function*(){e.ResultSharedAddress="",e.ResultSharedAddress=`${yield e.global.GetHeaderAddress()}?postViewer=${e.PostInfo.OutSource}`,e.QRCodeSRC=e.global.readasQRCodeFromString(e.ResultSharedAddress),e.QuickPostView.onDidDismiss().then(()=>{e.global.RestoreShortCutAct("quick-post-view")}),e.global.StoreShortCutAct("quick-post-view"),e.QuickPostView.present()})),f.style("font-size","32px"),f.style("font-weight","bold"),f.parent(o);let u,p=s.createDiv();p.style("color","#888"),s.createDiv(`${e.lang.text.PostViewer.CreateTime}: ${new Date(e.PostInfo.create_time).toLocaleString()}`).parent(p),e.PostInfo.create_time!=e.PostInfo.modify_time&&s.createDiv(`${e.lang.text.PostViewer.ModifyTime}: ${new Date(e.PostInfo.modify_time).toLocaleString()}`).parent(p),p.parent(o);try{u=e.nakama.usernameOverride[e.PostInfo.server.isOfficial][e.PostInfo.server.target][e.PostInfo.creator_id]||e.PostInfo.creator_name}catch{u=e.PostInfo.creator_name}let v=s.createSpan(u);v.style("color",`#${e.PostInfo.UserColor}`),v.style("font-weight","bold"),v.style("font-size","17px"),v.style("cursor","pointer"),v.mouseClicked(()=>{if("me"==e.PostInfo.creator_id)e.nakama.open_profile_page();else try{let g=e.PostInfo.server.isOfficial,C=e.PostInfo.server.target,T=e.PostInfo.creator_id;T==e.nakama.servers[g][C].session.user_id?e.nakama.open_profile_page({isOfficial:g,target:C}):e.nakama.open_others_profile({info:{user:e.nakama.load_other_user(T,g,C)},group:{server:{isOfficial:g,target:C}}})}catch(g){e.p5toast.show({text:`${e.lang.text.PostViewer.CannotOpenProfile}: ${g}`})}}),v.parent(o);let R=[];if(e.PostInfo.content){var S;let g=(yield U.xI(e.PostInfo.content)).split("\n"),C=[];for(let l=0,k=g.length;l<k;l++){let M=!1,fe=g[l].length-1,n=0;try{let a=g[l].indexOf("}</p>");n=Number(g[l].substring(4,a)),M=0==g[l].indexOf("<p>{")&&g[l].indexOf("}</p>")==fe-4&&!isNaN(n)}catch{}if(M){if(e.p5loading.update({id:"postviewer",message:`${e.lang.text.PostViewer.PreparingPost}: ${e.PostInfo.attachments[n].filename}`,progress:n/e.PostInfo.attachments.length,forceEnd:null}),!Number.isNaN(n)&&!R.includes(n)&&R.push(n),e.PostInfo.server.local)try{if(e.PostInfo.attachments[n].blob)throw"blob \uc900\ube44\ub418\uc5b4\uc788\uc74c";let a=yield e.indexed.loadBlobFromUserPath(e.PostInfo.attachments[n].path,e.PostInfo.attachments[n].type);e.PostInfo.attachments[n].blob=a}catch{}else try{if(e.PostInfo.attachments[n].blob)throw"blob \uc900\ube44\ub418\uc5b4\uc788\uc74c";e.PostInfo.attachments[n].alt_path=`servers/${e.PostInfo.server.isOfficial}/${e.PostInfo.server.target}/posts/${e.PostInfo.creator_id}/${e.PostInfo.id}/[${l}]${e.PostInfo.attachments[l].filename}`;let a=yield e.nakama.sync_load_file(e.PostInfo.attachments[n],e.PostInfo.server.isOfficial,e.PostInfo.server.target,"server_post",e.PostInfo.creator_id,`${e.PostInfo.id}_attach_${n}`,!1);e.PostInfo.attachments[n].blob=a.value}catch{}switch(e.PostInfo.attachments[n].viewer){case"image":{let a=e.PostInfo.attachments[n].url;if(!a)try{a=URL.createObjectURL(e.PostInfo.attachments[n].blob),setTimeout(()=>{URL.revokeObjectURL(a)},100)}catch(d){console.log("\uac8c\uc2dc\ubb3c image \ucca8\ubd80\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \uc624\ub958: ",d)}let c=s.createP();c.parent(o);let h=s.createImg(a,`${n}`);h.style("cursor","pointer"),h.mouseClicked(()=>{let d,I,b;e.global.PageDismissAct[e.ModalDismissId]=$=>{e.ExitModalAct($)};try{b=e.PostInfo.creator_id,d=e.PostInfo.server.isOfficial,I=e.PostInfo.server.target}catch{d="local"}e.IsFocusOnHere=!1;let x=JSON.parse(JSON.stringify(e.PostInfo.attachments[n]));x.filename=`[${n}] ${x.filename}`,e.global.ActLikeModal("portal/community/post-viewer/ionic-viewer",{info:{content:x,sender_id:b},isOfficial:d,target:I,path:e.PostInfo.attachments[n].path,relevance:e.RearrangedRelevance,noEdit:!0,dismiss:e.ModalDismissId})}),h.parent(c),g[l]=c}break;case"audio":{let a=e.PostInfo.attachments[n].url;if(!a)try{a=URL.createObjectURL(e.PostInfo.attachments[n].blob),e.FileURLs.push(a)}catch(d){console.log("\uac8c\uc2dc\ubb3c audio \ucca8\ubd80\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \uc624\ub958: ",d)}let c=s.createP(),h=s.createAudio([a]);h.showControls(),h.elt.onplay=()=>{for(let d=0,I=e.PlayableElements.length;d<I;d++)try{d!=n&&e.PlayableElements[d].pause()}catch{}},h.parent(c),g[l]=c,e.PlayableElements[n]=h.elt}break;case"video":{let a=e.PostInfo.attachments[n].url;if(!a)try{a=URL.createObjectURL(e.PostInfo.attachments[n].blob),e.FileURLs.push(a)}catch(d){console.log("\uac8c\uc2dc\ubb3c video \ucca8\ubd80\ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \uc624\ub958: ",d)}let c=s.createP(),h=s.createVideo([a]);h.style("width","100%"),h.style("height","auto"),h.showControls(),h.parent(c),g[l]=c,e.PlayableElements[n]=h.elt}break;case"godot":{let a=`PostViewer_godot_pck_${n}`,c=s.createDiv();c.id(a),c.style("width","100%"),c.style("height","432px"),c.style("margin-top","8px"),g[l]=c,setTimeout(()=>{if(e.AlreadyHaveGodot||e.global.ArcadeLoaded)try{w(c,n),c.mouseClicked(()=>{let h,d,I;e.global.PageDismissAct[e.ModalDismissId]=x=>{e.ExitModalAct(x)};try{I=e.PostInfo.creator_id,h=e.PostInfo.server.isOfficial,d=e.PostInfo.server.target}catch{h="local"}e.IsFocusOnHere=!1;let b=JSON.parse(JSON.stringify(e.PostInfo.attachments[n]));b.filename=`[${n}] ${b.filename}`,e.global.ActLikeModal("portal/community/post-viewer/ionic-viewer",{info:{content:b,sender_id:I},isOfficial:h,target:d,path:e.PostInfo.attachments[n].path,relevance:e.RearrangedRelevance,noEdit:!0,dismiss:e.ModalDismissId})})}catch(h){console.log("\ud504\ub808\uc784 \uc0ad\uc81c \ud589\ub3d9\uc2e4\ud328: ",h)}else e.AlreadyHaveGodot=!0,e.PostInfo.attachments[n].cont=e.cont,e.global.CreateGodotIFrameWithDuplicateAct(e.PostInfo.attachments[n],a,{path:`tmp_files/duplicate/${e.PostInfo.attachments[n].filename}`,quit_ionic:()=>{try{w(c,n),c.mouseClicked(()=>{let h,d,I;e.global.PageDismissAct[e.ModalDismissId]=x=>{e.ExitModalAct(x)};try{I=e.PostInfo.creator_id,h=e.PostInfo.server.isOfficial,d=e.PostInfo.server.target}catch{h="local"}e.IsFocusOnHere=!1;let b=JSON.parse(JSON.stringify(e.PostInfo.attachments[n]));b.filename=`[${n}] ${b.filename}`,e.global.ActLikeModal("portal/community/post-viewer/ionic-viewer",{info:{content:b,sender_id:I},isOfficial:h,target:d,path:e.PostInfo.attachments[n].path,relevance:e.RearrangedRelevance,noEdit:!0,dismiss:e.ModalDismissId})})}catch(h){console.log("\ud504\ub808\uc784 \uc0ad\uc81c \ud589\ub3d9\uc2e4\ud328: ",h)}}})},100*n)}break;case"blender":{let a=s.createDiv();a.style("position","relative"),a.style("width","100%"),a.style("height","432px"),a.elt.onwheel=()=>!1,a.elt.oncontextmenu=()=>!1,g[l]=a;let c=e.global.load_blender_file(a.elt,e.PostInfo.attachments[n],()=>{},()=>{},e.cont);e.blenderViewers.push(c)}break;case"code":case"text":if("text/html"==e.PostInfo.attachments[n].type)try{if(!e.PostInfo.attachments[n].blob||!e.PostInfo.attachments[n].blob.size){if(e.PostInfo.attachments[n].url){let d=yield fetch(e.PostInfo.attachments[n].url);if(d.ok){let I=yield d.blob();e.PostInfo.attachments[n].alt_path=`servers/${e.PostInfo.server.isOfficial}/${e.PostInfo.server.target}/posts/${e.PostInfo.creator_id}/${e.PostInfo.id}/[${n}]${e.PostInfo.attachments[n].filename}`,yield e.indexed.saveBlobToUserPath(I,e.PostInfo.attachments[n].alt_path)}}let h=yield e.indexed.loadBlobFromUserPath(e.PostInfo.attachments[n].alt_path||e.PostInfo.attachments[n].path,e.PostInfo.attachments[n].type);e.PostInfo.attachments[n].blob=h}const a=URL.createObjectURL(e.PostInfo.attachments[n].blob);e.FileURLs.push(a);let c=s.createElement("iframe");c.style("width","100%"),c.style("border","0"),c.style("height","432px"),c.attribute("src",a),g[l]=c;break}catch(a){console.log("HTML \ud30c\uc77c \uc77d\uae30 \uc2e4\ud328: ",a)}default:{let a=s.createDiv();a.parent(o),w(a,n),a.mouseClicked(()=>{let c,h,d;e.global.PageDismissAct[e.ModalDismissId]=b=>{e.ExitModalAct(b)};try{d=e.PostInfo.creator_id,c=e.PostInfo.server.isOfficial,h=e.PostInfo.server.target}catch{c="local"}e.IsFocusOnHere=!1;let I=JSON.parse(JSON.stringify(e.PostInfo.attachments[n]));I.filename=`[${n}] ${I.filename}`,e.global.ActLikeModal("portal/community/post-viewer/ionic-viewer",{info:{content:I,sender_id:d},isOfficial:c,target:h,path:e.PostInfo.attachments[n].path,relevance:e.RearrangedRelevance,noEdit:!0,dismiss:e.ModalDismissId})}),g[l]=a}}}else try{let a=e.global.HTMLDecode(g[l].replace("<p>","").replace("</p>","")),c=JSON.parse(a),d=s.createDiv(`[${c.i}] ${e.PostInfo.attachments[c.i].filename} (${c.t})`);d.style("background-color","#8888"),d.style("width","fit-content"),d.style("height","fit-content"),d.style("border-radius","16px"),d.style("padding","8px 16px"),d.style("margin","8px 0px"),d.style("cursor","pointer"),g[l]=d,C.push(()=>{let I=e.PlayableElements[c.i],b=c.t.split(":"),x=0,$=1;for(let D=b.length-1;D>=0;D--){let ge=Number(b.pop());x+=ge*$,$*=60}d.mouseClicked(()=>{try{I.currentTime=x,I.play()}catch{}})})}catch{}}const T=(null===(S=e.PostInfo.attachments)||void 0===S?void 0:S.length)||0;for(let l=0;l<T;l++)R.includes(l)||R.push(l);for(let l of R){let k=JSON.parse(JSON.stringify(e.PostInfo.attachments[l]));k.filename=`[${l}] ${k.filename}`,e.RearrangedRelevance.push({content:k})}let j=[],F=()=>{if(j.length){let l=j.join("\n"),k=s.createDiv();k.style("width","100%"),k.elt.innerHTML=l,k.parent(o),j.length=0}};for(let l=0,k=g.length;l<k;l++)"string"==typeof g[l]?j.push(g[l]):(F(),g[l].parent(o),e.RearrangedContents.push(g[l]));F();for(let l=0,k=C.length;l<k;l++)C[l]();for(let l of e.blenderViewers)l.windowResized()}e.ContentChanging=!1,e.p5loading.update({id:"postviewer",message:`${e.lang.text.PostViewer.ReadyToSee}: ${e.PostInfo.title}`,progress:1,forceEnd:350})});let w=(f,p)=>{this.PostInfo.attachments[p].blob=null,f.style("width","160px"),f.style("height","112px"),f.style("overflow","hidden"),f.style("background-color","grey"),f.style("margin-top","8px"),f.style("border-radius","8px"),f.style("cursor","pointer");let _=s.createP(this.PostInfo.attachments[p].filename);_.style("margin","0px 4px"),_.style("text-align","start"),_.parent(f);let u=s.createDiv();u.style("background-color","white"),u.style("margin-top","2px"),u.style("position","relative"),u.style("width","100%"),u.style("height","2px"),u.parent(f);let v=s.createSpan(this.lang.text.PostViewer.OpenFromViewer);v.style("margin","2px 4px 0px 4px"),v.style("text-align","start"),v.style("display","grid"),v.parent(f)}})}CheckIfDismissAct(e){"quick_post_link_qr"===e.target.id&&this.QuickPostView.dismiss()}FocusOnIndexInput(){this.CanInputValue=!0,setTimeout(()=>{var e;null===(e=document.getElementById(this.RelevancesInputId))||void 0===e||e.focus()},100)}ChangeRelevanceIndex(e){if("Enter"==e.key){let o=Number(e.target.value||e.target.placeholder);o=Math.max(Math.min(o,this.nakama.posts.length),1),this.ChangeToAnother(o-this.CurrentIndex),setTimeout(()=>{this.CanInputValue=!1},0)}}EditPost(){this.navCtrl.pop(),this.nakama.EditPost(this.PostInfo)}ionViewWillLeave(){this.p5loading.update({id:"postviewer",forceEnd:0},!0),this.WaitingLoaded=!1,delete this.global.p5KeyShortCut.Escape,this.global.RestoreShortCutAct("post-viewer"),this.IsFocusOnHere=!1}RemovePost(){var e=this;this.alertCtrl.create({header:this.lang.text.PostViewer.RemovePost,message:this.lang.text.ChatRoom.CannotUndone,buttons:[{text:this.lang.text.ChatRoom.Delete,cssClass:"redfont",handler:()=>{!function(){var s=(0,V.A)(function*(){yield e.nakama.RemovePost(e.PostInfo),e.navCtrl.pop()});return function(){return s.apply(this,arguments)}}()()}}]}).then(o=>o.present())}ngOnDestroy(){this.route.queryParams.unsubscribe(),this.cont.abort("\uac8c\uc2dc\ubb3c \ubdf0\uc5b4 \ubc97\uc5b4\ub0a8"),this.cont=null;for(let e=0,o=this.FileURLs.length;e<o;e++)URL.revokeObjectURL(this.FileURLs[e]);for(let e=0,o=this.blenderViewers.length;e<o;e++)this.blenderViewers[e].remove();this.p5canvas&&this.p5canvas.remove(),this.global.portalHint=!0}}return(i=m).\u0275fac=function(e){return new(e||i)(t.rXU(N.q9),t.rXU(H.y),t.rXU(X.n),t.rXU(B.X),t.rXU(y.hG),t.rXU(Y.z3),t.rXU(Q.G),t.rXU(O.nX),t.rXU(O.Ix),t.rXU(W.f))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-post-viewer"]],viewQuery:function(e,o){if(1&e&&t.GBs(J,5),2&e){let s;t.mGM(s=t.lsd())&&(o.QuickPostView=s.first)}},decls:22,vars:12,consts:[["QuickPostView",""],[1,"ion-no-border"],["slot","start"],["defaultHref","portal/community"],["class","relevance_change","style","padding-right: 16px;","slot","end","name","menu-outline",3,"click",4,"ngIf"],["style","position: relative;","slot","end",4,"ngIf"],["class","relevance_change","style","padding-right: 4px;","slot","end","name","arrow-back-circle-outline",3,"click",4,"ngIf"],["slot","end",3,"click",4,"ngIf"],["slot","end",4,"ngIf"],["class","relevance_change","style","padding-right: 16px; padding-left: 4px;","slot","end","name","arrow-forward-circle-outline",3,"click",4,"ngIf"],[2,"height","100%","overflow-y","auto",3,"id"],["style","width: 100%; height: auto;","alt","MainImage",3,"src",4,"ngIf"],[2,"padding","16px","height","100%","user-select","text",3,"id"],["style","width: 100%; background-color: black;",4,"ngIf"],[1,"transparent-modal"],["slot","end","name","menu-outline",1,"relevance_change",2,"padding-right","16px",3,"click"],["slot","end",2,"position","relative"],[1,"shortcut_hint","shortcut_change_viewer",2,"right","-4px"],["slot","end","name","arrow-back-circle-outline",1,"relevance_change",2,"padding-right","4px",3,"click"],["slot","end",3,"click"],["slot","end"],["type","number",2,"width","50px","text-align","right",3,"change","keydown","id","placeholder"],[1,"shortcut_hint","shortcut_change_viewer"],["slot","end","name","arrow-forward-circle-outline",1,"relevance_change",2,"padding-right","16px","padding-left","4px",3,"click"],["alt","MainImage",2,"width","100%","height","auto",3,"src"],[2,"width","100%","background-color","black"],[2,"position","relative"],["class","shortcut_hint",4,"ngIf"],["expand","block",3,"click"],["color","danger","expand","block",3,"click"],[1,"shortcut_hint"],["id","quick_post_link_qr",1,"OutterModal",3,"click"],[2,"display","flex","justify-content","center","align-items","center"],[2,"width","400px","min-height","455px","background-color","var(--chatroom-background)","text-align","center","padding","16px"],["style","width: 100%; height: auto; cursor: copy; margin-bottom: 8px;","alt","QuickPostViewLink",3,"src","click",4,"ngIf"],["button","",3,"click"],[1,"ion-text-center"],["alt","QuickPostViewLink",2,"width","100%","height","auto","cursor","copy","margin-bottom","8px",3,"click","src"]],template:function(e,o){1&e&&(t.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s(),t.j41(4,"ion-buttons",2),t.nrm(5,"ion-back-button",3),t.k0s(),t.DNE(6,z,1,0,"ion-icon",4)(7,K,3,0,"div",5)(8,Z,1,0,"ion-icon",6)(9,q,2,1,"ion-label",7)(10,ee,3,3,"ion-label",8)(11,te,3,0,"div",5)(12,oe,1,0,"ion-icon",9),t.k0s()(),t.j41(13,"ion-content")(14,"div",10)(15,"div"),t.DNE(16,ne,1,1,"img",11),t.nrm(17,"div",12),t.DNE(18,ae,12,4,"table",13),t.k0s()(),t.j41(19,"ion-modal",14,0),t.DNE(21,le,7,2,"ng-template"),t.k0s()()),2&e&&(t.R7$(3),t.JRh(o.lang.text.PostViewer.Title),t.R7$(3),t.Y8G("ngIf",o.isOwner&&o.CurrentIndex>=0),t.R7$(),t.Y8G("ngIf",o.global.ShowHint&&o.HavePosts),t.R7$(),t.Y8G("ngIf",o.HavePosts),t.R7$(),t.Y8G("ngIf",o.HavePosts&&!o.CanInputValue),t.R7$(),t.Y8G("ngIf",o.HavePosts&&o.CanInputValue),t.R7$(),t.Y8G("ngIf",o.global.ShowHint&&o.HavePosts),t.R7$(),t.Y8G("ngIf",o.HavePosts),t.R7$(2),t.Y8G("id",o.ScrollPostId),t.R7$(2),t.Y8G("ngIf",o.PostInfo.mainImage&&o.PostInfo.mainImage.MainThumbnail),t.R7$(),t.Y8G("id",o.PostContentId),t.R7$(),t.Y8G("ngIf",o.isOwner&&o.CurrentIndex>=0))},dependencies:[A.bT,y.Jm,y.QW,y.W9,y.eU,y.iq,y.uz,y.he,y.BC,y.ai,y.Sb,y.el]}),m})()},{path:"ionic-viewer",loadChildren:()=>P.e(4803).then(P.bind(P,4803)).then(i=>i.IonicViewerPageModule)}];let de=(()=>{var i;class m{}return(i=m).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[O.iI.forChild(ce),O.iI]}),m})(),he=(()=>{var i;class m{}return(i=m).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[A.MD,L.YN,y.bv,de]}),m})()}}]);