"use strict";(self["webpackChunklookt_it"]=self["webpackChunklookt_it"]||[]).push([[798],{22798:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"w-full flex flex-row justify-center items-center"},[t("a-form",{staticClass:"login-form ",attrs:{id:"components-form-demo-normal-login",form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{rules:[{required:!0,message:"Please input your username!"}]}],expression:"[\r\n          'userName',\r\n          { rules: [{ required: true, message: 'Please input your username!' }] },\r\n        ]"}],attrs:{placeholder:"用户名"}},[t("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"}]}],expression:"[\r\n          'password',\r\n          { rules: [{ required: true, message: 'Please input your Password!' }] },\r\n        ]"}],attrs:{type:"password",placeholder:"Password"}},[t("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["remember",{valuePropName:"checked",initialValue:!0}],expression:"[\r\n          'remember',\r\n          {\r\n            valuePropName: 'checked',\r\n            initialValue: true,\r\n          },\r\n        ]"}]},[e._v(" 记住我 ")]),t("a",{staticClass:"login-form-forgot",attrs:{href:""}},[e._v(" 忘记密码？ ")]),t("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[e._v(" 登录 ")]),e._v(" Or "),t("router-link",{attrs:{to:"/signup"}},[e._v("注册！")])],1)],1)],1)},o=[],a=t(26166),i=t.n(a),l={beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFields(((e,r)=>{e||(console.log("Received values of form: ",r),this.login(r))}))},login(e){i().post("http://localhost:3000/users/login",{user_id:e.userName,password:e.password}).then((r=>{const t=r.data;t.login&&(this.$store.commit("login",t),this.$router.push("/"),e.remember?localStorage.setItem("userName",JSON.stringify(e)):localStorage.removeItem("userName"))}))}},mounted(){const e=JSON.parse(localStorage.getItem("userName"));null!==e&&this.login(e)}},n=l,u=t(1001),m=(0,u.Z)(n,s,o,!1,null,null,null),c=m.exports}}]);
//# sourceMappingURL=798.d061b520.js.map