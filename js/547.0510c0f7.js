"use strict";(self["webpackChunklookt_it"]=self["webpackChunklookt_it"]||[]).push([[547],{29547:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"},attrs:{title:"创建主题"},on:{back:function(){return t.$router.go(-1)}}}),r("div",{staticClass:"p-6"},[r("a-form-model",{attrs:{model:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol,rules:t.rules}},[r("a-form-model-item",{attrs:{label:"标题"}},[r("a-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("a-form-model-item",{attrs:{label:"内容"}},[r("a-input",{attrs:{type:"textarea"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" Create ")]),r("a-button",{staticStyle:{"margin-left":"10px"}},[t._v(" Cancel ")])],1)],1)],1)],1)},o=[],a=r(26166),n=r.n(a),s={data(){return{labelCol:{span:4},wrapperCol:{span:14},form:{title:"",content:"",userId:this.$store.getters.getUserId},rules:{title:[{required:!0,message:"Please input Activity title",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],content:[{required:!0,message:"Please input Content",trigger:"blur"}]}}},methods:{onSubmit(){n().post("http://localhost:3000/message/createTopic",{...this.form}).then((t=>{console.log(t.data)}))}}},i=s,u=r(1001),c=(0,u.Z)(i,l,o,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=547.0510c0f7.js.map