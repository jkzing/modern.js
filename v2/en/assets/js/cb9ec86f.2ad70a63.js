"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3242],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70314:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(52983),a=r(14517);const o="tabItem_cygK";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},38005:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(18249),a=r(52983),o=r(14517),l=r(27250),s=r(62209),i=r(61748),c=r(34333);const u="tabList_N6AO",p="tabItem_Wt3n";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,i.U)(),[w,T]=(0,a.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=N.indexOf(t),n=g[r].value;n!==w&&(S(t),T(n),null!=f&&O(f,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:j,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},45822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(18249),a=(r(52983),r(44993)),o=r(38005),l=r(70314);const s={title:"\u542f\u7528 SSR"},i=void 0,c={unversionedId:"tutorials/first-app/c01-getting-started/1.4-enable-ssr",id:"tutorials/first-app/c01-getting-started/1.4-enable-ssr",title:"\u542f\u7528 SSR",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Modern.js \u8c03\u8bd5\u9879\u76ee\uff0c\u672c\u5c0f\u8282\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5f00\u542f SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c01-getting-started/1.4-enable-ssr.md",sourceDirName:"tutorials/first-app/c01-getting-started",slug:"/tutorials/first-app/c01-getting-started/1.4-enable-ssr",permalink:"/v2/en/docs/tutorials/first-app/c01-getting-started/1.4-enable-ssr",draft:!1,tags:[],version:"current",frontMatter:{title:"\u542f\u7528 SSR"},sidebar:"tutorialsSidebar",previous:{title:"\u8c03\u8bd5\u9879\u76ee",permalink:"/v2/en/docs/tutorials/first-app/c01-getting-started/1.3-dev-command"},next:{title:"\u8fd0\u884c\u9879\u76ee",permalink:"/v2/en/docs/tutorials/first-app/c01-getting-started/1.5-start-command"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 Modern.js \u8c03\u8bd5\u9879\u76ee\uff0c\u672c\u5c0f\u8282\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5feb\u901f\u5f00\u542f SSR\uff08\u670d\u52a1\u7aef\u6e32\u67d3\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.js"),"\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch modern.config.ts\n"))),(0,a.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ni modern.config.ts\n")))),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u9879\u76ee\u7684 SSR \u5c31\u5df2\u7ecf\u5f00\u542f\u4e86\uff0c\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev")," \u770b\u770b\u6548\u679c\u5427\u3002"),(0,a.kt)("p",null,"\u7528 Chrome \u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"view-source:http://localhost:8080/"),"\uff0c\u67e5\u770b HTML \u6587\u4ef6\u6e90\u4ee3\u7801\uff0c\u53ef\u4ee5\u770b\u5230 root \u6839\u5143\u7d20\u4e0b\u5b58\u5728\u5df2\u7ecf\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u597d\u7684 HTML\u3002"),(0,a.kt)("admonition",{title:"\u6ce8",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Modern.js \u6846\u67b6\u4f7f\u7528 SSR \u4e0d\u9700\u8981\u81ea\u5efa Web Server\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e13\u6ce8\u4e8e App \u7684\u5f00\u53d1\u3002")))}m.isMDXComponent=!0}}]);