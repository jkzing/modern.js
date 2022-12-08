"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6138],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const i={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u7528\u4e8e\u5728\u591a\u9875\u9762\u7684\u573a\u666f\u4e0b\uff0c\u4e3a\u4e0d\u540c\u7684\u9875\u9762\u8bbe\u7f6e\u4e0d\u540c\u7684 HTML \u6a21\u677f\u3002"),(0,a.kt)("p",null,"\u6574\u4f53\u7528\u6cd5\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," \u4e00\u81f4\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u300c\u5165\u53e3\u540d\u79f0\u300d\u4f5c\u4e3a key \uff0c\u5bf9\u5404\u4e2a\u9875\u9762\u8fdb\u884c\u5355\u72ec\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"templateByEntries")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"template"),"\uff0c\u56e0\u6b64\u4f1a\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," \u8bbe\u7f6e\u7684\u503c\u3002"),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    template: './static/index.html',\n    templateByEntries: {\n      foo: './src/pages/foo/index.html',\n      bar: './src/pages/bar/index.html',\n    },\n  },\n};\n")))}l.isMDXComponent=!0;const o={title:"html.templateByEntries",sidebar_label:"templateByEntries"},p=void 0,m={unversionedId:"configure/app/html/template-by-entries",id:"configure/app/html/template-by-entries",title:"html.templateByEntries",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 html.templateByEntries\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/html/template-by-entries.md",sourceDirName:"configure/app/html",slug:"/configure/app/html/template-by-entries",permalink:"/v2/docs/configure/app/html/template-by-entries",draft:!1,tags:[],version:"current",frontMatter:{title:"html.templateByEntries",sidebar_label:"templateByEntries"},sidebar:"configsAppSidebar",previous:{title:"mountId",permalink:"/v2/docs/configure/app/html/mount-id"},next:{title:"templateParametersByEntries",permalink:"/v2/docs/configure/app/html/template-parameters-by-entries"}},c={},s=[],u={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-html.html#html-templatebyentries"},"html.templateByEntries"),"\u3002")),(0,a.kt)(l,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);