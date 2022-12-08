(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{306:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"builder-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#builder-配置"}},[t._v("#")]),t._v(" Builder 配置")]),t._v(" "),s("p",[t._v("Builder 提供了丰富的配置项，以帮助使用者对构建行为进行定制。")]),t._v(" "),s("h2",{attrs:{id:"配置分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置分类"}},[t._v("#")]),t._v(" 配置分类")]),t._v(" "),s("p",[t._v("Builder 中的配置可以分为以下几类：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/api/config-dev.html"}},[t._v("Dev Config")]),t._v("：与本地开发有关的配置。")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/config-html.html"}},[t._v("Html Config")]),t._v("：与 HTML 有关的配置。")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/config-tools.html"}},[t._v("Tools Config")]),t._v("：与底层工具有关的配置。")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/config-source.html"}},[t._v("Source Config")]),t._v("：与源代码有关的配置。")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/config-output.html"}},[t._v("Output Config")]),t._v("：与构建产物有关的配置。")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/config-security.html"}},[t._v("Security Config")]),t._v("：与安全有关的配置。")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/api/config-performance.html"}},[t._v("Performance Config")]),t._v("：与编译性能、产物性能有关的配置。")],1)]),t._v(" "),s("p",[t._v("你可以在 "),s("RouterLink",{attrs:{to:"/zh/api/"}},[t._v("API Reference")]),t._v(" 页面找到所有配置项的详细说明。")],1),t._v(" "),s("h2",{attrs:{id:"配置默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置默认值"}},[t._v("#")]),t._v(" 配置默认值")]),t._v(" "),s("p",[t._v("Builder 为每个配置项预设了一个默认值，默认值可以满足大部分使用场景。同时，上层框架也会基于垂直场景的需求，覆盖一部分配置的默认值。")]),t._v(" "),s("p",[t._v("因此，在大多数情况下，你不需要声明任何 Builder 配置，直接开箱使用即可。")]),t._v(" "),s("h2",{attrs:{id:"使用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用配置"}},[t._v("#")]),t._v(" 使用配置")]),t._v(" "),s("h3",{attrs:{id:"在上层框架中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在上层框架中使用"}},[t._v("#")]),t._v(" 在上层框架中使用")]),t._v(" "),s("p",[t._v("当你使用一个基于 Builder 的上层框架时，你可以直接通过框架的配置文件来定义 Builder 配置，上层框架会自动将相关配置透传给 Builder。")]),t._v(" "),s("p",[t._v("比如在 Modern.js 2.0 框架中，你可以直接在 "),s("a",{attrs:{href:"https://modernjs.dev/docs/apis/app/config/usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("modern.config.ts"),s("OutboundLink")],1),t._v(" 文件里定义 Builder 的 "),s("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-alias"}},[t._v("source.alias")]),t._v(" 配置：")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modern.config.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@common'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("常用的框架配置文件包括：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("框架")]),t._v(" "),s("th",[t._v("配置文件")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Modern.js 2.0")]),t._v(" "),s("td",[s("code",[t._v("modern.config.ts")])])]),t._v(" "),s("tr",[s("td",[t._v("EdenX")]),t._v(" "),s("td",[s("code",[t._v("edenx.config.ts")])])]),t._v(" "),s("tr",[s("td",[t._v("PIA")]),t._v(" "),s("td",[s("code",[t._v("pia.config.ts")])])])])]),t._v(" "),s("h3",{attrs:{id:"通过-node-api-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-node-api-使用"}},[t._v("#")]),t._v(" 通过 Node API 使用")]),t._v(" "),s("p",[t._v("当你通过 Node API 调用 Builder 时，你可以通过 Provider 的 "),s("code",[t._v("builderConfig")]),t._v(" 配置项来传入 Builder 配置：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" builderWebpackProvider "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder-webpack-provider'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builderWebpackProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  builderConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some configs")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("关于 Node API 的完整用法，请参考 "),s("RouterLink",{attrs:{to:"/zh/api/builder-core.html#createbuilder"}},[t._v("API - createBuilder")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"与框架配置的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与框架配置的关系"}},[t._v("#")]),t._v(" 与框架配置的关系")]),t._v(" "),s("p",[t._v("通常来说，Builder 配置是框架配置的子集。")]),t._v(" "),s("p",[s("strong",[t._v("Builder 配置只处理构建相关行为")]),t._v("，而框架配置涵盖的范围更大，还包括运行时、服务端、部署等方面，因此框架是在 Builder 配置的基础上扩展出来的。")]),t._v(" "),s("h2",{attrs:{id:"调试配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试配置"}},[t._v("#")]),t._v(" 调试配置")]),t._v(" "),s("p",[t._v("在执行构建时，你可以添加 "),s("code",[t._v("DEBUG=builder")]),t._v(" 环境变量，来开启 Builder 的调试模式。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEBUG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("builder "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" dev\n")])])]),s("p",[t._v("在调试模式下，Builder 会将内部最终生成的 Builder 配置写入到产物目录下，便于开发者查看和调试。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Inspect config succeed, open following files to view the content:\n\n  - Builder Config: /Project/demo/dist/builder.config.js\n  - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n")])])]),s("p",[t._v("打开生成的 "),s("code",[t._v("/dist/builder.config.js")]),t._v(" 文件，即可查看 Builder 配置的完整内容。")])])}),[],!1,null,null,null);s.default=r.exports}}]);