"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2055,8393],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(18249),i=(n(52983),n(44993)),o=n(15600);const r={sidebar_position:6,title:"Auto actions"},l=void 0,p={unversionedId:"apis/app/runtime/model/auto-actions",id:"apis/app/runtime/model/auto-actions",title:"Auto actions",description:"Reduck can automatically generate Actions according to the type of State\uff0cfor easy to modify State.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/model/auto-actions.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/auto-actions",permalink:"/v2/en/docs/apis/app/runtime/model/auto-actions",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Auto actions"},sidebar:"apisAppSidebar",previous:{title:"connect",permalink:"/v2/en/docs/apis/app/runtime/model/connect"},next:{title:"handleEffect",permalink:"/v2/en/docs/apis/app/runtime/model/handle-effect"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Basic Data Type",id:"basic-data-type",level:3},{value:"Array",id:"array",level:3},{value:"PlainObject",id:"plainobject",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"ReduckTip"}),(0,i.kt)("p",null,"Reduck can automatically generate Actions according to the type of State\uff0cfor easy to modify State."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/runtime/state#autoactions"},(0,i.kt)("inlineCode",{parentName:"a"},"runtime.state.autoActions"))," close auto actions feature.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"basic-data-type"},"Basic Data Type"),(0,i.kt)("p",null,"State type in ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uff0cgenerate ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," Action\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define({\n  state: 1,\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n      <button\n        type=\"button\"\n        onClick={() => {\n          // call auto generate setState Action\n          actions.setState(state + 1);\n        }}\n      >\n        add\n      </button>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"array"},"Array"),(0,i.kt)("p",null,"State type is Array\uff0cgenerate the following Actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"push"),": adds one or more elements to the end of the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pop"),": removes the last element from the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shift"),": removes the first element from the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unshift"),": adds one or more elements to the beginning of the array.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"usage: ",(0,i.kt)("inlineCode",{parentName:"li"},"arr.unshift(element1, ..., elementN)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elementN"),": the element or elements to add to the beginning of the array."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter"),": filter element."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concat"),": concat array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"splice"),": modify the array by deleting or replacing existing elements or adding new elements in place, and return the modified array(Note that it is different from the native ",(0,i.kt)("inlineCode",{parentName:"li"},"splice")," return value).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"usage: ",(0,i.kt)("inlineCode",{parentName:"li"},"splice(start[, deleteCount[, item1[, item2[, ...]]]])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": specifies the start position of the modification(counting from 0)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deleteCount"),": an integer representing the number of array elements to remove."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item, item2, ..."),": The elements to add to the array, starting at the start position. If not specified, ",(0,i.kt)("inlineCode",{parentName:"li"},"splice")," will only delete array elements.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define({\n  state: [1, 2, 3],\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.push(4);\n    actions.pop();\n    actions.shift(0);\n    actions.unshift();\n    actions.filter(val => val <= 2);\n    actions.splice(0, 1, 1, 2);\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"plainobject"},"PlainObject"),(0,i.kt)("p",null,"State type is PlainObject\uff0cbase on the names contained in State\uff0cgenerate ",(0,i.kt)("inlineCode",{parentName:"p"},"set${key}"),"(Camel-Case) Actions\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example"',title:'"example"'},"const fooModel = model('foo').define({\n  state: {\n    a: 1,\n    b: { value: 1 },\n    c: 'c',\n  },\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB({ value: 2 });\n    actions.setC('d');\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n")))}d.isMDXComponent=!0},15600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(18249),i=(n(52983),n(44993));const o={},r=void 0,l={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"By default, the export package name for all APIs in this section is: @modern-js/runtime/model.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/en/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"information",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, the export package name for all APIs in this section is: ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"."),(0,i.kt)("p",{parentName:"admonition"},"If Reduck is integrated separately from Modern.js, the export package name is: ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),".")))}m.isMDXComponent=!0}}]);