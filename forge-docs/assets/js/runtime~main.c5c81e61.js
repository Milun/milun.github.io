(()=>{"use strict";var e,a,r,t,o,f={},n={};function c(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=f,c.c=n,e=[],c.O=(a,r,t,o)=>{if(!r){var f=1/0;for(u=0;u<e.length;u++){r=e[u][0],t=e[u][1],o=e[u][2];for(var n=!0,d=0;d<r.length;d++)(!1&o||f>=o)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(n=!1,o<f&&(f=o));if(n){e.splice(u--,1);var i=t();void 0!==i&&(a=i)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,t,o]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var f={};a=a||[null,r({}),r([]),r(r)];for(var n=2&t&&e;"object"==typeof n&&!~a.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,c.d(o,f),o},c.d=(e,a)=>{for(var r in a)c.o(a,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,r)=>(c.f[r](e,a),a)),[])),c.u=e=>"assets/js/"+({11:"7387641d",48:"a94703ab",61:"1f391b9e",91:"38f2acef",98:"a7bd4aaa",116:"0ceb49a3",134:"393be207",200:"33fb93bc",235:"a7456010",268:"840cfd2d",278:"5ae735ed",295:"ecd9a9cf",343:"fd6d2ae4",401:"17896441",538:"2d77a81a",647:"5e95c892",732:"cff4fa4a",742:"aba21aa0",748:"5272279c",750:"066f2a39",830:"971a13ba",847:"4a14835f",910:"fb87d503",919:"ae65e701",976:"0e384e19"}[e]||e)+"."+{11:"1f6b1214",48:"f52f5889",61:"1b2eb6c5",91:"88af86e7",98:"4f0d87ac",116:"5e98df7d",134:"920de6de",200:"9be02841",235:"9ea093ae",237:"dde3c8a4",268:"93207274",278:"babeb1c3",295:"d4bee8b3",343:"48917a38",401:"4b52cc17",538:"b8b534f7",546:"d9c2fbd8",647:"63d35eef",732:"547ef59d",742:"77b48af2",748:"17ee5ffb",750:"01bd0c16",830:"d236b563",847:"374502e1",910:"3a39b691",919:"c6d069c0",976:"eb1257e7"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},o="forge:",c.l=(e,a,r,f)=>{if(t[e])t[e].push(a);else{var n,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){n=l;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",o+r),n.src=e),t[e]=[a];var b=(a,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),a)return a(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),d&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/forge-docs/",c.gca=function(e){return e={17896441:"401","7387641d":"11",a94703ab:"48","1f391b9e":"61","38f2acef":"91",a7bd4aaa:"98","0ceb49a3":"116","393be207":"134","33fb93bc":"200",a7456010:"235","840cfd2d":"268","5ae735ed":"278",ecd9a9cf:"295",fd6d2ae4:"343","2d77a81a":"538","5e95c892":"647",cff4fa4a:"732",aba21aa0:"742","5272279c":"748","066f2a39":"750","971a13ba":"830","4a14835f":"847",fb87d503:"910",ae65e701:"919","0e384e19":"976"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(a,r)=>{var t=c.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(/^(354|869)$/.test(a))e[a]=0;else{var o=new Promise(((r,o)=>t=e[a]=[r,o]));r.push(t[2]=o);var f=c.p+c.u(a),n=new Error;c.l(f,(r=>{if(c.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+a+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,t[1](n)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,r)=>{var t,o,f=r[0],n=r[1],d=r[2],i=0;if(f.some((a=>0!==e[a]))){for(t in n)c.o(n,t)&&(c.m[t]=n[t]);if(d)var u=d(c)}for(a&&a(r);i<f.length;i++)o=f[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},r=self.webpackChunkforge=self.webpackChunkforge||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})()})();