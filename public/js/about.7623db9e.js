(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(s,e,t){var n=t("d039"),a=t("b622"),i=a("species");s.exports=function(s){return!n((function(){var e=[],t=e.constructor={};return t[i]=function(){return{foo:1}},1!==e[s](Boolean).foo}))}},"4de4":function(s,e,t){"use strict";var n=t("23e7"),a=t("b727").filter,i=t("1dde");n({target:"Array",proto:!0,forced:!i("filter")},{filter:function(s){return a(this,s,arguments.length>1?arguments[1]:void 0)}})},c08d:function(s,e,t){"use strict";var n=t("dd59"),a=t.n(n);a.a},dd59:function(s,e,t){},f820:function(s,e,t){"use strict";t.r(e);var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"about"},[t("Chat",{attrs:{msg:"This is chat room"}})],1)},a=[],i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chat"},[t("section",{staticClass:"message-list"},[t("section",{staticClass:"message -left"},[t("i",{staticClass:"nes-ash"}),s._l(s.othersMsg,(function(e,n){return t("ul",{key:n,staticClass:"nes-balloon from-left"},[t("li",[s._v(s._s("others: "+e.msg))])])}))],2),t("section",{staticClass:"message -right"},[s._l(s.ownMsg,(function(e,n){return t("ul",{key:n,staticClass:"nes-balloon from-right"},[t("li",[s._v(s._s(e.msg))])])})),t("i",{staticClass:"nes-ash"})],2)]),t("div",{staticClass:"nes-field"},[t("label",{attrs:{for:"message-field"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.message,expression:"message"}],staticClass:"nes-input",attrs:{type:"text",id:"message-field"},domProps:{value:s.message},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.sendMessage(e)},input:function(e){e.target.composing||(s.message=e.target.value)}}})])])},o=[],r=(t("4de4"),t("8055")),u=t.n(r),c={name:"Chat",data:function(){return{socket:u()("http://localhost:4000/"),messages:[],message:""}},computed:{ownMsg:function(){var s=this.messages.filter((function(s){return 1===s.id}));return s},othersMsg:function(){var s=this.messages.filter((function(s){return 2===s.id}));return s}},methods:{sendMessage:function(){this.messages.push({msg:this.message,id:1}),this.socket.emit("newMessage",{msg:this.message,id:2}),this.message=""}},mounted:function(){var s=this;this.socket.on("message",(function(e){s.messages.push(e)}))}},l=c,f=(t("c08d"),t("2877")),d=Object(f["a"])(l,i,o,!1,null,"4d898f65",null),m=d.exports,g={name:"about",components:{Chat:m}},h=g,p=Object(f["a"])(h,n,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=about.7623db9e.js.map