"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9128],{9128:(le,y,d)=>{d.r(y),d.d(y,{SubscribesPageModule:()=>oe});var S=d(177),F=d(4341),p=d(5374),P=d(9858),x=d(467),j=d(92),e=d(3953),G=d(4237),I=d(8065),O=d(4234),B=d(482),D=d(3656),T=d(755),E=d(9900);const M=["PersonalChat"],A=["InAppQRScanner"],X=()=>[0,.8,1],U=()=>[0,1,2];function w(s,r){1&s&&(e.j41(0,"div",21),e.EFF(1,"A"),e.k0s())}function L(s,r){if(1&s){const i=e.RV6();e.j41(0,"ion-item",28),e.bIt("click",function(){e.eBV(i);const t=e.XpG().$implicit,a=e.XpG(2);return e.Njj(a.check_notifications(t))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&s){const i=e.XpG().$implicit,n=e.XpG(2);e.R7$(2),e.JRh(n.nakama.notifications_rearrange[i].request)}}function N(s,r){if(1&s&&(e.j41(0,"div"),e.DNE(1,L,3,1,"ion-item",27),e.k0s()),2&s){const i=r.$implicit,n=e.XpG(2);e.R7$(),e.Y8G("ngIf",n.nakama.notifications_rearrange.length>i)}}function V(s,r){if(1&s&&(e.j41(0,"ion-accordion-group",22,2)(2,"ion-accordion",23)(3,"ion-item",24)(4,"ion-label"),e.EFF(5),e.k0s()(),e.j41(6,"div",25),e.DNE(7,N,2,1,"div",26),e.k0s()()()),2&s){const i=e.XpG();e.Y8G("value",!1),e.R7$(5),e.JRh(i.lang.text.Subscribes.has_noties),e.R7$(2),e.Y8G("ngForOf",e.lJ4(3,U))}}function Y(s,r){if(1&s&&(e.j41(0,"div",29),e.EFF(1),e.k0s()),2&s){const i=e.XpG();e.R7$(),e.SpI("` (",i.lang.text.Subscribes.RightClickChat,")")}}function Q(s,r){if(1&s&&(e.j41(0,"div",29),e.EFF(1),e.k0s()),2&s){const i=e.XpG().index;e.R7$(),e.JRh((i+1)%10)}}function J(s,r){if(1&s&&e.nrm(0,"div",38),2&s){const i=e.XpG().$implicit;e.Aen("background-image: linear-gradient(to right, #0000, #"+(i.color||"abcdef")+"44)")}}function z(s,r){if(1&s&&(e.j41(0,"span",39),e.EFF(1),e.k0s()),2&s){const i=e.XpG(3);e.R7$(),e.JRh("("+i.lang.text.AddGroup.Volatile+")")}}function W(s,r){if(1&s&&(e.j41(0,"span",39),e.EFF(1),e.k0s()),2&s){const i=e.XpG().$implicit,n=e.XpG(2);e.R7$(),e.SpI(" ","("+(i.local?n.lang.text.AddGroup.UseLocalStorage:i.server.name||i.server.target)+")"," ")}}function H(s,r){if(1&s){const i=e.RV6();e.j41(0,"div",13),e.DNE(1,Q,2,1,"div",14),e.j41(2,"ion-item",15),e.bIt("click",function(){const t=e.eBV(i).$implicit,a=e.XpG(2);return e.Njj(a.go_to_chatroom(t))})("contextmenu",function(){const t=e.eBV(i).$implicit,a=e.XpG(2);return e.Njj(a.ChannelContextMenu(t))}),e.j41(3,"div",31),e.nrm(4,"img",32)(5,"div",33),e.k0s(),e.DNE(6,J,1,2,"div",34),e.j41(7,"ion-label")(8,"div",35)(9,"table")(10,"tr")(11,"td")(12,"span"),e.EFF(13),e.k0s(),e.DNE(14,z,2,1,"span",36)(15,W,2,1,"span",36),e.k0s()()()(),e.j41(16,"div",37),e.EFF(17),e.k0s()()()()}if(2&s){const i=r.$implicit,n=r.index,t=e.XpG(2);e.R7$(),e.Y8G("ngIf",t.global.ShowHint&&n<10),e.R7$(3),e.Aen("online"==i.status||"certified"==i.status||i.redirect&&3==i.redirect.type&&"pending"==i.status?"filter: grayscale(0) contrast(1)":"filter: grayscale(.9) contrast(1.4)"),e.Y8G("src",i.info&&i.info.img||(i.local||i.info&&1==i.info.max_count?"assets/data/local.svg":"assets/data/channel.svg"),e.B4B),e.R7$(),e.Aen("background-color: "+t.statusBar.colors[i.status||"offline"]),e.R7$(),e.Y8G("ngIf",i.is_new),e.R7$(7),e.SpI(" ",i.info?i.info.name||(t.nakama.usernameOverride[i.info.isOfficial]&&t.nakama.usernameOverride[i.info.isOfficial][i.info.target]?t.nakama.usernameOverride[i.info.isOfficial][i.info.target][i.info.id]:"")||i.info.display_name||t.lang.text.ChatRoom.noname_chatroom:i.title||t.lang.text.ChatRoom.noname_chatroom," "),e.R7$(),e.Y8G("ngIf",i.volatile),e.R7$(),e.Y8G("ngIf",(t.nakama.showServer||i.local)&&!i.volatile),e.R7$(2),e.SpI(" ",i.last_comment||i.noti||t.lang.text.Subscribes.noMessageHistory," ")}}function K(s,r){if(1&s&&(e.j41(0,"div")(1,"ion-item-divider")(2,"ion-label"),e.EFF(3),e.k0s()(),e.DNE(4,H,18,11,"div",30),e.k0s()),2&s){const i=e.XpG();e.R7$(3),e.JRh(i.lang.text.Subscribes.JoinedChannels),e.R7$(),e.Y8G("ngForOf",i.nakama.channels)}}function Z(s,r){if(1&s){const i=e.RV6();e.j41(0,"div")(1,"div",40),e.bIt("click",function(){e.eBV(i);const t=e.XpG();return e.Njj(t.nakama.add_new_group())}),e.nrm(2,"ion-icon",41),e.j41(3,"div")(4,"ion-label",42),e.EFF(5),e.k0s()()()()}if(2&s){const i=e.XpG();e.R7$(5),e.JRh(i.lang.text.Subscribes.NoChat)}}function q(s,r){if(1&s){const i=e.RV6();e.j41(0,"ion-item",28),e.bIt("click",function(){const t=e.eBV(i).index,a=e.XpG(2);return e.Njj(a.select_server(t))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&s){const i=r.$implicit;e.R7$(2),e.JRh(i.name)}}function ee(s,r){if(1&s){const i=e.RV6();e.j41(0,"img",52),e.bIt("click",function(){e.eBV(i);const t=e.XpG(2);return e.Njj(t.copy_info(t.InvitationAddress))}),e.k0s()}if(2&s){const i=e.XpG(2);e.Y8G("src",i.QRCodeSRC,e.B4B)}}function te(s,r){if(1&s){const i=e.RV6();e.j41(0,"ion-content",13),e.nrm(1,"div",43),e.j41(2,"div",44)(3,"ion-item-divider")(4,"ion-label"),e.EFF(5),e.k0s()(),e.j41(6,"ion-accordion-group",45,3),e.bIt("click",function(){e.eBV(i);const t=e.XpG();return e.Njj(t.isExpanded=!0)}),e.j41(8,"ion-accordion",23)(9,"ion-item",24)(10,"ion-label",46),e.EFF(11),e.k0s(),e.j41(12,"ion-label",47),e.EFF(13),e.k0s(),e.nrm(14,"ion-icon",48),e.k0s(),e.j41(15,"div",25),e.DNE(16,q,3,1,"ion-item",49),e.k0s()()(),e.DNE(17,ee,1,1,"img",50),e.j41(18,"ion-item",28),e.bIt("click",function(){e.eBV(i);const t=e.XpG();return e.Njj(t.copy_info(t.user_id))}),e.j41(19,"ion-label",51),e.EFF(20),e.k0s()()()()}if(2&s){const i=e.XpG();e.R7$(5),e.JRh(i.lang.text.Subscribes.OnebyOneChat),e.R7$(),e.Y8G("value",i.isExpanded),e.R7$(5),e.JRh(i.lang.text.AddGroup.SelectServer),e.R7$(2),e.JRh(i.servers[i.index].name),e.R7$(3),e.Y8G("ngForOf",i.servers),e.R7$(),e.Y8G("ngIf",i.QRCodeSRC),e.R7$(3),e.JRh(i.user_id)}}function ie(s,r){if(1&s&&(e.j41(0,"ion-label",60),e.EFF(1),e.k0s()),2&s){const i=e.XpG(2);e.R7$(),e.JRh(i.lang.text.Subscribes.QRScanPlaceholder)}}function ne(s,r){if(1&s&&(e.j41(0,"ion-label",51),e.EFF(1),e.k0s()),2&s){const i=e.XpG(2);e.R7$(),e.JRh(i.QRScanResult)}}function se(s,r){if(1&s){const i=e.RV6();e.j41(0,"div",53)(1,"div",54)(2,"div",55),e.bIt("click",function(){e.eBV(i);const t=e.XpG();return e.Njj(t.ChangeScanDevice())}),e.nrm(3,"ion-icon",56),e.k0s(),e.nrm(4,"iframe",57),e.j41(5,"ion-item",28),e.bIt("click",function(){e.eBV(i);const t=e.XpG();return e.Njj(t.copy_info(t.QRScanResult))}),e.DNE(6,ie,2,1,"ion-label",58)(7,ne,2,1,"ion-label",59),e.k0s()()()}if(2&s){const i=e.XpG();e.R7$(6),e.Y8G("ngIf",!i.QRScanResult),e.R7$(),e.Y8G("ngIf",i.QRScanResult)}}const ae=[{path:"",component:(()=>{var s;class r{constructor(n,t,a,o,h,m,l,f,_){this.nakama=n,this.statusBar=t,this.lang=a,this.global=o,this.navCtrl=h,this.indexed=m,this.alertCtrl=l,this.loadingCtrl=f,this.p5toast=_,this.cant_dedicated=!1,this.servers=[],this.isExpanded=!1,this.index=0,this.lock_chatroom=!1}ngOnInit(){this.indexed.loadTextFromUserPath("servers/self/profile.img",(n,t)=>{n&&t&&(this.nakama.users.self.img=t.replace(/"|=|\\/g,""))}),this.global.PortalBottonTabAct.Subscribes=()=>{this.SubscribesScrollDiv&&this.SubscribesScrollDiv.scrollTo({top:0,behavior:"smooth"})}}try_add_shortcut(){this.global.p5KeyShortCut?this.AddShortcut():setTimeout(()=>{this.try_add_shortcut()},100)}AddShortcut(){this.global.p5KeyShortCut.Backquote=()=>{this.nakama.open_profile_page()},this.global.p5KeyShortCut.Digit=n=>{this.nakama.channels.length>n?this.go_to_chatroom(this.nakama.channels[n]):this.nakama.add_new_group()},this.global.p5KeyShortCut.AddAct||(this.global.p5KeyShortCut.AddAct=()=>{this.nakama.add_new_group()})}OpenOneByOneLink(){return this.servers=this.nakama.get_all_server_info(!0,!0),this.servers.length&&(this.PersonalChat.present(),this.select_server(0)),!1}select_server(n){this.user_id=this.nakama.servers[this.servers[n].isOfficial][this.servers[n].target].session.user_id;let t=`${this.nakama.servers[this.servers[n].isOfficial][this.servers[n].target].info.useSSL?"https://":"http://"}${this.nakama.servers[this.servers[n].isOfficial][this.servers[n].target].info.address}:${this.nakama.servers[this.servers[n].isOfficial][this.servers[n].target].info.nakama_port||7350}`;this.isExpanded=!1,this.InvitationAddress=`${j.d2}pjcone_pwa/?open_prv_channel=${this.user_id},${t}`.replace(" ","%20"),this.QRCodeSRC=this.global.readasQRCodeFromString(this.InvitationAddress);let a=`${(this.user_id.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6)}`,l=`${parseInt(a.slice(0,2),16)},${parseInt(a.slice(2,4),16)},${parseInt(a.slice(4,6),16)}`;setTimeout(()=>{document.getElementById("SelfColorBg").style.backgroundImage=`linear-gradient(to top, rgba(${l}, .5), rgba(${l}, 0))`},0)}copy_info(n){this.global.WriteValueToClipboard("text/plain",n)}ChannelContextMenu(n){var t=this;let a=n.server.isOfficial,o=n.server.target,h=n.title;switch(h=2==n.redirect.type?h||this.lang.text.Profile.noname_user:h||this.lang.text.ChatRoom.noname_chatroom,n.redirect.type){case 3:if("online"==n.status||"pending"==n.status){this.nakama.open_group_detail({info:this.nakama.groups[a][o][n.group_id],server:{isOfficial:a,target:o}});break}case 2:this.alertCtrl.create({header:h,message:this.lang.text.ChatRoom.RemoveChannelLogs,buttons:[{text:this.lang.text.ChatRoom.Delete,handler:(m=(0,x.A)(function*(){let l=yield t.loadingCtrl.create({message:t.lang.text.TodoDetail.WIP});l.present();let f=t.nakama.servers[a][o].info;yield t.nakama.remove_group_list(t.nakama.groups[a][o][n.group_id],a,o,!0),delete t.nakama.channels_orig[a][o][n.id],t.nakama.remove_channel_files(a,o,n.id);try{let c=localStorage.getItem("fallback_fs");if(!c)throw"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc11c\ubc84 \uc5c6\uc74c";let u=c.split("://"),g=u.pop().split(":"),b=u.pop();b?b+=":":b=t.global.checkProtocolFromAddress(g[0])?"https:":"http:";let v=`${b}//${g[0]}:${g[1]||9002}/`,k=`${n.id}_${t.nakama.users.self.display_name}`;try{k=`${n.info.id}_${t.nakama.servers[a][o].session.user_id}`}catch{}g&&t.global.remove_files_from_storage_with_key(v,k,{})}catch{}try{let u=n.info.server.address;u&&t.global.remove_files_from_storage_with_key(`${[n.info.server.useSSL?"https:":"http:"]}//${u}:${f.apache_port||9002}/`,`${n.info.id}_${t.nakama.servers[a][o].session.user_id}`,{apache_port:f.apache_port,cdn_port:f.cdn_port})}catch{}let _=yield t.indexed.GetFileListFromDB(`servers/${a}/${o}/channels/${n.id}`);for(let c=0,u=_.length;c<u;c++)l.message=`${t.lang.text.UserFsDir.DeleteFile}: ${u-c}`,yield t.indexed.removeFileFromUserPath(_[c]);l.dismiss(),t.nakama.rearrange_channels()}),function(){return m.apply(this,arguments)}),cssClass:"redfont"}]}).then(m=>m.present());break;case 0:this.alertCtrl.create({header:h,message:this.lang.text.ChatRoom.RemoveChannelLogs,buttons:[{text:this.lang.text.ChatRoom.Delete,handler:function(){var m=(0,x.A)(function*(){let l=yield t.loadingCtrl.create({message:t.lang.text.TodoDetail.WIP});l.present(),delete t.nakama.channels_orig[a][o][n.id];try{yield t.indexed.removeFileFromUserPath(`servers/${a}/${o}/groups/${n.id}.img`)}catch(_){console.log("\uadf8\ub8f9 \uc774\ubbf8\uc9c0 \uc0ad\uc81c \uc624\ub958: ",_)}t.nakama.save_groups_with_less_info();try{let _=localStorage.getItem("fallback_fs");if(!_)throw"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc11c\ubc84 \uc5c6\uc74c";let c=_.split("://"),u=c.pop().split(":"),g=c.pop();g?g+=":":g=t.global.checkProtocolFromAddress(u[0])?"https:":"http:";let b=`${g}//${u[0]}:${u[1]||9002}/`,v=`${n.id}_${t.nakama.users.self.display_name}`;try{v=`${n.info.id}_${t.nakama.servers[a][o].session.user_id}`}catch{}u[0]&&t.global.remove_files_from_storage_with_key(b,v,{})}catch{}let f=yield t.indexed.GetFileListFromDB(`servers/${a}/${o}/channels/${n.id}`);for(let _=0,c=f.length;_<c;_++)l.message=`${t.lang.text.UserFsDir.DeleteFile}: ${c-_}`,yield t.indexed.removeFileFromUserPath(f[_]);l.dismiss(),t.nakama.rearrange_channels()});return function(){return m.apply(this,arguments)}}(),cssClass:"redfont"}]}).then(m=>m.present())}var m;return!1}ionViewDidEnter(){this.SubscribesScrollDiv||(this.SubscribesScrollDiv=document.getElementById("SubscribesScrollDiv")),this.nakama.subscribe_lock=!0,("DesktopPWA"==j.aH||"MobilePWA"==j.aH)&&(this.cant_dedicated=!0),this.try_add_shortcut()}go_to_page(n){this.global.RemoveAllModals(()=>{this.navCtrl.navigateForward(`portal/settings/${n}`)})}go_to_chatroom(n){this.lock_chatroom||(this.lock_chatroom=!0,this.nakama.go_to_chatroom_without_admob_act(n),("online"!=n.status||"pending"!=n.status)&&delete n.is_new,this.lock_chatroom=!1)}check_notifications(n){let t=this.nakama.notifications_rearrange[n].server;this.nakama.check_notifications(this.nakama.notifications_rearrange[n],t.isOfficial,t.target)}ionViewWillLeave(){this.nakama.subscribe_lock=!1,delete this.global.p5KeyShortCut.Backquote,delete this.global.p5KeyShortCut.Digit,delete this.global.p5KeyShortCut.AddAct}OpenScanner(){var n=this;return(0,x.A)(function*(){n.QRScanResult=null,n.global.StoreShortCutAct("qrcode-scanner");let a=yield(yield fetch("assets/p5js/zxing_scanner.js")).blob(),o=URL.createObjectURL(a),m=yield(yield fetch("assets/p5js/libraries/p5.min.js")).blob(),l=URL.createObjectURL(m),_=yield(yield fetch("assets/p5js/libraries/zxing@0.21.3.min.js")).blob(),c=URL.createObjectURL(_),g=yield(yield fetch("assets/p5js/zxing.html")).text();g=g.replace('<script language="javascript" type="text/javascript" src="libraries/p5.min.js"><\/script>',`<script language="javascript" type="text/javascript" src="${l}"><\/script>`).replace('<script language="javascript" type="text/javascript" src="libraries/zxing@0.21.3.min.js"><\/script>',`<script language="javascript" type="text/javascript" src="${c}"><\/script>`).replace('<script language="javascript" type="text/javascript" src="zxing_scanner.js"><\/script>',`<script language="javascript" type="text/javascript" src="${o}"><\/script>`);let b=new Blob([g],{type:"text/html"}),v=URL.createObjectURL(b);n.InAppQRScanner.onDidDismiss().then(()=>{URL.revokeObjectURL(v),URL.revokeObjectURL(o),URL.revokeObjectURL(l),URL.revokeObjectURL(c),n.ChangeDeviceFunc=null,n.global.RestoreShortCutAct("qrcode-scanner")}),yield n.InAppQRScanner.present();let k=document.getElementById("qr_scan_frame");k.src=v;let R=k.contentWindow||k.contentDocument;setTimeout(()=>{n.ChangeDeviceFunc=R.ChangeDevice,R.load_failed=$=>{n.p5toast.show({text:`${n.lang.text.Subscribes.QRScanInitFailed}: ${$}`}),n.InAppQRScanner.dismiss()},R.scan_result=function(){var $=(0,x.A)(function*(C){try{n.QRScanResult=C.text,n.QRScanResult&&(yield n.nakama.open_url_link(n.QRScanResult,!1))}catch(ce){console.log("QR\uc2a4\uce94 \uc2e4\ud328: ",ce)}});return function(C){return $.apply(this,arguments)}}()},1e3)})()}ChangeScanDevice(){this.ChangeDeviceFunc&&this.ChangeDeviceFunc()}}return(s=r).\u0275fac=function(n){return new(n||s)(e.rXU(G.X),e.rXU(I.j),e.rXU(O.y),e.rXU(B.z3),e.rXU(D.q9),e.rXU(T.n),e.rXU(p.hG),e.rXU(p.Xi),e.rXU(E.G))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-subscribes"]],viewQuery:function(n,t){if(1&n&&(e.GBs(M,5),e.GBs(A,5)),2&n){let a;e.mGM(a=e.lsd())&&(t.PersonalChat=a.first),e.mGM(a=e.lsd())&&(t.InAppQRScanner=a.first)}},decls:31,vars:15,consts:[["PersonalChat",""],["InAppQRScanner",""],["accordionGroup",""],["OnebyOneServerList",""],[1,"ion-no-border"],[1,"add_group","top_icon_override_1",3,"click"],["button","","name","scan-circle-outline",2,"width","24px","height","24px"],[1,"add_group",3,"click"],["class","shortcut_hint shortcut_top_add",4,"ngIf"],["button","","name","add-circle-outline",2,"width","24px","height","24px"],[1,"header_online_circle",3,"click"],["id","SubscribesScrollDiv",2,"height","100%","overflow-y","auto"],["value","colors","expand","inset",3,"value",4,"ngIf"],[2,"position","relative"],["class","shortcut_hint",4,"ngIf"],["button","",3,"click","contextmenu"],[1,"additional_form","bg_img_form"],[1,"profile_img",3,"src"],[4,"ngIf"],["initialBreakpoint",".8",3,"breakpoints"],[1,"transparent-modal"],[1,"shortcut_hint","shortcut_top_add"],["value","colors","expand","inset",3,"value"],["value","colors"],["slot","header"],["slot","content"],[4,"ngFor","ngForOf"],["button","",3,"click",4,"ngIf"],["button","",3,"click"],[1,"shortcut_hint"],["style","position: relative;",4,"ngFor","ngForOf"],[1,"channel_image","channel_image_div"],["alt","ch_img",1,"channel_image",3,"src"],[1,"status_circle"],["class","additional_form new_bg_form",3,"style",4,"ngIf"],[1,"channel_text_form","header"],["class","server_target",4,"ngIf"],[1,"channel_text_form","content"],[1,"additional_form","new_bg_form"],[1,"server_target"],[1,"disconnect_info",3,"click"],["color","medium","name","chatbubble-ellipses-outline",2,"width","60px","height","60px"],["color","medium"],["id","SelfColorBg",2,"position","fixed","width","100%","height","100%","pointer-events","none"],[2,"padding","16px"],["value","colors","expand","inset",3,"click","value"],[2,"display","contents"],[1,"ion-text-right"],[1,"ion-accordion-toggle-icon","hide_accordion_icon"],["button","",3,"click",4,"ngFor","ngForOf"],["style","width: 100%; height: auto; cursor: copy;","alt","Loading",3,"src","click",4,"ngIf"],[1,"ion-text-center"],["alt","Loading",2,"width","100%","height","auto","cursor","copy",3,"click","src"],[2,"display","flex","justify-content","center","align-items","center","height","100%"],[2,"width","400px","min-height","455px","background-color","var(--chatroom-background)","text-align","center","padding","16px","position","relative"],[2,"position","absolute","width","64px","height","64px","cursor","pointer","margin","16px","background-color","#8888","border-radius","24px","top","0","right","0","text-align","center","align-content","center",3,"click"],["name","camera-reverse-outline",2,"width","36px","height","36px"],["id","qr_scan_frame","frameborder","0",2,"width","100%","height","368px","margin-bottom","8px"],["class","ion-text-center","color","medium",4,"ngIf"],["class","ion-text-center",4,"ngIf"],["color","medium",1,"ion-text-center"]],template:function(n,t){if(1&n){const a=e.RV6();e.j41(0,"ion-header",4)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"div",5),e.bIt("click",function(){return e.eBV(a),e.Njj(t.OpenScanner())}),e.nrm(5,"ion-icon",6),e.k0s(),e.j41(6,"div",7),e.bIt("click",function(){return e.eBV(a),e.Njj(t.nakama.add_new_group())}),e.DNE(7,w,2,0,"div",8),e.nrm(8,"ion-icon",9),e.k0s(),e.j41(9,"div",10),e.bIt("click",function(){return e.eBV(a),e.Njj(t.nakama.toggle_all_session())}),e.k0s()()(),e.j41(10,"ion-content")(11,"div",11),e.DNE(12,V,8,4,"ion-accordion-group",12),e.j41(13,"ion-item-divider")(14,"ion-label"),e.EFF(15),e.k0s()(),e.j41(16,"div",13),e.DNE(17,Y,2,1,"div",14),e.j41(18,"ion-item",15),e.bIt("click",function(){return e.eBV(a),e.Njj(t.nakama.open_profile_page())})("contextmenu",function(){return e.eBV(a),e.Njj(t.OpenOneByOneLink())}),e.j41(19,"div",16),e.nrm(20,"img",17),e.k0s(),e.j41(21,"ion-label"),e.EFF(22),e.k0s()()(),e.DNE(23,K,5,2,"div",18)(24,Z,6,1,"div",18),e.k0s(),e.j41(25,"ion-modal",19,0),e.DNE(27,te,21,7,"ng-template"),e.k0s(),e.j41(28,"ion-modal",20,1),e.DNE(30,se,8,2,"ng-template"),e.k0s()()}2&n&&(e.R7$(3),e.JRh(t.lang.text.Subscribes.Title),e.R7$(4),e.Y8G("ngIf",t.global.ShowHint),e.R7$(2),e.Aen("background-color: "+t.statusBar.colors[t.statusBar.settings.groupServer]+"; cursor: pointer;"),e.R7$(3),e.Y8G("ngIf",t.nakama.notifications_rearrange.length),e.R7$(3),e.JRh(t.lang.text.Subscribes.myProfile),e.R7$(2),e.Y8G("ngIf",t.global.ShowHint),e.R7$(3),e.Aen(t.nakama.users.self.online?"filter: grayscale(0) contrast(1);":"filter: grayscale(.9) contrast(1.4);"),e.Y8G("src",t.nakama.users.self.img,e.B4B),e.R7$(2),e.JRh(t.nakama.users.self.display_name||t.lang.text.Profile.noname_user),e.R7$(),e.Y8G("ngIf",t.nakama.channels.length),e.R7$(),e.Y8G("ngIf",!t.nakama.channels.length),e.R7$(),e.Y8G("breakpoints",e.lJ4(14,X)))},dependencies:[S.Sq,S.bT,p.xk,p.YH,p.W9,p.eU,p.iq,p.uz,p.Dg,p.he,p.BC,p.ai,p.Sb],styles:[".advertise_banner[_ngcontent-%COMP%]{width:100%;max-height:150px}.header[_ngcontent-%COMP%]{padding-bottom:4px}.content[_ngcontent-%COMP%]{color:#888;height:24px;line-height:24px;vertical-align:middle;overflow:hidden}.channel_image_div[_ngcontent-%COMP%]{position:absolute}.channel_image[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:64px;object-fit:cover}.status_bar[_ngcontent-%COMP%]{width:5px;height:76%}.channel_text_form[_ngcontent-%COMP%]{margin-left:64px}.status_circle[_ngcontent-%COMP%]{position:relative;top:-56px;left:38px;width:12px;height:12px;border-radius:12px}.md[_ngcontent-%COMP%]   .add_group[_ngcontent-%COMP%]{position:absolute;right:68px;top:16px;cursor:pointer}.ios[_ngcontent-%COMP%]   .add_group[_ngcontent-%COMP%]{position:absolute;right:58px;top:10px;cursor:pointer}.md[_ngcontent-%COMP%]   .top_icon_override_1[_ngcontent-%COMP%]{right:116px}.ios[_ngcontent-%COMP%]   .top_icon_override_1[_ngcontent-%COMP%]{right:96px}.md[_ngcontent-%COMP%]   .top_icon_override_2[_ngcontent-%COMP%]{right:164px}.ios[_ngcontent-%COMP%]   .top_icon_override_2[_ngcontent-%COMP%]{right:134px}"]}),r})()}];let re=(()=>{var s;class r{}return(s=r).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[P.iI.forChild(ae),P.iI]}),r})(),oe=(()=>{var s;class r{}return(s=r).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[S.MD,F.YN,p.bv,re]}),r})()}}]);