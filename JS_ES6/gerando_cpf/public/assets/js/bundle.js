(()=>{"use strict";var n={122:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n    --primary-color: #01819e;\n    --primary-color-darker: #004857;\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.3s all;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nbutton {\n    margin: 0 20px;\n}\n\nbutton,\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 10px 15px;\n    cursor: pointer;\n    transition: 0.3s all;\n    border-radius: 500px;\n}\n\nbutton:hover,\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\nh1 {\n    color: var(--primary-color);\n}\n\n.result {\n    color: var(--primary-color-darker);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;IACI,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;;IAEI,uCAAuC;AAC3C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kCAAkC;AACtC",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n    --primary-color: #01819e;\n    --primary-color-darker: #004857;\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.3s all;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nbutton {\n    margin: 0 20px;\n}\n\nbutton,\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 10px 15px;\n    cursor: pointer;\n    transition: 0.3s all;\n    border-radius: 500px;\n}\n\nbutton:hover,\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\nh1 {\n    color: var(--primary-color);\n}\n\n.result {\n    color: var(--primary-color-darker);\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),r.push(u))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){o=!0,a=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(u," */"),s=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(s).concat([l]).join("\n")}return[a].join("\n")}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function i(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],u=r.base?c[0]+r.base:c[0],l=e[u]||0,s="".concat(u," ").concat(l);e[u]=l+1;var A=i(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==A?(a[A].references++,a[A].updater(f)):a.push({identifier:s,updater:m(f,r),references:1}),t.push(s)}return t}function u(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var l,s=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function A(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=s(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function f(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,d=0;function m(n,r){var e,t,o;if(r.singleton){var a=d++;e=p||(p=u(r)),t=A.bind(null,e,a,!1),o=A.bind(null,e,a,!0)}else e=u(r),t=f.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=i(e[t]);a[o].references--}for(var u=c(n,r),l=0;l<e.length;l++){var s=i(e[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=u}}}}},r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var r=function(){function r(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r)}var e,t;return e=r,t=[{key:"validate",value:function(n){var e=n.replace(/\D+/g,"");if(void 0===e)return!1;if(11!==e.length)return!1;if(r.isSequence(e))return!1;var t=e.slice(0,-2),o=r.digit(t);return t+o+r.digit(t+o)===e}},{key:"digit",value:function(n){var r=n.split(""),e=r.length+1,t=11-r.reduce((function(n,r){return n+=+r*e,e--,n}),0)%11;return t>9?"0":String(t)}},{key:"isSequence",value:function(n){return n[0].repeat(n.length)===n}}],null&&n(e.prototype,null),t&&n(e,t),r}();function t(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var o=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,o;return e=n,o=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.ceil(Math.random()*(r-n)+n))}},{key:"formatCPF",value:function(n){return"".concat(n.slice(0,3),".").concat(n.slice(3,6),".").concat(n.slice(6,9),"-").concat(n.slice(9,11))}},{key:"newCPF",value:function(){var e=n.rand(),t=r.digit(e),o=r.digit(e+t);return n.formatCPF(e+t+o)}}],null&&t(e.prototype,null),o&&t(e,o),n}(),a=e(379),i=e.n(a),c=e(122);i()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,document.querySelector(".gerar-cpf").addEventListener("click",(function(){var n,r;n=document.querySelector(".result"),r=o.newCPF(),n.innerHTML=r}))})()})();
//# sourceMappingURL=bundle.js.map