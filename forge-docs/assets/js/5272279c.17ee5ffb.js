"use strict";(self.webpackChunkforge=self.webpackChunkforge||[]).push([[748],{7428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(4848),s=n(8453);const o={sidebar_position:5},r="Widgets",l={id:"templates/widgets/index",title:"Widgets",description:"Often, a Forge component's core features may not be enough to create the learning experience you are after. This is where 'widgets' come in.",source:"@site/docs/templates/widgets/index.md",sourceDirName:"templates/widgets",slug:"/templates/widgets/",permalink:"/forge-docs/templates/widgets/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/forge-docs/templates/components/text"},next:{title:"Hyperlink",permalink:"/forge-docs/templates/widgets/hyperlink"}},a={},d=[{value:"Widget formatting",id:"widget-formatting",level:2},{value:"Where can widgets go?",id:"where-can-widgets-go",level:2},{value:"Widget limitations",id:"widget-limitations",level:2}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"widgets",children:"Widgets"}),"\n",(0,i.jsx)(t.p,{children:"Often, a Forge component's core features may not be enough to create the learning experience you are after. This is where 'widgets' come in."}),"\n",(0,i.jsx)(t.p,{children:"A 'widget' is an isolated, often interactive piece of content that you can insert into any component to extend its functionality."}),"\n",(0,i.jsx)(t.p,{children:"For example, all of the following are implemented as widgets inside of Forge:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Hyperlinks"}),"\n",(0,i.jsx)(t.li,{children:"Videos"}),"\n",(0,i.jsx)(t.li,{children:"Slido embeds"}),"\n",(0,i.jsx)(t.li,{children:"Pictures"}),"\n",(0,i.jsx)(t.li,{children:"Annotations"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"widget-formatting",children:"Widget formatting"}),"\n",(0,i.jsxs)(t.p,{children:["A widget is added to your content's HTML in a very similar way that you would a normal HTML tag. For example, here is a ",(0,i.jsx)(t.code,{children:"hyperlink"})," widget:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<w.hyperlink href="https://google.com">This text is a clickable hyperlink!</w.hyperlink>\n'})}),"\n",(0,i.jsxs)(t.p,{children:['As you can see, it uses the same formatting rules HTML uses, with the main exception being that its tagnames begin with "',(0,i.jsx)(t.code,{children:"w."}),'".']}),"\n",(0,i.jsx)(t.h2,{id:"where-can-widgets-go",children:"Where can widgets go?"}),"\n",(0,i.jsxs)(t.p,{children:["Widgets can be placed anywhere there are ",(0,i.jsx)(t.code,{children:'<<<"...">>>'})," JSYNT tags."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:'title="components.jsynt"',children:'"body": <<<" \r\n    <p>Click <w.hyperlink href="https://google.com">here</w.hyperlink> to go to a website.</p>\r\n">>>\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Using widgets inside of regular string tags (",(0,i.jsx)(t.code,{children:'"..."'}),"), such as those that ",(0,i.jsx)(t.code,{children:'"title"'})," properties have, ",(0,i.jsx)(t.strong,{children:"will not work"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"widget-limitations",children:"Widget limitations"}),"\n",(0,i.jsxs)(t.p,{children:["Widgets have no other restrictions on where you can place them, however, there's still some situations you ",(0,i.jsx)(t.em,{children:"shouldn't"})," use them in. For example, embedding a Slido inside of a HotgraphicSmall reveal ",(0,i.jsx)(t.em,{children:"is"})," possible, but will break the layout, and look rediculous."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);