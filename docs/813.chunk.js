"use strict";(self.webpackChunknextgrowth_frontend=self.webpackChunknextgrowth_frontend||[]).push([[813],{813:(t,e,r)=>{r.r(e),r.d(e,{closeUserForm:()=>d,showUserForm:()=>f});var n=r(420),o=r(88),a=r(944);function i(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=document.forms["user-form"],l=u.closest("dialog");u.addEventListener("submit",(function(){var t,e={},r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}(u.elements);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.id&&(e[a.id]=a.value)}}catch(t){r.e(t)}finally{r.f()}var s=(0,o.cn)(e);(0,n.SA)(s),u.reset()}));var c=l.querySelector("#status");function f(){l.classList.remove("hide"),l.showModal()}function d(){l.close(),l.classList.add("hide")}Object.values(o.iy).forEach((function(t,e){c[e]=new Option(t,t,0===e,0===e)})),c.classList.add((0,a.Z)(o.iy,c.value)),c.addEventListener("change",(function(){var t,e;(t=c.classList).remove.apply(t,function(t){if(Array.isArray(t))return s(t)}(e=Object.keys(o.iy))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c.classList.add((0,a.Z)(o.iy,c.value))})),l.addEventListener("click",(function(t){t.target===l&&d()}))}}]);