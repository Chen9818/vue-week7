(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-712d24d5"],{"67e3":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"table table-hover mt-4"},l=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"購買時間"),Object(a["h"])("th",null,"Email"),Object(a["h"])("th",null,"購買款項"),Object(a["h"])("th",null,"應付金額"),Object(a["h"])("th",null,"是否付款"),Object(a["h"])("th",null,"編輯")])],-1),d=["textContent"],r={class:"list-unstyled"},o={class:"text-right"},i={class:"form-check form-switch"},s=["id","onUpdate:modelValue","onChange"],b=["for"],O={key:0},u={key:1},h={class:"btn-group"},j=["onClick"],p=["onClick"];function m(t,e,c,m,f,g){var y=Object(a["K"])("Loading"),v=Object(a["K"])("OrderModal"),k=Object(a["K"])("DeleteProductModal"),x=Object(a["K"])("PaginationView");return Object(a["A"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(y,{active:f.isLoading},null,8,["active"]),Object(a["h"])("table",n,[l,Object(a["h"])("tbody",null,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["I"])(f.orders,(function(e,c){return Object(a["A"])(),Object(a["g"])(a["a"],{key:c},[f.orders.length?(Object(a["A"])(),Object(a["g"])("tr",{key:0,class:Object(a["t"])({"text-secondary":!e.is_paid})},[Object(a["h"])("td",null,Object(a["N"])(t.$filters.date(e.create_at)),1),Object(a["h"])("td",null,[e.user?(Object(a["A"])(),Object(a["g"])("span",{key:0,textContent:Object(a["N"])(e.user.email)},null,8,d)):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("ul",r,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["I"])(e.products,(function(t,e){return Object(a["A"])(),Object(a["g"])("li",{key:e},Object(a["N"])(t.product.title)+" 數量："+Object(a["N"])(t.qty)+" "+Object(a["N"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",o,Object(a["N"])(e.total),1),Object(a["h"])("td",null,[Object(a["h"])("div",i,[Object(a["Z"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return g.updatePaid(e)}},null,40,s),[[a["R"],e.is_paid]]),Object(a["h"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(a["A"])(),Object(a["g"])("span",O,"已付款")):(Object(a["A"])(),Object(a["g"])("span",u,"未付款"))],8,b)])]),Object(a["h"])("td",null,[Object(a["h"])("div",h,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return g.openModal(e)}}," 檢視 ",8,j),Object(a["h"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return g.openDelOrderModal(e)}}," 刪除 ",8,p)])])],2)):Object(a["f"])("",!0)],64)})),128))])]),Object(a["k"])(v,{order:f.tempOrder,ref:"orderModal",onUpdatePaid:g.updatePaid},null,8,["order","onUpdatePaid"]),Object(a["k"])(k,{item:f.tempOrder,ref:"delModal",onDelItem:g.delOrder},null,8,["item","onDelItem"]),Object(a["k"])(x,{class:"d-flex justify-content-center",pages:f.pagination,onEmitPages:g.getOrders},null,8,["pages","onEmitPages"])],64)}var f=c("5530"),g=(c("99af"),c("ac1f"),c("5319"),c("3a8c")),y=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),v={class:"modal-dialog modal-xl",role:"document"},k={class:"modal-content border-0"},x=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"訂單細節")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},M={class:"row"},A={class:"col-md-4"},N=Object(a["h"])("h3",null,"用戶資料",-1),$={class:"table"},P={key:0},_=Object(a["h"])("th",{style:{width:"100px"}},"姓名",-1),L=Object(a["h"])("th",null,"Email",-1),C=Object(a["h"])("th",null,"電話",-1),D=Object(a["h"])("th",null,"地址",-1),I={class:"col-md-8"},S=Object(a["h"])("h3",null,"訂單細節",-1),E={class:"table"},U=Object(a["h"])("th",{style:{width:"100px"}},"訂單編號",-1),V=Object(a["h"])("th",null,"下單時間",-1),z=Object(a["h"])("th",null,"付款時間",-1),K={key:0},q={key:1},J=Object(a["h"])("th",null,"付款狀態",-1),R={key:0,class:"text-success"},T={key:1,class:"text-muted"},Z=Object(a["h"])("th",null,"總金額",-1),F=Object(a["h"])("h3",null,"選購商品",-1),X={class:"table"},B=Object(a["h"])("thead",null,[Object(a["h"])("tr")],-1),G={class:"text-end"},H={class:"d-flex justify-content-end"},Q={class:"form-check"},W={class:"form-check-label",for:"flexCheckDefault"},Y={key:0},tt={key:1},et={class:"modal-footer"},ct=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function at(t,e,c,n,l,d){return Object(a["A"])(),Object(a["g"])("div",y,[Object(a["h"])("div",v,[Object(a["h"])("div",k,[x,Object(a["h"])("div",w,[Object(a["h"])("div",M,[Object(a["h"])("div",A,[N,Object(a["h"])("table",$,[l.tempOrder.user?(Object(a["A"])(),Object(a["g"])("tbody",P,[Object(a["h"])("tr",null,[_,Object(a["h"])("td",null,Object(a["N"])(l.tempOrder.user.name),1)]),Object(a["h"])("tr",null,[L,Object(a["h"])("td",null,Object(a["N"])(l.tempOrder.user.email),1)]),Object(a["h"])("tr",null,[C,Object(a["h"])("td",null,Object(a["N"])(l.tempOrder.user.tel),1)]),Object(a["h"])("tr",null,[D,Object(a["h"])("td",null,Object(a["N"])(l.tempOrder.user.address),1)])])):Object(a["f"])("",!0)])]),Object(a["h"])("div",I,[S,Object(a["h"])("table",E,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[U,Object(a["h"])("td",null,Object(a["N"])(l.tempOrder.id),1)]),Object(a["h"])("tr",null,[V,Object(a["h"])("td",null,Object(a["N"])(t.$filters.date(l.tempOrder.create_at)),1)]),Object(a["h"])("tr",null,[z,Object(a["h"])("td",null,[l.tempOrder.paid_date?(Object(a["A"])(),Object(a["g"])("span",K,Object(a["N"])(t.$filters.date(l.tempOrder.paid_date)),1)):(Object(a["A"])(),Object(a["g"])("span",q,"時間不正確"))])]),Object(a["h"])("tr",null,[J,Object(a["h"])("td",null,[l.tempOrder.is_paid?(Object(a["A"])(),Object(a["g"])("strong",R,"已付款")):(Object(a["A"])(),Object(a["g"])("span",T,"尚未付款"))])]),Object(a["h"])("tr",null,[Z,Object(a["h"])("td",null,Object(a["N"])(t.$filters.currency(l.tempOrder.total)),1)])])]),F,Object(a["h"])("table",X,[B,Object(a["h"])("tbody",null,[(Object(a["A"])(!0),Object(a["g"])(a["a"],null,Object(a["I"])(l.tempOrder.products,(function(e){return Object(a["A"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("th",null,Object(a["N"])(e.product.title),1),Object(a["h"])("td",null,Object(a["N"])(e.qty)+" / "+Object(a["N"])(e.product.unit),1),Object(a["h"])("td",G,Object(a["N"])(t.$filters.currency(e.final_total)),1)])})),128))])]),Object(a["h"])("div",H,[Object(a["h"])("div",Q,[Object(a["Z"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.tempOrder.is_paid=t})},null,512),[[a["R"],l.tempOrder.is_paid]]),Object(a["h"])("label",W,[l.tempOrder.is_paid?(Object(a["A"])(),Object(a["g"])("span",Y,"已付款")):(Object(a["A"])(),Object(a["g"])("span",tt,"未付款"))])])])])])]),Object(a["h"])("div",et,[ct,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(e){return t.$emit("update-paid",l.tempOrder)})}," 修改付款狀態 ")])])])],512)}var nt=c("7c2b"),lt=c.n(nt),dt={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],watch:{order:function(){this.tempOrder=this.order}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new lt.a(this.$refs.modal)}},rt=c("d959"),ot=c.n(rt);const it=ot()(dt,[["render",at]]);var st=it,bt=c("ca8d"),Ot={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{PaginationView:bt["a"],DeleteProductModal:g["a"],OrderModal:st},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=e;var c="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("wei-z","/admin/orders?page=").concat(e);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(e){t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1})).catch((function(e){t.isLoading=!1,alert(e)}))},openModal:function(t){this.tempOrder=Object(f["a"])({},t),this.isNew=!1;var e=this.$refs.orderModal;e.openModal()},openDelOrderModal:function(t){this.tempOrder=Object(f["a"])({},t);var e=this.$refs.delModal;e.openModal()},updatePaid:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("wei-z","/admin/order/").concat(t.id),a={is_paid:t.is_paid};this.$http.put(c,{data:a}).then((function(t){e.isLoading=!1;var c=e.$refs.orderModal;c.hideModal(),e.getOrders(e.currentPage)})).catch((function(t){e.isLoading=!1,alert(t.data.message)}))},delOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("wei-z","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(e).then((function(){t.isLoading=!1;var e=t.$refs.delModal;e.hideModal(),t.getOrders(t.currentPage)})).catch((function(e){t.isLoading=!1,alert(e.data.message)}))}},created:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,t&&this.getOrders()}};const ut=ot()(Ot,[["render",m]]);e["default"]=ut},b0c0:function(t,e,c){var a=c("83ab"),n=c("5e77").EXISTS,l=c("e330"),d=c("9bf2").f,r=Function.prototype,o=l(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=l(i.exec),b="name";a&&!n&&d(r,b,{configurable:!0,get:function(){try{return s(i,o(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-712d24d5.f50fd941.js.map