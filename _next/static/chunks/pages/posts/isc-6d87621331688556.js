(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{4124:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/isc",function(){return t(4718)}])},4718:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(1151);t(5675);var a=t(5795),s=t(885),o=t(252);function c(e){let n=Object.assign({hr:"hr",h2:"h2",p:"p",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{children:'title:      \'Industry Short Courses\'\r\ndesc:       \'E-learning material for TAFE and Higher-education\' //TODO: prevent this wrapping.\r\nthumbnail:  \'tba.svg\'\r\nrole:       \'Lead developer\'\r\ndate:       2020\r\ntags:       [\r\n"Adobe suite",\r\n"LESSCSS",\r\n"JavaScript",\r\n"jQuery",\r\n"HTML5",\r\n"XHTML",\r\n"Node.js",\r\n"Backbone.js",\r\n"Frontend",\r\n"Handlebars.js",\r\n"Adapt Learning Framework",\r\n"EPUB",\r\n"Instructional design"\r\n]'}),"\n","\n",(0,r.jsxs)(n.p,{children:["Engaging, interactive and ",(0,r.jsx)(n.a,{href:"https://educationalpublishing.com.au/book/programming-essentials/%22",children:"award winning"})," responsive eBooks."]}),"\n",(0,r.jsxs)(n.p,{children:["For this project, I developed interactive web-based learning material by heavily customizing the ",(0,r.jsx)(s.Z,{href:"https://www.adaptlearning.org/",children:"Adapt learning framework"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The learning material required a wide range of custom UX components, ranging from live-code execution, to complex dynamic animations. Designing these had me collaborating with our subject matter experts and instructional designers to ensure each component clearly demonstrated the learning material it was teaching."}),"\n",(0,r.jsx)(o.Z,{href:"https://www.didasko-online.com/Orana/facilities.php",target:"_blank",children:"Check out a sample course"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(n.p,{children:"The UX components were made using Backbone.js, Handlebars, and jQuery libraries for both mobile and desktop screens (with some components changing their behaviour entirely to suit the smaller device)."}),(0,r.jsx)(n.p,{children:'The greatest challenge for this project came after its completion, when it was requested by a client that support for the ePub (eBook) format be added. The ePub format required XHTML be used instead of HTML5, as well as having limited CSS and JavaScript support. I accomplished this task by adding a third, simplified "epub" view for each component, which node.js would substitute in whenever ePubs were built.'}),(0,r.jsx)(n.p,{children:"In addition to framework maintenance and content development, at times I also took on the role of Subject Matter Expert. Several of the programming units we published for Higher-education had my involvement as a co-writer and proofreader."})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},5795:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(4184),a=t.n(i),s=t(7294);function o(e){let{children:n,title:t="Further details"}=e,[i,o]=(0,s.useState)(!1),c=(0,s.useRef)();(0,s.useLayoutEffect)(()=>{let e=c.current;if(e.style.height="".concat(e.querySelector(".content").clientHeight,"px"),!i){e.style.height="";return}return addEventListener("transitionend",l),()=>{removeEventListener("transitionend",l)}},[i]);let l=()=>{let e=c.current;e.style.height="auto"};return(0,r.jsxs)("div",{ref:c,className:a()("\n                accordion w-full relative overflow-hidden \n                ",{"is-active":i}),children:[(0,r.jsxs)("button",{className:a()("button w-full postbtn mb-0",{"is-hidden":i}),onClick:e=>{o(!i)},children:[(0,r.jsx)("span",{className:"w-6 inline-block text-center mr-1",children:"+"}),t]}),(0,r.jsx)("div",{className:a()("content flex pt-6",{"is-hidden":!i}),children:(0,r.jsx)("div",{children:n})})]})}t(8514)},252:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);t(4184);var i=t(1664),a=t.n(i),s=t(6314);function o(e){let{children:n,href:t,rel:i,target:o}=e;return(0,r.jsx)(a(),{className:"demobtn",href:t,rel:i,target:o,children:(0,r.jsx)("button",{className:"postbtn",children:(0,r.jsxs)("span",{className:"align-middle",children:["_blank"==o?(0,r.jsx)("span",{className:"w-6 text-center inline-block mr-1",children:(0,r.jsx)(s.rpH,{className:"inline mt-[-0.1em]"})}):"",n||"ERROR"]})})})}},885:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);t(4184);var i=t(1664),a=t.n(i),s=t(6314);function o(e){let{children:n,href:t,rel:i,target:o}=e;return(0,r.jsx)(a(),{href:t,rel:i,target:o,children:(0,r.jsxs)("span",{children:[n||"ERROR","_blank"==o?(0,r.jsx)(s.rpH,{className:"inline"}):""]})})}},8514:function(){},1151:function(e,n,t){"use strict";t.d(n,{NF:function(){return a},Zo:function(){return c},ah:function(){return s},pC:function(){return i}});var r=t(7294);let i=r.createContext({});function a(e){return function(n){let t=s(n.components);return r.createElement(e,{...n,allComponents:t})}}function s(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let o={};function c({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:s(e),r.createElement(i.Provider,{value:a},n)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4124)}),_N_E=e.O()}]);