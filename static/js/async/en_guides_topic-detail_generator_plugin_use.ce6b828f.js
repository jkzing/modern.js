"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[76091],{23347:function(e,n,s){s.r(n),s.d(n,{frontmatter:function(){return r},title:function(){return o},toc:function(){return t}});var i=s(97458);const r={sidebar_position:2},t=[{id:"classification",text:"Classification",depth:2},{id:"type-definition",text:"Type definition",depth:3},{id:"extended-engineering",text:"Extended engineering",depth:4},{id:"create-engineering-scenes",text:"Create engineering scenes",depth:4},{id:"execution-timing",text:"Execution timing",depth:3},{id:"extended-engineering-1",text:"Extended engineering",depth:4},{id:"create-engineering-scenes-1",text:"Create engineering scenes",depth:4}],o="How to use the generator plugin";function c(e){const n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",ol:"ol",li:"li",h3:"h3",h4:"h4"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"how-to-use-the-generator-plugin",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-use-the-generator-plugin",children:"#"}),"How to use the generator plugin"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@modern-js/create"})," provides the ",(0,i.jsx)(n.code,{children:"--plugin"})," parameter to declare the generator plugin used."]}),"\n",(0,i.jsx)(n.p,{children:"You can use the generator plugin directly by executing the following command:"}),"\n",(0,i.jsxs)(n.div,{className:"language-bash",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create --plugin "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"pluginName"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(n.p,{children:"The plugin parameter supports multiple declarations, which means that multiple generator plugins are used at the same time."}),"\n",(0,i.jsxs)(n.h2,{id:"classification",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#classification",children:"#"}),"Classification"]}),"\n",(0,i.jsx)(n.p,{children:"There are two types of generator plugins:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Extended engineering: directly customize the three major engineering provided by default."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create engineering scenes: Create corresponding engineering scenes based on the default three major engineering schemes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"type-definition",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definition",children:"#"}),"Type definition"]}),"\n",(0,i.jsxs)(n.p,{children:["The classification of the generator plugin is provided by the meta information in the ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"extended-engineering",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extended-engineering",children:"#"}),"Extended engineering"]}),"\n",(0,i.jsxs)(n.div,{className:"language-json",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"meta"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"extend"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mwa"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// The three engineering is mwa, module, monorepo"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.h4,{id:"create-engineering-scenes",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-engineering-scenes",children:"#"}),"Create engineering scenes"]}),"\n",(0,i.jsxs)(n.div,{className:"language-json",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"meta"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"key"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"new_solution"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"name"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"New Solution"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"type"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mwa"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// In addition to the three major engineering solutions, the type here also supports the customize (custom) type"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"execution-timing",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#execution-timing",children:"#"}),"Execution timing"]}),"\n",(0,i.jsx)(n.p,{children:"The execution timing of different types of custom engineering solutions is different."}),"\n",(0,i.jsxs)(n.h4,{id:"extended-engineering-1",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extended-engineering-1",children:"#"}),"Extended engineering"]}),"\n",(0,i.jsx)(n.p,{children:"The generator plugin of the extended engineering type will execute in sequence according to the declaration order of the plugin parameter after selecting the corresponding extended project scheme."}),"\n",(0,i.jsxs)(n.h4,{id:"create-engineering-scenes-1",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-engineering-scenes-1",children:"#"}),"Create engineering scenes"]}),"\n",(0,i.jsx)(n.p,{children:"The generator plugin that create engineering scenes will have the option to select the scene after selecting the project solution type. The option list includes the current default project scenes and the project scenes defined by the plugin. If you select the corresponding scene, the corresponding generator will be executed plugin."})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);