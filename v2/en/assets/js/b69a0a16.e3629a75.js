"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7573],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(52983);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(18249),i=(r(52983),r(44993));const o={sidebar_position:9},a="rmFile",l={unversionedId:"guides/topic-detail/generator/plugin/api/file/rmFile",id:"guides/topic-detail/generator/plugin/api/file/rmFile",title:"rmFile",description:"Delete the file.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/file/rmFile.md",sourceDirName:"guides/topic-detail/generator/plugin/api/file",slug:"/guides/topic-detail/generator/plugin/api/file/rmFile",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/rmFile",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"guidesSidebar",previous:{title:"updateModernConfig",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/updateModernConfig"},next:{title:"rmDir",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/rmDir"}},p={},c=[{value:"fileName",id:"filename",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rmfile"},"rmFile"),(0,i.kt)("p",null,"Delete the file."),(0,i.kt)("p",null,"This method can be used for any file type."),(0,i.kt)("p",null,"This method is available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," time to live API parameter."),(0,i.kt)("p",null,"Its type is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  rmFile: (fileName: string) => Promise<void>;\n  ...\n};\n")),(0,i.kt)("h2",{id:"filename"},"fileName"),(0,i.kt)("p",null,"File name or file path to delete."))}s.isMDXComponent=!0}}]);