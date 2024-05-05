"use strict";(self.webpackChunkforge=self.webpackChunkforge||[]).push([[91],{3911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),o=t(8453);const s={sidebar_position:4},r="Components",a={id:"templates/components/index",title:"Components",description:"Often, a Forge component's core features may not be enough to create the learning experience you are after. This is where 'widgets' come in.",source:"@site/docs/templates/components/index.md",sourceDirName:"templates/components",slug:"/templates/components/",permalink:"/forge-docs/templates/components/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"_graphic",permalink:"/forge-docs/templates/objects/graphic"},next:{title:"Text",permalink:"/forge-docs/templates/components/text"}},l={},c=[{value:"Widget formatting",id:"widget-formatting",level:2},{value:"Where can widgets go?",id:"where-can-widgets-go",level:2},{value:"Widget limitations",id:"widget-limitations",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"components",children:"Components"}),"\n",(0,i.jsx)(n.p,{children:"Often, a Forge component's core features may not be enough to create the learning experience you are after. This is where 'widgets' come in."}),"\n",(0,i.jsx)(n.p,{children:"A 'widget' is an isolated, often interactive piece of content that you can insert into any component to extend its functionality."}),"\n",(0,i.jsx)(n.p,{children:"For example, all of the following are implemented as widgets inside of Forge:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Hyperlinks"}),"\n",(0,i.jsx)(n.li,{children:"Videos"}),"\n",(0,i.jsx)(n.li,{children:"Slido embeds"}),"\n",(0,i.jsx)(n.li,{children:"Pictures"}),"\n",(0,i.jsx)(n.li,{children:"Annotations"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"widget-formatting",children:"Widget formatting"}),"\n",(0,i.jsxs)(n.p,{children:["A widget is added to your content's HTML in a very similar way that you would a normal HTML tag. For example, here is a ",(0,i.jsx)(n.code,{children:"hyperlink"})," widget:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<w.hyperlink href="https://google.com">This text is a clickable hyperlink!</w.hyperlink>\n'})}),"\n",(0,i.jsxs)(n.p,{children:['As you can see, it uses the same formatting rules HTML uses, with the main exception being that its tagnames begin with "',(0,i.jsx)(n.code,{children:"w."}),'".']}),"\n",(0,i.jsx)(n.h2,{id:"where-can-widgets-go",children:"Where can widgets go?"}),"\n",(0,i.jsxs)(n.p,{children:["Widgets can be placed anywhere there are ",(0,i.jsx)(n.code,{children:'<<<"...">>>'})," JSYNT tags."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="components.jsynt"',children:'"body": <<<" \r\n    <p>Click <w.hyperlink href="https://google.com">here</w.hyperlink> to go to a website.</p>\r\n">>>\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Using widgets inside of regular string tags (",(0,i.jsx)(n.code,{children:'"..."'}),"), such as those that ",(0,i.jsx)(n.code,{children:'"title"'})," properties have, ",(0,i.jsx)(n.strong,{children:"will not work"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"widget-limitations",children:"Widget limitations"}),"\n",(0,i.jsxs)(n.p,{children:["Widgets have no other restrictions on where you can place them, however, there's still some situations you ",(0,i.jsx)(n.em,{children:"shouldn't"})," use them in. For example, embedding a Slido inside of a HotgraphicSmall reveal ",(0,i.jsx)(n.em,{children:"is"})," possible, but will break the layout, and look rediculous."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);