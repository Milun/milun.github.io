(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},7013:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/scorm-cms",function(){return n(144)}])},144:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(1151);n(5675);var o=n(5795),s=n(1664),c=n.n(s);function u(e){let t=Object.assign({hr:"hr",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{children:"title:      'eBook CMS'\r\ndesc:       'Custom content management system for building eBooks'\r\nthumbnail:  'tba.svg'\r\nrole:       'Developer'\r\ndate:       2020\r\ntags:       [\r\n\"Node.js\",\r\n\"Grunt.js\",\r\n\"JavaScript\",\r\n\"BatchScript\"\r\n]"}),"\n","\n",(0,r.jsxs)(t.p,{children:["During production of the ",(0,r.jsx)(c(),{href:"/isc",children:"Industry Short Courses"})," project, my team received requests from several clients to include custom permutations to the eBooks (for example, the inclusion/exclusion of several paragraphs). This required us to maintain multiple versions of each eBook, which would increase overhead."]}),"\n",(0,r.jsx)(t.p,{children:"To resolve this, I developed a content management system using Node.js & Grunt.js that would be able to apply these permutations, as well as automating a majority of our other build processes. With the ability to update, modify, and compile eBooks, this system ended up streamlining content management and increased efficiency for the entire organization."}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(t.p,{children:"In order to define permutations in our eBooks, I combined BEM naming conventions with JSON. A developer would define client-specific permutations within the same JSON file by using 'modifiers':"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\r\n    "body":             "Default text",\r\n    "body--client1":    "Client1\'s body text",\r\n    "body--client2":    ""\r\n}\n'})}),(0,r.jsx)(t.p,{children:"At which point, at build time, the CMS would substitute one value with another depending on the modifiers it was provided."})]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},5795:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(4184),o=n.n(i),s=n(7294);function c(e){let{children:t,title:n="Further details"}=e,[i,c]=(0,s.useState)(!1),u=(0,s.useRef)();(0,s.useLayoutEffect)(()=>{let e=u.current;if(e.style.height="".concat(e.querySelector(".content").clientHeight,"px"),!i){e.style.height="";return}return addEventListener("transitionend",a),()=>{removeEventListener("transitionend",a)}},[i]);let a=()=>{let e=u.current;e.style.height="auto"};return(0,r.jsxs)("div",{ref:u,className:o()("\n                accordion w-full mt-6 relative overflow-hidden\n                ",{"is-active":i}),children:[(0,r.jsxs)("button",{className:o()("button w-full font-medium text-lg text-left",{"is-hidden":i}),onClick:e=>{c(!i)},children:["+ ",n]}),(0,r.jsx)("div",{className:o()("divider",{"is-active":i})}),(0,r.jsx)("div",{className:o()("content flex pt-6",{"is-hidden":!i}),children:(0,r.jsx)("div",{children:t})})]})}n(8514)},8514:function(){},1151:function(e,t,n){"use strict";n.d(t,{NF:function(){return o},Zo:function(){return u},ah:function(){return s},pC:function(){return i}});var r=n(7294);let i=r.createContext({});function o(e){return function(t){let n=s(t.components);return r.createElement(e,{...t,allComponents:n})}}function s(e){let t=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let c={};function u({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:s(e),r.createElement(i.Provider,{value:o},t)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7013)}),_N_E=e.O()}]);