"use strict";(self["webpackChunklookt_it"]=self["webpackChunklookt_it"]||[]).push([[443],{11843:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("建设中...")]),s("PlayVideo",{attrs:{videoPath:e.path}})],1)},i=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex justify-center content-center w-full h-full"},[s("video",{attrs:{src:e.videoPath,controls:"controls"}})])},o=[],n={name:"PlayVideo",props:{videoPath:String}},r=n,c=s(1001),u=(0,c.Z)(r,l,o,!1,null,null,null),d=u.exports,p={components:{PlayVideo:d},data(){return{path:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}},methods:{login(){this.$store.commit("login")}}},h=p,g=(0,c.Z)(h,a,i,!1,null,null,null),v=g.exports},80596:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"},attrs:{title:e.title},on:{back:function(){return e.$router.go(-1)}}}),s("a-list",{attrs:{size:"large",pagination:e.pagination,"data-source":e.messageList,bordered:!0},scopedSlots:e._u([{key:"renderItem",fn:function(t){return s("a-list-item",{},[s("a-comment",{attrs:{author:t.user_name,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticClass:"p-3 text-xl"},[e._v(e._s(t.content))]),e._l(t.files,(function(e){return s("div",{key:e,staticClass:"p-3"},[s("img",{attrs:{src:e}})])}))],2),s("a-tooltip",{attrs:{slot:"datetime",title:t.createdAt},slot:"datetime"},[s("span",[e._v(e._s(t.createdAt))])])],1)],1)}}])}),e.visible?s("a-alert",{attrs:{message:"请输入内容",type:"warning",closable:"","after-close":e.handleClose}}):e._e(),s("a-textarea",{attrs:{placeholder:"Controlled autosize","auto-size":{minRows:3,maxRows:5}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),s("div",{staticClass:"clearfix"},[s("a-upload",{attrs:{action:"http://localhost:3000/uploadImg","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.handleChange}},[e.fileList.length<8?s("div",[s("a-icon",{attrs:{type:"plus"}}),s("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),s("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[s("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1),s("a-button",{staticClass:"float-right border",on:{click:e.sendMessage}},[e._v("评论 ")])],1)},i=[],l=s(26166),o=s.n(l),n=s(17133),r=s.n(n);function c(e){return new Promise(((t,s)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(a.result),a.onerror=e=>s(e)}))}var u={props:["title","contentId"],data(){return{moment:r(),pagination:{onChange:e=>{console.log(e)},pageSize:50},messageList:[],visible:!1,previewVisible:!1,previewImage:"",value:"",path:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",fileList:[]}},computed:{titleName(){return this.$store.getters.getItemForIndex(this.$route.params.contentId).title}},watch:{$route:function(){console.log("router is change")}},methods:{handleCancel(){this.previewVisible=!1},async handlePreview(e){e.url||e.preview||(e.preview=await c(e.originFileObj)),this.previewImage=e.url||e.preview,this.previewVisible=!0},handleChange({fileList:e}){this.fileList=e,console.log(e)},handleClose(){this.visible=!1},sendMessage(){if(console.log(this.$store.getters.getUserId),""===this.value)return void(this.visible=!0);const e=this.fileList.map((e=>e.response.filePath));o().post("http://localhost:3000/message/sendMessage",{content:this.value,topicId:this.$route.params.contentId,userId:this.$store.getters.getUserId,fileList:e}),this.value=""}},mounted(){console.log("模板编译完成4"),o().post("http://localhost:3000/message/getMessage",{topicId:this.$route.params.contentId}).then((e=>{this.messageList=e.data,this.messageList.forEach((e=>{e.files=JSON.parse(e.files)})),console.log(this.messageList)}))}},d=u,p=s(1001),h=(0,p.Z)(d,a,i,!1,null,null,null),g=h.exports}}]);
//# sourceMappingURL=about.a8e32b29.js.map