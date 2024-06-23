"use strict";(self.webpackChunkforge=self.webpackChunkforge||[]).push([[61],{7973:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(6540);var n=s(4164),o=s(1003),i=s(7559),a=s(781),l=s(7910),c=s(7763),r=s(996),d=s(2153);const p={mdxPageWrapper:"mdxPageWrapper_j9I6"};var h=s(4848);function m(e){const{content:t}=e,{metadata:{title:s,editUrl:m,description:u,frontMatter:y,unlisted:g,lastUpdatedBy:f,lastUpdatedAt:b},assets:_}=t,{keywords:j,wrapperClassName:x,hide_table_of_contents:v}=y,T=_.image??y.image,A=!!(m||b||f);return(0,h.jsx)(o.e3,{className:(0,n.A)(x??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,h.jsxs)(a.A,{children:[(0,h.jsx)(o.be,{title:s,description:u,keywords:j,image:T}),(0,h.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,h.jsxs)("div",{className:(0,n.A)("row",p.mdxPageWrapper),children:[(0,h.jsxs)("div",{className:(0,n.A)("col",!v&&"col--8"),children:[g&&(0,h.jsx)(r.A,{}),(0,h.jsx)("article",{children:(0,h.jsx)(l.A,{children:(0,h.jsx)(t,{})})}),A&&(0,h.jsx)(d.A,{className:(0,n.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:m,lastUpdatedAt:b,lastUpdatedBy:f})]}),!v&&t.toc.length>0&&(0,h.jsx)("div",{className:"col col--2",children:(0,h.jsx)(c.A,{toc:t.toc,minHeadingLevel:y.toc_min_heading_level,maxHeadingLevel:y.toc_max_heading_level})})]})})]})})}},8947:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(6540),o=s(3384),i=(s(961),s(8962)),a=s(6023),l=s(4848);const c={_id:{isOptional:!0,isAdvanced:!0,body:"Unique ID for this component. Forge will automatically generate one if this is blank (so feel free to ignore it). Some custom features may utilize this property in the future."},_component:{body:"The 'template' that this component will use to render itself."},_classes:{isOptional:!0,body:"A list of classnames to apply to this component, seperated with spaces. You can use this to apply custom CSS styles to specific components."},_layout:{body:'Leave as <code>"full"</code> for now (no other layout is supported; but may be in future).'},title:{isOptional:!0,body:"The component's header title. This title's appearance is context sensitive, and its visual size will change depending on where your component sits in the heirarchy."},body:{isOptional:!0,body:"The component's header body. Write whatever preamble you like here!"},instruction:{isOptional:!0,body:"Instruction text informing the user how to use the component."},_itemsOptions:{body:'The options changed here will be copied to <strong>all</strong> the <code>"_items"</code> that this component has. You can then override them on a per-item basis if you need (aka, these are the default settings for <code>"_items"</code>).'},_items:{body:"Your component's reveals/buttons/inputs/etc. are defined in this <em>array</em>."},"_items.title":{isOptional:!0,body:"The item's title."},"_items.body":{body:"The item's body text."},"_items.instruction":{isOptional:!0,body:"The item's instruction text."},"_items.text":{body:'The item\'s text. This item cannot have a <code>"title"</code> or <code>"body"</code> assigned to it.'},"_items._graphic":{isOptional:!0,body:"The item's graphic is defined in this object."},_graphic:{body:"Settings for the graphic that this component will use are defined in this object."},"_graphic.src":{isOptional:!0,body:'The URL of the image to use for this graphic. It must follow the <code>"./assets/*.*"</code> format.'},"_graphic.body":{isOptional:!0,body:'The HTML to use for the graphic. If you also use a <code>"src"</code> to set an image, then the HTML will be overlayed over the top of the image (aka, it becomes the background).'},_theme:{isOptional:!0,body:'One or more "themes" to apply to this element. The names you can use will be specified by the template.'},_width:{body:'The custom width to use for this element. You can use a number from 1-12, or be more specific by using a string <code>"50%"</code>.'}},r={...o.A,JSYNT:function(e){const{title:t="Template",children:s}=e,o=(0,n.useRef)(null),r=a.Ay.onlyText(s);return(0,n.useEffect)((()=>{o.current&&function(e){let t=e.innerHTML;t=t.replace(/(&lt;&lt;&lt;!.*?!&gt;&gt;&gt;)/gm,((e,t)=>`<span class="hljs-comment">${t}</span>`)),t=t.replace(/(&lt;&lt;&lt;@.*?@&gt;&gt;&gt;)/gm,((e,t)=>`<span class="hljs-param">${e.replace(/<span.*?>|<\/span>/gm,(()=>""))}</span>`)),t=t.replace(/(&lt;&lt;&lt;)<\/span>[\s\S]*?>"[\s\S]*?"hljs-string">([\s\S]*?)<\/span><span class="hljs-string">([\s]*")[\s\S]*?(&gt;&gt;&gt;)(,?)/gm,((e,t,s,n,o,i)=>`<span class="hljs-mlstring"><<<"</span>\n${s}<span class="hljs-mlstring">${n}${o}</span>${i}`)),e.innerHTML=t,(()=>{const t=document.createElement("div");[...e.childNodes].forEach((e=>{if(e.tagName)return t.appendChild(e),!0;const s=document.createElement("span");s.textContent=e.nodeValue,t.appendChild(s)})),e.innerHTML=t.innerHTML;const s=[...e.children].filter((e=>"SPAN"==e.tagName)),n=[];let o="";s.forEach((e=>{if(e.textContent.match(/\s*:?\s*{/)&&(o&&n.push(o),o=""),e.textContent.match(/}/))for(let t=0;t<e.textContent.split("}").length-1;t++)n.pop();e.classList.contains("hljs-attr")&&(o=e.textContent.trim().replaceAll('"',""),e.setAttribute("data-name",[...n,o].join(".")))}))})();[...e.querySelectorAll(".hljs-attr")].forEach((e=>{const t=e.getAttribute("data-name");let s=t,n={body:"ERORR! DATA NOT FOUND!"};for(;s?.length;){if(c[s]){n=c[s];break}let e=s.split(".");if(e.shift(),!e||!e.length)break;s=e.join(".")}const o=document.createElement("span");o.className="jsynt__popup",o.innerHTML=`\n                <span class="jsynt__popup-title">${t}</span>\n                <span class="jsynt__popup-body">${n.body}</span>\n            `,e.append(o),e.addEventListener("click",(()=>{e.classList.add("is-jsynt-focus")}))})),document._hasJSYNTClickAnywhere||(document.body.addEventListener("click",(e=>{[...document.body.querySelectorAll(".is-jsynt-focus")].forEach((t=>t!==e.target&&t.classList.remove("is-jsynt-focus")))})),document._hasJSYNTClickAnywhere=!0)}(o.current.querySelector(".jsynt__syntax > code"))}),[]),(0,l.jsx)("div",{className:"jsynt",ref:o,children:(0,l.jsxs)("div",{className:"jsynt__inner",children:[(0,l.jsx)("div",{className:"jsynt__title",children:t}),(0,l.jsx)("div",{className:"jsynt__copy",onClick:function(){navigator.clipboard.writeText(r),o?.current?.classList.add("is-copy"),setTimeout((()=>{o?.current?.classList.remove("is-copy")}),0)},children:"\ud83d\udccb"}),(0,l.jsx)(i.A,{className:"jsynt__syntax",style:{},language:"json",children:r})]})})}}}}]);