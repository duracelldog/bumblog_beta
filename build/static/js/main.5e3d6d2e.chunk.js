(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{42:function(e,t,n){e.exports=n(78)},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),l=n.n(r),o=(n(47),n(6)),i=n(3),u=n(15);n(48);var s=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e.current)switch(n){case 0:e.current.classList.remove("on");break;case 1:e.current.classList.add("on");break;case 2:e.current.classList.toggle("on")}},r=function(){t.current&&(t.current.classList.add("on"),document.body.addEventListener("click",i))},l=function(){t.current&&(t.current.classList.remove("on"),document.body.removeEventListener("click",i))},i=function(e){console.log("bodyevent \uc2e4\ud589",e.srcElement.className);var t=!0;["bb-header__sub-menu-box-ul","bb-header__sub-menu-box-li"].forEach((function(n,a){e.srcElement.className!==n&&"icon-user"!==e.srcElement.className.baseVal||(t=!1)})),t&&l()};return Object(a.useMemo)((function(){window.addEventListener("resize",(function(){var n,a;null===(n=e.current)||void 0===n||n.classList.remove("on"),null===(a=t.current)||void 0===a||a.classList.remove("on")}))}),[]),c.a.createElement("nav",{className:"bb-header__nav"},c.a.createElement("div",{className:"bb-header__menu--desktop"},c.a.createElement("div",{className:"bb-header__mobile-menu-btn",onClick:function(e){return n(e,2)}},c.a.createElement(u.b,{className:"icon-menu"})),c.a.createElement("div",{className:"bb-header__logo-btn",onClick:function(e){return n(e,0)}},c.a.createElement(o.b,{className:"text-black ",to:"/"},"Bumblog")),c.a.createElement("div",{className:"bb-header__desktop-menu-wrapper"},c.a.createElement("ul",{className:"bb-header__desktop-menu"},c.a.createElement("li",null)),c.a.createElement("div",{className:"bb-header__sub-menu"},c.a.createElement("div",{className:"bb-header__sub-menu-icon",onClick:function(){t.current&&(t.current.classList.contains("on")?l():r())}},c.a.createElement(u.c,{className:"icon-user"})),c.a.createElement("div",{className:"bb-header__sub-menu-box",ref:t},c.a.createElement("div",{className:"edge-wrapper"},c.a.createElement("div",{className:"edge"})),c.a.createElement("ul",{className:"bb-header__sub-menu-box-ul"},c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274"),c.a.createElement("li",{className:"bb-header__sub-menu-box-li"},"1\ubc88 \uba54\ub274")))))),c.a.createElement("div",{className:"bb-header__mobile-menu-wrapper"},c.a.createElement("ul",{className:"bb-header__mobile-menu",ref:e},c.a.createElement("li",{onClick:function(e){return n(e,0)}},c.a.createElement(o.b,{to:"/board"},"MENU-1")),c.a.createElement("li",null,"MENU-2"),c.a.createElement("li",null,"MENU-3"),c.a.createElement("li",null,"MENU-4"))))};n(53);var m=function(){return c.a.createElement("footer",{className:"bb-common__footer-tag"},c.a.createElement("div",{className:"bb-common__footer-wrapper"},c.a.createElement("div",{className:"bb-common__footer-block-1"},c.a.createElement("div",{className:"bb-common__footer-copyright"},c.a.createElement("div",null,"Copyright \xa9 2020 Bumblog Inc. All rights reserved")),c.a.createElement("div",{className:"text-bold"},"Bumblog"))))},d=n(4),b=(n(54),n(18)),f=n(27),E="modal/open",p="modal/close",v={status:!1,title:"",desc:"",confirm:{isShow:!1,func:function(){}}};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{status:!0,title:t.payload.title,desc:t.payload.desc,confirm:{isShow:t.payload.confirm.isShow}};case"modal/open_confirm":return{status:!0,title:t.payload.title,desc:t.payload.desc,confirm:{isShow:t.payload.confirm.isShow,func:t.payload.confirm.func}};case p:return Object(f.a)(Object(f.a)({},e),{},{status:!1});default:return e}};var _=function(){var e=Object(b.c)((function(e){return e.modal})),t=Object(b.b)();return{state:e,onOpenModal:Object(a.useCallback)((function(e){t(function(e){return{type:E,payload:{title:e.title,desc:e.desc,confirm:{isShow:e.confirm.isShow}}}}(e))}),[t]),onOpenConfirmModal:Object(a.useCallback)((function(e){t(function(e){return{type:"modal/open_confirm",payload:{title:e.title,desc:e.desc,confirm:{isShow:e.confirm.isShow,func:e.confirm.func}}}}(e))}),[t]),onCloseModal:Object(a.useCallback)((function(){t({type:p})}),[t])}},h=n(5);function w(e){var t=e.data,n=_(),r=n.state,l=n.onCloseModal,o=Object(a.useRef)(null),i=Object(a.useState)(t),u=Object(d.a)(i,2),s=u[0],m=u[1];Object(a.useEffect)((function(){m(r)}),[r]);var b=function(){l()};return c.a.createElement("div",{className:"bb-modal__body ".concat(s.status&&"on"),ref:o},c.a.createElement("div",{className:"bb-modal__dim",onClick:b}),c.a.createElement("div",{className:"bb-modal__window"},c.a.createElement("div",{className:"bb-modal__window-close-btn",onClick:b},c.a.createElement(h.l,{className:"bb-modal__window-corss-icon"})),c.a.createElement("div",null,c.a.createElement("h1",{className:"bb-modal__window-title"},s.title),c.a.createElement("div",{className:"bb-modal__window-desc"},s.desc),c.a.createElement("div",{className:"bb-modal__window-btns ".concat(s.confirm.isShow&&"on")},c.a.createElement("button",{onClick:b},"\uc544\ub2c8\uc624"),c.a.createElement("button",{onClick:s.confirm.func},"\uc608")))))}w.defaultProps={data:{status:!1,title:"",desc:"",confirm:{isShow:!1}}};var N=w;n(56);n(57);var k=n(22),j=n.n(k);n(58);var y=function(e){var t=e.data,n=Object(a.useState)([]),r=Object(d.a)(n,2),l=(r[0],r[1]),i=Object(a.useState)(""),u=Object(d.a)(i,2),s=u[0],m=u[1],b=Object(a.useState)(""),f=Object(d.a)(b,2),E=f[0],p=f[1],v=function(e){return 1===e.toString().length?"0"+e.toString():e.toString()};return Object(a.useEffect)((function(){l(t.tags),t.images.thumbnailImage.length>0&&p(j.a.resolve("./uploads",t.images.thumbnailImage[0].filename)),m(function(){var e=t._id.toString().substring(0,8),n=new Date(1e3*parseInt(e,16)),a=n.getUTCFullYear(),c=v(n.getUTCMonth()),r=v(n.getUTCDay());v(n.getUTCHours()),v(n.getUTCMinutes()),v(n.getUTCSeconds());return"".concat(a,".").concat(c,".").concat(r)}())}),[]),c.a.createElement("li",{className:"bb-board-list__body"},c.a.createElement(o.b,{to:"/board/view?_id=".concat(t._id)},c.a.createElement("div",{className:"bb-board-list__contents-wrapper"},c.a.createElement("div",{className:"bb-board-list__article"},c.a.createElement("h2",{className:"main-title"},t.title),c.a.createElement("div",{className:"bb-board-list__tag-wrapper"},t.tags.map((function(e,t){return c.a.createElement("span",{key:t},e)}))),c.a.createElement("ul",{className:"info"},c.a.createElement("li",null,s),c.a.createElement("li",null,t.writer))),c.a.createElement("div",null,c.a.createElement("figure",{className:"bb-board-list__image",style:{backgroundImage:"url(".concat(E,")")}})))))},O=n(12),C=n.n(O);var S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],l=function(e){document.querySelectorAll(".bb-board-home__tag-ul > li").forEach((function(e){e.classList.remove("on")})),e.currentTarget.classList.add("on");var t=e.currentTarget.innerText;i().then((function(e){if("\ubaa8\ub450"===t)r(e.data);else{var n=e.data.filter((function(e){return-1!==e.tags.indexOf(t)}));r(n)}}))},i=function(){return C()({method:"get",url:"/api/board/list"})};return Object(a.useEffect)((function(){i().then((function(e){r(e.data)}))}),[]),c.a.createElement("main",{className:"bb-board-home__main"},c.a.createElement("section",{className:"bb-board-home__hero-section"},c.a.createElement("div",null,c.a.createElement("h1",null,"My Blog"),c.a.createElement("div",{className:"bb-board-home__hero-desc"},"\uc0dd\uac01\ub098\ub294 \uac83\uc744 \uae30\ub85d\ud558\uace0 \uc800\uc7a5\ud558\ub294 \uacf5\uac04"))),c.a.createElement("section",{className:"bb-board-home__tag-section"},c.a.createElement("div",null,c.a.createElement("ul",{className:"bb-board-home__tag-ul"},c.a.createElement("li",{className:"on",onClick:l},"\ubaa8\ub450"),c.a.createElement("li",{onClick:l},"\uac1c\ubc1c"),c.a.createElement("li",{onClick:l},"\uacf5\ubd80"),c.a.createElement("li",{onClick:l},"\uc0dd\uac01")))),c.a.createElement("section",null,c.a.createElement("div",{className:"bb-board-home__btns-wrapper"},c.a.createElement("div",null,"\xa0"),c.a.createElement("div",null,c.a.createElement(o.b,{className:"bb-board-home__icon-wrapper",to:"/board/write"},c.a.createElement(h.d,{className:"bb-board-home__write-icon"}),"\xa0\uae00\uc4f0\uae30")))),c.a.createElement("section",{className:"bb-board-home__list-section"},c.a.createElement("ul",null,n.map((function(e){return c.a.createElement(y,{key:e._id,data:e})})))))},T=(n(75),function(e){var t=e.substring(1).split("&"),n={};return t.forEach((function(e){var t=e.split("=");n[t[0]]=t[1]})),n});var L=function(e){var t=_(),n=t.onOpenConfirmModal,r=t.onCloseModal,l=Object(a.useState)({_id:"",tags:[],title:"",description:"",writer:"",images:{thumbnailImage:[],descriptionImage:[]}}),u=Object(d.a)(l,2),s=u[0],m=u[1],b=Object(i.f)();return Object(a.useEffect)((function(){console.log("useEffect");var t=e.location.search,n=T(t);console.log("searchData",n),C()({method:"get",url:"/api/board/list",params:n}).then((function(e){console.log("res",e.data[0]),e.data[0]&&m(e.data[0])}))}),[]),c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"bb-board-view__hero-section"},c.a.createElement("div",{className:"bb-board-view__hero-section-title-wrapper"},c.a.createElement("h1",null,null===s||void 0===s?void 0:s.title),c.a.createElement("div",{className:"bb-board-view__subtitle"}))),c.a.createElement("section",{className:"bb-board-view__article-section"},c.a.createElement("article",{className:"bb-board-view__article tui-editor-contents",dangerouslySetInnerHTML:{__html:s.description}}),c.a.createElement("ul",{className:"bb-board-view__update-btns"},c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement(o.b,{to:"/board/write?_id=".concat(null===s._id?"":s._id)},"\uc218\uc815"))),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){n({status:!0,title:"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",desc:"\uc0ad\uc81c\ud55c \ub370\uc774\ud130\ub294 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",confirm:{isShow:!0,func:function(){C()({method:"delete",url:"/api/board/list",data:s}).then((function(e){console.log("deleteRes",e.data[0]),r(),b.push("/board")}))}}})}},"\uc0ad\uc81c")))))},x=n(41),I=(n(76),n(40));var D=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),u=Object(d.a)(o,2),s=u[0],m=u[1],b=Object(a.useState)(""),f=Object(d.a)(b,2),E=f[0],p=f[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),_=g[0],w=g[1],N=Object(a.useState)(null),k=Object(d.a)(N,2),y=k[0],O=k[1],S=Object(a.useState)([]),L=Object(d.a)(S,2),D=L[0],M=L[1],R=Object(a.useState)(null),U=Object(d.a)(R,2),F=U[0],H=U[1],z=Object(a.useState)([]),A=Object(d.a)(z,2),W=(A[0],A[1]),B=Object(a.useState)(0),q=Object(d.a)(B,2),J=q[0],$=q[1],K=Object(i.f)(),P=Object(a.useRef)(null),V=Object(a.useRef)(null),Y=Object(a.useRef)(null),G=function(){P.current&&P.current.contentDocument&&P.current.contentDocument.body.focus()},Q=function(e,t,n){!function(e){e&&e.currentTarget.classList.toggle("on")}(n),function(e,t){P.current&&P.current.contentDocument&&(""===t?P.current.contentDocument.execCommand(e):P.current.contentDocument.execCommand(e,!0,t))}(e,t),G()},X=function(e){if(P.current&&P.current.contentDocument){var t=P.current.contentDocument;V.current&&V.current.childNodes.forEach((function(e){e.dataset.cmd&&(t.queryCommandState(e.dataset.cmd)?e.classList.add("on"):e.classList.remove("on"))}))}if("keyup"===e.type&&"Backspace"===e.key&&(console.log("\ubc31\uc2a4\ud398\uc774\uc2a4 \ub20c\ub800\ub2e4.",J),J>0))for(var n=function(e){var t,n;console.log("\uc774\ubbf8\uc9c0 \uac80\uc0ac ".concat(e)),-1!==(null===(t=P.current)||void 0===t||null===(n=t.contentDocument)||void 0===n?void 0:n.body.innerHTML.indexOf("decriptionImgTag-".concat(e)))?console.log("\uc774\ubbf8\uc9c0\uac00 \uc788\ub2e4.!!"):(console.log("\uc774\ubbf8\uc9c0\uac00 \uc5c6\ub2e4.!!",F),document.querySelectorAll(".decriptionInputFileTag-".concat(e))&&(document.querySelectorAll(".decriptionInputFileTag-".concat(e))[0].value=""),F&&F.length>0&&H(F.map((function(t,n){return n+1===e?null:t}))))},a=1;a<=J;a++)n(a)},Z=Object(a.useRef)(null),ee=function(e){C()({method:"get",url:"/api/board/list",params:{_id:e}}).then((function(e){var t;console.log("res",e.data[0]),l(e.data[0].title),m(""===e.data[0].tags[0]?[]:e.data[0].tags),M(e.data[0].images.thumbnailImage),W(e.data[0].images.descriptionImage),le(e.data[0].tags),e.data[0].images.thumbnailImage.length>0&&w(j.a.resolve("./uploads",e.data[0].images.thumbnailImage[0].filename)),t=e.data[0].description,P.current&&P.current.contentDocument&&(P.current.contentDocument.body.innerHTML=t)}))};Object(a.useEffect)((function(){P.current&&P.current.contentDocument&&(P.current.contentDocument.designMode="on",P.current.contentDocument.body.style.fontFamily="NotoSansKR-Regular");var t=T(e.location.search);return t._id&&(p(t._id),ee(t._id)),function(){ne()}}),[]),Object(a.useEffect)((function(){return te(),function(){ne()}}),[F]);var te=function(){P.current&&P.current.contentWindow&&(P.current.contentWindow.addEventListener("keyup",X),P.current.contentWindow.addEventListener("click",X))},ne=function(){P.current&&P.current.contentWindow&&(P.current.contentWindow.removeEventListener("keyup",X),P.current.contentWindow.removeEventListener("click",X))},ae=function(){var e,t,n,a=null===(e=P.current)||void 0===e||null===(t=e.contentDocument)||void 0===t?void 0:t.body.innerHTML;return(a=null===(n=a)||void 0===n?void 0:n.replace(/([0-9]\"\s)src=\".*?\"/gi,"$1"))||""},ce=function(e){var t=new FormData;return t.append("title",r),t.append("tags",s.toString()),t.append("writer","\uc2e0\ubc94\uadfc"),""==e?(t.append("description",ae()),y&&t.append("thumbnailImage",y),F&&F.forEach((function(e){e&&t.append("descriptionImage",e)}))):(t.append("_id",e),y?t.append("thumbnailImage",y):t.append("thumbnailImage",JSON.stringify(D)),F?(F.forEach((function(e){e&&t.append("descriptionImage",e)})),t.append("description",ae())):t.append("description",function(){var e,t,n=null===(e=P.current)||void 0===e||null===(t=e.contentDocument)||void 0===t?void 0:t.body.innerHTML;return n||""}())),t},re=function(e){var t=e.currentTarget.classList,n=e.currentTarget.innerText;t.contains("on")?(t.remove("on"),-1!==s.indexOf(n)&&m(s.filter((function(e){return e!==n})))):(t.add("on"),-1===s.indexOf(n)&&m(s.concat(n)))},le=function(e){document.querySelectorAll(".bb-board-write__tags-wrapper > span").forEach((function(t){e.forEach((function(e){e===t.innerHTML&&t.classList.add("on")}))}))},oe=function(e){var t=new FileReader;t.onload=function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.result)&&w(e.target.result.toString())},t.readAsDataURL(e)},ie=function(e){return-1!==["image/jpeg","image/png","image/jpg"].indexOf(e)},ue=function(e){if(console.log("e",e),e.currentTarget.files){var t=e.currentTarget.files[0];t&&(!1===ie(t.type)?(alert("jpeg, png, jpg \ud30c\uc77c\ub9cc \ud5c8\uc6a9\ub428"),0!==J&&$(J-1),e.currentTarget.value=""):(se(t),H(null===F?[t]:F.concat(t))))}},se=function(e){var t=new FileReader;t.onload=function(e){var t;if(null===(t=e.target)||void 0===t?void 0:t.result){var n,a,c="<img width='100%' height='auto' class=\".decriptionImgTag-".concat(J,'" src="').concat(e.target.result.toString(),'" />');null===(n=P.current)||void 0===n||null===(a=n.contentDocument)||void 0===a||a.execCommand("InsertHTML",!1,c)}},t.readAsDataURL(e),G()};return c.a.createElement("main",{className:"bb-board-write__main"},c.a.createElement("form",{className:"bb-board-write__form",onSubmit:function(e){e.preventDefault();var t=ce(E);""===E?C()({headers:{"Content-Type":"multipart/form-data"},method:"post",url:"/api/board/list",data:t}).then((function(e){console.log("post_res",e.data[0]),K.push("/board")})):C()({headers:{"Content-Type":"multipart/form-data"},method:"put",url:"/api/board/list",data:t}).then((function(e){console.log("put_res",e.data[0]),K.push("/board/view?_id="+E)})),l(""),O(null),M([]),H(null),W([]),P.current&&P.current.contentDocument&&(P.current.contentDocument.body.innerHTML="")}},Object(x.a)(Array(J)).map((function(e,t){return c.a.createElement("input",{key:t,className:"decriptionInputFileTag-".concat(t+1),type:"file",onChange:ue})})),c.a.createElement("input",{className:"bb-board-write__title",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",name:"title",value:r,onChange:function(e){var t=e.target,n=(t.name,t.value);l(n)}}),c.a.createElement("div",{className:"bb-board-write__tags-wrapper"},c.a.createElement("span",{onClick:re},"\uac1c\ubc1c"),c.a.createElement("span",{onClick:re},"\uacf5\ubd80"),c.a.createElement("span",{onClick:re},"\uc0dd\uac01")),c.a.createElement("div",{className:"bb-board-write__editor-wrapper"},c.a.createElement("ul",{className:"bb-board-write__editor-options",ref:V},c.a.createElement("li",{onClick:function(){Z.current&&Z.current.classList.toggle("on")}},c.a.createElement(I.a,null),c.a.createElement("ul",{className:"bb-board-write__editor-font-box",ref:Z},c.a.createElement("li",{onClick:function(e){return Q("fontSize","1")}},"10px"),c.a.createElement("li",{onClick:function(e){return Q("fontSize","2")}},"13px"),c.a.createElement("li",{onClick:function(e){return Q("fontSize","3")}},"16px"),c.a.createElement("li",{onClick:function(e){return Q("fontSize","4")}},"18px"),c.a.createElement("li",{onClick:function(e){return Q("fontSize","5")}},"24px"),c.a.createElement("li",{onClick:function(e){return Q("fontSize","6")}},"32px"),c.a.createElement("li",{onClick:function(e){return Q("fontSize","7")}},"48px"))),c.a.createElement("li",{"data-cmd":"bold",onClick:function(e){return Q("bold","",e)}},c.a.createElement(h.h,null)),c.a.createElement("li",{"data-cmd":"italic",onClick:function(e){return Q("italic","",e)}},c.a.createElement(h.i,null)),c.a.createElement("li",{"data-cmd":"underline",onClick:function(e){return Q("underline","",e)}},c.a.createElement(h.k,null)),c.a.createElement("li",{"data-cmd":"strikethrough",onClick:function(e){return Q("strikethrough","",e)}},c.a.createElement(h.j,null)),c.a.createElement("li",{"data-cmd":"justifycenter",onClick:function(e){return Q("justifycenter","",e)}},c.a.createElement(h.e,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return Q("insertunorderedlist","")}},c.a.createElement(h.c,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return Q("insertorderedlist","")}},c.a.createElement(h.b,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return Q("indent","")}},c.a.createElement(h.f,null)),c.a.createElement("li",{className:"small-hidden",onClick:function(e){return Q("outdent","")}},c.a.createElement(h.g,null)),c.a.createElement("li",{onClick:function(){$(J+1),setTimeout((function(){var e;null===(e=document.querySelector(".decriptionInputFileTag-".concat(J+1)))||void 0===e||e.click()}),10)}},c.a.createElement(h.a,null))),c.a.createElement("iframe",{className:"bb-board-wrtie__editor",name:"boadeditrot",ref:P})),c.a.createElement("div",{className:"bb-board-write__image-tiles ".concat(""!==_&&"on")},c.a.createElement("span",{style:{backgroundImage:"url(".concat(_,")")},onClick:function(){w(""),M([]),O(null)}},c.a.createElement(h.l,null))),c.a.createElement("div",{className:"bb-board-write__image-upload-btn"},c.a.createElement("input",{type:"file",ref:Y,onChange:function(e){if(e.currentTarget.files){var t=e.currentTarget.files[0];t&&(!1===ie(t.type)?(alert("jpeg, png, jpg \ud30c\uc77c\ub9cc \ud5c8\uc6a9\ub428"),e.currentTarget.value="",O(null)):(oe(t),O(t)))}}}),c.a.createElement("button",{type:"button",onClick:function(){var e;return null===(e=Y.current)||void 0===e?void 0:e.click()}},"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc")),c.a.createElement("div",{className:"bb-board-write__buttons"},c.a.createElement("button",{type:"button",onClick:function(){return K.push("/board")}},"\ucde8\uc18c"),c.a.createElement("button",{type:"submit"},"\uc644\ub8cc"))))};n(77);var M=function(){return c.a.createElement("div",{className:"bb-body"},c.a.createElement(o.a,null,c.a.createElement(s,null),c.a.createElement(N,null),c.a.createElement(i.a,{exact:!0,path:"/",component:S}),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/board/write",component:D}),c.a.createElement(i.a,{path:"/board/view",component:L}),c.a.createElement(i.a,{path:"/board",component:S})),c.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(14),U=Object(R.b)({modal:g}),F=Object(R.c)(U);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b.a,{store:F},c.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5e3d6d2e.chunk.js.map