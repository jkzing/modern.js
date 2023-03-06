"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[63412],{58917:function(e,n,s){s.r(n),s.d(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return r}});var o=s(97458);const i={sidebar_position:3},r=[{id:"create-project",text:"Create project",depth:2},{id:"extension-type",text:"Extension type",depth:3},{id:"customized-type",text:"Customized type",depth:3},{id:"develop-plugin-logic",text:"Develop plugin logic",depth:2},{id:"customize-input",text:"Customize input",depth:3},{id:"onforged",text:"onForged",depth:3},{id:"afterforged",text:"afterForged",depth:3}],t="How to develop generator plugins";function l(e){const n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li"},e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"how-to-develop-generator-plugins",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-develop-generator-plugins",children:"#"}),"How to develop generator plugins"]}),"\n",(0,o.jsxs)(n.h2,{id:"create-project",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"}),"Create project"]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js provides a generator plugin to create a generator plugin project, you can directly execute the following command to create:"}),"\n",(0,o.jsxs)(n.div,{className:"language-bash",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(n.code,{children:[(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create plugin --plugin @modern-js/generator-plugin-plugin"})}),"\n",(0,o.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(n.p,{children:"Different plugin types will ask different questions. You can choose the plugin type according to your needs."}),"\n",(0,o.jsxs)(n.h3,{id:"extension-type",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extension-type",children:"#"}),"Extension type"]}),"\n",(0,o.jsxs)(n.div,{className:"language-text",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"? Please select the solution you want to create Module Solution\n? Please select the scene you want to create \u751f\u6210\u5668\u63d2\u4ef6\n? Plugin Package Name plugin\n? Development Language TS\n? Package Management Tool pnpm\n? Plugin Type extend\n? Plugin Base Type Web App Solution\n"})})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"customized-type",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customized-type",children:"#"}),"Customized type"]}),"\n",(0,o.jsxs)(n.div,{className:"language-text",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"? Plugin Package Name plugin\n? Development Language TS\n? Package Management Tool pnpm\n? Plugin Type custom\n? Plugin Key mobile-app\n? Plugin Show Name Mobile App\n? Plugin Base Type Web App Solution\n"})})]})]}),"\n",(0,o.jsxs)(n.p,{children:["After the execution of the create project command is completed, a project for developing the generator plugin will be generated accordingly, and the ",(0,o.jsx)(n.code,{children:"meta"})," information will also be generated according to your selection in the ",(0,o.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.p,{className:"modern-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["\nFor generator plugin development, please refer to ",(0,o.jsx)(n.code,{children:"@modern-js/generator-plugin-plugin"}),". ",(0,o.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/generator/plugins/generator-plugin",target:"_blank",rel:"nofollow",children:"Source Code"})]})})]}),"\n",(0,o.jsxs)(n.h2,{id:"develop-plugin-logic",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-plugin-logic",children:"#"}),"Develop plugin logic"]}),"\n",(0,o.jsxs)(n.p,{children:["Complete plugin logic development in ",(0,o.jsx)(n.code,{children:"src/index.ts"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The plugin exports a function by default, the function parameter is ",(0,o.jsx)(n.code,{children:"context"}),", and some methods are provided on ",(0,o.jsx)(n.code,{children:"context"})," to directly operate on the current project."]}),"\n",(0,o.jsxs)(n.p,{children:["A brief introduction to the provided methods, the complete API list viewable ",(0,o.jsx)(n.a,{href:"/en/guides/topic-detail/generator/plugin/api/introduce.html",children:"Generator Plugin API"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"customize-input",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-input",children:"#"}),"Customize input"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"addInputBefore"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Add input before the default input, such as adding questions before the ",(0,o.jsx)(n.code,{children:"Select package management tool"})," question."]}),"\n",(0,o.jsxs)(n.p,{children:["Specific Modern.js configuration viewable for each problem ",(0,o.jsx)(n.a,{href:"/en/guides/topic-detail/generator/config/common.html",children:"Project Solution Configuration"}),"."]}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(n.code,{children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".addInputBefore"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'input2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  type"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'object'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  properties"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'input1.2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      type"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'string'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      title"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'input1.2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"setInput"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Set attributes of existing problems."}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(n.code,{children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".setInput"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'test'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'type'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'number'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".setInput"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'test'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'enum'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [{ value"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'option1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'\u9009\u9879\u4e00'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" }]);"})]}),"\n",(0,o.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"onforged",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"}),"onForged"]}),"\n",(0,o.jsxs)(n.p,{children:["After the implementation of the hook related operations of the project plan type file is completed, multiple extended inspection will execute its ",(0,o.jsx)(n.code,{children:"onForged"})," function in sequence according to the ",(0,o.jsx)(n.code,{children:"plugin"})," parameter order."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onForged"})," parameter is a callback function, and the function parameters are ",(0,o.jsx)(n.code,{children:"api"})," and ",(0,o.jsx)(n.code,{children:"input"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Some file manipulation related methods are provided on the ",(0,o.jsx)(n.code,{children:"api"}),", which can operate on the current template file in this hook."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"input"})," is the current user input, which can be used to obtain the current input information and configuration information of the user."]}),"\n",(0,o.jsxs)(n.p,{children:["When you need a new template file, you can add it directly in the ",(0,o.jsx)(n.code,{children:"templates"})," directory. In the ",(0,o.jsx)(n.code,{children:"onForged"})," function, you can directly operate the ",(0,o.jsx)(n.code,{children:"templates"})," directory file. For example, the ",(0,o.jsx)(n.code,{children:"templateFile"})," parameter in the ",(0,o.jsx)(n.code,{children:"addFile"})," below is the file in the ",(0,o.jsx)(n.code,{children:"templates"})," directory. There is no need to display the declaration ",(0,o.jsx)(n.code,{children:"templates"})," here, just write the relative path relative to ",(0,o.jsx)(n.code,{children:"templates"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["API functions supported in ",(0,o.jsx)(n.code,{children:"onForged"})," can also be found in ",(0,o.jsx)(n.a,{href:"/en/guides/topic-detail/generator/plugin/api/hook/onForged.html",children:"Generator Plugin API"}),"."]}),"\n",(0,o.jsxs)(n.div,{className:"language-ts",children:[(0,o.jsx)(n.div,{className:""}),(0,o.jsxs)(n.div,{className:"modern-code-content",children:[(0,o.jsx)(n.button,{className:"copy"}),(0,o.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(n.code,{children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".onForged"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (api"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ForgedAPI"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" input"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">) "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"language"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" input;"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"api"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".addFile"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    type"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"FileType"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".Text"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    file"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`src/index."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"language "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    templateFile"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`index."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"language "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:".handlebars`"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    force"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"afterforged",children:[(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"}),"afterForged"]}),"\n",(0,o.jsxs)(n.p,{children:["After the ",(0,o.jsx)(n.code,{children:"onForged"})," function is executed, it can mainly install dependencies, Git operations, etc."]}),"\n",(0,o.jsx)(n.p,{children:"If your project plan is based on the three projects provided by the Modern.js, this hook function may not be required. The default project plan will automatically include the installation dependency and commit code logic."}),"\n",(0,o.jsxs)(n.p,{children:["The generator plugin also supports a customized ",(0,o.jsx)(n.code,{children:"custom"})," type, which only provides a small amount of development-level best practice code, such as ",(0,o.jsx)(n.code,{children:".gitignore"}),", ",(0,o.jsx)(n.code,{children:"editorConfig"})," and other files. In this case, you need to manually supplement the installation dependency and Git operation logic in the ",(0,o.jsx)(n.code,{children:"afterForged"})," function."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"afterForged"})," parameter is also a callback function, and the function parameters are ",(0,o.jsx)(n.code,{children:"api"})," and ",(0,o.jsx)(n.code,{children:"input"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"api"})," will provide some npm, Git and other methods, which can install dependency and Git operations in this hook."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"input"})," is the current user input, which can be used to obtain the current input information and configuration information of the user."]}),"\n",(0,o.jsxs)(n.p,{children:["The API functions supported in ",(0,o.jsx)(n.code,{children:"afterForged"})," can also be found in ",(0,o.jsx)(n.a,{href:"/en/guides/topic-detail/generator/plugin/api/hook/afterForged.html",children:"Generator Plugin API"}),"."]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);