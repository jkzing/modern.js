"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1134],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const a={sidebar_label:"enableModernMode"},l="output.enableModernMode",p={unversionedId:"configure/app/output/enable-modern-mode",id:"configure/app/output/enable-modern-mode",title:"output.enableModernMode",description:"* \u7c7b\u578b\uff1a boolean",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/output/enable-modern-mode.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-modern-mode",permalink:"/v2/docs/configure/app/output/enable-modern-mode",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"enableModernMode"},sidebar:"configsAppSidebar",previous:{title:"enableLatestDecorators",permalink:"/v2/docs/configure/app/output/enable-latest-decorators"},next:{title:"externals",permalink:"/v2/docs/configure/app/output/externals"}},i={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputenablemodernmode"},"output.enableModernMode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Modern.js \u9ed8\u8ba4\u503c\u6784\u5efa\u9488\u5bf9\u65e7\u7248\u6d4f\u89c8\u5668\u5e26\u6709 Polyfill \u7684 JS \u4ea7\u7269\uff0c\u5f00\u542f\u8be5\u914d\u7f6e\u540e\uff0c\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4f1a\u81ea\u52a8\u6784\u5efa\u51fa\u9488\u5bf9\u73b0\u4ee3\u6d4f\u89c8\u5668\u8bed\u6cd5\u672a\u964d\u7ea7\u7684 JS \u4ea7\u7269\uff0c\u4ea7\u7269\u6587\u4ef6\u540d\u683c\u5f0f\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].[hash]-es6/js"),"\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u914d\u7f6e\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    enableModernMode: true,\n  },\n});\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4\u540e\uff0c\u9664\u4e86\u6b63\u5e38\u7684 Client \u6253\u5305\u5916\uff0c \u8fd8\u8fdb\u884c\u4e86 Modern \u7684\u6253\u5305\uff0c\u5e76\u4e14 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/static/js")," \u76ee\u5f55\u4f1a\u751f\u6210 es6 \u76f8\u5173\u4ea7\u7269\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output-enable-modern-build.jpeg",alt:null})),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," \u547d\u4ee4\u540e\uff0c\u4f7f\u7528\u6700\u65b0\u7248\u672c Chrome \u6d4f\u89c8\u5668\u8bbf\u95ee\uff0c\u89c2\u5bdf Network \u4e2d\u8bf7\u6c42\u7684 JS \u8d44\u6e90\u4e3a es6 \u4ea7\u7269\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output-enable-modern-network.jpeg",alt:null})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/compatibility"},"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027"),"\u3002")))}d.isMDXComponent=!0}}]);