"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5502],{5502:(vt,N,m)=>{m.r(N),m.d(N,{MinimalChatPageModule:()=>xt});var P=m(177),j=m(4341),f=m(5374),k=m(9858),v=m(467),D=m(92),S=m(482),B=m(8326),T=m(5402),t=m(3953),E=m(9347),F=m(5547),U=m(345),V=m(3656),O=m(8065),X=m(4234),J=m(9900),H=m(755),Y=m(4237),L=m(7476),W=m(3307);const Q=["MinimalChatServer"],z=["minimalchat_input"];function q(l,h){if(1&l&&(t.j41(0,"ion-select-option",33),t.EFF(1),t.k0s()),2&l){const a=h.$implicit;t.Y8G("value",a),t.R7$(),t.JRh(a.info.name)}}function K(l,h){if(1&l){const a=t.RV6();t.j41(0,"ion-item")(1,"ion-select",30,1),t.bIt("ionChange",function(e){t.eBV(a);const s=t.XpG(2);return t.Njj(s.SelectAddressTarget(e))}),t.j41(3,"ion-select-option",31),t.EFF(4),t.k0s(),t.DNE(5,q,2,2,"ion-select-option",32),t.k0s()()}if(2&l){const a=t.XpG(2);t.R7$(),t.Y8G("label",a.lang.text.AddGroup.SelectServer),t.R7$(3),t.JRh(a.lang.text.voidDraw.InternalConn),t.R7$(),t.Y8G("ngForOf",a.ServerList)}}function Z(l,h){if(1&l){const a=t.RV6();t.j41(0,"ion-item")(1,"ion-input",34),t.mxI("ngModelChange",function(e){t.eBV(a);const s=t.XpG(2);return t.DH7(s.UserInputCustomAddress,e)||(s.UserInputCustomAddress=e),t.Njj(e)}),t.k0s(),t.j41(2,"ion-icon",35),t.bIt("click",function(){t.eBV(a);const e=t.XpG(2);return t.Njj(e.global.open_custom_site(e.UserInputCustomAddress))}),t.k0s()()}if(2&l){const a=t.XpG(2);t.R7$(),t.Y8G("label",a.lang.text.voidDraw.InputAddress),t.R50("ngModel",a.UserInputCustomAddress)}}function tt(l,h){1&l&&(t.j41(0,"div",36),t.EFF(1," Ctrl + Enter "),t.k0s())}function et(l,h){if(1&l){const a=t.RV6();t.j41(0,"div",9),t.DNE(1,K,6,3,"ion-item",14)(2,Z,3,2,"ion-item",14),t.j41(3,"ion-item")(4,"ion-input",26),t.mxI("ngModelChange",function(e){t.eBV(a);const s=t.XpG();return t.DH7(s.client.JoinedChannel,e)||(s.client.JoinedChannel=e),t.Njj(e)}),t.k0s()(),t.j41(5,"div"),t.DNE(6,tt,2,0,"div",27),t.j41(7,"ion-item",28),t.bIt("click",function(){t.eBV(a);const e=t.XpG();return t.Njj(e.init_joinChat())}),t.j41(8,"ion-label",29),t.EFF(9),t.k0s()()()()}if(2&l){const a=t.XpG();t.R7$(),t.Y8G("ngIf",a.ServerList.length),t.R7$(),t.Y8G("ngIf",a.NeedInputCustomAddress),t.R7$(2),t.Y8G("label",a.lang.text.voidDraw.ChannelIdAddress),t.R50("ngModel",a.client.JoinedChannel),t.R7$(2),t.Y8G("ngIf",a.global.ShowHint),t.R7$(3),t.JRh(a.lang.text.voidDraw.ConnectToAddress)}}function it(l,h){if(1&l){const a=t.RV6();t.j41(0,"div")(1,"img",37),t.bIt("click",function(){t.eBV(a);const e=t.XpG();return t.Njj(e.copy_qr_address())}),t.k0s(),t.j41(2,"ion-item",28),t.bIt("click",function(){t.eBV(a);const e=t.XpG();return t.Njj(e.copy_qr_address(e.client.JoinedChannel))}),t.j41(3,"ion-label",38),t.EFF(4),t.k0s()()()}if(2&l){const a=t.XpG();t.R7$(),t.Y8G("src",a.QRCodeSRC,t.B4B),t.R7$(3),t.JRh(a.client.JoinedChannel)}}function nt(l,h){if(1&l&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&l){const a=t.XpG().$implicit;t.Aen("color: #"+a.color),t.R7$(),t.JRh(" "+a.text)}}function at(l,h){if(1&l&&(t.j41(0,"b"),t.EFF(1),t.k0s()),2&l){const a=t.XpG(2).$implicit;t.R7$(),t.SpI("",a.target,":")}}function st(l,h){if(1&l&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&l){const a=t.XpG().$implicit;t.R7$(),t.JRh(a.text)}}function lt(l,h){if(1&l){const a=t.RV6();t.j41(0,"a",43),t.bIt("click",function(){t.eBV(a);const e=t.XpG().$implicit,s=t.XpG(4);return t.Njj(s.nakama.open_url_link(e.text))}),t.EFF(1),t.k0s()}if(2&l){const a=t.XpG().$implicit;t.Y8G("href",a.text,t.B4B),t.R7$(),t.JRh(a.text)}}function ot(l,h){if(1&l&&(t.j41(0,"span"),t.DNE(1,st,2,1,"span",14)(2,lt,2,2,"a",42),t.k0s()),2&l){const a=h.$implicit;t.R7$(),t.Y8G("ngIf",!a.href),t.R7$(),t.Y8G("ngIf",a.href)}}function rt(l,h){if(1&l&&(t.j41(0,"span"),t.DNE(1,ot,3,2,"span",16),t.k0s()),2&l){const a=t.XpG(2).$implicit;t.Aen(a.isSystem?"color: var(--miniranchat-system-text)":""),t.R7$(),t.Y8G("ngForOf",a.text)}}function ct(l,h){if(1&l&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&l){const a=t.XpG(3).$implicit;t.R7$(),t.SpI(" ",a.Progress," ")}}function ht(l,h){if(1&l){const a=t.RV6();t.j41(0,"span")(1,"span",44),t.bIt("click",function(){t.eBV(a);const e=t.XpG(2).$implicit,s=t.XpG();return t.Njj(s.open_file_viewer(e.file.info))}),t.EFF(2),t.k0s(),t.DNE(3,ct,2,1,"span",14),t.k0s()}if(2&l){const a=t.XpG(2).$implicit,i=t.XpG();t.R7$(2),t.JRh(i.lang.text.ChatRoom.attachments+": "+a.file.info.filename),t.R7$(),t.Y8G("ngIf",a.Progress)}}function dt(l,h){if(1&l&&(t.j41(0,"span",41)(1,"span"),t.DNE(2,at,2,1,"b",14),t.k0s(),t.DNE(3,rt,2,3,"span",39)(4,ht,4,2,"span",14),t.k0s()),2&l){const a=t.XpG().$implicit;t.R7$(),t.Aen("color: #"+a.color),t.R7$(),t.Y8G("ngIf",a.target),t.R7$(),t.Y8G("ngIf",a.text),t.R7$(),t.Y8G("ngIf",a.file)}}function ut(l,h){if(1&l&&(t.j41(0,"p"),t.DNE(1,nt,2,3,"span",39)(2,dt,5,5,"span",40),t.k0s()),2&l){const a=h.$implicit;t.R7$(),t.Y8G("ngIf",!a.target),t.R7$(),t.Y8G("ngIf",a.target)}}function mt(l,h){if(1&l&&t.nrm(0,"ion-icon",51),2&l){const a=t.XpG().$implicit;t.Y8G("name",a.icon||"close-circle")}}function _t(l,h){if(1&l&&t.nrm(0,"img",52),2&l){const a=t.XpG().$implicit;t.Y8G("src","assets/icon/"+a.icon_img,t.B4B)("alt",a.title)}}function gt(l,h){if(1&l){const a=t.RV6();t.j41(0,"div",47)(1,"div",48),t.bIt("click",function(){const e=t.eBV(a).$implicit;return t.Njj(e.act())})("contextmenu",function(){const e=t.eBV(a).$implicit;return t.Njj(e.context?e.context():null)}),t.DNE(2,mt,1,1,"ion-icon",49)(3,_t,1,2,"img",50),t.j41(4,"div"),t.EFF(5),t.k0s()()()}if(2&l){const a=h.$implicit;t.R7$(),t.Aen("cursor: "+(a.cursor||"pointer")+";"),t.Y8G("hidden",a.isHide),t.R7$(),t.Y8G("ngIf",a.icon),t.R7$(),t.Y8G("ngIf",a.icon_img),t.R7$(2),t.JRh(a.name)}}function pt(l,h){if(1&l&&(t.j41(0,"div",45),t.DNE(1,gt,6,6,"div",46),t.k0s()),2&l){const a=t.XpG();t.R7$(),t.Y8G("ngForOf",a.extended_buttons)}}const ft=[{path:"",component:(()=>{var l;class h{constructor(i,e,s,o,n,d,r,c,u,_,C,p,y,x,A){var M,g=this;this.client=i,this.noti=e,this.title=s,this.navCtrl=o,this.route=n,this.router=d,this.statusBar=r,this.lang=c,this.global=u,this.p5toast=_,this.indexed=C,this.alertCtrl=p,this.nakama=y,this.floatButton=x,this.p5loading=A,this.Header="simplechat",this.iconColor="d8d8d8",this.lnId=12,this.req_refreshed=!1,this.open_this=M=>{this.noti.Current==this.Header?window.focus():this.client.RejoinGroupChat()},this.ShowExtMenus=!1,this.useVoiceRecording=!1,this.extended_buttons=[{icon:"document-attach-outline",name:this.lang.text.ChatRoom.attachments,act:(M=(0,v.A)(function*(){g.new_attach({detail:{value:"load"}})}),function(){return M.apply(this,arguments)}),context:()=>(this.new_attach({detail:{value:"link"}}),!1)},{icon_img:"voidDraw.png",name:this.lang.text.ChatRoom.voidDraw,act:()=>{this.new_attach({detail:{value:"image"}})}},{icon:"reader-outline",name:this.lang.text.ChatRoom.newText,act:()=>{this.new_attach({detail:{value:"text"}})}},{icon:"camera-outline",name:this.lang.text.ChatRoom.Camera,act:()=>{this.new_attach({detail:{value:"camera"}})}},{icon:"mic-circle-outline",name:this.lang.text.ChatRoom.Voice,act:function(){var M=(0,v.A)(function*(){if(g.useVoiceRecording=!g.useVoiceRecording,g.useVoiceRecording){if(g.global.useVoiceRecording&&"SquareRecording"!=g.global.useVoiceRecording)return void g.p5toast.show({text:g.lang.text.GlobalAct[g.global.useVoiceRecording]});(yield T.R.hasAudioRecordingPermission()).value?(g.global.useVoiceRecording="SquareRecording",g.extended_buttons[4].icon="stop-circle-outline",g.extended_buttons[4].name=g.lang.text.ChatRoom.VoiceStop,g.p5loading.toast(g.lang.text.ChatRoom.StartVRecord),yield T.R.startRecording(),g.CreateFloatingVoiceTimeHistoryAddButton()):(g.useVoiceRecording=!1,g.extended_buttons[4].icon="mic-circle-outline",yield T.R.requestAudioRecordingPermission())}else yield g.StopAndSaveVoiceRecording()});return function(){return M.apply(this,arguments)}}()},{icon:"trash-outline",name:this.lang.text.MinimalChat.TrashChat,act:()=>{this.client.userInput.logs.length=0,this.client.userInput.logs.push({color:S.ud?"bbb":"444",text:this.lang.text.MinimalChat.TrashChatLog,isSystem:!0}),this.ShowExtMenus=!1}}],this.NeedInputCustomAddress=!1,this.JoinedQuick=!1,this.UserInputCustomAddress=void 0,this.WaitingLoaded=!1}ToggleExtMenu(i){this.ShowExtMenus=null!=i?i:!this.ShowExtMenus,setTimeout(()=>{this.auto_scroll_down()},0)}CreateFloatingVoiceTimeHistoryAddButton(){this.floatButton.RemoveFloatButton("sqaure-record"),this.floatButton.AddFloatButton("sqaure-record","mic-outline").mouseClicked(()=>{this.p5toast.show({text:`${this.lang.text.GlobalAct.SquareRecording}`})})}StopAndSaveVoiceRecording(){var i=this;return(0,v.A)(function*(){i.floatButton.RemoveFloatButton("sqaure-record");const e="minimal_chat";i.p5loading.update({id:e,message:i.lang.text.AddPost.SavingRecord});try{let s=yield i.global.StopAndSaveVoiceRecording();yield i.SendAttachAct({target:{files:[s]}})}catch{}i.p5loading.remove(e),i.extended_buttons[4].icon="mic-circle-outline",i.extended_buttons[4].name=i.lang.text.ChatRoom.Voice})()}ngOnInit(){var i=this;this.global.StoreShortCutAct("minimal-chat-init"),this.route.queryParams.subscribe(function(){var e=(0,v.A)(function*(s){const o=i.router.getCurrentNavigation().extras.state;yield new Promise(n=>setTimeout(n,100)),o&&(i.client.MyUserName=o.name,i.client.JoinedChannel=o.channel||i.client.JoinedChannel,i.JoinedQuick=o.quick,o.address&&(i.UserInputCustomAddress=o.address,i.init_joinChat()))});return function(s){return e.apply(this,arguments)}}()),this.global.windowOnFocusAct.minimalchat=()=>{this.lnId&&this.noti.ClearNoti(this.lnId),this.noti.Current=this.Header},this.header_title=this.lang.text.MinimalChat.header_title_group,this.minimal_chat_log=document.getElementById("minimal_chat_div"),this.minimal_chat_log.onscroll=e=>{this.minimal_chat_log.scrollHeight==this.minimal_chat_log.scrollTop+this.minimal_chat_log.clientHeight&&this.scroll_down()},this.ServerList=this.client.nakama.get_all_online_server(),setTimeout(()=>{this.MinimalChatServer?(this.MinimalChatServer.value=this.ServerList[0]||"local",this.SelectAddressTarget({detail:{value:this.MinimalChatServer.value}})):this.NeedInputCustomAddress=!0},0),this.client.cacheAddress&&this.CreateQRCode(),setTimeout(()=>{this.CreateDrop()},100)}ionViewWillEnter(){this.noti.Current=this.Header,this.WaitingLoaded=!0,this.DomMinimalChatInput=document.getElementById("minimalchat_input").childNodes[1].childNodes[1].childNodes[1],this.client.RemoveFloatButton(),this.DomMinimalChatInput.onpaste=i=>{let e=[];for(const s of i.clipboardData.files)e.push({file:s});if(1==e.length)return this.SendAttachAct({target:{files:[e[0].file]}}),!1},this.client.IsConnected&&this.focus_on_input()}AddShortCut(){this.global.p5KeyShortCut.EnterAct=i=>{i.ctrlKey?"idle"==this.client.status&&this.init_joinChat():document.activeElement==this.DomMinimalChatInput?this.scroll_down():setTimeout(()=>{this.focus_on_input()},0)},this.global.p5KeyShortCut.Escape=()=>{this.navCtrl.pop()}}new_attach(i){var e=this;return(0,v.A)(function*(){switch(i.detail.value){case"camera":try{let n=yield e.global.from_camera("tmp_files/square/",{display_name:e.client.MyUserName},"minimal_chat");n&&e.TrySendingAttach(n)}catch{}e.AddShortCut(),e.auto_scroll_down(100);break;case"text":let s=e.global.TextEditorNewFileName();e.global.PageDismissAct["minimal-textedit"]=n=>{if(n.data){let d=e.global.TextEditorAfterAct(n.data,{display_name:e.client.MyUserName});e.TrySendingAttach(d),e.auto_scroll_down()}delete e.global.PageDismissAct["minimal-textedit"]},e.global.ActLikeModal("ionic-viewer",{info:{content:{is_new:"text",type:"text/plain",viewer:"text",filename:s}},noEdit:!0,dismiss:"minimal-textedit"});break;case"image":e.global.PageDismissAct["minimal-image"]=function(){var n=(0,v.A)(function*(d){if(d.data){let r=yield e.global.voidDraw_fileAct_callback(d,"tmp_files/square/",{display_name:e.client.MyUserName});e.TrySendingAttach(r)}delete e.global.PageDismissAct["minimal-image"]});return function(d){return n.apply(this,arguments)}}(),e.global.ActLikeModal("void-draw",{dismiss:"minimal-image"});break;case"load":e.SelectAttach(),e.AddShortCut();break;case"link":let o;try{try{let c=yield e.global.GetValueFromClipboard();switch(c.type){case"text/plain":o=c.value;break;case"image/png":return void e.SendAttachAct({target:{files:[c.value]}});case"error":throw c.value}}catch(c){throw c}try{let c=e.global.Base64ToBlob(o),u=o.split(";")[0].split(":")[1],_=new File([c],`${e.lang.text.ChatRoom.FileLink}.${u.split("/").pop()}`,{type:u});throw e.SendAttachAct({target:{files:[_]}}),"done"}catch(c){if("done"===c)throw c}try{if(0!=o.indexOf("http:")&&0!=o.indexOf("https:"))throw"\uc62c\ubc14\ub978 \uc6f9 \uc8fc\uc18c\uac00 \uc544\ub2d8"}catch(c){throw c}let n={};n.url=o,n.content_related_creator=[],n.content_related_creator.push({user_id:e.client.uuid,timestamp:(new Date).getTime(),display_name:e.client.MyUserName,various:"link"}),n.content_creator={user_id:e.client.uuid,timestamp:(new Date).getTime(),display_name:e.client.MyUserName,various:"link"};let d=n.url.split(".");n.file_ext=d.pop().split("?").shift(),n.filename=decodeURIComponent(`${d.pop().split("/").pop()||e.lang.text.ChatRoom.ExternalLinkFile}.${n.file_ext}`),e.global.set_viewer_category_from_ext(n),n.type="",n.typeheader=n.viewer,e.client.send(JSON.stringify({type:"file",info:n,name:e.client.MyUserName}))}catch(n){throw"done"==n?n:`\uc778\uc2dd \ubd88\uac00\ub2a5\ud55c URL \uc815\ubcf4: ${n}`}}})()}CreateDrop(){var i=this;let e=document.getElementById("p5Drop_chatroom");this.p5canvas=new B(s=>{s.setup=()=>{let c=s.createCanvas(e.clientWidth,e.clientHeight);c.parent(e),s.pixelDensity(.1),c.drop(u=>{let _=s.millis();d<_-400?(n=!1,r.length=0,r.push(u)):(n=!0,r.push(u)),d=_,clearTimeout(o),o=setTimeout((0,v.A)(function*(){const C="minimal_chat";n?i.alertCtrl.create({header:i.lang.text.ChatRoom.MultipleSend,message:`${i.lang.text.ChatRoom.CountFile}: ${r.length}`,buttons:[{text:i.lang.text.ChatRoom.Send,handler:()=>{!function(){var y=(0,v.A)(function*(){i.p5loading.update({id:C,progress:0});for(let x=0,A=r.length;x<A;x++)i.p5loading.update({id:C,progress:x/A}),yield i.SendAttachAct({target:{files:[r[x].file]}},C);i.p5loading.remove(C)});return function(){return y.apply(this,arguments)}}()()}}]}).then(p=>{i.global.StoreShortCutAct("minimal-multiple-send"),i.global.p5KeyShortCut.Escape=()=>{p.dismiss()},p.onDidDismiss().then(()=>{i.global.RestoreShortCutAct("minimal-multiple-send")}),p.present()}):(i.p5loading.update({id:C}),yield i.SendAttachAct({target:{files:[u.file]}}),i.p5loading.remove(C))}),400)})};let o,n=!1,d=0,r=[];s.mouseMoved=c=>{c.dataTransfer?(e.style.pointerEvents="all",e.style.backgroundColor="#0008"):(e.style.pointerEvents="none",e.style.backgroundColor="transparent")}})}CreateQRCode(){var i=this;return(0,v.A)(function*(){if(i.JoinedQuick)return;i.QRCodeSRC="";let e=yield i.global.GetHeaderAddress();i.QRCodeTargetString=`${e}?group_dedi=${i.client.cacheAddress},${i.client.JoinedChannel||"public"}`,i.QRCodeSRC=i.global.readasQRCodeFromString(i.QRCodeTargetString.replace(/ /g,"%20")),i.focus_on_input()})()}SelectAddressTarget(i){"local"===(this.header_title=this.lang.text.MinimalChat.header_title_group,this.title.setTitle(this.lang.text.MinimalChat.WebTitle_group),i.detail.value)?(this.client.cacheServerInfo=void 0,this.UserInputCustomAddress="",this.NeedInputCustomAddress=!0):(this.client.cacheServerInfo=i.detail.value.info,this.UserInputCustomAddress=`${this.client.cacheServerInfo.useSSL?"wss":"ws"}://${this.client.cacheServerInfo.address}:${this.client.cacheServerInfo.square_port||12013}`,this.NeedInputCustomAddress=!1)}init_joinChat(){var i=this;this.client.status="custom",this.Header="simplechat",this.noti.ClearNoti(this.lnId),document.getElementById("favicon").setAttribute("href","assets/icon/simplechat.png");try{if(!this.client.client||this.client.client.readyState!=this.client.client.OPEN&&!this.client.p5OnDediMessage){this.client.userInput.logs.length=0;let o={color:S.ud?"bbb":"444",text:this.lang.text.MinimalChat.joinChat_group,isSystem:!0};this.client.userInput.logs.push(o),this.client.userInput.last_message=o;let n=this.UserInputCustomAddress.split("://"),d=n.pop().split(":"),r=n.pop();r?r+=":":r=this.global.checkProtocolFromAddress(d[0])?"wss:":"ws:",this.client.initialize(`${r}//${d[0]}`,d[1])}const s=[{title:this.lang.text.MinimalChat.Noti_Reply,action:"sq_reply",type:"text"}];this.client.funcs.onmessage=o=>{try{let n=JSON.parse(o);this.client.JoinedChannel||(this.client.JoinedChannel=n.channel),this.client.uuid||(this.client.uuid=n.uid);let d=this.client.uuid==n.uid,r=d?this.client.MyUserName||this.lang.text.MinimalChat.name_me:n.name||this.lang.text.MinimalChat.name_stranger_group,c=n.uid?(n.uid.replace(/[^5-79a-b]/g,"")+"abcdef").substring(0,6):S.ud?"888888":"444444";if(this.client.p5OnDediMessage&&this.client.p5OnDediMessage(c),n.msg){let _=n.msg.split(" "),C=[],p="";for(let x=0,A=_.length;x<A;x++)0==_[x].indexOf("http://")||0==_[x].indexOf("https://")?(C.push({text:" "+p+" "}),p="",C.push({href:!0,text:_[x]})):p+=" "+_[x];p&&C.push({text:" "+p});let y={color:c,text:C,target:r,isMe:d};this.client.userInput.logs.push(y),this.client.userInput.last_message=y}else if(n.type)switch(n.type){case"join":let _={color:c,text:[{text:" "+this.lang.text.MinimalChat.user_join_comment}],target:r,isSystem:!0};this.client.userInput.logs.push(_),this.client.userInput.last_message=_;break;case"leave":let C={color:c,text:[{text:" "+this.lang.text.MinimalChat.user_out_comment}],target:r,isSystem:!0};this.client.userInput.logs.push(C),this.client.userInput.last_message=C;break;case"file":let p={color:c,file:n,target:r,isMe:d};if(this.client.userInput.logs.push(p),this.client.userInput.last_message=p,!n.info.url){let y=n.info;this.client.DownloadPartManager[n.uid]||(this.client.DownloadPartManager[n.uid]={}),this.client.DownloadPartManager[n.uid][n.temp_id]||(this.client.DownloadPartManager[n.uid][n.temp_id]=p),p.Progress=y.partsize}break;case"part":return this.client.DownloadPartManager[n.uid][n.temp_id].Progress--,void this.indexed.checkIfFileExist(n.path).then(y=>{y||this.indexed.saveBase64ToUserPath(","+n.part,`${n.path}_${n.index}`)});case"EOF":return void this.indexed.checkIfFileExist(n.path).then(function(){var y=(0,v.A)(function*(x){x?i.indexed.removeFileFromUserPath(`${n.path}.history`):(yield new Promise(function(){var A=(0,v.A)(function*(g,M){let I=[],G=0;for(let R=0,w=n.partsize;R<w;R++)try{let b=yield i.indexed.GetFileInfoFromDB(`${n.path}_${R}`);G+=b.contents.length,I[R]=b}catch(b){console.log("\ud30c\uc77c \ubcd1\ud569\ud558\uae30 \uc624\ub958: ",b);break}try{let R=new Int8Array(G),w=0;for(let b=0,$=I.length;b<$;b++)R.set(I[b].contents,w),w+=I[b].contents.length;yield i.indexed.saveInt8ArrayToUserPath(R,n.path);for(let b=0,$=n.partsize;b<$;b++)i.indexed.removeFileFromUserPath(`${n.path}_${b}`);yield i.indexed.removeFileFromUserPath(`${n.path}.history`)}catch(R){console.log("\ud30c\uc77c \ucd5c\uc885 \uc800\uc7a5\ud558\uae30 \uc624\ub958: ",R),M()}g(void 0)});return function(g,M){return A.apply(this,arguments)}}()),delete i.client.DownloadPartManager[n.uid][n.temp_id].Progress,delete i.client.DownloadPartManager[n.uid][n.temp_id])});return function(x){return y.apply(this,arguments)}}())}let u="certified";if(n.count&&(this.client.ConnectedNow=n.count),n.msg)this.noti.PushLocal({id:this.lnId,title:r,body:n.msg,actions_wm:s,smallIcon_ln:"simplechat"},this.Header,this.open_this);else if(n.type)switch(n.type){case"join":this.noti.PushLocal({id:this.lnId,title:this.lang.text.MinimalChat.user_join,body:r+` | ${this.lang.text.MinimalChat.user_join_comment}`,actions_wm:s,smallIcon_ln:"simplechat"},this.Header,this.open_this);break;case"leave":u="pending",this.noti.PushLocal({id:this.lnId,title:this.lang.text.MinimalChat.user_out,body:r+` | ${this.lang.text.MinimalChat.user_out_comment}`,actions_wm:s,smallIcon_ln:"simplechat"},this.Header,this.open_this);break;case"file":this.noti.PushLocal({id:this.lnId,title:r,body:this.lang.text.MinimalChat.user_send_attach,actions_wm:s,smallIcon_ln:"simplechat"},this.Header,this.open_this)}this.statusBar.settings.dedicated_groupchat=u,setTimeout(()=>{this.statusBar.settings.dedicated_groupchat==u&&(this.statusBar.settings.dedicated_groupchat="online")},250)}catch{}this.auto_scroll_down()},this.client.funcs.onclose=o=>{this.WebSocketOnCloseAct()},this.client.funcs.onopen=o=>{this.CreateQRCode(),this.statusBar.settings.dedicated_groupchat="online",this.client.send(JSON.stringify({name:this.client.MyUserName,type:"join",channel:this.client.JoinedChannel||"public"})),this.client.funcs.onclose=d=>{this.statusBar.settings.dedicated_groupchat="missing",setTimeout(()=>{this.statusBar.settings.dedicated_groupchat="offline"},1500);let r=this.lang.text.MinimalChat.cannot_join,c={color:"faa",text:r,isSystem:!0};this.client.userInput.logs.push(c),this.client.userInput.last_message=c,this.noti.PushLocal({id:this.lnId,title:r,actions_wm:s,smallIcon_ln:"simplechat"},this.Header,this.open_this),this.client.p5OnDediMessage&&this.client.p5OnDediMessage("ff0000")}}}catch(s){console.log("\uad11\uc7a5 \ucc44\ub110 \uc811\uc18d \uc2e4\ud328: ",s),this.WebSocketOnCloseAct()}}WebSocketOnCloseAct(){this.statusBar.settings.dedicated_groupchat="missing",setTimeout(()=>{this.statusBar.settings.dedicated_groupchat="offline"},1500);let i={color:"faa",text:this.lang.text.MinimalChat.failed_to_join,isSystem:!0};this.client.userInput.logs.push(i),this.client.userInput.last_message=i,this.noti.PushLocal({id:this.lnId,title:this.lang.text.MinimalChat.failed_to_join,smallIcon_ln:"simplechat"},this.Header,this.open_this),this.client.p5OnDediMessage&&this.client.p5OnDediMessage("ff0000"),this.client.disconnect()}copy_qr_address(i=this.QRCodeTargetString){this.global.WriteValueToClipboard("text/plain",i,"minimal_chat")}SelectAttach(){document.getElementById("minimal_chat_file").click()}SendAttachAct(i,e){var s=this;return(0,v.A)(function*(){let o=i.target.files[0],n={};n.blob=o,n.filename=o.name,n.size=o.size,n.file_ext=o.name.split(".").pop(),n.type=o.type,s.global.set_viewer_category(n),n.content_related_creator=[{user_id:s.client.uuid,timestamp:(new Date).getTime(),display_name:s.client.MyUserName,various:"loaded"}],n.content_creator={user_id:s.client.uuid,timestamp:(new Date).getTime(),display_name:s.client.MyUserName,various:"loaded"},yield s.TrySendingAttach(n,e)})()}TrySendingAttach(i,e){var s=this;return(0,v.A)(function*(){let o=`${Date.now()}`,n={type:"file",info:i,temp_id:o,name:s.client.MyUserName};try{let d;try{d=`${s.client.cacheServerInfo.useSSL?"https":"http"}://${s.client.cacheServerInfo.address}:${s.client.cacheServerInfo.apache_port||9002}`}catch(c){console.log("\ub300\uc0c1 \uc8fc\uc18c \uc0dd\uc131 \uc624\ub958: ",c)}let r=yield s.global.try_upload_to_user_custom_fs(i,`tmp_${s.client.JoinedChannel||"public"}_${s.client.uuid}`,e,s.lang.text.MinimalChat.header_title_group,d);if(!r)throw"\ubd84\ud560 \uc804\uc1a1 \uc2dc\ub3c4 \ud544\uc694";i.url=r,delete i.blob,s.client.send(JSON.stringify(n)),s.focus_on_input()}catch{if(i.url){let u=yield fetch(i.url);if(u.ok){let _=yield u.blob();i.blob=_}}i.path=`tmp_files/sqaure/${o}.${i.file_ext}`,yield s.indexed.saveBlobToUserPath(i.blob,i.path);let r=yield s.indexed.GetFileInfoFromDB(i.path);i.partsize=Math.ceil(i.size/S.xM),delete i.blob,s.client.send(JSON.stringify(n)),s.focus_on_input();for(let u=0;u<i.partsize;u++){yield new Promise(p=>setTimeout(p,s.global.WebsocketRetryTerm));let _=s.global.req_file_part_base64(r,u,i.path);s.client.send(JSON.stringify({type:"part",path:i.path,index:u,part:_,temp_id:o}))}yield new Promise(u=>setTimeout(u,s.global.WebsocketRetryTerm)),s.client.send(JSON.stringify({type:"EOF",path:i.path,partsize:i.partsize,temp_id:o}))}})()}WaitingCurrent(){var i=this;return(0,v.A)(function*(){for(;!i.WaitingLoaded;)yield new Promise(e=>setTimeout(e,0));return!0})()}open_file_viewer(i){var e=this;let s=[];for(let o=0,n=this.client.userInput.logs.length;o<n;o++)try{this.client.userInput.logs[o].file.info.filename&&s.push({content:JSON.parse(JSON.stringify(this.client.userInput.logs[o].file.info))})}catch{}this.global.PageDismissAct["minimal-ionic-viewer"]=function(){var o=(0,v.A)(function*(n){if(n.data)switch(n.data.type){case"image":let d=[];if(n.data.msg.content.content_related_creator&&(d=[...n.data.msg.content.content_related_creator]),n.data.msg.content.content_creator){let r=!1;for(let c=0,u=d.length;c<u;c++)if(d[c].user_id==n.data.msg.content.content_creator.user_id){r=!0;break}r||d.push(n.data.msg.content.content_creator)}return e.global.PageDismissAct["minimal-ionic-viewer-edit"]=r=>{if(r.data){e.p5loading.remove(r.data.loadingCtrl);let c=r.data.img;e.indexed.saveBase64ToUserPath(c,`tmp_files/sqaure/${r.data.name}`);let _=e.global.Base64ToBlob(c,"image/png");_.name=r.data.name,e.SendAttachAct({target:{files:[_]}})}delete e.global.PageDismissAct["minimal-ionic-viewer-edit"]},yield e.WaitingCurrent(),void e.global.ActLikeModal("void-draw",{path:n.data.path||i.path,width:n.data.width,height:n.data.height,type:n.data.filetype,isDarkMode:n.data.isDarkMode,scrollHeight:n.data.scrollHeight,dismiss:"minimal-ionic-viewer-edit"});case"text":n.data.blob.name=e.global.TextEditorNewFileName(),n.data.path=`tmp_files/texteditor/${n.data.blob.name}`,e.SendAttachAct({target:{files:[n.data.blob]}})}delete e.global.PageDismissAct["minimal-ionic-viewer"]});return function(n){return o.apply(this,arguments)}}(),this.global.ActLikeModal("ionic-viewer",{info:{content:i},isOfficial:"local",path:i.path,relevance:s,dismiss:"minimal-ionic-viewer"})}ionViewDidEnter(){this.AddShortCut(),setTimeout(()=>{this.scroll_down()},0)}scroll_down(){this.minimal_chat_log.scrollTo({top:this.minimal_chat_log.scrollHeight,behavior:"smooth"})}focus_on_input(i){"DesktopPWA"==D.aH&&this.minimalchat_input.setFocus(),this.auto_scroll_down(i)}auto_scroll_down(i){setTimeout(()=>{let e=this.minimal_chat_log.scrollHeight;e<this.minimal_chat_log.scrollTop+this.minimal_chat_log.clientHeight+120&&this.minimal_chat_log.scrollTo({top:e,behavior:"smooth"})},i||0)}send(i){this.statusBar.settings.dedicated_groupchat="certified",setTimeout(()=>{"certified"==this.statusBar.settings.dedicated_groupchat&&(this.statusBar.settings.dedicated_groupchat="online")},250);let e={msg:i||this.client.userInput.text};e.msg.trim()&&(this.ToggleExtMenu(!1),e.name=this.client.MyUserName,this.client.send(JSON.stringify(e)),this.client.userInput.text="",this.focus_on_input())}quit_chat(){this.client.funcs.onclose=()=>{this.statusBar.settings.dedicated_groupchat="missing",setTimeout(()=>{this.statusBar.settings.dedicated_groupchat="offline"},1500);let i={color:S.ud?"ffa":"884",text:this.lang.text.MinimalChat.leave_chat_group,isSystem:!0};this.client.userInput.logs.push(i),this.client.userInput.last_message=i,this.minimal_chat_log.scrollTo({top:this.minimal_chat_log.scrollHeight,behavior:"smooth"})},this.UserInputCustomAddress="",this.noti.ClearNoti(this.lnId),"idle"==this.client.status&&this.navCtrl.pop(),this.indexed.GetFileListFromDB("tmp_files/sqaure").then(i=>i.forEach(e=>this.indexed.removeFileFromUserPath(e))),this.client.disconnect(),this.client.DownloadPartManager={}}ionViewWillLeave(){this.WaitingLoaded=!1,this.title.setTitle("Project: Cone"),document.getElementById("favicon").setAttribute("href","assets/icon/favicon.png"),this.noti.Current="",this.client.IsConnected&&this.client.CreateRejoinButton(),delete this.global.p5KeyShortCut.EnterAct,delete this.global.p5KeyShortCut.Escape,this.useVoiceRecording&&this.StopAndSaveVoiceRecording()}ngOnDestroy(){this.p5loading.update({id:"minimal_chat",forceEnd:0},!0),this.global.RestoreShortCutAct("minimal-chat-init"),this.route.queryParams.unsubscribe(),delete this.global.windowOnFocusAct.minimalchat,this.minimal_chat_log.onscroll=null,this.DomMinimalChatInput.onpaste=null,this.p5canvas&&this.p5canvas.remove()}}return(l=h).\u0275fac=function(i){return new(i||l)(t.rXU(E.z),t.rXU(F.r),t.rXU(U.hE),t.rXU(V.q9),t.rXU(k.nX),t.rXU(k.Ix),t.rXU(O.j),t.rXU(X.y),t.rXU(S.z3),t.rXU(J.G),t.rXU(H.n),t.rXU(f.hG),t.rXU(Y.X),t.rXU(L.u),t.rXU(W.f))},l.\u0275cmp=t.VBU({type:l,selectors:[["app-minimal-chat"]],viewQuery:function(i,e){if(1&i&&(t.GBs(Q,5),t.GBs(z,5)),2&i){let s;t.mGM(s=t.lsd())&&(e.MinimalChatServer=s.first),t.mGM(s=t.lsd())&&(e.minimalchat_input=s.first)}},decls:36,vars:12,consts:[["minimalchat_input",""],["MinimalChatServer",""],[1,"ion-no-border"],["slot","start",3,"click"],["defaultHref",""],["slot","end",2,"margin","8px 16px"],["scrollY","false"],["id","p5Drop_chatroom",2,"position","absolute","width","100%","height","100%","display","flex","pointer-events","none","z-index","500"],[2,"display","flex","flex-direction","column","height","100%"],[2,"flex","0 1 auto"],["button",""],[1,"ion-text-right",3,"ngModelChange","label","placeholder","ngModel"],["style","flex: 0 1 auto;",4,"ngIf"],["id","minimal_chat_div",1,"main",2,"flex","1 1 auto"],[4,"ngIf"],[2,"user-select","text"],[4,"ngFor","ngForOf"],["id","input_table",2,"width","100%"],["expand","block","fill","clear",3,"click"],["name","exit"],[2,"width","100%"],["id","minimalchat_input","type","text",3,"ionFocus","keyup.enter","ngModelChange","placeholder","ngModel"],["name","add-outline"],["hidden","","type","file","id","minimal_chat_file","accept","*",3,"change"],["name","send"],["style","height: 240px; overflow-x: hidden; overflow-y: auto; scroll-behavior: smooth; text-align: center; background-color: var(--chatroom-background);",4,"ngIf"],["placeholder","public",1,"ion-text-right",3,"ngModelChange","label","ngModel"],["class","shortcut_hint",4,"ngIf"],["button","",3,"click"],[1,"ion-text-center"],["value","local",2,"pointer-events","none",3,"ionChange","label"],["value","local"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","(wss://)0.0.0.0",1,"ion-text-right",3,"ngModelChange","label","ngModel"],["slot","end","name","open-outline",3,"click"],[1,"shortcut_hint"],["alt","QRCode",2,"width","100%","height","auto","cursor","copy",3,"click","src"],["disabled","","color","medium",1,"ion-text-center"],[3,"style",4,"ngIf"],["class","default_text",4,"ngIf"],[1,"default_text"],["target","_system","onclick","return false;",3,"href","click",4,"ngIf"],["target","_system","onclick","return false;",3,"click","href"],[1,"file_attach_box",3,"click"],[2,"height","240px","overflow-x","hidden","overflow-y","auto","scroll-behavior","smooth","text-align","center","background-color","var(--chatroom-background)"],["style","display: inline-block;",4,"ngFor","ngForOf"],[2,"display","inline-block"],[1,"ext_button",3,"click","contextmenu","hidden"],["slot","icon-only","style","width: 36px; height: 36px;",3,"name",4,"ngIf"],["class","ext_icon_img",3,"src","alt",4,"ngIf"],["slot","icon-only",2,"width","36px","height","36px",3,"name"],[1,"ext_icon_img",3,"src","alt"]],template:function(i,e){if(1&i){const s=t.RV6();t.j41(0,"ion-header",2)(1,"ion-toolbar")(2,"ion-buttons",3),t.bIt("click",function(){return t.eBV(s),t.Njj(e.navCtrl.pop())}),t.nrm(3,"ion-back-button",4),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.k0s(),t.j41(6,"div",5),t.EFF(7),t.k0s()()(),t.j41(8,"ion-content",6),t.nrm(9,"div",7),t.j41(10,"div",8)(11,"div",9)(12,"ion-item",10)(13,"ion-input",11),t.mxI("ngModelChange",function(n){return t.eBV(s),t.DH7(e.client.MyUserName,n)||(e.client.MyUserName=n),t.Njj(n)}),t.k0s()()(),t.DNE(14,et,10,6,"div",12),t.j41(15,"div",13),t.DNE(16,it,5,2,"div",14),t.j41(17,"div",15),t.DNE(18,ut,3,2,"p",16),t.k0s()()()(),t.j41(19,"ion-footer")(20,"table",17)(21,"tr")(22,"td")(23,"ion-button",18),t.bIt("click",function(){return t.eBV(s),t.Njj(e.quit_chat())}),t.nrm(24,"ion-icon",19),t.k0s()(),t.j41(25,"td",20)(26,"ion-input",21,0),t.bIt("ionFocus",function(){return t.eBV(s),t.Njj(e.focus_on_input(120))})("keyup.enter",function(){return t.eBV(s),t.Njj(e.send())}),t.mxI("ngModelChange",function(n){return t.eBV(s),t.DH7(e.client.userInput.text,n)||(e.client.userInput.text=n),t.Njj(n)}),t.k0s()(),t.j41(28,"td")(29,"ion-button",18),t.bIt("click",function(){return t.eBV(s),t.Njj(e.ToggleExtMenu())}),t.nrm(30,"ion-icon",22),t.k0s(),t.j41(31,"input",23),t.bIt("change",function(n){return t.eBV(s),t.Njj(e.SendAttachAct(n))}),t.k0s()(),t.j41(32,"td")(33,"ion-button",18),t.bIt("click",function(){return t.eBV(s),t.Njj(e.send())}),t.nrm(34,"ion-icon",24),t.k0s()()()(),t.DNE(35,pt,2,1,"div",25),t.k0s()}2&i&&(t.R7$(5),t.JRh(e.header_title),t.R7$(2),t.Lme("",e.lang.text.MinimalChat.concurrent_users,": ",e.client.ConnectedNow,""),t.R7$(6),t.Y8G("label",e.lang.text.Profile.name_placeholder)("placeholder",e.lang.text.Profile.noname_user),t.R50("ngModel",e.client.MyUserName),t.R7$(),t.Y8G("ngIf","idle"==e.client.status),t.R7$(2),t.Y8G("ngIf",e.QRCodeSRC&&!e.JoinedQuick&&"idle"!=e.client.status),t.R7$(2),t.Y8G("ngForOf",e.client.userInput.logs),t.R7$(8),t.Y8G("placeholder",e.lang.text.MinimalChat.input_placeholder),t.R50("ngModel",e.client.userInput.text),t.R7$(9),t.Y8G("ngIf",e.ShowExtMenus))},dependencies:[P.Sq,P.bT,j.BC,j.vS,f.Jm,f.QW,f.W9,f.M0,f.eU,f.iq,f.$w,f.uz,f.he,f.Nm,f.Ip,f.BC,f.ai,f.Je,f.Gw,f.el],styles:[".main[_ngcontent-%COMP%]{width:100%;padding:8px;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth}p[_ngcontent-%COMP%]{margin:8px 0 0}.default_text[_ngcontent-%COMP%]{color:var(--miniranchat-default-text)}.bottom_thumbnail[_ngcontent-%COMP%]{width:100%;max-width:100vw;height:-moz-fit-content;height:fit-content;max-height:96px;transform:translateY(-100%);position:absolute;background:var(--chatroom-last-msg-viewer-bg);padding:8px;overflow:hidden}ion-button[_ngcontent-%COMP%]{--padding-start: 12px;--padding-end: 12px}.file_attach_box[_ngcontent-%COMP%]{margin-left:8px;padding:2px 8px;border-radius:6px;background-color:#8888;cursor:pointer}"]}),h})()}];let Ct=(()=>{var l;class h{}return(l=h).\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.$C({type:l}),l.\u0275inj=t.G2t({imports:[k.iI.forChild(ft),k.iI]}),h})(),xt=(()=>{var l;class h{}return(l=h).\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.$C({type:l}),l.\u0275inj=t.G2t({imports:[P.MD,j.YN,f.bv,Ct]}),h})()}}]);