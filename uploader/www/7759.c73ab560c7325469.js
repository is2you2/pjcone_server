"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7759],{7759:(ie,F,h)=>{h.r(F),h.d(F,{AddPostPageModule:()=>ee});var C=h(177),k=h(4341),y=h(5374),A=h(9858),b=h(467),S=h(4237),R=h(5402),O=h(8326),$=h(92),t=h(3953),L=h(482),j=h(4234),D=h(3656),M=h(9900),U=h(755),N=h(345),B=h(7476);function E(d,f){if(1&d&&(t.j41(0,"ion-title"),t.EFF(1),t.k0s()),2&d){const c=t.XpG();t.R7$(),t.JRh(c.lang.text.AddPost.EditTitle)}}function V(d,f){if(1&d&&(t.j41(0,"ion-title"),t.EFF(1),t.k0s()),2&d){const c=t.XpG();t.R7$(),t.JRh(c.lang.text.AddPost.Title)}}function G(d,f){if(1&d){const c=t.RV6();t.j41(0,"ion-item",8),t.bIt("click",function(){const i=t.eBV(c).index,s=t.XpG(2);return t.Njj(s.select_server(i,!0))}),t.j41(1,"ion-label"),t.EFF(2),t.k0s()()}if(2&d){const c=f.$implicit;t.R7$(2),t.JRh(c.name)}}function W(d,f){if(1&d){const c=t.RV6();t.j41(0,"ion-accordion-group",25,0),t.bIt("click",function(){t.eBV(c);const i=t.XpG();return t.Njj(i.isExpanded=!0)}),t.j41(2,"ion-accordion",26)(3,"ion-item",27)(4,"ion-label",10),t.EFF(5),t.k0s(),t.j41(6,"ion-label",28),t.EFF(7),t.k0s(),t.nrm(8,"ion-icon",29),t.k0s(),t.j41(9,"div",30),t.DNE(10,G,3,1,"ion-item",31),t.k0s()()()}if(2&d){const c=t.XpG();t.Y8G("disabled",c.isSaveClicked)("value",c.isExpanded),t.R7$(5),t.JRh(c.lang.text.AddGroup.SelectServer),t.R7$(2),t.JRh(c.servers[c.index].name),t.R7$(3),t.Y8G("ngForOf",c.servers)}}function X(d,f){if(1&d){const c=t.RV6();t.j41(0,"div",32)(1,"ion-item",13)(2,"ion-toggle",33),t.mxI("ngModelChange",function(i){t.eBV(c);const s=t.XpG();return t.DH7(s.userInput.isNSFW,i)||(s.userInput.isNSFW=i),t.Njj(i)}),t.EFF(3),t.k0s()(),t.j41(4,"div",34),t.nrm(5,"img",35),t.k0s()()}if(2&d){const c=t.XpG();t.R7$(2),t.R50("ngModel",c.userInput.isNSFW),t.R7$(),t.JRh(c.lang.text.AddPost.NSFW),t.R7$(2),t.Aen(c.userInput.isNSFW?"filter: blur(16px);":""),t.Y8G("src",c.MainPostImage,t.B4B)}}function Y(d,f){1&d&&(t.j41(0,"div",36),t.EFF(1,"Enter"),t.k0s())}function H(d,f){if(1&d&&t.nrm(0,"ion-icon",41),2&d){const c=t.XpG().$implicit;t.Y8G("name",c.icon||"close-circle")}}function J(d,f){if(1&d&&t.nrm(0,"img",42),2&d){const c=t.XpG().$implicit;t.Y8G("src","assets/icon/"+c.icon_img,t.B4B)("alt",c.title)}}function z(d,f){if(1&d){const c=t.RV6();t.j41(0,"div",37)(1,"div",38),t.bIt("click",function(){const i=t.eBV(c).$implicit;return t.Njj(i.act())})("contextmenu",function(){const i=t.eBV(c).$implicit;return t.Njj(i.context?i.context():null)}),t.DNE(2,H,1,1,"ion-icon",39)(3,J,1,2,"img",40),t.j41(4,"div"),t.EFF(5),t.k0s()()()}if(2&d){const c=f.$implicit;t.R7$(),t.Aen("cursor: "+(c.cursor||"pointer")+";"),t.Y8G("hidden",c.isHide),t.R7$(),t.Y8G("ngIf",c.icon),t.R7$(),t.Y8G("ngIf",c.icon_img),t.R7$(2),t.JRh(c.name)}}function Q(d,f){if(1&d){const c=t.RV6();t.j41(0,"ion-item",43),t.bIt("click",function(){const i=t.eBV(c),s=i.$implicit,n=i.index,u=t.XpG();return t.Njj(u.open_viewer(s,n))})("contextmenu",function(){const i=t.eBV(c).index,s=t.XpG();return t.Njj(s.PostAttachContextMenu(i))}),t.j41(1,"ion-label"),t.EFF(2),t.k0s(),t.j41(3,"div",44),t.nrm(4,"img",45),t.k0s()()}if(2&d){const c=f.$implicit,e=f.index,i=t.XpG();t.Y8G("disabled",i.isSaveClicked),t.R7$(2),t.JRh("{"+e+"} "+c.filename),t.R7$(2),t.Y8G("src",c.thumbnail,t.B4B)}}function K(d,f){1&d&&(t.j41(0,"div",36),t.EFF(1,"Ctrl + Enter"),t.k0s())}const Z=[{path:"",component:(()=>{var d;class f{constructor(e,i,s,n,u,a,l,m,_,o,p){var v,r=this;this.global=e,this.lang=i,this.navCtrl=s,this.nakama=n,this.p5toast=u,this.indexed=a,this.loadingCtrl=l,this.sanitizer=m,this.route=_,this.router=o,this.floatButton=p,this.servers=[],this.userInput={id:void 0,title:void 0,content:void 0,creator_id:void 0,creator_name:void 0,UserColor:void 0,create_time:void 0,modify_time:void 0,server:void 0,mainImage:void 0,attachments:[],OutSource:void 0,isNSFW:!1},this.index=0,this.CheckIfTitleInputFocus=!1,this.isModify=!1,this.isExpanded=!1,this.isSaveClicked=!1,this.isServerChanged=!1,this.useVoiceRecording=!1,this.MainPostImage=null,this.extended_buttons=[{icon:"image-outline",name:this.lang.text.AddPost.MainPostImage,act:()=>{this.isSaveClicked||(this.MainPostImage?(URL.revokeObjectURL(this.MainPostImage),this.MainPostImage=null,this.userInput.mainImage=void 0,document.getElementById("PostMainImage_sel").value=""):document.getElementById("PostMainImage_sel").click())},context:()=>(function(){var g=(0,b.A)(function*(){let x;try{try{let P=yield r.global.GetValueFromClipboard();switch(P.type){case"text/plain":x=P.value;break;case"image/png":return void r.ChangeMainPostImage({target:{files:[P.value]}});case"error":throw P.value}}catch(P){throw P}try{let P=r.global.Base64ToBlob(x),T=x.split(";")[0].split(":")[1],te=new File([P],`${r.lang.text.ChatRoom.FileLink}.${T.split("/").pop()}`,{type:T});throw r.ChangeMainPostImage({target:{files:[te]}}),"done"}catch(P){if("done"===P)throw P}try{if(0!=x.indexOf("http:")&&0!=x.indexOf("https:"))throw"\uc62c\ubc14\ub978 \uc6f9 \uc8fc\uc18c\uac00 \uc544\ub2d8"}catch(P){throw P}let I={};I.url=x,I.content_related_creator=[],I.content_related_creator.push({user_id:"local"==r.isOfficial?"local":r.nakama.servers[r.isOfficial][r.target].session.user_id,timestamp:(new Date).getTime(),display_name:r.nakama.users.self.display_name,various:"link"}),I.content_creator={user_id:"local"==r.isOfficial?"local":r.nakama.servers[r.isOfficial][r.target].session.user_id,timestamp:(new Date).getTime(),display_name:r.nakama.users.self.display_name,various:"link"};let w=I.url.split(".");I.file_ext=w.pop().split("?").shift(),I.filename=decodeURIComponent(`${w.pop().split("/").pop()||r.lang.text.ChatRoom.ExternalLinkFile}.${I.file_ext}`).split("_").pop(),r.global.set_viewer_category_from_ext(I),I.type="",I.typeheader=I.viewer,r.global.modulate_thumbnail(I,I.url,r.cont),r.userInput.mainImage=I,r.MainPostImage=I.url}catch(I){throw"done"==I?I:`\uc778\uc2dd \ubd88\uac00\ub2a5\ud55c URL \uc815\ubcf4: ${I}`}});return function(){return g.apply(this,arguments)}}()(),!1)},{icon:"document-attach-outline",name:this.lang.text.ChatRoom.attachments,act:()=>{this.isSaveClicked||this.new_attach({detail:{value:"load"}})},context:()=>{if(!this.isSaveClicked)return this.new_attach({detail:{value:"link"}}),!1}},{icon_img:"voidDraw.png",name:this.lang.text.ChatRoom.voidDraw,act:(v=(0,b.A)(function*(){r.isSaveClicked||(r.WillLeavePageInside=!0,r.global.PageDismissAct["add-post-new-image"]=function(){var g=(0,b.A)(function*(x){x.data&&(r.AddAttachTextForm(),yield r.voidDraw_fileAct_callback(x)),delete r.global.PageDismissAct["add-post-new-image"]});return function(x){return g.apply(this,arguments)}}(),r.global.ActLikeModal("portal/community/add-post/void-draw",{dismiss:"add-post-new-image"}))}),function(){return v.apply(this,arguments)})},{icon:"reader-outline",name:this.lang.text.ChatRoom.newText,act:function(){var v=(0,b.A)(function*(){let g={info:{content:{is_new:void 0,type:"text/plain",viewer:"text",filename:void 0,path:void 0}},no_edit:void 0,dismiss:"add-post-viewer"};g.info.content.is_new="text",g.info.content.filename=r.global.TextEditorNewFileName(),g.no_edit=!0,r.WillLeavePageInside=!0,r.global.PageDismissAct["add-post-viewer"]=x=>{if(x.data){let I=r.global.TextEditorAfterAct(x.data,{display_name:r.nakama.users.self.display_name});r.AddAttachTextForm(),r.userInput.attachments.push(I)}delete r.global.PageDismissAct["add-post-viewer"]},r.global.ActLikeModal("portal/community/add-post/ionic-viewer",g)});return function(){return v.apply(this,arguments)}}()},{icon:"camera-outline",name:this.lang.text.ChatRoom.Camera,act:function(){var v=(0,b.A)(function*(){if(!r.isSaveClicked)try{let g=yield r.global.from_camera("tmp_files/post/",{user_id:"local"==r.isOfficial?void 0:r.nakama.servers[r.isOfficial][r.target].session.user_id,display_name:r.nakama.users.self.display_name});r.AddAttachTextForm(),r.userInput.attachments.push(g)}catch(g){console.log("\ucd2c\uc601 \uc2e4\ud328: ",g),r.p5toast.show({text:`${r.lang.text.GlobalAct.ErrorFromCamera}: ${g}`})}});return function(){return v.apply(this,arguments)}}()},{icon:"mic-circle-outline",name:this.lang.text.ChatRoom.Voice,act:function(){var v=(0,b.A)(function*(){r.isSaveClicked||(r.useVoiceRecording=!r.useVoiceRecording,r.useVoiceRecording?(yield R.R.hasAudioRecordingPermission()).value?(r.extended_buttons[5].icon="stop-circle-outline",r.p5toast.show({text:r.lang.text.ChatRoom.StartVRecord}),r.p5StartVoiceTimer(),yield R.R.startRecording(),r.CreateFloatingVoiceTimeHistoryAddButton()):(r.useVoiceRecording=!1,r.extended_buttons[5].icon="mic-circle-outline",yield R.R.requestAudioRecordingPermission()):yield r.StopAndSaveVoiceRecording())});return function(){return v.apply(this,arguments)}}()},{icon:"cloud-done-outline",name:this.lang.text.ChatRoom.Detour,act:()=>{this.toggle_custom_attach()}},{icon:"notifications-circle-outline",name:this.lang.text.AddPost.NoOutLink,act:()=>{this.toggle_open_link()}}],this.lock_modal_open=!1,this.useFirstCustomCDN=0,this.UseOutLink=!1,this.isApplyPostData=!1,this.WillLeavePage=!1,this.WillLeavePageInside=!1}ngOnDestroy(){this.route.queryParams.unsubscribe(),this.TitleInput.onpaste=null,this.TitleInput.onfocus=null,this.TitleInput.onblur=null,this.ContentTextArea.onpaste=null,this.p5StartVoiceTimer=null,this.p5StopVoiceTimer=null,this.cont.abort(),this.cont=null,this.p5canvas&&this.p5canvas.remove(),delete this.nakama.StatusBarChangedCallback,this.useVoiceRecording&&this.StopAndSaveVoiceRecording();try{this.MainPostImage&&setTimeout(()=>{URL.revokeObjectURL(this.MainPostImage)},1e3)}catch{}this.indexed.GetFileListFromDB("tmp_files/post",e=>e.forEach(i=>this.indexed.removeFileFromUserPath(i)))}ngOnInit(){var e=this;this.cont=new AbortController,this.useFirstCustomCDN=Number(localStorage.getItem("useFFSCDN"))||0,this.toggle_custom_attach(this.useFirstCustomCDN),this.UseOutLink=!0,this.toggle_open_link(this.UseOutLink),this.route.queryParams.subscribe(function(){var i=(0,b.A)(function*(s){const n=e.router.getCurrentNavigation().extras.state;let u=!1;if(n&&(u=!!n.act,n.data&&(e.userInput=n.data)),e.lock_modal_open=!1,u){if(e.LoadListServer(),e.servers.length>1&&(e.index=1),n&&n.data){let a=`${e.userInput.server.isOfficial}/${e.userInput.server.target}`;for(let l=0,m=e.servers.length;l<m;l++)if(`${e.servers[l].isOfficial}/${e.servers[l].target}`==a){e.index=l;break}if(e.userInput.mainImage){let l=e.userInput.mainImage.url;l||(l=URL.createObjectURL(e.userInput.mainImage.blob)),e.MainPostImage=l}for(let l=0,m=e.userInput.attachments.length;l<m;l++)if("image"==e.userInput.attachments[l].viewer)if(e.userInput.attachments[l].url)e.userInput.attachments[l].thumbnail=e.userInput.attachments[l].url;else{let _=yield e.indexed.loadBlobFromUserPath(e.userInput.attachments[l].path,e.userInput.attachments[l].type),o=URL.createObjectURL(_);e.userInput.attachments[l].thumbnail=o,setTimeout(()=>{URL.revokeObjectURL(o)},1e3)}e.UseOutLink=!!e.userInput.OutSource,e.toggle_open_link(e.UseOutLink)}e.select_server(e.index),n&&n.data&&(e.OriginalInfo=JSON.parse(JSON.stringify(e.userInput)))}});return function(s){return i.apply(this,arguments)}}()),setTimeout(()=>{this.WillLeavePage||this.CreateDrop()},100),this.nakama.StatusBarChangedCallback=()=>{this.LoadListServer(),this.index=0}}LoadListServer(){this.servers=this.nakama.get_all_server_info(!0,!0),this.servers.unshift({name:this.lang.text.AddGroup.UseLocalStorage,isOfficial:"local",target:"target",local:!0})}WaitingCurrent(){var e=this;return(0,b.A)(function*(){for(;e.WillLeavePage;)yield new Promise(i=>setTimeout(i,0))})()}CreateDrop(){var e=this;let i=document.getElementById("p5Drop_addPost");this.p5canvas||(this.p5canvas=new O(s=>{let n=0;s.setup=()=>{let a=s.createCanvas(i.clientWidth,i.clientHeight);a.parent(i),s.pixelDensity(.1),a.drop(function(){var l=(0,b.A)(function*(m){yield e.selected_blobFile_callback_act(m.file)});return function(m){return l.apply(this,arguments)}}()),s.noLoop(),this.p5StartVoiceTimer=()=>{s.loop(),n=s.millis()},this.p5StopVoiceTimer=()=>{s.noLoop()}},s.draw=()=>{this.useVoiceRecording&&(this.extended_buttons[5].name=u(s.millis()-n))};let u=a=>{let l=a/1e3,m=s.floor(l)%60,_=l/60,o=s.floor(_)%60,p=s.floor(_/60);return p?`${p}:${s.nf(o,2)}:${s.nf(m,2)}`:`${o}:${s.nf(m,2)}`};s.mouseMoved=a=>{a.dataTransfer?(i.style.pointerEvents="all",i.style.backgroundColor="#0008"):(i.style.pointerEvents="none",i.style.backgroundColor="transparent")},s.keyPressed=function(){var a=(0,b.A)(function*(l){e.WillLeavePage||"Enter"!==l.key||(document.activeElement==e.TitleInput&&setTimeout(()=>{e.ContentTextArea.focus()},0),l.ctrlKey&&e.postData())});return function(l){return a.apply(this,arguments)}}()}))}ionViewWillEnter(){this.WillLeavePage=!1,this.TitleInput=document.getElementById("add_post_title").childNodes[1].childNodes[1].childNodes[1],this.TitleInput.onblur||(this.TitleInput.onblur=()=>{this.CheckIfTitleInputFocus=!1}),this.TitleInput.onfocus||(this.TitleInput.onfocus=()=>{this.CheckIfTitleInputFocus=!0}),this.TitleInput.onpaste||(this.TitleInput.onpaste=e=>{let i=[];for(const s of e.clipboardData.files)i.push({file:s});if(i.length)return 1==i.length&&this.ChangeMainPostImage({target:{files:[i[0].file]}}),!1}),this.ContentTextArea=document.getElementById("add_post_content"),setTimeout(()=>{"DesktopPWA"==$.aH&&(this.userInput.title?this.ContentTextArea.focus():this.TitleInput.focus())},200),this.ContentTextArea.onpaste=e=>{let i=[];for(const s of e.clipboardData.files)i.push({file:s});if(i.length){if(1==i.length)this.selected_blobFile_callback_act(i[0].file);else for(let s=0,n=i.length;s<n;s++)this.selected_blobFile_callback_act(i[s].file);return!1}},this.isModify=!!this.userInput.id}ionViewDidEnter(){this.WillLeavePageInside||this.global.StoreShortCutAct("AddPostPage"),this.WillLeavePageInside=!1,this.AddShortcut()}go_to_profile(){this.nakama.open_profile_page({isOfficial:this.isOfficial,target:this.target})}select_server(e,i=!1){this.index=e,this.userInput.server=this.servers[e],this.isExpanded=!1,this.isOfficial=this.servers[e].isOfficial,this.target=this.servers[e].target,i?this.isServerChanged=this.OriginalServerInfo!=`${this.isOfficial}/${this.target}`:this.OriginalServerInfo=`${this.isOfficial}/${this.target}`,this.userInput.creator_name=this.nakama.users.self.display_name;try{this.userInput.creator_id=this.nakama.servers[this.isOfficial][this.target].session.user_id,this.userInput.UserColor=(this.userInput.creator_id.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6),this.extended_buttons[7].isHide=2==this.useFirstCustomCDN}catch{this.userInput.creator_id="me",this.userInput.UserColor="888888",this.extended_buttons[7].isHide=!0,this.toggle_open_link(!0)}"DesktopPWA"==$.aH&&this.TitleInput&&this.TitleInput.focus()}AddShortcut(){this.global.p5key&&this.global.p5KeyShortCut&&(this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.navigateBack("portal/community")})}AddVoiceTimeHistory(){this.userInput.content?"\n"==this.userInput.content.charAt(this.userInput.content.length-1)?this.userInput.content+=`\n{"i":"n","t":"${this.extended_buttons[5].name}"}\n`:this.userInput.content+=`\n\n{"i":"n","t":"${this.extended_buttons[5].name}"}\n`:this.userInput.content=`{"i":"n","t":"${this.extended_buttons[5].name}"}\n\n`,this.ContentTextArea.focus()}CreateFloatingVoiceTimeHistoryAddButton(){this.floatButton.RemoveFloatButton("addpost-timer"),this.floatButton.AddFloatButton("addpost-timer","timer-outline").mouseClicked(()=>{this.AddVoiceTimeHistory(),this.p5toast.show({text:`${this.lang.text.AddPost.RecordVoiceTime}: ${this.extended_buttons[5].name}`})})}StopAndSaveVoiceRecording(){var e=this;return(0,b.A)(function*(){e.floatButton.RemoveFloatButton("addpost-timer");let i=yield e.loadingCtrl.create({message:e.lang.text.AddPost.SavingRecord});i.present();try{let s=yield e.global.StopAndSaveVoiceRecording();yield e.selected_blobFile_callback_act(s)}catch{}i.dismiss(),e.extended_buttons[5].icon="mic-circle-outline",e.extended_buttons[5].name=e.lang.text.ChatRoom.Voice,e.checkVoiceLinker()})()}checkVoiceLinker(){this.p5StopVoiceTimer&&this.p5StopVoiceTimer();let e=this.userInput.content.split("\n");for(let i=0,s=e.length;i<s;i++)try{let n=JSON.parse(e[i]);"n"==n.i&&(n.i=this.userInput.attachments.length-1),e[i]=JSON.stringify(n)}catch{}this.userInput.content=e.join("\n")}ChangeMainPostImage(e){let i=e.target.files[0],s={};s.filename=i.name,s.file_ext=i.name.split(".").pop()||i.type||this.lang.text.ChatRoom.unknown_ext,s.size=i.size,s.type=i.type||i.type_override,s.blob=i,s.path=`tmp_files/post/MainImage.${s.file_ext}`,this.userInput.mainImage=s;let n=URL.createObjectURL(i);this.indexed.saveBlobToUserPath(i,s.path),this.MainPostImage=n}selected_blobFile_callback_act(e,i=[],s="loaded",n){var u=this;return(0,b.A)(function*(){let a=u.global.selected_blobFile_callback_act(e,"tmp_files/post/",{user_id:"local"==u.isOfficial?"local":u.nakama.servers[u.isOfficial][u.target].session.user_id,display_name:u.nakama.users.self.display_name},s,i);u.create_selected_thumbnail(a),void 0===n?(u.AddAttachTextForm(),u.userInput.attachments.push(a)):u.userInput.attachments[n]=a,u.indexed.saveBlobToUserPath(a.blob,a.path)})()}AddAttachTextForm(){this.userInput.content?"\n"==this.userInput.content.charAt(this.userInput.content.length-1)?this.userInput.content+=`\n{${this.userInput.attachments.length}}\n\n`:this.userInput.content+=`\n\n{${this.userInput.attachments.length}}\n\n`:this.userInput.content=`{${this.userInput.attachments.length}}\n\n`,this.ContentTextArea.focus()}create_selected_thumbnail(e){var i=this;return(0,b.A)(function*(){if(i.global.set_viewer_category_from_ext(e),e.url){try{(yield fetch(e.url,{signal:i.cont.signal})).ok&&(e.thumbnail=e.url)}catch{}return void(e.typeheader=e.viewer)}try{e.thumbnail=yield i.indexed.loadBlobFromUserPath(e.path,e.type)}catch{}let s=URL.createObjectURL(e.blob);"image"===(e.typeheader=e.blob.type.split("/")[0]||e.viewer,setTimeout(()=>{URL.revokeObjectURL(s)},0),e.thumbnail=void 0,e.typeheader)&&(e.thumbnail=i.sanitizer.bypassSecurityTrustUrl(s))})()}voidDraw_fileAct_callback(e,i,s){var n=this;return(0,b.A)(function*(){let u=yield n.global.voidDraw_fileAct_callback(e,"tmp_files/post/",{user_id:"local"==n.isOfficial?"local":n.nakama.servers[n.isOfficial][n.target].session.user_id,display_name:n.nakama.users.self.display_name},i);u.thumbnail=n.sanitizer.bypassSecurityTrustUrl(e.data.img),void 0!==s?n.userInput.attachments[s]=u:n.userInput.attachments.push(u),e.data.loadingCtrl.dismiss()})()}new_attach(e){var i=this;return(0,b.A)(function*(){switch(e.detail.value){case"load":document.getElementById("add_post_input").click();break;case"link":let s;try{try{let a=yield i.global.GetValueFromClipboard();switch(a.type){case"text/plain":s=a.value;break;case"image/png":return void i.inputFileSelected({target:{files:[a.value]}});case"error":throw a.value}}catch(a){throw a}try{let a=i.global.Base64ToBlob(s),l=s.split(";")[0].split(":")[1],m=new File([a],`${i.lang.text.ChatRoom.FileLink}.${l.split("/").pop()}`,{type:l});throw yield i.selected_blobFile_callback_act(m),"done"}catch(a){if("done"===a)throw a}try{if(0!=s.indexOf("http:")&&0!=s.indexOf("https:"))throw"\uc62c\ubc14\ub978 \uc6f9 \uc8fc\uc18c\uac00 \uc544\ub2d8"}catch(a){throw a}let n={};n.url=s,n.content_related_creator=[],n.content_related_creator.push({user_id:"local"==i.isOfficial?"local":i.nakama.servers[i.isOfficial][i.target].session.user_id,timestamp:(new Date).getTime(),display_name:i.nakama.users.self.display_name,various:"link"}),n.content_creator={user_id:"local"==i.isOfficial?"local":i.nakama.servers[i.isOfficial][i.target].session.user_id,timestamp:(new Date).getTime(),display_name:i.nakama.users.self.display_name,various:"link"};let u=n.url.split(".");n.file_ext=u.pop().split("?").shift(),n.filename=decodeURIComponent(`${u.pop().split("/").pop()||i.lang.text.ChatRoom.ExternalLinkFile}.${n.file_ext}`).split("_").pop(),i.global.set_viewer_category_from_ext(n),n.type="",n.typeheader=n.viewer,i.global.modulate_thumbnail(n,n.url,i.cont),i.AddAttachTextForm(),i.userInput.attachments.push(n)}catch(n){throw"done"==n?n:`\uc778\uc2dd \ubd88\uac00\ub2a5\ud55c URL \uc815\ubcf4: ${n}`}}})()}PostAttachContextMenu(e){this.p5toast.show({text:`${this.lang.text.AddPost.RemoveAttach}: ${this.userInput.attachments[e].filename}`}),this.userInput.attachments.splice(e,1);let i=this.userInput.content.split("\n");for(let s=i.length-1;s>=0;s--){let n=!1,u=i[s].length-1,a=0;try{a=Number(i[s].substring(1,u)),n="{"==i[s].charAt(0)&&"}"==i[s].charAt(u)&&!isNaN(a)}catch{}if(n)if(e==a){if(""==i[s+1])try{i.splice(s+1,1)}catch{}i.splice(s,1)}else e<a&&(i[s]=`{${a-1}}`)}return this.userInput.content=i.join("\n"),!1}inputFileSelected(e){var i=this;return(0,b.A)(function*(){if(e.target.files.length)if(1!=e.target.files.length){let n=yield i.loadingCtrl.create({message:i.lang.text.ChatRoom.MultipleSend});n.present();for(let u=0,a=e.target.files.length;u<a;u++)n.message=`${a-u}: ${e.target.files[u].name}`,yield i.selected_blobFile_callback_act(e.target.files[u]);n.dismiss(),setTimeout(()=>{document.getElementById("add_post_input").value=""},300)}else{let n=yield i.loadingCtrl.create({message:i.lang.text.TodoDetail.WIP});n.present(),yield i.selected_blobFile_callback_act(e.target.files[0]),n.dismiss(),document.getElementById("add_post_input").value=""}})()}open_viewer(e,i){var s=this;let n=[];for(let u=0,a=this.userInput.attachments.length;u<a;u++)n.push({content:this.userInput.attachments[u]});this.lock_modal_open||(this.lock_modal_open=!0,this.global.PageDismissAct["add-post-open-viewer"]=function(){var u=(0,b.A)(function*(a){if(a.data)switch(a.data.type){case"image":let l=[];if(a.data.msg.content.content_related_creator&&(l=[...a.data.msg.content.content_related_creator]),a.data.msg.content.content_creator){let m=!1;for(let _=0,o=l.length;_<o;_++)if(l[_].user_id==a.data.msg.content.content_creator.user_id){m=!0;break}m||l.push(a.data.msg.content.content_creator)}return s.global.PageDismissAct["add-post-modify-image"]=function(){var m=(0,b.A)(function*(_){_.data&&(yield s.voidDraw_fileAct_callback(_,l,i)),delete s.global.PageDismissAct["add-post-modify-image"]});return function(_){return m.apply(this,arguments)}}(),yield s.WaitingCurrent(),s.WillLeavePageInside=!0,void s.global.ActLikeModal("portal/community/add-post/void-draw",{path:a.data.path||e.path,width:a.data.width,height:a.data.height,type:a.data.filetype,isDarkMode:a.data.isDarkMode,scrollHeight:a.data.scrollHeight,dismiss:"add-post-modify-image"});case"text":s.selected_blobFile_callback_act(a.data.blob,a.data.contentRelated,"textedit",i)}delete s.global.PageDismissAct["add-post-open-viewer"]});return function(a){return u.apply(this,arguments)}}(),this.WillLeavePageInside=!0,this.global.ActLikeModal("portal/community/add-post/ionic-viewer",{info:{content:e},path:e.path,alt_path:e.path,isOfficial:this.isOfficial,target:this.target,relevance:n,dismiss:"add-post-open-viewer"}))}toggle_custom_attach(e){var i=this;return(0,b.A)(function*(){switch(i.useFirstCustomCDN=(null!=e?e:i.useFirstCustomCDN+1)%2,i.useFirstCustomCDN){case 0:i.extended_buttons[6].icon="cloud-offline-outline",i.extended_buttons[6].name=i.lang.text.ChatRoom.Detour;break;case 1:i.extended_buttons[6].icon="cloud-done-outline",i.extended_buttons[6].name=i.lang.text.ChatRoom.useFSS;break;case 2:i.extended_buttons[6].icon="server-outline",i.extended_buttons[6].name=i.lang.text.ChatRoom.forceSQL}localStorage.setItem("useFFSCDN",`${i.useFirstCustomCDN}`)})()}toggle_open_link(e){var i=this;return(0,b.A)(function*(){i.UseOutLink=null!=e?e:!i.UseOutLink,i.UseOutLink?(i.extended_buttons[7].icon="link-outline",i.extended_buttons[7].name=i.lang.text.AddPost.UseOutLink):(i.extended_buttons[7].icon="notifications-circle-outline",i.extended_buttons[7].name=i.lang.text.AddPost.NoOutLink)})()}showPreview(){this.global.RemoveAllModals(()=>{this.navCtrl.navigateForward("portal/community/add-post/post-viewer",{state:{data:this.userInput,index:-1}})})}postData(){var e=this;return(0,b.A)(function*(){if(!e.userInput.title)return e.p5toast.show({text:e.lang.text.AddPost.NeedPostTitle}),void e.TitleInput.focus();let i=yield e.loadingCtrl.create({message:e.lang.text.AddPost.WIP});i.present(),e.useVoiceRecording&&(yield e.StopAndSaveVoiceRecording());let s=!!e.userInput.server.local;e.isApplyPostData=!0,e.isSaveClicked=!0;let n=e.userInput.server.isOfficial,u=e.userInput.server.target,a={};try{let l=e.nakama.servers[n][u].info;a.cdn_port=l.cdn_port,a.apache_port=l.apache_port}catch{a={}}if(e.isModify||e.isServerChanged){if(e.userInput.mainImage&&e.userInput.mainImage.url){try{let l=yield fetch(e.userInput.mainImage.url,{signal:e.cont.signal});l.ok&&(e.userInput.mainImage.blob=yield l.blob())}catch{}delete e.userInput.mainImage.thumbnail,delete e.userInput.mainImage.alt_path,e.userInput.mainImage.override_name=e.userInput.mainImage.url.split("/").pop(),delete e.userInput.mainImage.url}for(let l=0,m=e.userInput.attachments.length;l<m;l++)if(e.userInput.attachments[l].url){try{let _=yield fetch(e.userInput.attachments[l].url,{signal:e.cont.signal});_.ok&&(e.userInput.attachments[l].blob=yield _.blob())}catch{}delete e.userInput.attachments[l].thumbnail,delete e.userInput.attachments[l].alt_path,e.userInput.attachments[l].override_name=e.userInput.attachments[l].url.split("/").pop(),delete e.userInput.attachments[l].url}yield e.nakama.RemovePost(e.userInput),e.OriginalInfo&&(yield e.nakama.RemovePost(e.OriginalInfo))}try{if(!e.isModify||e.isServerChanged)if(s){let o=Number(yield e.indexed.loadTextFromUserPath("servers/local/target/posts/me/counter.txt"))||0;e.userInput.id=`LocalPost_${o}`;try{yield e.indexed.saveTextFileToUserPath(`${o+1}`,"servers/local/target/posts/me/counter.txt")}catch(p){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${p}`}),console.log(p)}}else try{let o=yield e.nakama.servers[n][u].client.readStorageObjects(e.nakama.servers[n][u].session,{object_ids:[{collection:"server_post",key:"Counter",user_id:e.nakama.servers[n][u].session.user_id}]}),p=0;o.objects.length&&(p=o.objects[0].value.counter),e.userInput.id=`ServerPost_${p}`,yield e.nakama.servers[n][u].client.writeStorageObjects(e.nakama.servers[n][u].session,[{collection:"server_post",key:"Counter",permission_write:1,permission_read:2,value:{counter:p+1}}])}catch(o){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${o}`}),console.log(o)}e.isModify?e.userInput.modify_time=(new Date).getTime():(e.userInput.create_time=(new Date).getTime(),e.userInput.modify_time=e.userInput.create_time);for(let o=0,p=e.userInput.attachments.length;o<p;o++)delete e.userInput.attachments[o].thumbnail;if(e.userInput.mainImage){if(i.message=e.lang.text.AddPost.SyncMainImage,e.userInput.mainImage.path=`servers/${n}/${u}/posts/${e.userInput.creator_id}/${e.userInput.id}/MainImage.${e.userInput.mainImage.file_ext}`,e.userInput.mainImage.thumbnail=e.MainPostImage,!e.userInput.mainImage.blob)try{let p=yield(yield fetch(e.MainPostImage)).blob();e.userInput.mainImage.blob=p}catch{}if(s)try{if(1!=e.useFirstCustomCDN)throw"FFS \uc0ac\uc6a9 \uc21c\uc704\uc5d0 \uc5c6\uc74c";let o;if(i.message=`${e.lang.text.AddPost.SyncMainImage}: ${e.userInput.mainImage.filename}`,o=yield e.global.try_upload_to_user_custom_fs(e.userInput.mainImage,e.nakama.users.self.display_name,i),!o)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";delete e.userInput.mainImage.path,delete e.userInput.mainImage.partsize,e.userInput.mainImage.url=o}catch{yield e.indexed.saveBlobToUserPath(e.userInput.mainImage.blob,e.userInput.mainImage.path)}else try{if(2==e.useFirstCustomCDN)throw"SQL \uac15\uc81c";let o=e.nakama.servers[e.isOfficial][e.target].info.address,p=e.nakama.servers[e.isOfficial][e.target].info.useSSL?"https:":"http:",r=yield e.global.upload_file_to_storage(e.userInput.mainImage,{user_id:e.nakama.servers[e.isOfficial][e.target].session.user_id,cdn_port:a.cdn_port,apache_port:a.apache_port},p,o,1==e.useFirstCustomCDN,i);if(!r)throw"\ub9c1\ud06c \ub9cc\ub4e4\uae30 \uc2e4\ud328";delete e.userInput.mainImage.partsize,e.userInput.mainImage.url=r}catch{yield e.nakama.sync_save_file(e.userInput.mainImage,n,u,"server_post",`${e.userInput.id}_mainImage`)}}let l=e.userInput.attachments.length;if(l){i.message=e.lang.text.AddPost.SyncAttaches;for(let o=l-1;o>=0;o--){if(e.userInput.attachments[o].url)try{let r=yield(yield fetch(e.userInput.attachments[o].url)).blob();e.userInput.attachments[o].blob=r}catch{continue}if(s)try{if(1!=e.useFirstCustomCDN)throw"FFS \uc0ac\uc6a9 \uc21c\uc704\uc5d0 \uc5c6\uc74c";let p;if(i.message=`${e.lang.text.AddPost.SyncAttaches}: [${o}]${e.userInput.attachments[o].filename}`,p=yield e.global.try_upload_to_user_custom_fs(e.userInput.attachments[o],e.nakama.users.self.display_name,i),!p)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";delete e.userInput.attachments[o].path,delete e.userInput.attachments[o].partsize,e.userInput.attachments[o].url=p}catch{e.userInput.attachments[o].path=`servers/${n}/${u}/posts/${e.userInput.creator_id}/${e.userInput.id}/[${o}]${e.userInput.attachments[o].filename}`,yield e.indexed.saveBlobToUserPath(e.userInput.attachments[o].blob,e.userInput.attachments[o].path)}else try{if(2==e.useFirstCustomCDN)throw"SQL \uac15\uc81c";let p=e.nakama.servers[e.isOfficial][e.target].info.address,r=e.nakama.servers[e.isOfficial][e.target].info.useSSL?"https:":"http:",v=yield e.global.upload_file_to_storage(e.userInput.attachments[o],{user_id:e.nakama.servers[e.isOfficial][e.target].session.user_id,cdn_port:a.cdn_port,apache_port:a.apache_port},r,p,1==e.useFirstCustomCDN,i);if(!v)throw"\ub9c1\ud06c \ub9cc\ub4e4\uae30 \uc2e4\ud328";delete e.userInput.attachments[o].partsize,e.userInput.attachments[o].url=v}catch(p){"SQL \uac15\uc81c"==p&&e.userInput.attachments[o].url&&!e.userInput.attachments[o].blob&&(e.userInput.attachments[o].blob=yield(yield fetch(e.userInput.attachments[o].url,{signal:e.cont.signal})).blob()),yield e.nakama.sync_save_file(e.userInput.attachments[o],n,u,"server_post",`${e.userInput.id}_attach_${o}`)}}}if(e.userInput.OutSource&&(e.global.remove_file_from_storage(e.userInput.OutSource,a),e.userInput.OutSource=void 0),e.UseOutLink=e.UseOutLink&&"me"!=e.userInput.creator_id,e.UseOutLink){let o=new Blob([JSON.stringify(e.userInput)],{type:"text/plain"}),p={blob:o,filename:`${e.userInput.id}.json`,file_ext:"json",size:o.size};try{let r=e.nakama.servers[e.isOfficial][e.target].info.address,v=e.nakama.servers[e.isOfficial][e.target].session.user_id,g=e.nakama.servers[e.isOfficial][e.target].info.useSSL?"https:":"http:";i.message=`${e.lang.text.AddPost.SyncPostInfo}`;let x=yield e.global.upload_file_to_storage(p,{user_id:v,cdn_port:a.cdn_port,apache_port:a.apache_port},g,r,1==e.useFirstCustomCDN);if(!x)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";e.userInput.OutSource=x}catch{try{let v=e.nakama.users.self.display_name;i.message=`${e.lang.text.AddPost.SyncPostInfo}`;let g=yield e.global.try_upload_to_user_custom_fs(p,v);if(!g)throw"\uc5c5\ub85c\ub4dc \uc2e4\ud328";e.userInput.OutSource=g}catch(v){e.userInput.OutSource=void 0,e.UseOutLink=!1,e.p5toast.show({text:`${e.lang.text.AddPost.OutLinkFailed}: ${v}`})}}}let m=JSON.parse(JSON.stringify(e.userInput));m.mainImage&&(delete m.mainImage.blob,delete m.mainImage.thumbnail);for(let o=m.attachments.length-1;o>=0;o--)delete m.attachments[o].blob;delete m.server;try{e.nakama.posts_orig[n][u]||(e.nakama.posts_orig[n][u]={}),e.nakama.posts_orig[n][u][e.userInput.creator_id]||(e.nakama.posts_orig[n][u][e.userInput.creator_id]={}),e.nakama.posts_orig[n][u][e.userInput.creator_id][e.userInput.id]=e.userInput}catch(o){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${o}`}),console.log(o)}let _=JSON.stringify(m);if(yield e.indexed.saveTextFileToUserPath(_,`servers/${n}/${u}/posts/${e.userInput.creator_id}/${e.userInput.id}/info.json`),!s){let o=new Blob([_],{type:"application/json"}),p={filename:"info.json"};p.blob=o,p.size=o.size,p.type="application/json",p.file_ext="txt",p.typeheader="text",p.path=`servers/${n}/${u}/posts/${e.userInput.creator_id}/${e.userInput.id}/info.json`,yield e.nakama.sync_save_file(p,n,u,"server_post",e.userInput.id)}e.nakama.rearrange_posts()}catch(l){e.p5toast.show({text:`${e.lang.text.AddPost.SyncErr}: ${l}`}),console.warn("\uac8c\uc2dc\ubb3c \uc800\uc7a5 \ucc98\ub9ac \uc624\ub958: ",l)}try{yield e.nakama.servers[e.isOfficial][e.target].client.rpc(e.nakama.servers[e.isOfficial][e.target].session,"send_noti_all_fn",{noti_id:S.I.MANAGE_POST,type:"add",user_id:e.userInput.creator_id,post_id:e.userInput.id,persistent:!1})}catch{}i.dismiss(),e.navCtrl.navigateBack("portal/community")})()}ionViewWillLeave(){if(this.WillLeavePage=!0,this.WillLeavePageInside||this.global.RestoreShortCutAct("AddPostPage"),delete this.global.p5KeyShortCut.Escape,!this.isApplyPostData)try{this.nakama.posts_orig[this.isOfficial][this.target][this.userInput.creator_id][this.userInput.id]&&delete this.nakama.posts_orig[this.isOfficial][this.target][this.userInput.creator_id][this.userInput.id],this.nakama.load_local_post_with_id(this.userInput.id,this.userInput.server.isOfficial,this.userInput.server.target,this.userInput.creator_id),this.nakama.rearrange_posts()}catch{}}}return(d=f).\u0275fac=function(e){return new(e||d)(t.rXU(L.z3),t.rXU(j.y),t.rXU(D.q9),t.rXU(S.X),t.rXU(M.G),t.rXU(U.n),t.rXU(y.Xi),t.rXU(N.up),t.rXU(A.nX),t.rXU(A.Ix),t.rXU(B.u))},d.\u0275cmp=t.VBU({type:d,selectors:[["app-add-post"]],decls:35,vars:21,consts:[["accordionGroup",""],[1,"ion-no-border"],[4,"ngIf"],["slot","start"],["defaultHref","portal/community"],["slot","end","name","play-circle-outline",1,"top_icon",3,"click"],["id","p5Drop_addPost",2,"position","absolute","width","100%","height","100%","display","flex","z-index","2","pointer-events","none"],["value","colors","expand","inset",3,"disabled","value","click",4,"ngIf"],["button","",3,"click"],[1,"additional_form","new_bg_form"],[2,"display","contents"],[1,"ion-text-end"],["style","width: 100%; text-align: center; text-align: -webkit-center; padding: 8px;",4,"ngIf"],["button",""],["id","add_post_title",3,"ngModelChange","disabled","placeholder","ngModel"],[2,"position","relative"],["class","shortcut_hint",4,"ngIf"],["id","add_post_content",1,"infobox",2,"height","360px",3,"ngModelChange","disabled","placeholder","ngModel"],["hidden","","type","file","id","add_post_input","accept","*","multiple","",3,"change"],["hidden","","type","file","id","PostMainImage_sel","accept","image/*",3,"change"],[2,"width","100%","text-align","center","padding-bottom","16px"],["style","display: inline-block;",4,"ngFor","ngForOf"],["button","",3,"disabled","click","contextmenu",4,"ngFor","ngForOf"],["button","",3,"click","disabled"],[1,"ion-text-center"],["value","colors","expand","inset",3,"click","disabled","value"],["value","colors"],["slot","header"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["slot","content"],["button","",3,"click",4,"ngFor","ngForOf"],[2,"width","100%","text-align","center","text-align","-webkit-center","padding","8px"],[2,"pointer-events","none",3,"ngModelChange","ngModel"],[1,"thumbnail_image",2,"width","400px","padding-top","8px"],["alt","MainPostImage",3,"src"],[1,"shortcut_hint"],[2,"display","inline-block"],[1,"ext_button","ext_button_override",3,"click","contextmenu","hidden"],["slot","icon-only","style","width: 36px; height: 36px;",3,"name",4,"ngIf"],["class","ext_icon_img",3,"src","alt",4,"ngIf"],["slot","icon-only",2,"width","36px","height","36px",3,"name"],[1,"ext_icon_img",3,"src","alt"],["button","",3,"click","contextmenu","disabled"],[1,"additional_form","bg_img_form"],[1,"profile_img",3,"src"]],template:function(e,i){1&e&&(t.j41(0,"ion-header",1)(1,"ion-toolbar"),t.DNE(2,E,2,1,"ion-title",2)(3,V,2,1,"ion-title",2),t.j41(4,"ion-buttons",3),t.nrm(5,"ion-back-button",4),t.k0s(),t.j41(6,"ion-icon",5),t.bIt("click",function(){return i.showPreview()}),t.k0s()()(),t.j41(7,"ion-content"),t.nrm(8,"div",6),t.DNE(9,W,11,5,"ion-accordion-group",7),t.j41(10,"ion-item",8),t.bIt("click",function(){return i.go_to_profile()}),t.nrm(11,"div",9),t.j41(12,"ion-label",10),t.EFF(13),t.k0s(),t.j41(14,"ion-label",11),t.EFF(15),t.k0s()(),t.j41(16,"ion-item-divider")(17,"ion-label"),t.EFF(18),t.k0s()(),t.DNE(19,X,6,5,"div",12),t.j41(20,"ion-item",13)(21,"ion-input",14),t.mxI("ngModelChange",function(n){return t.DH7(i.userInput.title,n)||(i.userInput.title=n),n}),t.k0s()(),t.j41(22,"div",15),t.DNE(23,Y,2,0,"div",16),t.j41(24,"textarea",17),t.mxI("ngModelChange",function(n){return t.DH7(i.userInput.content,n)||(i.userInput.content=n),n}),t.k0s()(),t.j41(25,"input",18),t.bIt("change",function(n){return i.inputFileSelected(n)}),t.k0s(),t.j41(26,"input",19),t.bIt("change",function(n){return i.ChangeMainPostImage(n)}),t.k0s(),t.j41(27,"div",20),t.DNE(28,z,6,6,"div",21),t.k0s(),t.DNE(29,Q,5,3,"ion-item",22),t.j41(30,"div"),t.DNE(31,K,2,0,"div",16),t.j41(32,"ion-item",23),t.bIt("click",function(){return i.postData()}),t.j41(33,"ion-label",24),t.EFF(34),t.k0s()()()()),2&e&&(t.R7$(2),t.Y8G("ngIf",i.isModify),t.R7$(),t.Y8G("ngIf",!i.isModify),t.R7$(6),t.Y8G("ngIf",i.servers.length),t.R7$(2),t.Aen("background-image: linear-gradient(to right, #0000, #"+i.userInput.UserColor+"44)"),t.R7$(2),t.JRh(i.lang.text.AddPost.Creator),t.R7$(2),t.JRh(i.userInput.creator_name||i.lang.text.Profile.noname_user),t.R7$(3),t.JRh(i.lang.text.AddPost.AddNewPost),t.R7$(),t.Y8G("ngIf",i.MainPostImage),t.R7$(2),t.Y8G("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.TitlePlaceholder),t.R50("ngModel",i.userInput.title),t.R7$(2),t.Y8G("ngIf",i.global.ShowHint&&i.CheckIfTitleInputFocus),t.R7$(),t.Y8G("disabled",i.isSaveClicked)("placeholder",i.lang.text.AddPost.ContentPlaceHolder),t.R50("ngModel",i.userInput.content),t.R7$(4),t.Y8G("ngForOf",i.extended_buttons),t.R7$(),t.Y8G("ngForOf",i.userInput.attachments),t.R7$(2),t.Y8G("ngIf",i.global.ShowHint),t.R7$(),t.Y8G("disabled",i.isSaveClicked),t.R7$(2),t.JRh(i.lang.text.AddPost.Post))},dependencies:[C.Sq,C.bT,k.me,k.BC,k.vS,y.xk,y.YH,y.QW,y.W9,y.eU,y.iq,y.$w,y.uz,y.Dg,y.he,y.BC,y.BY,y.ai,y.hB,y.Gw,y.el],styles:[".ext_button_override[_ngcontent-%COMP%]{margin:12px;cursor:pointer}.thumbnail_image[_ngcontent-%COMP%]{width:100%;max-height:240px;object-fit:cover;border-radius:16px;overflow:hidden}"]}),f})()},{path:"void-draw",loadChildren:()=>h.e(2655).then(h.bind(h,2655)).then(d=>d.VoidDrawPageModule)},{path:"ionic-viewer",loadChildren:()=>Promise.all([h.e(222),h.e(4803)]).then(h.bind(h,4803)).then(d=>d.IonicViewerPageModule)},{path:"post-viewer",loadChildren:()=>Promise.all([h.e(222),h.e(526)]).then(h.bind(h,526)).then(d=>d.PostViewerPageModule)}];let q=(()=>{var d;class f{}return(d=f).\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.$C({type:d}),d.\u0275inj=t.G2t({imports:[A.iI.forChild(Z),A.iI]}),f})(),ee=(()=>{var d;class f{}return(d=f).\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.$C({type:d}),d.\u0275inj=t.G2t({imports:[C.MD,k.YN,y.bv,q]}),f})()}}]);