(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024b7618"],{1552:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"background-menu"},[e("div",{staticClass:"container container-ajust"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark "},[e("div",{staticClass:"container-fluid"},[t._m(0),e("a",{staticClass:"navbar-brand"},[t._v("ACADEMICOS DE CHUPINGUAIA")]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[e("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item button-menu"},[e("a",{staticClass:"nav-link",on:{click:function(a){return t.homepage()}}},[t._v("Home")])]),e("li",{staticClass:"nav-item button-menu"},[e("a",{staticClass:"nav-link",on:{click:function(a){return t.routeUser()}}},[t._v("Area do Associado")])]),e("li",{staticClass:"nav-item button-menu"},[e("a",{staticClass:"nav-link",on:{click:function(a){return t.routeCancelados()}}},[t._v("Contratos cancelados")])]),e("li",{staticClass:"nav-item button-menu"},[e("a",{staticClass:"nav-link",on:{click:function(a){return t.routePendentes()}}},[t._v("Contratos pendentes")])]),e("li",{staticClass:"nav-item button-menu"},[e("a",{staticClass:"nav-link",on:{click:function(a){return t.homeAdmin()}}},[t._v("Home Administrador")])]),e("li",{staticClass:"nav-item button-menu"},[e("a",{staticClass:"nav-link",on:{click:function(a){return t.routeLogout()}}},[t._v("Sair")])])])])])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],r=e("1da1"),o=e("5530"),i=(e("96cf"),e("f9e3"),e("4989"),e("2f62")),c={name:"NavBarAdmin",methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])("auth",["ActionLogout"])),{},{routeLogout:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.ActionLogout();case 3:location.reload(!0),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},routeUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$router.push({name:"User"});case 1:case"end":return a.stop()}}),a)})))()},routeCancelados:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$router.push({name:"UsersCancelados"});case 1:case"end":return a.stop()}}),a)})))()},routePendentes:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$router.push({name:"UsersPendentes"});case 1:case"end":return a.stop()}}),a)})))()},homepage:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$router.push({name:"Home"});case 1:case"end":return a.stop()}}),a)})))()},homeAdmin:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$router.push({name:"AdminHome"});case 1:case"end":return a.stop()}}),a)})))()}})},u=c,l=e("2877"),d=Object(l["a"])(u,n,s,!1,null,null,null);a["a"]=d.exports},"4a08":function(t,a,e){"use strict";e("4b52")},"4b52":function(t,a,e){},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,e){var n=e("1d80"),s=e("577e"),r=e("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(a){var e=s(n(a));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,a,e){var n=e("861d"),s=e("d2bb");t.exports=function(t,a,e){var r,o;return s&&"function"==typeof(r=a.constructor)&&r!==e&&n(o=r.prototype)&&o!==e.prototype&&s(t,o),t}},"760c":function(t,a,e){"use strict";e("c3f5")},"9a27":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("NavBarAdmin"),e("main",{staticClass:"container"},[e("section",[e("div",{staticClass:"mt-5 centralizer"},[e("img",{staticClass:"imagen-user",attrs:{src:t.user.user.foto_url}})]),e("div",{staticClass:"container-main"},[e("div",{staticClass:"mt-5 p-3 container-user-info card"},[e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Nome")]),e("p",[t._v(t._s(t.user.user.nome))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust  card-user"},[e("h6",[t._v("Email")]),e("p",[t._v(t._s(t.user.user.email))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust  card-user"},[e("h6",[t._v("RG")]),e("p",[t._v(t._s(t.user.user.r_g))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust  card-user"},[e("h6",[t._v("CPF")]),e("p",[t._v(" "+t._s(t.user.user.c_p_f))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust  card-user"},[e("h6",[t._v("Endereço")]),e("p",[t._v(t._s(t.user.user.endereco)+" / nº "+t._s(t.user.user.numero)+" / CEP: "+t._s(t.user.user.cep))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Faculdade")]),e("p",[t._v(t._s(t.user.faculdade.nome))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Contrato")]),e("p",[t._v(t._s(1==t.user.vigente?"Contrato vigente":"Pendente de aprovação"))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Mensalidade")]),e("p",[t._v("R$ "+t._s(t.user.mensalidade))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Quantidade de dias ultilizados")]),e("p",[t._v(t._s(t.user.dias_ultilizados))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Dias de viagem")]),e("p",[t._v(t._s(t.user.dias_viagem))])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Administrador aprovação")]),e("p",[t._v(" "+t._s(t.user.admin_aprovocao?t.user.admin_aprovocao:"Pendente de aprovação")+" ")])]),e("div",{staticClass:"p-2 mb-3 card card-ajust card-user"},[e("h6",[t._v("Descrição do contrato")]),e("p",[t._v(t._s(t.user.descricao))])])]),e("div",{staticClass:"container-button-group"},[!1===t.user.aprovado?e("div",{staticClass:" m-2 "},[e("button",{staticClass:"btn btn-success btn-block btn_ajuste",attrs:{type:"button"},on:{click:function(a){return t.$root.$emit("open-modal-aprovado")}}},[t._v(" Aprovar contrato ")])]):t._e(),!0===t.user.cancelado?e("div",{staticClass:" m-2"},[e("button",{staticClass:"btn btn-success btn-block btn_ajuste",attrs:{type:"button"}},[t._v(" Reativar contrato ")])]):t._e(),e("div",{staticClass:" m-2"},[e("button",{staticClass:"btn btn-danger  btn-block btn_ajuste",attrs:{type:"button"},on:{click:function(a){return t.$root.$emit("open-modal-cancelamento")}}},[t._v(" Cancelar contrato ")])]),e("div",{staticClass:" m-2"},[e("button",{staticClass:"btn btn btn-info  btn-block btn_ajuste",attrs:{type:"button"},on:{click:function(a){return t.$root.$emit("open-modal-email")}}},[t._v(" Enviar email ")])]),e("ModalCancelamento",{attrs:{id_contrato:t.user.id}}),e("ModalEmail",{attrs:{nomeAssociado:t.user.user.nome,email:t.user.user.email}}),e("ModalAprovado",{attrs:{user_pendente:t.user.user.nome,id_contrato:t.user.id}})],1)])])]),e("Footer")],1)},s=[],r=e("1da1"),o=e("5530"),i=(e("96cf"),e("d3b7"),e("f9e3"),e("4989"),e("2f62")),c=e("fd2d"),u=e("1552"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.visible?e("div",{staticClass:"modal show fade",staticStyle:{display:"block"},attrs:{id:"exampleModal",tabindex:"-1"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:""}},[t._v(" Descrição do cancelamento (Contrato nº "+t._s(t.id_contrato)+") ")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:function(a){t.visible=!1}}})]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Descrição: ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descricao,expression:"descricao"}],staticClass:"form-control",attrs:{id:"message-text"},domProps:{value:t.descricao},on:{input:function(a){a.target.composing||(t.descricao=a.target.value)}}},[t._v("Cancelado a pedido da entidade")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){t.visible=!1}}},[t._v(" Fechar ")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.cancelarContrato()}}},[t._v(" Cancelar Cadastro ")])])])])]):t._e(),t.visible?e("div",{staticClass:"modal-backdrop fade show"}):t._e()])},d=[],m=(e("a9e3"),{name:"ModalCancelamento",data:function(){return{visible:!1,descricao:""}},computed:Object(o["a"])({},Object(i["c"])("auth",["token"])),props:{id_contrato:{type:Number}},methods:{cancelarContrato:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={descricao:t.descricao},n={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}},console.log("Requisitando na api"),a.next=5,fetch("https://api-academic-control-v2.herokuapp.com/contrato/cancelar/".concat(t.id_contrato),n).then((function(t){return t.json()})).then((function(){location.reload(!0)})).catch((function(t){return console.log(t)}));case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;this.$root.$on("open-modal-cancelamento",(function(){t.visible=!0}))}}),v=m,p=e("2877"),b=Object(p["a"])(v,l,d,!1,null,null,null),f=b.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.visible?e("div",{staticClass:"modal show fade",staticStyle:{display:"block"},attrs:{id:"exampleModal",tabindex:"-1"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:""}},[t._v(" Deseja aprovar o contrato do usuário ? ")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:function(a){t.visible=!1}}})]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"mb-3"},[e("div",{staticClass:"modal-body fs-3 fw-lighte"},[t._v(" "+t._s(t.user_pendente)+" ")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){t.visible=!1}}},[t._v(" Não ")]),e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(a){return t.aprovarUser()}}},[t._v(" Aprovar contrato ")])])])])]):t._e(),t.visible?e("div",{staticClass:"modal-backdrop fade show"}):t._e()])},_=[],C={name:"ModalAprovado",data:function(){return{visible:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])("auth",["token"])),Object(i["c"])("auth",["user"])),props:{id_contrato:{type:Number},user_pendente:{type:String}},methods:{aprovarUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={admin_aprovocao:t.user.nome},n={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}},console.log("Requisitando na api"),a.next=5,fetch("https://api-academic-control-v2.herokuapp.com/contrato/aprovar/".concat(t.id_contrato),n).then((function(t){return t.json()})).then((function(){alert("Associado aprovado"),t.$router.push({name:"UsersPendentes"})})).catch((function(t){return console.log(t)}));case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;this.$root.$on("open-modal-aprovado",(function(){t.visible=!0}))}},g=C,k=Object(p["a"])(g,h,_,!1,null,null,null),j=k.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.visible?e("div",{staticClass:"modal show fade",staticStyle:{display:"block"},attrs:{id:"exampleModal",tabindex:"-1"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:""}},[t._v(" Envio de email ao associado "+t._s(t.nomeAssociado)+" ")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:function(a){t.visible=!1}}})]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Descrição: ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descricao,expression:"descricao"}],staticClass:"form-control",attrs:{id:"message-text"},domProps:{value:t.descricao},on:{input:function(a){a.target.composing||(t.descricao=a.target.value)}}},[t._v("Pagamento do boleto está atrasado")])]),e("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Email de destino: "+t._s(this.email)+" ")])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){t.visible=!1}}},[t._v(" Fechar ")]),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(a){return t.enviarEmail()}}},[t._v(" Enviar email ")])])])])]):t._e(),t.visible?e("div",{staticClass:"modal-backdrop fade show"}):t._e()])},y=[],x={name:"ModalEnviarEmail",data:function(){return{visible:!1,descricao:""}},computed:Object(o["a"])({},Object(i["c"])("auth",["token"])),props:{nomeAssociado:{type:String},email:{type:String}},methods:{enviarEmail:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={emailDestino:t.email,mensagem:t.descricao},n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}},console.log("Requisitando na api"),a.next=5,fetch("http://localhost:3236/enviarEmail",n).then((function(t){return t.json()})).then((function(){location.reload(!0)})).catch((function(t){return console.log(t)}));case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this;this.$root.$on("open-modal-email",(function(){t.visible=!0}))}},A=x,E=Object(p["a"])(A,w,y,!1,null,null,null),O=E.exports,N={name:"AnaliseUser",components:{Footer:c["a"],NavBarAdmin:u["a"],ModalCancelamento:f,ModalAprovado:j,ModalEmail:O},data:function(){return{user:{},user_id:this.$route.params.id}},computed:Object(o["a"])({},Object(i["c"])("auth",["token"])),methods:{homeAdmin:function(){this.$router.push("/admin/Home")},getUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)}},console.log("Buscando na api"),a.next=4,fetch("https://api-academic-control-v2.herokuapp.com/contratos/userList/".concat(t.user_id),e).then((function(t){return t.json()})).then((function(a){t.user=a[0],console.log(t.user)})).catch((function(t){return console.log(t)}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}),a)})))()}},created:function(){this.getUser()}},R=N,$=(e("4a08"),Object(p["a"])(R,n,s,!1,null,null,null));a["default"]=$.exports},a9e3:function(t,a,e){"use strict";var n=e("83ab"),s=e("da84"),r=e("94ca"),o=e("6eeb"),i=e("5135"),c=e("c6b6"),u=e("7156"),l=e("d9b5"),d=e("c04e"),m=e("d039"),v=e("7c73"),p=e("241c").f,b=e("06cf").f,f=e("9bf2").f,h=e("58a8").trim,_="Number",C=s[_],g=C.prototype,k=c(v(g))==_,j=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var a,e,n,s,r,o,i,c,u=d(t,"number");if("string"==typeof u&&u.length>2)if(u=h(u),a=u.charCodeAt(0),43===a||45===a){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(u.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(r=u.slice(2),o=r.length,i=0;i<o;i++)if(c=r.charCodeAt(i),c<48||c>s)return NaN;return parseInt(r,n)}return+u};if(r(_,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var w,y=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof y&&(k?m((function(){g.valueOf.call(e)})):c(e)!=_)?u(new C(j(a)),e,y):j(a)},x=n?p(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;x.length>A;A++)i(C,w=x[A])&&!i(y,w)&&f(y,w,b(C,w));y.prototype=g,g.constructor=y,o(s,_,y)}},c3f5:function(t,a,e){},fd2d:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-pai"},[e("footer",{staticClass:"footer"},[e("div",[e("h1",{staticClass:"title-footer"},[t._v("Associação dos Academicos de Chupinguaia")]),e("div",{staticClass:"sub-title-footer"},[e("p",[t._v("associaçãodoacademicoschp@gmail.com")]),e("p",[t._v("(69)3322-6574")]),e("p",[t._v("Chupinguia-RO")])])])])])}],r=(e("f9e3"),{name:"Footer"}),o=r,i=(e("760c"),e("2877")),c=Object(i["a"])(o,n,s,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-024b7618.46761238.js.map