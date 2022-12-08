"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[966],{44993:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(52983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66123:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(18249),o=(t(52983),t(44993));const a={toc:[]};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array<string | RegExp>")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"))),(0,o.kt)("p",null,"\u6307\u5b9a\u4e0d\u9700\u8981\u7f16\u8bd1\u7684 JavaScript/TypeScript \u6587\u4ef6\u3002\u7528\u6cd5\u4e0e webpack \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#ruleexclude"},"Rule.exclude")," \u4e00\u81f4\uff0c\u652f\u6301\u4f20\u5165\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u5339\u914d\u6a21\u5757\u7684\u8def\u5f84\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import path from 'path';\n\nexport default {\n  source: {\n    exclude: [path.resolve(__dirname, 'src/module-a'), /src\\/module-b/],\n  },\n};\n")))}c.isMDXComponent=!0;const l={title:"source.exclude",sidebar_label:"exclude"},i=void 0,p={unversionedId:"configure/app/source/exclude",id:"configure/app/source/exclude",title:"source.exclude",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 source.exclude\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/source/exclude.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/exclude",permalink:"/v2/docs/configure/app/source/exclude",draft:!1,tags:[],version:"current",frontMatter:{title:"source.exclude",sidebar_label:"exclude"},sidebar:"configsAppSidebar",previous:{title:"entries",permalink:"/v2/docs/configure/app/source/entries"},next:{title:"globalVars",permalink:"/v2/docs/configure/app/source/global-vars"}},u={},s=[],d={toc:s};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-source.html#source-exclude"},"source.exclude"),"\u3002")),(0,o.kt)(c,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);