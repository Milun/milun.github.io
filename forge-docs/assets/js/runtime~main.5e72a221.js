(()=>{"use strict";var e,a,r,t,f,o={},c={};function n(e){var a=c[e];if(void 0!==a)return a.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=o,n.c=c,e=[],n.O=(a,r,t,f)=>{if(!r){var o=1/0;for(b=0;b<e.length;b++){r=e[b][0],t=e[b][1],f=e[b][2];for(var c=!0,d=0;d<r.length;d++)(!1&f||o>=f)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(c=!1,f<o&&(o=f));if(c){e.splice(b--,1);var i=t();void 0!==i&&(a=i)}}return a}f=f||0;for(var b=e.length;b>0&&e[b-1][2]>f;b--)e[b]=e[b-1];e[b]=[r,t,f]},n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a:a}),a},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var f=Object.create(null);n.r(f);var o={};a=a||[null,r({}),r([]),r(r)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((a=>o[a]=()=>e[a]));return o.default=()=>e,n.d(f,o),f},n.d=(e,a)=>{for(var r in a)n.o(a,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((a,r)=>(n.f[r](e,a),a)),[])),n.u=e=>"assets/js/"+({11:"7387641d",48:"a94703ab",61:"1f391b9e",91:"38f2acef",98:"a7bd4aaa",116:"0ceb49a3",134:"393be207",200:"33fb93bc",231:"fc1482d0",235:"a7456010",268:"840cfd2d",278:"5ae735ed",295:"ecd9a9cf",343:"fd6d2ae4",359:"5cce4dd8",401:"17896441",411:"0f9efbca",538:"2d77a81a",647:"5e95c892",732:"cff4fa4a",742:"aba21aa0",748:"5272279c",750:"066f2a39",830:"971a13ba",847:"4a14835f",888:"896558ea",910:"fb87d503",919:"ae65e701",976:"0e384e19"}[e]||e)+"."+{11:"1f6b1214",48:"f52f5889",61:"bdc80dfd",91:"9c0d6398",98:"4f0d87ac",116:"5e98df7d",134:"920de6de",200:"ec793898",231:"a1343cce",235:"9ea093ae",237:"dde3c8a4",268:"606274b0",278:"8c6d564c",295:"0d0c43bd",343:"b975f134",359:"81a4572a",375:"f27fc675",401:"8238ad42",411:"4179f3c7",538:"6256e38d",647:"63d35eef",732:"547ef59d",742:"77b48af2",748:"8b01ac5a",750:"51ca576d",830:"d236b563",847:"c6756e40",888:"b6d236ef",910:"54435e98",919:"caacfe73",976:"9e95b2a3"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},f="forge:",n.l=(e,a,r,o)=>{if(t[e])t[e].push(a);else{var c,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+r){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",f+r),c.src=e),t[e]=[a];var l=(a,r)=>{c.onerror=c.onload=null,clearTimeout(s);var f=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((e=>e(r))),a)return a(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/forge-docs/",n.gca=function(e){return e={17896441:"401","7387641d":"11",a94703ab:"48","1f391b9e":"61","38f2acef":"91",a7bd4aaa:"98","0ceb49a3":"116","393be207":"134","33fb93bc":"200",fc1482d0:"231",a7456010:"235","840cfd2d":"268","5ae735ed":"278",ecd9a9cf:"295",fd6d2ae4:"343","5cce4dd8":"359","0f9efbca":"411","2d77a81a":"538","5e95c892":"647",cff4fa4a:"732",aba21aa0:"742","5272279c":"748","066f2a39":"750","971a13ba":"830","4a14835f":"847","896558ea":"888",fb87d503:"910",ae65e701:"919","0e384e19":"976"}[e]||e,n.p+n.u(e)},(()=>{var e={354:0,869:0};n.f.j=(a,r)=>{var t=n.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(/^(354|869)$/.test(a))e[a]=0;else{var f=new Promise(((r,f)=>t=e[a]=[r,f]));r.push(t[2]=f);var o=n.p+n.u(a),c=new Error;n.l(o,(r=>{if(n.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var f=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;c.message="Loading chunk "+a+" failed.\n("+f+": "+o+")",c.name="ChunkLoadError",c.type=f,c.request=o,t[1](c)}}),"chunk-"+a,a)}},n.O.j=a=>0===e[a];var a=(a,r)=>{var t,f,o=r[0],c=r[1],d=r[2],i=0;if(o.some((a=>0!==e[a]))){for(t in c)n.o(c,t)&&(n.m[t]=c[t]);if(d)var b=d(n)}for(a&&a(r);i<o.length;i++)f=o[i],n.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return n.O(b)},r=self.webpackChunkforge=self.webpackChunkforge||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})()})();