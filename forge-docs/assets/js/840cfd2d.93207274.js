"use strict";(self.webpackChunkforge=self.webpackChunkforge||[]).push([[268],{335:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(4848),t=o(8453);const r={sidebar_position:2},i="Course structure",c={id:"overview/forge/course",title:"Course structure",description:"When developing a course using Forge, you will be working from within the src/course/en/content folder, often referred to as just the course folder for short. Here is an example of the course folder of a simple 3-block Forge unit:",source:"@site/docs/overview/forge/course.md",sourceDirName:"overview/forge",slug:"/overview/forge/course",permalink:"/forge-docs/overview/forge/course",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JSYNT",permalink:"/forge-docs/overview/forge/jsynt"},next:{title:"Templates",permalink:"/forge-docs/templates/"}},l={},d=[{value:"course.jsynt",id:"coursejsynt",level:3},{value:"contentObjects.jsynt",id:"contentobjectsjsynt",level:3},{value:"articles.jsynt",id:"articlesjsynt",level:3},{value:"blocks.jsynt and the <em>b-X</em> folders",id:"blocksjsynt-and-the-b-x-folders",level:3},{value:"components.jsynt",id:"componentsjsynt",level:3},{value:"<em>b-X</em>/<em>assets</em>",id:"b-xassets",level:3},{value:"Modularity",id:"modularity",level:2}];function a(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"course-structure",children:"Course structure"}),"\n",(0,n.jsxs)(s.p,{children:["When developing a course using Forge, you will be working from within the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"src/course/en/content"})})," folder, often referred to as just the ",(0,n.jsx)(s.em,{children:"course folder"})," for short. Here is an example of the ",(0,n.jsx)(s.em,{children:"course folder"})," of a simple 3-block Forge unit:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Course 1",src:o(4684).A+"",width:"653",height:"557"})}),"\n",(0,n.jsx)(s.h3,{id:"coursejsynt",children:"course.jsynt"}),"\n",(0,n.jsxs)(s.p,{children:["This file contains the global settings for your ",(0,n.jsx)(s.em,{children:"entire"})," course, such as:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The course's title"}),"\n",(0,n.jsx)(s.li,{children:"Course resource links (which we may/may not keep)"}),"\n",(0,n.jsx)(s.li,{children:"Glossary terms (if you want them implemented)"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"It also contains the default terminology used across your components; for example, the default title to display for a LearningActivity's feedback message."}),"\n",(0,n.jsx)(s.h3,{id:"contentobjectsjsynt",children:"contentObjects.jsynt"}),"\n",(0,n.jsxs)(s.p,{children:["This defines the course's ",(0,n.jsx)(s.em,{children:"pages"}),".\r\nTODO: More information here depending on if you want to have multi-page or single-page courses (currently assuming you want single-page)."]}),"\n",(0,n.jsx)(s.h3,{id:"articlesjsynt",children:"articles.jsynt"}),"\n",(0,n.jsxs)(s.p,{children:["An ",(0,n.jsx)(s.code,{children:"article"}),' is a "section" of a page.....\r\nTODO: We\'ve never really used these in the past. Up to you if you want them.']}),"\n",(0,n.jsxs)(s.h3,{id:"blocksjsynt-and-the-b-x-folders",children:["blocks.jsynt and the ",(0,n.jsx)(s.em,{children:"b-X"})," folders"]}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.code,{children:"block"})," refers to a single screen of content. Think of it like a chapter of a book. Each block contains one or more ",(0,n.jsx)(s.code,{children:"components"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Blocks follow the naming convention of ",(0,n.jsx)(s.code,{children:"b-X"}),". If you look at the snapshot above, you'll see the folders ",(0,n.jsx)(s.code,{children:"b-1"}),", ",(0,n.jsx)(s.code,{children:"b-2"}),", and ",(0,n.jsx)(s.code,{children:"b-3"}),", which correspond to blocks with the same name."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"blocks.jsynt"})," file is where you specify the order of your blocks. In essence, if you ever need to ",(0,n.jsx)(s.strong,{children:"re-order"})," your content, this is where you would do it (meaning you do not need to re-number your blocks if one of them is removed)."]}),"\n",(0,n.jsx)(s.h3,{id:"componentsjsynt",children:"components.jsynt"}),"\n",(0,n.jsxs)(s.p,{children:["These are the main files that you will be working with. Each ",(0,n.jsx)(s.code,{children:"b-X"})," folder in your course will contain one of these in its root. It's inside of these files are you will define the contents of each block."]}),"\n",(0,n.jsxs)(s.h3,{id:"b-xassets",children:[(0,n.jsx)(s.em,{children:"b-X"}),"/",(0,n.jsx)(s.em,{children:"assets"})]}),"\n",(0,n.jsxs)(s.p,{children:["Any assets (images, videos, downloadable files, etc.) that are used in the ",(0,n.jsx)(s.code,{children:"b-X"})," block should be included within its ",(0,n.jsx)(s.code,{children:"assets"})," folder."]}),"\n",(0,n.jsx)(s.h2,{id:"modularity",children:"Modularity"}),"\n",(0,n.jsxs)(s.p,{children:["This folder structure is designed in this way to make copying & re-using blocks very straightforward. Simply copy and paste the ",(0,n.jsx)(s.code,{children:"b-X"})," folder from one course to another to carry everything it needs with it."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},4684:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/forge-course-1-e6eac8f37f5868e756c06d1df2cbcb9b.png"},8453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>c});var n=o(6540);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);