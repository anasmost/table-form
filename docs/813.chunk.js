(self.webpackChunknextgrowth_frontend=self.webpackChunknextgrowth_frontend||[]).push([[813],{1813:function(t,n,r){"use strict";r.r(n),r.d(n,{closeUserForm:function(){return d},showUserForm:function(){return f}}),r(1539),r(4747),r(2479),r(7941),r(7042),r(1038),r(8783),r(4916),r(7601),r(2526),r(1817),r(2165),r(6992),r(3948),r(1703);var e=r(8420),o=r(6088),a=r(4944);function i(t,n){if(t){if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var s=document.forms["user-form"],c=s.closest("dialog");s.addEventListener("submit",(function(){var t,n={},r=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw a}}}}(s.elements);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.id&&(n[a.id]=a.value)}}catch(t){r.e(t)}finally{r.f()}var u=(0,o.cn)(n);(0,e.SA)(u),s.reset()}));var l=c.querySelector("#status");function f(){c.classList.remove("hide"),c.showModal()}function d(){c.close(),c.classList.add("hide")}Object.values(o.iy).forEach((function(t,n){l[n]=new Option(t,t,0===n,0===n)})),l.classList.add((0,a.Z)(o.iy,l.value)),l.addEventListener("change",(function(){var t,n;(t=l.classList).remove.apply(t,function(t){if(Array.isArray(t))return u(t)}(n=Object.keys(o.iy))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||i(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l.classList.add((0,a.Z)(o.iy,l.value))})),c.addEventListener("click",(function(t){t.target===c&&d()}))},4699:function(t,n,r){var e=r(9781),o=r(1702),a=r(1956),i=r(5656),u=o(r(5296).f),s=o([].push),c=function(t){return function(n){for(var r,o=i(n),c=a(o),l=c.length,f=0,d=[];l>f;)r=c[f++],e&&!u(o,r)||s(d,t?[r,o[r]]:o[r]);return d}};t.exports={entries:c(!0),values:c(!1)}},2479:function(t,n,r){var e=r(2109),o=r(4699).values;e({target:"Object",stat:!0},{values:function(t){return o(t)}})}}]);