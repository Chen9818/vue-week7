(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-084ad3f7"],{"1c1f":function(t,n,a){},"6f6c":function(t,n,a){"use strict";a("1c1f")},7277:function(t,n,a){"use strict";a.r(n);var e=a("7a23");function c(t,n,a,c,o,s){var i=Object(e["K"])("AdminNavbar"),r=Object(e["K"])("router-view");return Object(e["A"])(),Object(e["g"])(e["a"],null,[Object(e["k"])(i,{onSignOut:s.signOut},null,8,["onSignOut"]),Object(e["k"])(r)],64)}a("ac1f"),a("5319");var o=a("cf05"),s=a.n(o),i=function(t){return Object(e["D"])("data-v-afb1f402"),t=t(),Object(e["B"])(),t},r={class:"navbar navbar-expand-lg w-100"},u={class:"container-fluid"},l=i((function(){return Object(e["h"])("a",{class:"navbar-brand",href:"#"},[Object(e["h"])("img",{src:s.a,alt:"logo"})],-1)})),b=i((function(){return Object(e["h"])("button",{class:"navbar-toggler navbar-dark",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(e["h"])("span",{class:"navbar-toggler-icon"})],-1)})),h={class:"collapse navbar-collapse",id:"navbarNav"},v={class:"navbar-nav"},f={class:"nav-item"},d=Object(e["j"])("後台產品列表"),O={class:"nav-item"},j=Object(e["j"])("優惠券列表"),g={class:"nav-item"},p=Object(e["j"])("後台訂單"),k={class:"nav-item"},m=Object(e["j"])("回前台首頁"),$={class:"nav-item"};function w(t,n,a,c,o,s){var i=Object(e["K"])("router-link");return Object(e["A"])(),Object(e["g"])("nav",r,[Object(e["h"])("div",u,[l,b,Object(e["h"])("div",h,[Object(e["h"])("ul",v,[Object(e["h"])("li",f,[Object(e["k"])(i,{class:"nav-link",to:"/admin/products"},{default:Object(e["Y"])((function(){return[d]})),_:1})]),Object(e["h"])("li",O,[Object(e["k"])(i,{class:"nav-link",to:"/admin/coupon"},{default:Object(e["Y"])((function(){return[j]})),_:1})]),Object(e["h"])("li",g,[Object(e["k"])(i,{class:"nav-link",to:"/admin/orders"},{default:Object(e["Y"])((function(){return[p]})),_:1})]),Object(e["h"])("li",k,[Object(e["k"])(i,{class:"nav-link",to:"/"},{default:Object(e["Y"])((function(){return[m]})),_:1})]),Object(e["h"])("li",$,[Object(e["h"])("a",{href:"#",class:"nav-link",onClick:n[0]||(n[0]=function(n){return t.$emit("signOut")})},"登出")])])])])])}var x={emits:["signOut"]},_=(a("6f6c"),a("d959")),A=a.n(_);const N=A()(x,[["render",w],["__scopeId","data-v-afb1f402"]]);var S=N,Y={name:"Dashboard",data:function(){return{checkSuccess:!1}},components:{AdminNavbar:S},mounted:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this,n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(n){this.$http.defaults.headers.common.Authorization=n;var a="".concat("https://vue3-course-api.hexschool.io/v2/","api/user/check");this.$http.post(a).then((function(){t.checkSuccess=!0})).catch((function(n){alert(n.data.message),t.$router.push("/login")}))}else alert("您尚未登入。"),this.$router.push("/login")},signOut:function(){document.cookie="hexToken=;expires=;",alert("token 已清除"),this.$router.push("/login")}}};const K=A()(Y,[["render",c]]);n["default"]=K},cf05:function(t,n,a){t.exports=a.p+"img/logo.08d9e2b5.png"}}]);
//# sourceMappingURL=chunk-084ad3f7.039ed230.js.map