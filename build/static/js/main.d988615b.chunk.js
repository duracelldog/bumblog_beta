(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/default_thumbnail.08a1cc29.jpg"},44:function(e,t,n){e.exports=n(82)},49:function(e,t,n){},66:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),o=n.n(r),l=(n(49),n(6)),i=n(4),s=n(2),u=n(7),m=n.n(u),d=n(19);n(66);var b=function(){var e=Object(i.f)(),t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],o=n[1],u=Object(a.useRef)(null),b=Object(a.useRef)(null),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(u.current)switch(t){case 0:u.current.classList.remove("on");break;case 1:u.current.classList.add("on");break;case 2:u.current.classList.toggle("on")}},p=function(){b.current&&(b.current.classList.add("on"),document.body.addEventListener("click",g))},E=function(){b.current&&(b.current.classList.remove("on"),document.body.removeEventListener("click",g))},g=function(e){console.log("bodyevent \uc2e4\ud589",e.srcElement.className);var t=!0;["bb-header__sub-menu-box-ul","bb-header__sub-menu-box-li"].forEach((function(n,a){e.srcElement.className!==n&&"icon-user"!==e.srcElement.className.baseVal||(t=!1)})),t&&E()};return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){var e,t;null===(e=u.current)||void 0===e||e.classList.remove("on"),null===(t=b.current)||void 0===t||t.classList.remove("on")})),m()({method:"get",url:"/api/auth/check"}).then((function(e){console.log("post_res",e.data),e.data.status&&o(!0)}))}),[]),c.a.createElement("nav",{className:"bb-header__nav"},c.a.createElement("div",{className:"bb-header__menu--desktop"},c.a.createElement("div",{className:"bb-header__mobile-menu-btn",onClick:function(e){return f(e,2)}},c.a.createElement(d.b,{className:"icon-menu"})),c.a.createElement("div",{className:"bb-header__logo-btn",onClick:function(e){return f(e,0)}},c.a.createElement(l.b,{className:"text-black ",to:"/"},"Bumblog")),c.a.createElement("div",{className:"bb-header__desktop-menu-wrapper"},c.a.createElement("ul",{className:"bb-header__desktop-menu"},c.a.createElement("li",null)),c.a.createElement("div",{className:"bb-header__sub-menu"},c.a.createElement("div",{className:"bb-header__sub-menu-icon",onClick:function(){b.current&&(b.current.classList.contains("on")?E():p())}},c.a.createElement(d.c,{className:"icon-user"})),c.a.createElement("div",{className:"bb-header__sub-menu-box",ref:b},c.a.createElement("div",{className:"edge-wrapper"},c.a.createElement("div",{className:"edge"})),c.a.createElement("ul",{className:"bb-header__sub-menu-box-ul"},r?c.a.createElement("li",{className:"bb-header__sub-menu-box-li",onClick:function(){m()({method:"delete",url:"/api/auth/login"}).then((function(t){console.log("post_res",t.data),t.data.status&&(o(!1),e.push("/"))}))}},"\ub85c\uadf8\uc544\uc6c3"):c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},c.a.createElement(l.b,{to:"/login"},"\ub85c\uadf8\uc778"))))))),c.a.createElement("div",{className:"bb-header__mobile-menu-wrapper"},c.a.createElement("ul",{className:"bb-header__mobile-menu",ref:u},c.a.createElement("li",{onClick:function(e){return f(e,0)}},c.a.createElement(l.b,{to:"/board"},"MENU-1")),c.a.createElement("li",null,"MENU-2"),c.a.createElement("li",null,"MENU-3"),c.a.createElement("li",null,"MENU-4"))))};n(71);var f=function(){return c.a.createElement("footer",{className:"bb-common__footer"},c.a.createElement("div",{className:"bb-common__footer-contents-wrapper"},c.a.createElement("div",{className:"bb-common__footer-copyright"},c.a.createElement("div",null,"Copyright \xa9 2020 Bumblog Inc. All rights reserved")),c.a.createElement("div",{className:"text-bold"},"Bumblog")))},p=(n(72),n(20)),E=n(16),g="modal/close",v={status:!1,title:"",desc:"",confirm:{isShow:!1,func:function(){}}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"modal/open":return{status:!0,title:t.payload.title,desc:t.payload.desc,confirm:{isShow:t.payload.confirm.isShow}};case"modal/open_confirm":return{status:!0,title:t.payload.title,desc:t.payload.desc,confirm:{isShow:t.payload.confirm.isShow,func:t.payload.confirm.func}};case g:return Object(E.a)(Object(E.a)({},e),{},{status:!1});default:return e}};var h=function(){var e=Object(p.c)((function(e){return e.modal})),t=Object(p.b)();return{modalState:e,onOpenAlertModal:Object(a.useCallback)((function(e){t(function(e){return{type:"modal/open",payload:{title:e.title,desc:e.desc,confirm:{isShow:!1}}}}(e))}),[t]),onOpenConfirmModal:Object(a.useCallback)((function(e){t(function(e){return{type:"modal/open_confirm",payload:{title:e.title,desc:e.desc,confirm:{isShow:e.confirm.isShow,func:e.confirm.func}}}}(e))}),[t]),onCloseModal:Object(a.useCallback)((function(){t({type:g})}),[t])}},w=n(5);function N(e){var t=e.data,n=h(),r=n.modalState,o=n.onCloseModal,l=Object(a.useRef)(null),i=Object(a.useState)(t),u=Object(s.a)(i,2),m=u[0],d=u[1];Object(a.useEffect)((function(){d(r)}),[r]);var b=function(){o()};return c.a.createElement("div",{className:"bb-modal__body ".concat(m.status&&"on"),ref:l},c.a.createElement("div",{className:"bb-modal__dim",onClick:b}),c.a.createElement("div",{className:"bb-modal__window"},c.a.createElement("div",{className:"bb-modal__window-close-btn",onClick:b},c.a.createElement(w.m,{className:"bb-modal__window-corss-icon"})),c.a.createElement("div",null,c.a.createElement("h2",{className:"bb-modal__window-title"},m.title),c.a.createElement("div",{className:"bb-modal__window-desc"},m.desc),c.a.createElement("div",{className:"bb-modal__window-btns ".concat(m.confirm.isShow&&"on")},c.a.createElement("button",{onClick:b},"\uc544\ub2c8\uc624"),c.a.createElement("button",{onClick:m.confirm.func},"\uc608")))))}N.defaultProps={data:{status:!1,title:"",desc:"",confirm:{isShow:!1}}};var O=N,j=n(24);n(74);var y=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("Login"),l=Object(s.a)(o,2),u=l[0],d=l[1],b=Object(a.useRef)(null),f=Object(i.f)(),p=function(e){var t;d(e),null===(t=b.current)||void 0===t||t.classList.toggle("on")},g=function(e){var t=e.target,a=t.name,c=t.value;r(Object(E.a)(Object(E.a)({},n),{},Object(j.a)({},a,c)))};return c.a.createElement("main",{className:"bb-login__main"},c.a.createElement("form",{className:"bb-login__form",onSubmit:function(e){e.preventDefault(),"Login"===u?m()({method:"post",url:"/api/auth/login",withCredentials:!0,data:n}).then((function(e){console.log("post_res",e.data),f.push("/")})):m()({method:"post",url:"/api/auth/user",data:n}).then((function(e){console.log("post_res",e.data)}))}},c.a.createElement("div",{className:"bb-login__form-title"},c.a.createElement("h2",null,"Bumblog")),c.a.createElement("div",{className:"bb-login__input-wrapper"},c.a.createElement("input",{type:"text",name:"email",placeholder:"E-Mail",onChange:g}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:g})),c.a.createElement("div",{className:"bb-login__mode-toggle"},c.a.createElement("span",{className:"bb-login__toggle-bar",ref:b},u),c.a.createElement("div",{onClick:function(){return p("Login")}},"Login"),c.a.createElement("div",{onClick:function(){return p("Register")}},"Register")),c.a.createElement("button",{className:"bb-login__submit-button",type:"submit"},u)))};n(75);n(76);var S=n(15),k=n.n(S),C=(n(77),n(25)),x=n.n(C);var T=function(e){var t=e.data,n=Object(a.useState)([]),r=Object(s.a)(n,2),o=(r[0],r[1]),i=Object(a.useState)(""),u=Object(s.a)(i,2),m=u[0],d=u[1],b=Object(a.useState)(x.a),f=Object(s.a)(b,2),p=f[0],E=f[1],g=function(e){return 1===e.toString().length?"0"+e.toString():e.toString()};return Object(a.useEffect)((function(){o(t.tags),t.thumbnailImage.length>0&&E(k.a.resolve("./uploads",t.thumbnailImage[0].filename)),d(function(){var e=t._id.toString().substring(0,8),n=new Date(1e3*parseInt(e,16)),a=n.getUTCFullYear(),c=g(n.getUTCMonth()),r=g(n.getUTCDay());g(n.getUTCHours()),g(n.getUTCMinutes()),g(n.getUTCSeconds());return"".concat(a,".").concat(c,".").concat(r)}())}),[]),c.a.createElement("li",{className:"bb-board-list__body"},c.a.createElement(l.b,{to:"/board/view/".concat(t._id)},c.a.createElement("div",{className:"bb-board-list__contents-wrapper"},c.a.createElement("div",{className:"bb-board-list__article-wrapper"},c.a.createElement("div",null,c.a.createElement("div",{className:"bb-board-list__article-title"},t.title),c.a.createElement("div",{className:"bb-board-list__article-tags"},t.tags.map((function(e,t){return c.a.createElement("span",{key:t},e)})))),c.a.createElement("ul",{className:"bb-board-list__article-extra-info"},c.a.createElement("li",null,m),c.a.createElement("li",null,t.writer))),c.a.createElement("div",null,c.a.createElement("figure",{className:"bb-board-list__image",style:{backgroundImage:"url(".concat(p,")")}})))))};var L=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=function(e){document.querySelectorAll(".bb-board-home__tags-ul > li").forEach((function(e){e.classList.remove("on")})),e.currentTarget.classList.add("on");var t=e.currentTarget.innerText;i().then((function(e){if("\ubaa8\ub450"===t)r(e.data);else{var n=e.data.filter((function(e){return-1!==e.tags.indexOf(t)}));r(n)}}))},i=function(){return m()({method:"get",url:"/api/board/list"})};return Object(a.useEffect)((function(){i().then((function(e){r(e.data)})),window.scrollTo(0,0)}),[]),c.a.createElement("main",{className:"bb-board-home__main"},c.a.createElement("section",{className:"bb-board-home__hero-section"},c.a.createElement("div",null,c.a.createElement("h1",null,"Bumblog"),c.a.createElement("div",{className:"bb-board-home__hero-desc"},"\uc0dd\uac01\ub098\ub294 \uac83\uc744 \uae30\ub85d\ud558\uace0 \uc800\uc7a5\ud558\ub294 \uacf5\uac04"))),c.a.createElement("section",{className:"bb-board-home__tags-section"},c.a.createElement("div",null,c.a.createElement("ul",{className:"bb-board-home__tags-ul"},c.a.createElement("li",{className:"on",onClick:o},"\ubaa8\ub450"),c.a.createElement("li",{onClick:o},"\uac1c\ubc1c"),c.a.createElement("li",{onClick:o},"\uacf5\ubd80"),c.a.createElement("li",{onClick:o},"\uc0dd\uac01")))),c.a.createElement("section",{className:"bb-board-home__write-button-section"},c.a.createElement("div",{className:"bb-board-home__btns-wrapper"},c.a.createElement("div",null,"\xa0"),c.a.createElement("div",null,c.a.createElement(l.b,{className:"bb-board-home__icon-wrapper",to:"/board/write"},c.a.createElement(w.d,{className:"bb-board-home__write-icon"}),"\xa0\uae00\uc4f0\uae30")))),c.a.createElement("section",{className:"bb-board-home__list-section"},c.a.createElement("ul",{className:"bb-board-home__list-ul-tag"},n.map((function(e){return c.a.createElement(T,{key:e._id,data:e})})))))};n(78);var I=function(e){var t=e.match,n=h(),r=n.onOpenConfirmModal,o=n.onCloseModal,u=Object(a.useState)({_id:"",tags:[],title:"",description:"",writer:"",thumbnailImage:[],descriptionImage:[]}),d=Object(s.a)(u,2),b=d[0],f=d[1],p=Object(a.useState)(""),E=Object(s.a)(p,2),g=E[0],v=E[1],_=Object(i.f)();return Object(a.useEffect)((function(){window.scrollTo(0,0),m()({method:"get",url:"/api/board/list/".concat(t.params.list_id)}).then((function(e){if(e.data){f(e.data);var t=e.data.thumbnailImage[0];v(t?k.a.resolve("./uploads",t.filename):x.a)}}))}),[]),c.a.createElement("main",{className:"bb-board-view__main"},c.a.createElement("section",{className:"bb-board-view__hero-section",style:{backgroundImage:"url(".concat(g,")")}},c.a.createElement("div",{className:"bb-board-view__hero-section-title-wrapper"},c.a.createElement("h1",null,null===b||void 0===b?void 0:b.title),c.a.createElement("div",{className:"bb-board-view__subtitle"}))),c.a.createElement("section",{className:"bb-board-view__article-section"},c.a.createElement("article",{className:"bb-board-view__article tui-editor-contents",dangerouslySetInnerHTML:{__html:b.description}})),c.a.createElement("section",{className:"bb-board-view__buttons-section"},c.a.createElement("ul",{className:"bb-board-view__update-btns"},c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement(l.b,{to:"/board/write/".concat(t.params.list_id)},c.a.createElement(w.d,{className:"bb-board-view__pencil-icon"})))),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){r({status:!0,title:"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",desc:"\uc0ad\uc81c\ud55c \ub370\uc774\ud130\ub294 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",confirm:{isShow:!0,func:function(){m()({method:"delete",url:"/api/board/list",data:b}).then((function(e){console.log("deleteRes",e.data),o(),_.push("/board")}))}}})}},c.a.createElement(w.h,{className:"bb-board-view__tresh-icon"}))))))},D=(n(79),n(43)),M=(n(80),n(42));var R=function(e){var t=e.textEditorContentsState,n=e.setTextEditorContentsState,r=e.textEditorImageState,o=e.setTextEditorImageState,l=e.textEditorImageFilesState,i=e.setTextEditorImageFilesState,u=h().onOpenConfirmModal,m=Object(a.useRef)(null),d=Object(a.useRef)(null),b=Object(a.useRef)(null),f=Object(a.useState)(0),p=Object(s.a)(f,2),E=p[0],g=p[1],v=Object(a.useState)(!0),_=Object(s.a)(v,2),N=_[0],O=_[1],j=function(e,t,n){y(n),k(e,t),S()},y=function(e){e&&e.currentTarget.classList.toggle("on")},S=function(){m.current&&m.current.contentDocument&&m.current.contentDocument.body.focus()},k=function(e,t){m.current&&m.current.contentDocument&&(""===t?m.current.contentDocument.execCommand(e):m.current.contentDocument.execCommand(e,!0,t))},C=function(e){if(N&&(x(),O(!1)),m.current&&m.current.contentDocument){var t=m.current.contentDocument;d.current&&d.current.childNodes.forEach((function(e){e.dataset.cmd&&(t.queryCommandState(e.dataset.cmd)?e.classList.add("on"):e.classList.remove("on"))}))}if("keyup"===e.type&&"Backspace"===e.key&&(r.forEach((function(e){var t,n;-1===(null===(t=m.current)||void 0===t||null===(n=t.contentDocument)||void 0===n?void 0:n.body.innerHTML.indexOf(e.filename))&&o(r.filter((function(t){return t.filename!==e.filename})))})),E>0))for(var a=function(e){var t,n;-1!==(null===(t=m.current)||void 0===t||null===(n=t.contentDocument)||void 0===n?void 0:n.body.innerHTML.indexOf("decriptionImgTag-".concat(e)))?console.log("\uc774\ubbf8\uc9c0\uac00 \uc788\ub2e4.!!"):(console.log("\uc774\ubbf8\uc9c0\uac00 \uc5c6\ub2e4.!!",l),document.querySelectorAll(".decriptionInputFileTag-".concat(e))&&(document.querySelectorAll(".decriptionInputFileTag-".concat(e))[0].value=""),l.length>0&&i(l.filter((function(t,n){return n+1!==e}))))},c=1;c<=E;c++)a(c);n(R())},x=function(){m.current&&m.current.contentDocument&&(m.current.contentDocument.body.innerHTML="")},T=function(e){if(e.currentTarget.files){var t=e.currentTarget.files[0];t&&(!1===I(t.type)?(u({status:!0,title:"\uc774\ubbf8\uc9c0 \uc624\ub958",desc:"jpeg, png, jpg \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.",confirm:{isShow:!1}}),0!==E&&g(E-1),e.currentTarget.value=""):(L(t),i(null===l?[t]:l.concat(t))))}},L=function(e){var t=new FileReader;t.onload=function(e){var t;if(null===(t=e.target)||void 0===t?void 0:t.result){var a,c,r="<img width='100%' height='auto' class=\".decriptionImgTag-".concat(E,'" src="').concat(e.target.result.toString(),'" />');null===(a=m.current)||void 0===a||null===(c=a.contentDocument)||void 0===c||c.execCommand("InsertHTML",!1,r),n(R())}},t.readAsDataURL(e),S()},I=function(e){return-1!==["image/jpeg","image/png","image/jpg"].indexOf(e)},R=function(){var e,t,n,a=null===(e=m.current)||void 0===e||null===(t=e.contentDocument)||void 0===t?void 0:t.body.innerHTML;return(a=null===(n=a)||void 0===n?void 0:n.replace(/([0-9]\"\s)src=\".*?\"/gi,"$1"))||""};return Object(a.useEffect)((function(){!function(){if(m.current&&m.current.contentDocument){m.current.contentDocument.designMode="on",m.current.contentDocument.head.innerHTML='<style>\n                @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");\n            </style>',m.current.contentDocument.body.style.fontFamily="Noto Sans KR",m.current.contentDocument.body.style.fontWeight="400",m.current.contentDocument.body.style.margin="0px";m.current.contentDocument.body.innerHTML="<div style='color: grey;'>\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.</div>"}}(),window.scrollTo(0,0)}),[]),Object(a.useEffect)((function(){m.current&&m.current.contentDocument&&""!==t&&N&&(m.current.contentDocument.body.innerHTML=t,O(!1))}),[t]),Object(a.useEffect)((function(){return m.current&&m.current.contentWindow&&(m.current.contentWindow.addEventListener("keyup",C),m.current.contentWindow.addEventListener("click",C)),function(){m.current&&m.current.contentWindow&&(m.current.contentWindow.removeEventListener("keyup",C),m.current.contentWindow.removeEventListener("click",C))}}),[l,r,N]),c.a.createElement("div",{className:"bb-board-write__editor-wrapper"},Object(D.a)(Array(E)).map((function(e,t){return c.a.createElement("input",{key:t,className:"decriptionInputFileTag-".concat(t+1),type:"file",onChange:T})})),c.a.createElement("ul",{className:"bb-board-write__editor-options",ref:d},c.a.createElement("li",{onClick:function(){b.current&&b.current.classList.toggle("on")}},c.a.createElement(M.a,null),c.a.createElement("ul",{className:"bb-board-write__editor-font-box",ref:b},c.a.createElement("li",{onClick:function(e){return j("fontSize","1")}},"10px"),c.a.createElement("li",{onClick:function(e){return j("fontSize","2")}},"13px"),c.a.createElement("li",{onClick:function(e){return j("fontSize","3")}},"16px"),c.a.createElement("li",{onClick:function(e){return j("fontSize","4")}},"18px"),c.a.createElement("li",{onClick:function(e){return j("fontSize","5")}},"24px"),c.a.createElement("li",{onClick:function(e){return j("fontSize","6")}},"32px"),c.a.createElement("li",{onClick:function(e){return j("fontSize","7")}},"48px"))),c.a.createElement("li",{"data-cmd":"bold",onClick:function(e){return j("bold","",e)}},c.a.createElement(w.i,null)),c.a.createElement("li",{"data-cmd":"italic",onClick:function(e){return j("italic","",e)}},c.a.createElement(w.j,null)),c.a.createElement("li",{"data-cmd":"underline",onClick:function(e){return j("underline","",e)}},c.a.createElement(w.l,null)),c.a.createElement("li",{"data-cmd":"strikethrough",onClick:function(e){return j("strikethrough","",e)}},c.a.createElement(w.k,null)),c.a.createElement("li",{"data-cmd":"justifycenter",onClick:function(e){return j("justifycenter","",e)}},c.a.createElement(w.e,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return j("insertunorderedlist","")}},c.a.createElement(w.c,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return j("insertorderedlist","")}},c.a.createElement(w.b,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return j("indent","")}},c.a.createElement(w.f,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return j("outdent","")}},c.a.createElement(w.g,null)),c.a.createElement("li",{onClick:function(){g(E+1),setTimeout((function(){var e;null===(e=document.querySelector(".decriptionInputFileTag-".concat(E+1)))||void 0===e||e.click()}),10)}},c.a.createElement(w.a,null))),c.a.createElement("iframe",{className:"bb-board-wrtie__editor",name:"boadeditrot",ref:m}))};var F=function(e){var t=e.match,n=Object(i.f)(),r=h(),o=r.onOpenConfirmModal,l=r.onCloseModal,u=Object(a.useRef)(null),d=Object(a.useRef)(null),b=Object(a.useRef)(null),f=Object(a.useState)(""),p=Object(s.a)(f,2),E=p[0],g=p[1],v=Object(a.useState)([]),_=Object(s.a)(v,2),N=_[0],O=_[1],j=Object(a.useState)(""),y=Object(s.a)(j,2),S=y[0],C=y[1],x=Object(a.useState)(""),T=Object(s.a)(x,2),L=T[0],I=T[1],D=Object(a.useState)([]),M=Object(s.a)(D,2),F=M[0],U=M[1],H=Object(a.useState)([]),A=Object(s.a)(H,2),W=A[0],z=A[1],B=Object(a.useState)(""),q=Object(s.a)(B,2),J=q[0],P=q[1],$=Object(a.useState)([]),K=Object(s.a)($,2),V=K[0],Y=K[1],G=Object(a.useState)([]),Q=Object(s.a)(G,2),X=Q[0],Z=Q[1];Object(a.useEffect)((function(){var e=t.params.list_id;console.log("match",t),e&&(C(e),m()({method:"get",url:"/api/board/list/".concat(t.params.list_id)}).then((function(e){console.log("res",e.data),g(e.data.title),O(""===e.data.tags[0]?[]:e.data.tags),U(e.data.thumbnailImage),Y(e.data.descriptionImage),te(e.data.tags),e.data.thumbnailImage.length>0&&I(k.a.resolve("./uploads",e.data.thumbnailImage[0].filename)),P(e.data.description)}))),window.scrollTo(0,0)}),[]);var ee=function(e){console.log("\ud074\ub9ad");var t=e.currentTarget.classList,n=e.currentTarget.innerText;t.contains("on")?(t.remove("on"),-1!==N.indexOf(n)&&O(N.filter((function(e){return e!==n})))):(t.add("on"),-1===N.indexOf(n)&&O(N.concat(n)))},te=function(e){document.querySelectorAll(".bb-board-write__tags-wrapper > span").forEach((function(t){e.forEach((function(e){e===t.innerHTML&&t.classList.add("on")}))}))},ne=function(e){var t=new FileReader;t.onload=function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.result)&&I(e.target.result.toString())},t.readAsDataURL(e)},ae=function(e){return-1!==["image/jpeg","image/png","image/jpg"].indexOf(e)};return c.a.createElement("main",{className:"bb-board-write__main"},c.a.createElement("section",{className:"bb-board-write__form-section"},c.a.createElement("form",{className:"bb-board-write__form",onSubmit:function(e){if(e.preventDefault(),function(e){var t=!0;return e.some((function(e){if(console.log("item",e),""===e.target||-1!==e.target.indexOf("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."))return o({status:!0,title:"".concat(e.type," \uc624\ub958"),desc:"".concat(e.type,"\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),confirm:{isShow:!0,func:function(){var t,n,a;switch(l(),e.type){case"\uc81c\ubaa9":null===(t=b.current)||void 0===t||t.focus();break;case"\ubcf8\ubb38":(null===(n=u.current)||void 0===n?void 0:n.contentDocument)&&(null===(a=u.current)||void 0===a||a.contentDocument.body.focus())}}}}),t=!1,!0})),t}([{type:"\uc81c\ubaa9",target:E},{type:"\ud0dc\uadf8",target:N.toString()},{type:"\ubcf8\ubb38",target:J}])){var t=function(e){var t=new FormData;return t.append("title",E),t.append("tags",JSON.stringify(N)),t.append("description",J),t.append("writer","\uc2e0\ubc94\uadfc"),""==e?(W&&W.forEach((function(e){e&&t.append("thumbnailImageFile",e)})),X&&X.forEach((function(e){e&&t.append("descriptionImageFile",e)}))):(t.append("_id",e),t.append("thumbnailImage",JSON.stringify(F)),t.append("descriptionImage",JSON.stringify(V)),W&&W.forEach((function(e){e&&t.append("thumbnailImageFile",e)})),X&&X.forEach((function(e){e&&t.append("descriptionImageFile",e)}))),t}(S);""===S?m()({headers:{"Content-Type":"multipart/form-data"},method:"post",url:"/api/board/list",data:t}).then((function(e){console.log("post_res",e.data[0]),n.push("/board")})):m()({headers:{"Content-Type":"multipart/form-data"},method:"put",url:"/api/board/list",data:t}).then((function(e){console.log("put_res",e.data[0]),n.push("/board/view?_id="+S)})),g(""),U([]),z([]),Y([]),Z([]),P("")}}},c.a.createElement("input",{className:"bb-board-write__title",ref:b,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",name:"title",value:E,onChange:function(e){var t=e.target,n=(t.name,t.value);g(n)}}),c.a.createElement("div",{className:"bb-board-write__tags-wrapper"},c.a.createElement("span",{onClick:ee},"\uac1c\ubc1c"),c.a.createElement("span",{onClick:ee},"\uacf5\ubd80"),c.a.createElement("span",{onClick:ee},"\uc0dd\uac01")),c.a.createElement(R,{textEditorContentsState:J,setTextEditorContentsState:P,textEditorImageState:V,setTextEditorImageState:Y,textEditorImageFilesState:X,setTextEditorImageFilesState:Z}),c.a.createElement("div",{className:"bb-board-write__image-tiles ".concat(""!==L&&"on")},c.a.createElement("span",{style:{backgroundImage:"url(".concat(L,")")},onClick:function(){I(""),U([]),z([])}},c.a.createElement(w.m,null))),c.a.createElement("div",{className:"bb-board-write__image-upload-btn"},c.a.createElement("input",{type:"file",ref:d,onChange:function(e){if(e.currentTarget.files){var t=e.currentTarget.files[0];t&&(!1===ae(t.type)?(o({status:!0,title:"\uc774\ubbf8\uc9c0 \uc624\ub958",desc:"jpeg, png, jpg \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.",confirm:{isShow:!1}}),e.currentTarget.value="",z([])):(ne(t),z(W.concat(t))))}}}),c.a.createElement("button",{type:"button",onClick:function(){var e;return null===(e=d.current)||void 0===e?void 0:e.click()}},"\uc378\ub124\uc77c \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc")),c.a.createElement("div",{className:"bb-board-write__buttons"},c.a.createElement("button",{type:"button",onClick:function(){return n.push("/board")}},"\ucde8\uc18c"),c.a.createElement("button",{type:"submit"},"\uc644\ub8cc")))))};n(81);var U=function(){return c.a.createElement("div",{className:"bb-body"},c.a.createElement(l.a,null,c.a.createElement(b,null),c.a.createElement(O,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:L}),c.a.createElement(i.a,{path:"/login",component:y}),c.a.createElement(i.a,{path:"/board/write/:list_id",component:F}),c.a.createElement(i.a,{path:"/board/write",component:F}),c.a.createElement(i.a,{path:"/board/view/:list_id",component:I}),c.a.createElement(i.a,{path:"/board",component:L})),c.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(14),A=Object(H.b)({modal:_}),W=Object(H.c)(A);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p.a,{store:W},c.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d988615b.chunk.js.map