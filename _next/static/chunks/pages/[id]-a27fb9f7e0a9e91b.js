(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},5900:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(5736)}])},5795:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(4184),o=n.n(i),s=n(7294);function c(e){let{children:t,title:n="Further details"}=e,[i,c]=(0,s.useState)(!1),a=(0,s.useRef)();(0,s.useLayoutEffect)(()=>{let e=a.current;if(e.style.height="".concat(e.querySelector(".content").clientHeight,"px"),!i){e.style.height="";return}return addEventListener("transitionend",u),()=>{removeEventListener("transitionend",u)}},[i]);let u=()=>{let e=a.current;e.style.height="auto"};return(0,r.jsxs)("div",{ref:a,className:o()("\n                accordion w-full mt-6 relative overflow-hidden\n                ",{"is-active":i}),children:[(0,r.jsxs)("button",{className:o()("button w-full font-medium text-lg text-left",{"is-hidden":i}),onClick:e=>{c(!i)},children:["+ ",n]}),(0,r.jsx)("div",{className:o()("divider",{"is-active":i})}),(0,r.jsx)("div",{className:o()("content flex pt-6",{"is-hidden":!i}),children:(0,r.jsx)("div",{children:t})})]})}n(8514)},5736:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{__N_SSG:function(){return eb},default:function(){return ex}});var i,o,s,c={};n.r(c),n.d(c,{MDXContext:function(){return g.pC},MDXProvider:function(){return g.Zo},useMDXComponents:function(){return g.ah},withMDXComponents:function(){return g.NF}});var a=n(5893),u=n(4184),l=n.n(u),f=n(7294),d=n(1163),h=n(9008),v=n.n(h),p=n(2746),g=n(1151);function m({compiledSource:e,frontmatter:t,scope:n,components:r={},lazy:i}){let[o,s]=(0,f.useState)(!i||"undefined"==typeof window);(0,f.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,f.useMemo)(()=>{let r=Object.assign({opts:{...c,...p.jsxRuntime}},{frontmatter:t},n),i=Object.keys(r),o=Object.values(r),s=Reflect.construct(Function,i.concat(`${e}`));return s.apply(s,o).default},[n,e]);if(!o)return f.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=f.createElement(g.Zo,{components:r},f.createElement(a,null));return i?f.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),n(5494);var b=[],x="ResizeObserver loop completed with undelivered notifications.",w=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:x}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=x),window.dispatchEvent(e)};(i=o||(o={})).BORDER_BOX="border-box",i.CONTENT_BOX="content-box",i.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var y=function(e){return Object.freeze(e)},E=function(e,t){this.inlineSize=e,this.blockSize=t,y(this)},S=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,y(this)}return e.prototype.toJSON=function(){return{x:this.x,y:this.y,top:this.top,right:this.right,bottom:this.bottom,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),T=function(e){return e instanceof SVGElement&&"getBBox"in e},N=function(e){if(T(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e.offsetWidth,o=e.offsetHeight;return!(i||o||e.getClientRects().length)},z=function(e){if(e instanceof Element)return!0;var t,n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},j=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},C="undefined"!=typeof window?window:{},R=new WeakMap,O=/auto|scroll/,k=/^tb|vertical/,B=/msie|trident/i.test(C.navigator&&C.navigator.userAgent),_=function(e){return parseFloat(e||"0")},M=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new E((n?t:e)||0,(n?e:t)||0)},D=y({devicePixelContentBoxSize:M(),borderBoxSize:M(),contentBoxSize:M(),contentRect:new S(0,0,0,0)}),I=function(e,t){if(void 0===t&&(t=!1),R.has(e)&&!t)return R.get(e);if(N(e))return R.set(e,D),D;var n=getComputedStyle(e),r=T(e)&&e.ownerSVGElement&&e.getBBox(),i=!B&&"border-box"===n.boxSizing,o=k.test(n.writingMode||""),s=!r&&O.test(n.overflowY||""),c=!r&&O.test(n.overflowX||""),a=r?0:_(n.paddingTop),u=r?0:_(n.paddingRight),l=r?0:_(n.paddingBottom),f=r?0:_(n.paddingLeft),d=r?0:_(n.borderTopWidth),h=r?0:_(n.borderRightWidth),v=r?0:_(n.borderBottomWidth),p=r?0:_(n.borderLeftWidth),g=f+u,m=a+l,b=p+h,x=d+v,w=c?e.offsetHeight-x-e.clientHeight:0,E=s?e.offsetWidth-b-e.clientWidth:0,z=r?r.width:_(n.width)-(i?g+b:0)-E,j=r?r.height:_(n.height)-(i?m+x:0)-w,C=z+g+E+b,I=j+m+w+x,L=y({devicePixelContentBoxSize:M(Math.round(z*devicePixelRatio),Math.round(j*devicePixelRatio),o),borderBoxSize:M(C,I,o),contentBoxSize:M(z,j,o),contentRect:new S(f,a,z,j)});return R.set(e,L),L},L=function(e,t,n){var r=I(e,n),i=r.borderBoxSize,s=r.contentBoxSize,c=r.devicePixelContentBoxSize;switch(t){case o.DEVICE_PIXEL_CONTENT_BOX:return c;case o.BORDER_BOX:return i;default:return s}},A=function(e){var t=I(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=y([t.borderBoxSize]),this.contentBoxSize=y([t.contentBoxSize]),this.devicePixelContentBoxSize=y([t.devicePixelContentBoxSize])},P=function(e){if(N(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},X=function(){var e=1/0,t=[];b.forEach(function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach(function(t){var n=new A(t.target),i=P(t.target);r.push(n),t.lastReportedSize=L(t.target,t.observedBox),i<e&&(e=i)}),t.push(function(){n.callback.call(n.observer,r,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var n=0;n<t.length;n++)(0,t[n])();return e},F=function(e){b.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(n){n.isActive()&&(P(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))})})},W=function(){var e=0;for(F(0);b.some(function(e){return e.activeTargets.length>0});)F(e=X());return b.some(function(e){return e.skippedTargets.length>0})&&w(),e>0},q=[],V=function(e){if(!s){var t=0,n=document.createTextNode("");new MutationObserver(function(){return q.splice(0).forEach(function(e){return e()})}).observe(n,{characterData:!0}),s=function(){n.textContent="".concat(t?t--:t++)}}q.push(e),s()},H=function(e){V(function(){requestAnimationFrame(e)})},Z=0,G={attributes:!0,characterData:!0,childList:!0,subtree:!0},U=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Y=function(e){return void 0===e&&(e=0),Date.now()+e},J=!1,$=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!J){J=!0;var n=Y(e);H(function(){var r=!1;try{r=W()}finally{if(J=!1,e=n-Y(),!Z)return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,G)};document.body?t():C.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),U.forEach(function(t){return C.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),U.forEach(function(t){return C.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),K=function(e){!Z&&e>0&&$.start(),(Z+=e)||$.stop()},Q=function(){function e(e,t){this.target=e,this.observedBox=t||o.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=L(this.target,this.observedBox,!0);return T(e=this.target)||j(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ee=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},et=new WeakMap,en=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return -1},er=function(){function e(){}return e.connect=function(e,t){var n=new ee(e,t);et.set(e,n)},e.observe=function(e,t,n){var r=et.get(e),i=0===r.observationTargets.length;0>en(r.observationTargets,t)&&(i&&b.push(r),r.observationTargets.push(new Q(t,n&&n.box)),K(1),$.schedule())},e.unobserve=function(e,t){var n=et.get(e),r=en(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&b.splice(b.indexOf(n),1),n.observationTargets.splice(r,1),K(-1))},e.disconnect=function(e){var t=this,n=et.get(e);n.observationTargets.slice().forEach(function(n){return t.unobserve(e,n.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),ei=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");er.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!z(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");er.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!z(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");er.unobserve(this,e)},e.prototype.disconnect=function(){er.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let eo=f["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var es=e=>{let t=f.useRef(e);return f.useEffect(()=>{t.current=e}),t};let ec="undefined"!=typeof window&&"ResizeObserver"in window?window.ResizeObserver:ei;function ea(){}let eu=()=>r||(r=function(){let e=!1,t=[],n=new Map,r=new ec((r,i)=>{t=t.concat(r),e||window.requestAnimationFrame(function(){let r=new Set;for(let e=0;e<t.length;e++){if(r.has(t[e].target))continue;r.add(t[e].target);let o=n.get(t[e].target);null==o||o.forEach(n=>n(t[e],i))}t=[],e=!1}),e=!0});return{observer:r,subscribe(e,t){var i;r.observe(e);let o=null!==(i=n.get(e))&&void 0!==i?i:[];o.push(t),n.set(e,o)},unsubscribe(e,t){var i;let o=null!==(i=n.get(e))&&void 0!==i?i:[];if(1===o.length){r.unobserve(e),n.delete(e);return}let s=o.indexOf(t);-1!==s&&o.splice(s,1),n.set(e,o)}}}());var el=function(e,t){let n=eu(),r=es(t);return eo(()=>{let t=!1,i=e&&"current"in e?e.current:e;if(!i)return ea;function o(e,n){t||r.current(e,n)}return n.subscribe(i,o),()=>{t=!0,n.unsubscribe(i,o)}},[e,n,r]),n.observer},ef=n(5675),ed=n.n(ef);function eh(e){let{paths:t}=e,n=t.length,[r,i]=(0,f.useState)(450),o=(0,f.useRef)(),[s,c]=(0,f.useState)(0);el(o,e=>{let t=e.contentRect.width;i(t/2.5)});let u=e=>{c(s-e)},l=e=>{let t=s-e,i=4*Math.floor(t/n),o=0;switch((t%n+n)%n){case 0:i+=0,o=0;break;case 1:i+=1,o=1;break;case n-1:i+=3,o=-1;break;default:i+=2}let c="translate3d(0rem, 0rem, ".concat(r,"px)");return{opacity:1,transform:"rotateY(".concat(90*i,"deg) ").concat(c," rotateY(").concat(-(90*i)+22.5*o,"deg)")}};return(0,a.jsxs)("div",{ref:o,style:{perspective:"".concat(1e3,"px")},className:"   slider   relative       w-full      ",children:[(0,a.jsx)("button",{className:"   controls-left    block h-full w-1/2 absolute top-0 left-0   ",onClick:()=>u(-1)}),(0,a.jsx)("button",{className:"   controls-right   block h-full w-1/2 absolute top-0 right-0   ",onClick:()=>u(1)}),(0,a.jsx)("div",{style:{transformStyle:"preserve-3d",transform:"translateZ(-".concat(r,"px)")},className:"   relative    flex w-3/5   m-auto   ",children:t.map((e,t)=>(0,a.jsx)("div",{style:{...l(t),marginLeft:t?"-100%":"0%"},className:"item min-w-full shadow-md",children:(0,a.jsx)(ed(),{src:e,width:0,height:0,sizes:"100vw",style:{width:"100%",height:"100%"},className:"object-cover",alt:"SliderImg"})},t))})]})}n(809);var ev=n(5795),ep=n(1664),eg=n.n(ep);function em(e){let{data:t,content:n}=e,r=e=>"/posts/".concat(t.id,"/")+e,i={Image:ed(),Accordion:ev.Z,Link:eg()};return(0,a.jsxs)("div",{style:{gridTemplateAreas:'\n                    "h h"\n                    "'.concat(t.carousel?"c c":"m m",'"\n                    "m m"\n                    "').concat(t.tags?"t t":"m m",'"\n                ')},className:"   grid gap-6 grid-rows-[1fr_auto] grid-cols-[auto_1fr]   min-h-[40rem] w-full window   ",children:[(0,a.jsx)(v(),{children:(0,a.jsx)("title",{children:t.title})}),(0,a.jsxs)("header",{style:{gridArea:"h"},className:"window -m-6 mb-0 flex justify-between items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl mb-2 font-light",children:t.title}),(0,a.jsx)("h2",{className:"text-xl font-light",children:t.desc})]}),(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-6xl font-extralight",children:t.date})})]}),(0,a.jsx)("article",{style:{gridArea:"m"},className:"",children:(0,a.jsx)(m,{...n,components:i,scope:{path:r}})}),t.carousel&&(0,a.jsx)("section",{style:{gridArea:"c"},className:"",children:(0,a.jsx)(eh,{paths:t.carousel.map((e,t)=>r("carousel/"+e))})}),t.tags&&(0,a.jsx)("section",{style:{gridArea:"t"},className:"",children:(0,a.jsx)("ul",{className:"flex flex-wrap gap-3 font text-sm justify-center",children:t.tags.map((e,t)=>(0,a.jsx)("li",{children:e},t))})})]})}var eb=!0;function ex(e){let{post:t}=e,n=(0,d.useRouter)(),r=(0,f.useRef)(t),[i,o]=(0,f.useState)(!1);(0,f.useLayoutEffect)(()=>{o(!0);let e=()=>{setTimeout(()=>{r.current=t,o(!1)},280)};return n.events.on("routeChangeComplete",e),()=>{n.events.off("routeChangeComplete",e)}},[t.data.id,n.events]);let s=i?r.current:t;return(0,a.jsx)("main",{className:l()({"animate-slideUpEnter":!i,"animate-slideUpLeave":i},"w-full h-full"),children:(0,a.jsx)(em,{...s})})}},8514:function(){},5494:function(){},809:function(){},9008:function(e,t,n){e.exports=n(3902)},1163:function(e,t,n){e.exports=n(1247)},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)},1151:function(e,t,n){"use strict";n.d(t,{NF:function(){return o},Zo:function(){return a},ah:function(){return s},pC:function(){return i}});var r=n(7294);let i=r.createContext({});function o(e){return function(t){let n=s(t.components);return r.createElement(e,{...t,allComponents:n})}}function s(e){let t=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let c={};function a({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:s(e),r.createElement(i.Provider,{value:o},t)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5900)}),_N_E=e.O()}]);