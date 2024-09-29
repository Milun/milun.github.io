"use strict";(self.webpackChunkforge=self.webpackChunkforge||[]).push([[991],{7227:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=s(4848),n=s(8453);const i={sidebar_position:5},a="Color-changing SVGs",r={id:"advanced/svg",title:"Color-changing SVGs",description:"Forge's appearance is very vector-styled; featuring many lines and geometric shapes. As such, you will likely find yourself using flat colored SVGs as decorative images, or as clickable image buttons in templates like the Hotgraphic.",source:"@site/docs/advanced/svg.md",sourceDirName:"advanced",slug:"/advanced/svg",permalink:"/forge-docs/advanced/svg",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/forge-docs/advanced/custom"},next:{title:"Debug tools",permalink:"/forge-docs/debug"}},l={},c=[{value:"How to make a color-changing SVG",id:"how-to-make-a-color-changing-svg",level:2},{value:"Step 1 - Find your SVG",id:"step-1---find-your-svg",level:3},{value:"Step 2 - Open the SVG in Illustrator, and set it to <u>RGB</u> mode",id:"step-2---open-the-svg-in-illustrator-and-set-it-to-rgb-mode",level:3},{value:"Step 3 - Decide which parts of the image you want to change colors",id:"step-3---decide-which-parts-of-the-image-you-want-to-change-colors",level:3},{value:"Step 4 - Recolor those parts to <u>shades of magenta</u>",id:"step-4---recolor-those-parts-to-shades-of-magenta",level:3},{value:"Step 5 - Save your SVG",id:"step-5---save-your-svg",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"&quot;My SVG is still showing up with magenta colors when I view it&quot;",id:"my-svg-is-still-showing-up-with-magenta-colors-when-i-view-it",level:4},{value:"&quot;It&#39;s still showing magenta&quot;",id:"its-still-showing-magenta",level:4},{value:"&quot;What if I want to use magenta in my image without it changing colors?&quot;",id:"what-if-i-want-to-use-magenta-in-my-image-without-it-changing-colors",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"color-changing-svgs",children:"Color-changing SVGs"}),"\n",(0,o.jsxs)(t.p,{children:["Forge's appearance is very vector-styled; featuring many lines and geometric shapes. As such, you will likely find yourself using ",(0,o.jsx)(t.strong,{children:"flat colored"})," SVGs as decorative images, or as clickable image buttons in templates like the ",(0,o.jsx)(t.a,{href:"/forge-docs/templates/components/hotgraphicSmall",children:"Hotgraphic"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In such cases, you can implement a ",(0,o.jsx)(t.em,{children:"color-change"})," on ",(0,o.jsx)(t.em,{children:"state-change"})," to the SVG. For example:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"SVG 1",src:s(1493).A+"",width:"1157",height:"628"})}),"\n",(0,o.jsxs)(t.p,{children:["The above component has ",(0,o.jsx)(t.em,{children:"parts"})," of the SVG go from Forge's default ",(0,o.jsx)(t.em,{children:"red color"})," (which is used to indicate incomplete interactions), to its default ",(0,o.jsx)(t.em,{children:"green color"})," (which is used to indicate a complete interaction)."]}),"\n",(0,o.jsxs)(t.p,{children:["To use this feature in your content, you only need to create ",(0,o.jsx)(t.strong,{children:"one SVG"})," in a very ",(0,o.jsx)(t.strong,{children:"specific way"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-make-a-color-changing-svg",children:"How to make a color-changing SVG"}),"\n",(0,o.jsx)(t.h3,{id:"step-1---find-your-svg",children:"Step 1 - Find your SVG"}),"\n",(0,o.jsxs)(t.p,{children:["Any SVG will do, but try to avoid overly complex ones. Complex SVGs will cause your site to lag. If you absolutely must use a complex SVG, convert it to two PNGs (one incomplete state, one complete state), and then use the ",(0,o.jsx)(t.code,{children:'"scrVisited"'})," property instead (see the individual templates for more information)."]}),"\n",(0,o.jsxs)(t.h3,{id:"step-2---open-the-svg-in-illustrator-and-set-it-to-rgb-mode",children:["Step 2 - Open the SVG in Illustrator, and set it to ",(0,o.jsx)("u",{children:"RGB"})," mode"]}),"\n",(0,o.jsxs)(t.p,{children:["Do not skip this step! Go to ",(0,o.jsx)(t.code,{children:"File > Document Color Mode > RGB Color"})," in Illustrator."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"SVG 2",src:s(9070).A+"",width:"1077",height:"782"})}),"\n",(0,o.jsx)(t.h3,{id:"step-3---decide-which-parts-of-the-image-you-want-to-change-colors",children:"Step 3 - Decide which parts of the image you want to change colors"}),"\n",(0,o.jsx)(t.p,{children:"This can be anything as long as it looks good. In my example, I'm going to make his beard color-changing."}),"\n",(0,o.jsxs)(t.h3,{id:"step-4---recolor-those-parts-to-shades-of-magenta",children:["Step 4 - Recolor those parts to ",(0,o.jsx)("u",{children:"shades of magenta"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"SVG 3",src:s(2711).A+"",width:"464",height:"477"})}),"\n",(0,o.jsxs)(t.p,{children:['A "shade of magenta" is any color that has a hex code following this pattern: ',(0,o.jsx)(t.code,{children:"#XXYYXX"}),". In essence, any color which has the ",(0,o.jsx)(t.em,{children:"same"})," red & blue value, that is also ",(0,o.jsx)(t.em,{children:"larger"}),' than its green value, is considered "magenta" by Forge.']}),"\n",(0,o.jsxs)(t.p,{children:["If Forge detects these colors in an SVG, it will automatically map them to the corresponding shade of red & green that's used within Forge. Here's just ",(0,o.jsx)(t.em,{children:"some"})," examples of what magentas map to what shades:"]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{width:"10rem"},children:"Magenta"}),(0,o.jsx)("th",{style:{width:"10rem"},children:"Red"}),(0,o.jsx)("th",{style:{width:"10rem"},children:"Green"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{background:"#ffddff",fontFamily:"monospace"},children:"#ffddff"}),(0,o.jsx)("td",{style:{background:"#f7dcdb"}}),(0,o.jsx)("td",{style:{background:"#e0f2f2"}})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{background:"#ff66ff",fontFamily:"monospace"},children:"#ff66ff"}),(0,o.jsx)("td",{style:{background:"#dc6766"}}),(0,o.jsx)("td",{style:{background:"#7bc6c6"}})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{background:"#ff00ff",fontFamily:"monospace"},children:"#ff00ff"}),(0,o.jsx)("td",{style:{background:"#c32026"}}),(0,o.jsx)("td",{style:{background:"#1da0a0"}})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{style:{background:"#663366",color:"white",fontFamily:"monospace"},children:"#663366"}),(0,o.jsx)("td",{style:{background:"#5b3434"}}),(0,o.jsx)("td",{style:{background:"#3b5353"}})]})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"#ff00ff"}),' is the hex code for "true" magenta, and maps to the default shade of Forge red and Forge green when used.']})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["When using Illustrator's color picked to choose a magenta, type in ",(0,o.jsx)(t.code,{children:"#ff00ff"})," into the hex entry field, then click on ",(0,o.jsx)(t.code,{children:"Only Web Colors"}),". Every major chunk of color you see presented here is a valid shade of magenta."]})}),"\n",(0,o.jsx)(t.h3,{id:"step-5---save-your-svg",children:"Step 5 - Save your SVG"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"SVG 3",src:s(3096).A+"",width:"432",height:"203"})}),"\n",(0,o.jsx)(t.p,{children:"That's all that needs to be done. Forge will automatically detect the magenta colors if you followed these steps correctly."}),"\n",(0,o.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(t.h4,{id:"my-svg-is-still-showing-up-with-magenta-colors-when-i-view-it",children:'"My SVG is still showing up with magenta colors when I view it"'}),"\n",(0,o.jsxs)(t.p,{children:["Check that your Illustrator is in ",(0,o.jsx)(t.strong,{children:"RGB"})," mode. If it's not, switch to it, then set your colors again (in CYMK mode, it will convert your colors to different hex codes after you save them; which is why you need to switch modes)."]}),"\n",(0,o.jsx)(t.h4,{id:"its-still-showing-magenta",children:'"It\'s still showing magenta"'}),"\n",(0,o.jsxs)(t.p,{children:["If all else fails, try rebooting ",(0,o.jsx)(t.code,{children:"grunt dev"})," (it may have missed a trigger on your save)."]}),"\n",(0,o.jsx)(t.h4,{id:"what-if-i-want-to-use-magenta-in-my-image-without-it-changing-colors",children:'"What if I want to use magenta in my image without it changing colors?"'}),"\n",(0,o.jsx)(t.p,{children:"Magenta is generally seen as a gaudy and unprofessional color to use in most cases. However, if you absolutely must use it, simply make sure that the colors you use have mismatching R & B colors. Even a single digit off will disable the color-changing feature."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1493:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/forge-svg-1-6dbccdbe8ff552c895be91ab805c6ecd.png"},9070:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/forge-svg-2-d819076b82f0e00a5cd01b0c14ba8d98.png"},2711:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/forge-svg-3-d2f0b014ac63d8ce30a2512fc7ac1615.png"},3096:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/forge-svg-4-9abbb6285c199b0868d78768fd706ebc.png"},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var o=s(6540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);