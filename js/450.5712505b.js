"use strict";(self["webpackChunklookt_it"]=self["webpackChunklookt_it"]||[]).push([[450],{10450:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",e._b({attrs:{label:"账号"}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:"请输入账号"}]}],expression:"[\n          'account',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请输入账号',\n              },\n            ],\n          },\n        ]"}]})],1),t("a-form-item",e._b({attrs:{label:"密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"},{validator:e.validateToNextPassword}]}],expression:"[\n          'password',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请输入密码',\n              },\n              {\n                validator: validateToNextPassword,\n              },\n            ],\n          },\n        ]"}],attrs:{type:"password"}})],1),t("a-form-item",e._b({attrs:{label:"确认密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirm",{rules:[{required:!0,message:"请确认密码"},{validator:e.compareToFirstPassword}]}],expression:"[\n          'confirm',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请确认密码',\n              },\n              {\n                validator: compareToFirstPassword,\n              },\n            ],\n          },\n        ]"}],attrs:{type:"password"},on:{blur:e.handleConfirmBlur}})],1),t("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 昵称  "),t("a-tooltip",{attrs:{title:"What do you want others to call you?"}},[t("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,message:"请输入昵称",whitespace:!0}]}],expression:"[\n          'nickname',\n          {\n            rules: [{ required: true, message: '请输入昵称', whitespace: true }],\n          },\n        ]"}]})],1),t("a-form-item",e._b({attrs:{label:"手机号"}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入您的手机号!"}]}],expression:"[\n          'phone',\n          {\n            rules: [{ required: true, message: '请输入您的手机号!' }],\n          },\n        ]"}],staticStyle:{width:"100%"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["prefix",{initialValue:"86"}],expression:"['prefix', { initialValue: '86' }]"}],staticStyle:{width:"70px"},attrs:{slot:"addonBefore"},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"86"}},[e._v(" +86 ")]),t("a-select-option",{attrs:{value:"87"}},[e._v(" +87 ")])],1)],1)],1),t("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" 注册 ")])],1)],1)],1)},o=[],s=(t(21703),t(26166)),n=t.n(s);const i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var l={data(){return{confirmDirty:!1,residences:i,autoCompleteResult:[],formItemLayout:{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},beforeCreate(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFieldsAndScroll(((e,a)=>{e||(console.log("Received values of form: ",a),this.signUp(a))}))},handleConfirmBlur(e){const a=e.target.value;this.confirmDirty=this.confirmDirty||!!a},compareToFirstPassword(e,a,t){const r=this.form;a&&a!==r.getFieldValue("password")?t(new Error("Two passwords that you enter is inconsistent!")):t()},validateToNextPassword(e,a,t){const r=this.form;a&&this.confirmDirty&&r.validateFields(["confirm"],{force:!0}),t()},signUp(e){n().post("http://localhost:3000/users/signup",e).then((e=>{const a=e.data;!0===a.cerateUser&&(this.$store.commit("login",a),this.$router.push("/"))}))}}},m=l,u=t(1001),d=(0,u.Z)(m,r,o,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=450.5712505b.js.map