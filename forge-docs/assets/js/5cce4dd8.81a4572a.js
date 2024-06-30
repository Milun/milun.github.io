"use strict";(self.webpackChunkforge=self.webpackChunkforge||[]).push([[359],{6927:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var t=r(4848),s=r(8453);const n={sidebar_position:4},i="Creating your first course",c={id:"overview/firstcourse",title:"Creating your first course",description:"This guide will cover how to create a new Forge course from scratch. Please ensure you have read and followed the instructions in installation before proceeding.",source:"@site/docs/overview/firstcourse.md",sourceDirName:"overview",slug:"/overview/firstcourse",permalink:"/forge-docs/overview/firstcourse",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/forge-docs/overview/installation"},next:{title:"Forge Framework",permalink:"/forge-docs/overview/forge/"}},a={},d=[{value:"1. Create a directory to store <em>all</em> of your courses",id:"1-create-a-directory-to-store-all-of-your-courses",level:3},{value:"2. Download and run the Forge installer",id:"2-download-and-run-the-forge-installer",level:3},{value:"3. Navigate into the <code>src/course/en/content</code> directory.",id:"3-navigate-into-the-srccourseencontent-directory",level:3},{value:"4. Create your first block.",id:"4-create-your-first-block",level:3},{value:"5. Start <code>dev</code> mode.",id:"5-start-dev-mode",level:3},{value:"6. Open the project in VSCode.",id:"6-open-the-project-in-vscode",level:3},{value:"7. Make changes to your block.",id:"7-make-changes-to-your-block",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"creating-your-first-course",children:"Creating your first course"}),"\n",(0,t.jsxs)(o.p,{children:["This guide will cover how to create a new Forge course from scratch. Please ensure you have read and followed the instructions in ",(0,t.jsx)(o.a,{href:"/forge-docs/overview/installation",children:"installation"})," before proceeding."]}),"\n",(0,t.jsxs)(o.h3,{id:"1-create-a-directory-to-store-all-of-your-courses",children:["1. Create a directory to store ",(0,t.jsx)(o.em,{children:"all"})," of your courses"]}),"\n",(0,t.jsxs)(o.p,{children:["Create a folder anywhere on your machine (I recommend ",(0,t.jsx)(o.code,{children:"C:/Users/USERNAME/Documents/*"}),"), and give it a good name (I recommend ",(0,t.jsx)(o.code,{children:"Forge"}),")."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 1",src:r(897).A+"",width:"418",height:"217"})}),"\n",(0,t.jsx)(o.h3,{id:"2-download-and-run-the-forge-installer",children:"2. Download and run the Forge installer"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(8383).A+"",children:"Download the Forge installer."})," Place it within the folder you just created, and then run it."]}),"\n",(0,t.jsx)(o.p,{children:"The program will walk you through the installation process (which will take a few minutes)."}),"\n",(0,t.jsx)(o.admonition,{type:"important",children:(0,t.jsxs)(o.p,{children:["Be sure to choose a good, short name for your course! I've used ",(0,t.jsx)(o.code,{children:"FRG01"})," as an example."]})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 2",src:r(7638).A+"",width:"1115",height:"419"})}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"The first time you run this will likely take about 5 minutes while all the node modules are downloaded. This is a one-time delay, and subsequent courses will install much faster."})}),"\n",(0,t.jsx)(o.p,{children:"Once all that is done, your folder should look like this:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 3",src:r(2899).A+"",width:"424",height:"367"})}),"\n",(0,t.jsxs)(o.h3,{id:"3-navigate-into-the-srccourseencontent-directory",children:["3. Navigate into the ",(0,t.jsx)(o.code,{children:"src/course/en/content"})," directory."]}),"\n",(0,t.jsxs)(o.p,{children:["Forge requires a ",(0,t.jsx)(o.em,{children:"lot"})," in order to run, but when developing courses with it, you're only interested in one directory: the ",(0,t.jsx)(o.code,{children:"course/content"})," directory."]}),"\n",(0,t.jsxs)(o.p,{children:["It located in the following path: ",(0,t.jsx)(o.code,{children:"COURSENAME/src/course/en/content/"}),". Navigate into it."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 4",src:r(2592).A+"",width:"635",height:"392"})}),"\n",(0,t.jsx)(o.h3,{id:"4-create-your-first-block",children:"4. Create your first block."}),"\n",(0,t.jsx)(o.p,{children:"Your course currently has 0 blocks in it (and will not compile)."}),"\n",(0,t.jsxs)(o.p,{children:["Run the ",(0,t.jsx)(o.code,{children:"__create-block.bat"})," program, and it will automate creating a new block for you. Create one with the ID of ",(0,t.jsx)(o.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 5",src:r(8157).A+"",width:"772",height:"362"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 6",src:r(9202).A+"",width:"641",height:"419"})}),"\n",(0,t.jsxs)(o.h3,{id:"5-start-dev-mode",children:["5. Start ",(0,t.jsx)(o.code,{children:"dev"})," mode."]}),"\n",(0,t.jsxs)(o.p,{children:["You can now run ",(0,t.jsx)(o.code,{children:"__run-dev.bat"})," to see your (blank) course! ",(0,t.jsx)(o.code,{children:"__run-dev.bat"})," will start the ",(0,t.jsx)(o.code,{children:"grunt server"})," and ",(0,t.jsx)(o.code,{children:"grunt dev"})," tasks for you. While both are running, you can view the course on ",(0,t.jsx)(o.a,{href:"http://localhost:9001/",children:"http://localhost:9001/"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"6-open-the-project-in-vscode",children:"6. Open the project in VSCode."}),"\n",(0,t.jsxs)(o.p,{children:["Run the ",(0,t.jsx)(o.code,{children:"__content.code-workspace"}),' file. If you have VSCode installed (and you should) this will open it in a special "project" view.']}),"\n",(0,t.jsx)(o.h3,{id:"7-make-changes-to-your-block",children:"7. Make changes to your block."}),"\n",(0,t.jsxs)(o.p,{children:["If you try to ",(0,t.jsx)(o.a,{href:"http://localhost:9001/#/id/co-1",children:"preview your block"}),", it will be quite bland:"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 7",src:r(5583).A+"",width:"763",height:"419"})}),"\n",(0,t.jsxs)(o.p,{children:["So let's change that. Copy the ",(0,t.jsx)(o.a,{href:"/forge-docs/templates/components/textGraphic",children:"Text - Graphic"})," template into ",(0,t.jsx)(o.code,{children:"b-1/components.jsynt"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Do not"})," delete the ",(0,t.jsx)(o.code,{children:"["})," and ",(0,t.jsx)(o.code,{children:"]"})," characters from the start & end of the file!"]})}),"\n",(0,t.jsx)(o.p,{children:"Your file will look like this now:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 8",src:r(4748).A+"",width:"640",height:"570"})}),"\n",(0,t.jsxs)(o.p,{children:["Go ahead and change the values of ",(0,t.jsx)(o.code,{children:'"title"'})," and ",(0,t.jsx)(o.code,{children:'"body"'}),", and then refresh the ",(0,t.jsx)(o.a,{href:"http://localhost:9001/#/id/co-1",children:"http://localhost:9001/"})," you have open."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 9",src:r(9).A+"",width:"715",height:"491"})}),"\n",(0,t.jsxs)(o.p,{children:["Almost there, we're just missing an image. Download any ",(0,t.jsx)(o.code,{children:".jpg"})," you want, and save it inside of the ",(0,t.jsx)(o.code,{children:"b-1/assets"})," folder as ",(0,t.jsx)(o.code,{children:"p-1.jpg"}),". Refresh ",(0,t.jsx)(o.a,{href:"http://localhost:9001/#/id/co-1",children:"http://localhost:9001/"}),", and..."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"FirstCourse 10",src:r(7245).A+"",width:"1011",height:"687"})}),"\n",(0,t.jsx)(o.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.em,{children:"TODO:"})," There's still more to document here, but this should cover the basics for now."]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8383:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/files/forge-install-5ce52203a5633cf63e948fb060c72b67.bat"},897:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-1-d94fd96222ccfa53b276d0180e712423.jpg"},7245:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-10-7ff8e309f62a2f1fcbb86e366536c95d.jpg"},7638:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-2-bc520a0c21024793aebfb348e729902e.jpg"},2899:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-3-4bb2a691c8f84590ca65b82b17c770ef.jpg"},2592:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-4-a2190d1ffc55affa5aa91a067f6634bc.jpg"},8157:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-5-a5186f3004340bc90d169a99ee0f097e.jpg"},9202:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-6-ee1d96bcc97866cc48925da5ab03a3d1.jpg"},5583:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-7-0ca10f4b40ea40c402ae598ad6a60d5b.jpg"},4748:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-8-90a02cd058babaa0e50bbaa023a5d41b.jpg"},9:(e,o,r)=>{r.d(o,{A:()=>t});const t=r.p+"assets/images/overview-firstcourse-9-0614ea59de71869b2512d792ac4502c0.jpg"},8453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>c});var t=r(6540);const s={},n=t.createContext(s);function i(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);