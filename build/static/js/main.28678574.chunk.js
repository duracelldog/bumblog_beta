(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/default_thumbnail.08a1cc29.jpg"},43:function(e,t,n){e.exports=n(79)},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),o=n.n(r),l=(n(48),n(6)),i=n(3),u=n(17);n(49);var s=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e.current)switch(n){case 0:e.current.classList.remove("on");break;case 1:e.current.classList.add("on");break;case 2:e.current.classList.toggle("on")}},r=function(){t.current&&(t.current.classList.add("on"),document.body.addEventListener("click",i))},o=function(){t.current&&(t.current.classList.remove("on"),document.body.removeEventListener("click",i))},i=function(e){console.log("bodyevent \uc2e4\ud589",e.srcElement.className);var t=!0;["bb-header__sub-menu-box-ul","bb-header__sub-menu-box-li"].forEach((function(n,a){e.srcElement.className!==n&&"icon-user"!==e.srcElement.className.baseVal||(t=!1)})),t&&o()};return Object(a.useMemo)((function(){window.addEventListener("resize",(function(){var n,a;null===(n=e.current)||void 0===n||n.classList.remove("on"),null===(a=t.current)||void 0===a||a.classList.remove("on")}))}),[]),c.a.createElement("nav",{className:"bb-header__nav"},c.a.createElement("div",{className:"bb-header__menu--desktop"},c.a.createElement("div",{className:"bb-header__mobile-menu-btn",onClick:function(e){return n(e,2)}},c.a.createElement(u.b,{className:"icon-menu"})),c.a.createElement("div",{className:"bb-header__logo-btn",onClick:function(e){return n(e,0)}},c.a.createElement(l.b,{className:"text-black ",to:"/"},"Bumblog")),c.a.createElement("div",{className:"bb-header__desktop-menu-wrapper"},c.a.createElement("ul",{className:"bb-header__desktop-menu"},c.a.createElement("li",null)),c.a.createElement("div",{className:"bb-header__sub-menu"},c.a.createElement("div",{className:"bb-header__sub-menu-icon",onClick:function(){t.current&&(t.current.classList.contains("on")?o():r())}},c.a.createElement(u.c,{className:"icon-user"})),c.a.createElement("div",{className:"bb-header__sub-menu-box",ref:t},c.a.createElement("div",{className:"edge-wrapper"},c.a.createElement("div",{className:"edge"})),c.a.createElement("ul",{className:"bb-header__sub-menu-box-ul"},c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274")))))),c.a.createElement("div",{className:"bb-header__mobile-menu-wrapper"},c.a.createElement("ul",{className:"bb-header__mobile-menu",ref:e},c.a.createElement("li",{onClick:function(e){return n(e,0)}},c.a.createElement(l.b,{to:"/board"},"MENU-1")),c.a.createElement("li",null,"MENU-2"),c.a.createElement("li",null,"MENU-3"),c.a.createElement("li",null,"MENU-4"))))};n(54);var m=function(){return c.a.createElement("footer",{className:"bb-common__footer"},c.a.createElement("div",{className:"bb-common__footer-contents-wrapper"},c.a.createElement("div",{className:"bb-common__footer-copyright"},c.a.createElement("div",null,"Copyright \xa9 2020 Bumblog Inc. All rights reserved")),c.a.createElement("div",{className:"text-bold"},"Bumblog")))},d=n(4),b=(n(55),n(20)),f=n(13),p="modal/open",E="modal/close",v={status:!1,title:"",desc:"",confirm:{isShow:!1,func:function(){}}};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{status:!0,title:t.payload.title,desc:t.payload.desc,confirm:{isShow:t.payload.confirm.isShow}};case"modal/open_confirm":return{status:!0,title:t.payload.title,desc:t.payload.desc,confirm:{isShow:t.payload.confirm.isShow,func:t.payload.confirm.func}};case E:return Object(f.a)(Object(f.a)({},e),{},{status:!1});default:return e}};var _=function(){var e=Object(b.c)((function(e){return e.modal})),t=Object(b.b)();return{modalState:e,onOpenModal:Object(a.useCallback)((function(e){t(function(e){return{type:p,payload:{title:e.title,desc:e.desc,confirm:{isShow:e.confirm.isShow}}}}(e))}),[t]),onOpenConfirmModal:Object(a.useCallback)((function(e){t(function(e){return{type:"modal/open_confirm",payload:{title:e.title,desc:e.desc,confirm:{isShow:e.confirm.isShow,func:e.confirm.func}}}}(e))}),[t]),onCloseModal:Object(a.useCallback)((function(){t({type:E})}),[t])}},h=n(5);function w(e){var t=e.data,n=_(),r=n.modalState,o=n.onCloseModal,l=Object(a.useRef)(null),i=Object(a.useState)(t),u=Object(d.a)(i,2),s=u[0],m=u[1];Object(a.useEffect)((function(){m(r)}),[r]);var b=function(){o()};return c.a.createElement("div",{className:"bb-modal__body ".concat(s.status&&"on"),ref:l},c.a.createElement("div",{className:"bb-modal__dim",onClick:b}),c.a.createElement("div",{className:"bb-modal__window"},c.a.createElement("div",{className:"bb-modal__window-close-btn",onClick:b},c.a.createElement(h.m,{className:"bb-modal__window-corss-icon"})),c.a.createElement("div",null,c.a.createElement("h2",{className:"bb-modal__window-title"},s.title),c.a.createElement("div",{className:"bb-modal__window-desc"},s.desc),c.a.createElement("div",{className:"bb-modal__window-btns ".concat(s.confirm.isShow&&"on")},c.a.createElement("button",{onClick:b},"\uc544\ub2c8\uc624"),c.a.createElement("button",{onClick:s.confirm.func},"\uc608")))))}w.defaultProps={data:{status:!1,title:"",desc:"",confirm:{isShow:!1}}};var N=w;n(57);n(58);var y=n(16),O=n.n(y),j=(n(59),n(24)),k=n.n(j);var C=function(e){var t=e.data,n=Object(a.useState)([]),r=Object(d.a)(n,2),o=(r[0],r[1]),i=Object(a.useState)(""),u=Object(d.a)(i,2),s=u[0],m=u[1],b=Object(a.useState)(k.a),f=Object(d.a)(b,2),p=f[0],E=f[1],v=function(e){return 1===e.toString().length?"0"+e.toString():e.toString()};return Object(a.useEffect)((function(){o(t.tags),t.images.thumbnailImage.length>0&&E(O.a.resolve("./uploads",t.images.thumbnailImage[0].filename)),m(function(){var e=t._id.toString().substring(0,8),n=new Date(1e3*parseInt(e,16)),a=n.getUTCFullYear(),c=v(n.getUTCMonth()),r=v(n.getUTCDay());v(n.getUTCHours()),v(n.getUTCMinutes()),v(n.getUTCSeconds());return"".concat(a,".").concat(c,".").concat(r)}())}),[]),c.a.createElement("li",{className:"bb-board-list__body"},c.a.createElement(l.b,{to:"/board/view?_id=".concat(t._id)},c.a.createElement("div",{className:"bb-board-list__contents-wrapper"},c.a.createElement("div",{className:"bb-board-list__article-wrapper"},c.a.createElement("div",null,c.a.createElement("div",{className:"bb-board-list__article-title"},t.title),c.a.createElement("div",{className:"bb-board-list__article-tags"},t.tags.map((function(e,t){return c.a.createElement("span",{key:t},e)})))),c.a.createElement("ul",{className:"bb-board-list__article-extra-info"},c.a.createElement("li",null,s),c.a.createElement("li",null,t.writer))),c.a.createElement("div",null,c.a.createElement("figure",{className:"bb-board-list__image",style:{backgroundImage:"url(".concat(p,")")}})))))},S=n(12),T=n.n(S);var x=function(){_().modalState;var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],o=function(e){document.querySelectorAll(".bb-board-home__tags-ul > li").forEach((function(e){e.classList.remove("on")})),e.currentTarget.classList.add("on");var t=e.currentTarget.innerText;i().then((function(e){if("\ubaa8\ub450"===t)r(e.data);else{var n=e.data.filter((function(e){return-1!==e.tags.indexOf(t)}));r(n)}}))},i=function(){return T()({method:"get",url:"/api/board/list"})};return Object(a.useEffect)((function(){i().then((function(e){r(e.data)})),window.scrollTo(0,0)}),[]),c.a.createElement("main",{className:"bb-board-home__main"},c.a.createElement("section",{className:"bb-board-home__hero-section"},c.a.createElement("div",null,c.a.createElement("h1",null,"Bumblog"),c.a.createElement("div",{className:"bb-board-home__hero-desc"},"\uc0dd\uac01\ub098\ub294 \uac83\uc744 \uae30\ub85d\ud558\uace0 \uc800\uc7a5\ud558\ub294 \uacf5\uac04"))),c.a.createElement("section",{className:"bb-board-home__tags-section"},c.a.createElement("div",null,c.a.createElement("ul",{className:"bb-board-home__tags-ul"},c.a.createElement("li",{className:"on",onClick:o},"\ubaa8\ub450"),c.a.createElement("li",{onClick:o},"\uac1c\ubc1c"),c.a.createElement("li",{onClick:o},"\uacf5\ubd80"),c.a.createElement("li",{onClick:o},"\uc0dd\uac01")))),c.a.createElement("section",{className:"bb-board-home__write-button-section"},c.a.createElement("div",{className:"bb-board-home__btns-wrapper"},c.a.createElement("div",null,"\xa0"),c.a.createElement("div",null,c.a.createElement(l.b,{className:"bb-board-home__icon-wrapper",to:"/board/write"},c.a.createElement(h.d,{className:"bb-board-home__write-icon"}),"\xa0\uae00\uc4f0\uae30")))),c.a.createElement("section",{className:"bb-board-home__list-section"},c.a.createElement("ul",{className:"bb-board-home__list-ul-tag"},n.map((function(e){return c.a.createElement(C,{key:e._id,data:e})})))))},L=(n(76),function(e){var t=e.substring(1).split("&"),n={};return t.forEach((function(e){var t=e.split("=");n[t[0]]=t[1]})),n});var I=function(e){var t=_(),n=t.onOpenConfirmModal,r=t.onCloseModal,o=Object(a.useState)({_id:"",tags:[],title:"",description:"",writer:"",images:{thumbnailImage:[],descriptionImage:[]}}),u=Object(d.a)(o,2),s=u[0],m=u[1],b=Object(a.useState)(""),f=Object(d.a)(b,2),p=f[0],E=f[1],v=Object(i.f)();return Object(a.useEffect)((function(){console.log("useEffect");var t=e.location.search,n=L(t);window.scrollTo(0,0),T()({method:"get",url:"/api/board/list",params:n}).then((function(e){if(console.log("res",e.data),e.data){m(e.data);var t=e.data.images.thumbnailImage[0];E(t?O.a.resolve("./uploads",t.filename):k.a)}}))}),[]),c.a.createElement("main",{className:"bb-board-view__main"},c.a.createElement("section",{className:"bb-board-view__hero-section",style:{backgroundImage:"url(".concat(p,")")}},c.a.createElement("div",{className:"bb-board-view__hero-section-title-wrapper"},c.a.createElement("h1",null,null===s||void 0===s?void 0:s.title),c.a.createElement("div",{className:"bb-board-view__subtitle"}))),c.a.createElement("section",{className:"bb-board-view__article-section"},c.a.createElement("article",{className:"bb-board-view__article tui-editor-contents",dangerouslySetInnerHTML:{__html:s.description}})),c.a.createElement("section",{className:"bb-board-view__buttons-section"},c.a.createElement("ul",{className:"bb-board-view__update-btns"},c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement(l.b,{to:"/board/write?_id=".concat(null===s._id?"":s._id)},c.a.createElement(h.d,{className:"bb-board-view__pencil-icon"})))),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){n({status:!0,title:"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",desc:"\uc0ad\uc81c\ud55c \ub370\uc774\ud130\ub294 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",confirm:{isShow:!0,func:function(){T()({method:"delete",url:"/api/board/list",data:s}).then((function(e){console.log("deleteRes",e.data),r(),v.push("/board")}))}}})}},c.a.createElement(h.h,{className:"bb-board-view__tresh-icon"}))))))},D=n(42),M=(n(77),n(41));var R=function(e){var t=_(),n=t.onOpenConfirmModal,r=t.onCloseModal,o=Object(a.useState)(""),l=Object(d.a)(o,2),u=l[0],s=l[1],m=Object(a.useState)([]),b=Object(d.a)(m,2),p=b[0],E=b[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),w=g[0],N=g[1],y=Object(a.useState)({thumbnailImage:[],descriptionImage:[]}),j=Object(d.a)(y,2),k=j[0],C=j[1],S=Object(a.useState)(!0),x=Object(d.a)(S,2),I=x[0],R=x[1],H=Object(a.useState)(""),U=Object(d.a)(H,2),F=U[0],W=U[1],z=Object(a.useState)(null),A=Object(d.a)(z,2),B=A[0],q=A[1],J=Object(a.useState)(null),$=Object(d.a)(J,2),K=$[0],P=$[1],V=Object(a.useState)(0),Y=Object(d.a)(V,2),G=Y[0],Q=Y[1],X=Object(i.f)(),Z=Object(a.useRef)(null),ee=Object(a.useRef)(null),te=Object(a.useRef)(null),ne=Object(a.useRef)(null),ae=function(){Z.current&&Z.current.contentDocument&&Z.current.contentDocument.body.focus()},ce=function(e,t,n){!function(e){e&&e.currentTarget.classList.toggle("on")}(n),function(e,t){Z.current&&Z.current.contentDocument&&(""===t?Z.current.contentDocument.execCommand(e):Z.current.contentDocument.execCommand(e,!0,t))}(e,t),ae()},re=function(e){if(I&&(se(),R(!1)),Z.current&&Z.current.contentDocument){var t=Z.current.contentDocument;ee.current&&ee.current.childNodes.forEach((function(e){e.dataset.cmd&&(t.queryCommandState(e.dataset.cmd)?e.classList.add("on"):e.classList.remove("on"))}))}if("keyup"===e.type&&"Backspace"===e.key&&(k.descriptionImage.forEach((function(e){var t,n;-1===(null===(t=Z.current)||void 0===t||null===(n=t.contentDocument)||void 0===n?void 0:n.body.innerHTML.indexOf(e.filename))&&C(Object(f.a)(Object(f.a)({},k),{},{descriptionImage:k.descriptionImage.filter((function(t){return t.filename!==e.filename}))}))})),G>0))for(var n=function(e){var t,n;-1!==(null===(t=Z.current)||void 0===t||null===(n=t.contentDocument)||void 0===n?void 0:n.body.innerHTML.indexOf("decriptionImgTag-".concat(e)))?console.log("\uc774\ubbf8\uc9c0\uac00 \uc788\ub2e4.!!"):(console.log("\uc774\ubbf8\uc9c0\uac00 \uc5c6\ub2e4.!!",K),document.querySelectorAll(".decriptionInputFileTag-".concat(e))&&(document.querySelectorAll(".decriptionInputFileTag-".concat(e))[0].value=""),K&&K.length>0&&P(K.map((function(t,n){return n+1===e?null:t}))))},a=1;a<=G;a++)n(a)},oe=Object(a.useRef)(null),le=function(e){T()({method:"get",url:"/api/board/list",params:{_id:e}}).then((function(e){var t;console.log("res",e.data),s(e.data.title),E(""===e.data.tags[0]?[]:e.data.tags),C(e.data.images),fe(e.data.tags),e.data.images.thumbnailImage.length>0&&W(O.a.resolve("./uploads",e.data.images.thumbnailImage[0].filename)),t=e.data.description,Z.current&&Z.current.contentDocument&&(Z.current.contentDocument.body.innerHTML=t)}))};Object(a.useEffect)((function(){!function(){if(Z.current&&Z.current.contentDocument){Z.current.contentDocument.designMode="on",Z.current.contentDocument.head.innerHTML='<style>\n                @import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");\n            </style>',Z.current.contentDocument.body.style.fontFamily="Noto Sans KR",Z.current.contentDocument.body.style.fontWeight="400",Z.current.contentDocument.body.style.margin="0px";Z.current.contentDocument.body.innerHTML="<div style='color: grey;'>\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.</div>"}}();var t=L(e.location.search);return t._id&&(N(t._id),le(t._id),R(!1)),window.scrollTo(0,0),function(){ue()}}),[]),Object(a.useEffect)((function(){return ie(),function(){ue()}}),[K,k,I]);var ie=function(){Z.current&&Z.current.contentWindow&&(Z.current.contentWindow.addEventListener("keyup",re),Z.current.contentWindow.addEventListener("click",re))},ue=function(){Z.current&&Z.current.contentWindow&&(Z.current.contentWindow.removeEventListener("keyup",re),Z.current.contentWindow.removeEventListener("click",re))},se=function(){Z.current&&Z.current.contentDocument&&(Z.current.contentDocument.body.innerHTML="")},me=function(){var e,t,n=null===(e=Z.current)||void 0===e||null===(t=e.contentDocument)||void 0===t?void 0:t.body.innerHTML;return n||""},de=function(e){var t=new FormData;return t.append("title",u),t.append("tags",JSON.stringify(p)),t.append("description",function(){var e,t,n,a=null===(e=Z.current)||void 0===e||null===(t=e.contentDocument)||void 0===t?void 0:t.body.innerHTML;return(a=null===(n=a)||void 0===n?void 0:n.replace(/([0-9]\"\s)src=\".*?\"/gi,"$1"))||""}()),t.append("writer","\uc2e0\ubc94\uadfc"),""==e?(B&&t.append("thumbnailImage",B),K&&K.forEach((function(e){e&&t.append("descriptionImage",e)}))):(t.append("_id",e),t.append("images",JSON.stringify(k)),B&&t.append("thumbnailImage",B),K&&K.forEach((function(e){e&&t.append("descriptionImage",e)}))),t},be=function(e){console.log("\ud074\ub9ad");var t=e.currentTarget.classList,n=e.currentTarget.innerText;t.contains("on")?(t.remove("on"),-1!==p.indexOf(n)&&E(p.filter((function(e){return e!==n})))):(t.add("on"),-1===p.indexOf(n)&&E(p.concat(n)))},fe=function(e){document.querySelectorAll(".bb-board-write__tags-wrapper > span").forEach((function(t){e.forEach((function(e){e===t.innerHTML&&t.classList.add("on")}))}))},pe=function(e){var t=new FileReader;t.onload=function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.result)&&W(e.target.result.toString())},t.readAsDataURL(e)},Ee=function(e){return-1!==["image/jpeg","image/png","image/jpg"].indexOf(e)},ve=function(e){if(e.currentTarget.files){var t=e.currentTarget.files[0];t&&(!1===Ee(t.type)?(n({status:!0,title:"\uc774\ubbf8\uc9c0 \uc624\ub958",desc:"jpeg, png, jpg \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.",confirm:{isShow:!1}}),0!==G&&Q(G-1),e.currentTarget.value=""):(ge(t),P(null===K?[t]:K.concat(t))))}},ge=function(e){var t=new FileReader;t.onload=function(e){var t;if(null===(t=e.target)||void 0===t?void 0:t.result){var n,a,c="<img width='100%' height='auto' class=\".decriptionImgTag-".concat(G,'" src="').concat(e.target.result.toString(),'" />');null===(n=Z.current)||void 0===n||null===(a=n.contentDocument)||void 0===a||a.execCommand("InsertHTML",!1,c)}},t.readAsDataURL(e),ae()};return c.a.createElement("main",{className:"bb-board-write__main"},c.a.createElement("section",{className:"bb-board-write__form-section"},c.a.createElement("form",{className:"bb-board-write__form",onSubmit:function(e){if(e.preventDefault(),function(e){var t=!0;return console.log("targets",e),e.some((function(e){if(console.log("item",e),""===e.target||-1!==e.target.indexOf("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."))return n({status:!0,title:"".concat(e.type," \uc624\ub958"),desc:"".concat(e.type,"\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),confirm:{isShow:!0,func:function(){var t,n,a;switch(r(),e.type){case"\uc81c\ubaa9":null===(t=ne.current)||void 0===t||t.focus();break;case"\ubcf8\ubb38":(null===(n=Z.current)||void 0===n?void 0:n.contentDocument)&&(null===(a=Z.current)||void 0===a||a.contentDocument.body.focus())}}}}),t=!1,!0})),t}([{type:"\uc81c\ubaa9",target:u},{type:"\ud0dc\uadf8",target:p.toString()},{type:"\ubcf8\ubb38",target:me()}])){var t=de(w);""===w?T()({headers:{"Content-Type":"multipart/form-data"},method:"post",url:"/api/board/list",data:t}).then((function(e){console.log("post_res",e.data[0]),X.push("/board")})):T()({headers:{"Content-Type":"multipart/form-data"},method:"put",url:"/api/board/list",data:t}).then((function(e){console.log("put_res",e.data[0]),X.push("/board/view?_id="+w)})),s(""),C({thumbnailImage:[],descriptionImage:[]}),q(null),P(null),se()}}},Object(D.a)(Array(G)).map((function(e,t){return c.a.createElement("input",{key:t,className:"decriptionInputFileTag-".concat(t+1),type:"file",onChange:ve})})),c.a.createElement("input",{className:"bb-board-write__title",ref:ne,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",name:"title",value:u,onChange:function(e){var t=e.target,n=(t.name,t.value);s(n)}}),c.a.createElement("div",{className:"bb-board-write__tags-wrapper"},c.a.createElement("span",{onClick:be},"\uac1c\ubc1c"),c.a.createElement("span",{onClick:be},"\uacf5\ubd80"),c.a.createElement("span",{onClick:be},"\uc0dd\uac01")),c.a.createElement("div",{className:"bb-board-write__editor-wrapper"},c.a.createElement("ul",{className:"bb-board-write__editor-options",ref:ee},c.a.createElement("li",{onClick:function(){oe.current&&oe.current.classList.toggle("on")}},c.a.createElement(M.a,null),c.a.createElement("ul",{className:"bb-board-write__editor-font-box",ref:oe},c.a.createElement("li",{onClick:function(e){return ce("fontSize","1")}},"10px"),c.a.createElement("li",{onClick:function(e){return ce("fontSize","2")}},"13px"),c.a.createElement("li",{onClick:function(e){return ce("fontSize","3")}},"16px"),c.a.createElement("li",{onClick:function(e){return ce("fontSize","4")}},"18px"),c.a.createElement("li",{onClick:function(e){return ce("fontSize","5")}},"24px"),c.a.createElement("li",{onClick:function(e){return ce("fontSize","6")}},"32px"),c.a.createElement("li",{onClick:function(e){return ce("fontSize","7")}},"48px"))),c.a.createElement("li",{"data-cmd":"bold",onClick:function(e){return ce("bold","",e)}},c.a.createElement(h.i,null)),c.a.createElement("li",{"data-cmd":"italic",onClick:function(e){return ce("italic","",e)}},c.a.createElement(h.j,null)),c.a.createElement("li",{"data-cmd":"underline",onClick:function(e){return ce("underline","",e)}},c.a.createElement(h.l,null)),c.a.createElement("li",{"data-cmd":"strikethrough",onClick:function(e){return ce("strikethrough","",e)}},c.a.createElement(h.k,null)),c.a.createElement("li",{"data-cmd":"justifycenter",onClick:function(e){return ce("justifycenter","",e)}},c.a.createElement(h.e,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return ce("insertunorderedlist","")}},c.a.createElement(h.c,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return ce("insertorderedlist","")}},c.a.createElement(h.b,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return ce("indent","")}},c.a.createElement(h.f,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return ce("outdent","")}},c.a.createElement(h.g,null)),c.a.createElement("li",{onClick:function(){Q(G+1),setTimeout((function(){var e;null===(e=document.querySelector(".decriptionInputFileTag-".concat(G+1)))||void 0===e||e.click()}),10)}},c.a.createElement(h.a,null))),c.a.createElement("iframe",{className:"bb-board-wrtie__editor",name:"boadeditrot",ref:Z})),c.a.createElement("div",{className:"bb-board-write__image-tiles ".concat(""!==F&&"on")},c.a.createElement("span",{style:{backgroundImage:"url(".concat(F,")")},onClick:function(){W(""),q(null),C(Object(f.a)(Object(f.a)({},k),{},{thumbnailImage:[]}))}},c.a.createElement(h.m,null))),c.a.createElement("div",{className:"bb-board-write__image-upload-btn"},c.a.createElement("input",{type:"file",ref:te,onChange:function(e){if(e.currentTarget.files){var t=e.currentTarget.files[0];t&&(!1===Ee(t.type)?(n({status:!0,title:"\uc774\ubbf8\uc9c0 \uc624\ub958",desc:"jpeg, png, jpg \ud30c\uc77c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.",confirm:{isShow:!1}}),e.currentTarget.value="",q(null)):(pe(t),q(t)))}}}),c.a.createElement("button",{type:"button",onClick:function(){var e;return null===(e=te.current)||void 0===e?void 0:e.click()}},"\uc378\ub124\uc77c \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc")),c.a.createElement("div",{className:"bb-board-write__buttons"},c.a.createElement("button",{type:"button",onClick:function(){return X.push("/board")}},"\ucde8\uc18c"),c.a.createElement("button",{type:"submit"},"\uc644\ub8cc")))))};n(78);var H=function(){return c.a.createElement("div",{className:"bb-body"},c.a.createElement(l.a,null,c.a.createElement(s,null),c.a.createElement(N,null),c.a.createElement(i.a,{exact:!0,path:"/",component:x}),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/board/write",component:R}),c.a.createElement(i.a,{path:"/board/view",component:I}),c.a.createElement(i.a,{path:"/board",component:x})),c.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(15),F=Object(U.b)({modal:g}),W=Object(U.c)(F);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b.a,{store:W},c.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.28678574.chunk.js.map