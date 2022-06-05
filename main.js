(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{L:()=>I});var t=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)},n=function(e,n,o){n.validity.valid?t(e,n,o):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,n,n.validationMessage,o)},o=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},r=function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(r){!function(e,r){var c=Array.from(e.querySelectorAll(r.inputSelector)),a=e.querySelector(r.submitButtonSelector);o(c,a,r),c.forEach((function(u){u.removeEventListener("input",(function(){o(c,a,r),n(e,u,r)})),t(e,u,r)}))}(r,e)}))},c=document.querySelectorAll(".popup");function a(e){e.target.classList.contains("popup_opened")&&l()}function u(e){"Escape"===e.key&&l()}function i(e,t){r(t),e.classList.add("popup_opened"),document.addEventListener("keydown",u),document.addEventListener("click",a)}function l(){c.forEach((function(e){e.classList.contains("popup_opened")&&(e.classList.remove("popup_opened"),document.removeEventListener("keydown",u),document.removeEventListener("click",a))}))}var s={baseUrl:"https://nomoreparties.co/v1/plus-cohort-10",headers:{authorization:"37902dfd-5a6e-4faf-80b8-bf8cf2d76230","Content-Type":"application/json"}},p=function(e){return e.ok?e.json():Promise.reject("Ошибка: '".concat(e.status,"'"))},d=document.querySelector("#block").content,f=document.querySelector(".popup_value_image");function _(e){document.querySelector(".block__list").prepend(e)}function v(e,t){var n=d.querySelector(".list").cloneNode(!0),o=n.querySelector(".block__place-image"),c=n.querySelector(".block__trash"),a=n.querySelector(".block__place-likes-quantity"),u=n.querySelector(".block__place-like");return o.src=e.link,o.alt=e.name,n.querySelector(".block__place-name").textContent=e.name,function(e,t,n){t.owner._id!==n._id&&e.classList.add("block__trash_hidden")}(c,e,t),e.likes.length>0&&(a.textContent=e.likes.length),e.likes.some((function(e){return e._id===t._id}))&&u.classList.add("block__place-like_active"),n.setAttribute("data-id",e._id),u.addEventListener("click",(function(t){return function(e,t,n){var o=t._id;e.target.classList.contains("block__place-like_active")?function(e){return fetch("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:s.headers}).then((function(e){return p(e)}))}(o).then((function(t){e.target.classList.remove("block__place-like_active"),t.likes.length>0?n.textContent=t.likes.length:n.textContent=""})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:s.headers}).then((function(e){return p(e)}))}(o).then((function(t){n.textContent=t.likes.length,e.target.classList.add("block__place-like_active")})).catch((function(e){console.log(e)}))}(t,e,a)})),c.addEventListener("click",(function(e){return function(e){var t,n=e.target.closest(".list");(t=n.getAttribute("data-id"),fetch("".concat(s.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:s.headers}).then((function(e){p(e)}))).then((function(){n.remove()})).catch((function(e){console.log(e)}))}(e)})),o.addEventListener("click",(function(){return function(e){var t=f.querySelector(".popup__picture"),n=f.querySelector(".popup__description");t.src=e.link,t.alt=e.name,n.textContent=e.name,r(I),i(f,I)}(e)})),n}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var y,h=document.querySelector(".profile"),b=document.querySelector(".popup_value_profile"),S=document.querySelector(".profile__name"),k=document.querySelector(".profile__description"),q=b.querySelector(".popup__item_el_name"),L=b.querySelector(".popup__item_el_job"),E=b.querySelector(".popup__save-button"),g=document.querySelector(".popup_value_place"),C=g.querySelector(".popup__form_type_place"),x=b.querySelector(".popup__close-button"),A=h.querySelector(".profile__edit-button"),U=g.querySelector(".popup__close-button"),j=h.querySelector(".profile__add-button"),O=document.querySelector(".popup_value_image").querySelector(".popup__close-button"),w=document.querySelector(".popup_value_avatar"),P=h.querySelector(".profile__avatar-hover"),T=w.querySelector(".popup__close-button"),B=w.querySelector(".popup__form"),D=h.querySelector(".profile__avatar"),N=w.querySelector(".popup__save-button"),I={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__input-error_active"};function J(e,t,n){S.textContent=e,k.textContent=t,D.src=n}Promise.all([fetch("".concat(s.baseUrl,"/cards"),{headers:s.headers}).then((function(e){return p(e)})),fetch("".concat(s.baseUrl,"/users/me"),{headers:s.headers}).then((function(e){return p(e)}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];r.forEach((function(e){_(v(e,c)),J(c.name,c.about,c.avatar),y=c}))})).catch((function(e){console.log(e)})),A.addEventListener("click",(function(){q.value=S.textContent,L.value=k.textContent,r(I),i(b,I)})),x.addEventListener("click",(function(){l()})),b.addEventListener("submit",(function(e){var t;e.preventDefault(),E.textContent="Сохранение...",(t={name:q.value,about:L.value},fetch("".concat(s.baseUrl,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(e){return p(e)}))).then((function(e){J(e.name,e.about,e.avatar),l()})).catch((function(e){console.log(e)})).finally((function(){E.textContent="Сохранить"}))})),P.addEventListener("click",(function(){B.reset(),i(w,I)})),T.addEventListener("click",(function(){l()})),w.addEventListener("submit",(function(e){var t;e.preventDefault(),N.textContent="Сохрание...",(t=w.querySelector(".popup__item_el_avatar").value,fetch("".concat(s.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:t})}).then((function(e){return p(e)}))).then((function(e){D.src=e.avatar,B.reset(),l()})).catch((function(e){console.log(e)})).finally((function(){N.textContent="Сохранить"}))})),j.addEventListener("click",(function(){C.reset(),r(I),i(g,I)})),U.addEventListener("click",(function(){l()})),g.addEventListener("submit",(function(e){e.preventDefault();var t,n=g.querySelector(".popup__save-button"),o=g.querySelector(".popup__item_el_place"),r=g.querySelector(".popup__item_el_link");n.textContent="Добавление...",(t={name:o.value,link:r.value},fetch("".concat(s.baseUrl,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){return p(e)}))).then((function(e){_(v(e,y)),C.reset(),l()})).catch((function(e){console.log(e)})).finally((function(){n.textContent="Добавить"}))})),O.addEventListener("click",(function(){l()})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),c=e.querySelector(t.submitButtonSelector);o(r,c,t),r.forEach((function(a){a.addEventListener("input",(function(){o(r,c,t),n(e,a,t)}))}))}(t,e)}))}(I)})();