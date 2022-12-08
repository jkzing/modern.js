"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1723],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70314:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(52983),r=n(14517);const o="tabItem_cygK";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},38005:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),o=n(14517),l=n(27250),i=n(62209),s=n(61748),c=n(34333);const p="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==w&&(x(t),O(a),null!=f&&N(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:T,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},98187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),o=n(38005),l=n(70314);const i={title:"\u4ece BFF \u83b7\u53d6\u6570\u636e"},s=void 0,c={unversionedId:"tutorials/first-app/c09-bff/9.3-fetch-bff",id:"tutorials/first-app/c09-bff/9.3-fetch-bff",title:"\u4ece BFF \u83b7\u53d6\u6570\u636e",description:"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\u7684 BFF\uff0c\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u8be5\u6a21\u5f0f\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c09-bff/9.3-fetch-bff.md",sourceDirName:"tutorials/first-app/c09-bff",slug:"/tutorials/first-app/c09-bff/9.3-fetch-bff",permalink:"/v2/docs/tutorials/first-app/c09-bff/9.3-fetch-bff",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ece BFF \u83b7\u53d6\u6570\u636e"},sidebar:"tutorialsSidebar",previous:{title:"\u542f\u7528 BFF",permalink:"/v2/docs/tutorials/first-app/c09-bff/9.2-enable-bff"},next:{title:"\u5e94\u7528\u67b6\u6784",permalink:"/v2/docs/tutorials/first-app/c10-model/10.1-application-architecture"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u3010 \u51fd\u6570\u5199\u6cd5 \u3011\u7684 BFF\uff0c\u8fd9\u4e00\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u8be5\u6a21\u5f0f\u4e3a\u8054\u7cfb\u4eba\u5217\u8868\u5b9e\u73b0\u4e00\u4e2a\u6570\u636e\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u9996\u5148\u628a\u4e0d\u9700\u8981\u7684\u6837\u677f\u6587\u4ef6\u6e05\u7406\u6389\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u91cd\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts.ts"),"\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r api/info api/_app.ts\nmv api/index.ts api/contacts.ts\n"))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"rm -r api/info\nrm api/_app.ts\nmv api/index.ts api/contacts.ts\n")))),(0,r.kt)("p",null,"\u6b64\u65f6 API \u8def\u7531\u5c06\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/contacts"),"\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Marak/Faker.js"},"faker")," \u6765 mock \u9700\u8981\u7684\u6570\u636e\uff0c\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add faker@5.5.3\n")),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"api/contacts.ts")," \u5185\u5bb9\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { name, internet } from 'faker';\n\nexport const get = async () => {\n  const mockData = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return { code: 200, data: mockData };\n};\n")),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6570\u636e\u540c\u6837\u53ef\u4ee5\u4ece\u8fdc\u7aef\u63a5\u53e3\u83b7\u53d6\uff0c\u6b64\u5904\u4ec5\u4e3a\u4e86\u6f14\u793a\u3002")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/contacts"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/api-result.png",alt:"browser-result"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/contacts/page.tsx")," \u91cc\u786c\u7f16\u7801\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"getMockData")," \u6539\u6210\u4ece BFF \u52a0\u8f7d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Helmet } from '@modern-js/runtime/head';\nimport { List } from 'antd';\nimport 'ladda/dist/ladda.min.css';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport './styles/utils.css';\n\nimport { useState, useEffect } from 'react';\nimport { get as contacts } from '@api/contacts';\nimport Item from './components/Item';\n\nfunction Index() {\n  const [list, setList] = useState(\n    [] as Array<{ name: string; email: string; avatar: string }>,\n  );\n  const loadMockData = async () => {\n    const { data } = await contacts();\n    setList(data);\n  };\n  useEffect(() => {\n    if (!list.length) {\n      loadMockData();\n    }\n  });\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      {(list.length && (\n        <List\n          dataSource={list}\n          renderItem={info => <Item key={info.name} info={info} />}\n        />\n      )) || (\n        <div className=\"p-4 items-center border-gray-200 border-b border-t custom-text-gray\">\n          Pending...\n        </div>\n      )}\n    </div>\n  );\n}\n\nexport default Index;\n")),(0,r.kt)("p",null,"\u5728 Modern.js \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u51fd\u6570\uff08\u524d\u540e\u7aef\u4e00\u4f53\u5316\uff09\u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8c03\u7528 BFF \u63a5\u53e3\uff0c\u8c03\u7528\u65f6\u65e0\u9700\u5173\u5fc3\u57df\u540d\u3001\u8def\u5f84\u7b49\u3002"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u521b\u5efa BFF \u65f6\uff0cModern.js \u5df2\u7ecf\u9ed8\u8ba4\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconig.json")," \u4e2d\u6ce8\u5165\u4e86\u522b\u540d\u3002\u8fd9\u4e5f\u662f\u4e4b\u524d\u63d0\u5230\u7684\uff0c\u751f\u6210\u5668\u5728\u9879\u76ee\u521b\u5efa\u4e4b\u540e\u5e76\u4e0d\u4f1a\u88ab\u629b\u5f03\uff0c\u4ecd\u65e7\u53ef\u4ee5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u4e3a\u9879\u76ee\u63d0\u4f9b\u65b0\u7684\u5185\u5bb9\u3002")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u518d\u6253\u5f00\u9875\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/contacts"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u52a0\u8f7d\u540e\uff0c\u4f1a\u5148\u521d\u59cb\u5316\u8054\u7cfb\u4eba\u6570\u636e\uff08\u663e\u793a pending\uff09\uff0c\u4e4b\u540e\u6bcf\u6b21\u5207\u6362\u5230 All \u5217\u8868\uff0c\u4e5f\u4f1a\u91cd\u65b0\u8bf7\u6c42\u8054\u7cfb\u4eba\u6570\u636e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/08/browser-result.png",alt:"browser-result"})),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c09/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);