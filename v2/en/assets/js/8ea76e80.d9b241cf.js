"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[325],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(18249),o=(r(52983),r(44993));const i={toc:[{value:"Introduce SRI",id:"introduce-sri",level:4},{value:"Example",id:"example",level:4}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type SRIOptions = {\n  hashFuncNames?: []string;\n  enabled?: "auto" | true | false;\n  hashLoading?: "eager" | "lazy";\n} | boolean;\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"Adding an integrity attribute (",(0,o.kt)("inlineCode",{parentName:"p"},"integrity"),") to sub-resources introduced by HTML allows the browser to verify the integrity of the introduced resource, thus preventing tampering with the downloaded resource."),(0,o.kt)("p",null,"Enabling this option will set the webpack ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/output/#outputcrossoriginloading"},"output.crossOriginLoading")," configuration item to ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymous"),"."),(0,o.kt)("h4",{id:"introduce-sri"},"Introduce SRI"),(0,o.kt)("p",null,"Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match."),(0,o.kt)("p",null,"For script tags, the result is to refuse to execute the code; for CSS links, the result is not to load the styles."),(0,o.kt)("p",null,"For more on subresource integrity, see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"},"Subresource Integrity - MDN"),"."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"SRI")," is not turned on, and when it is, its default configuration is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n')),(0,o.kt)("p",null,"You can customize the configuration items according to your own needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n")))}a.isMDXComponent=!0;const s={title:"security.sri",sidebar_label:"sri"},u=void 0,l={unversionedId:"configure/app/security/sri",id:"configure/app/security/sri",title:"security.sri",description:"This configuration is Modern.js Builder configuration, more detail can see security.sri\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/security/sri.md",sourceDirName:"configure/app/security",slug:"/configure/app/security/sri",permalink:"/v2/en/docs/configure/app/security/sri",draft:!1,tags:[],version:"current",frontMatter:{title:"security.sri",sidebar_label:"sri"},sidebar:"configsAppSidebar",previous:{title:"removeMomentLocale",permalink:"/v2/en/docs/configure/app/performance/remove-moment-locale"},next:{title:"lazyCompilation",permalink:"/v2/en/docs/configure/app/experiments/lazy-compilation"}},c={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-security.html#security-sri"},"security.sri"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);