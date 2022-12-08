(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{260:function(e,t,a){"use strict";a.r(t);var s=a(4),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"builder-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#builder-config"}},[e._v("#")]),e._v(" Builder Config")]),e._v(" "),t("p",[e._v("Builder provides a wealth of configs to help users customize the build behavior.")]),e._v(" "),t("h2",{attrs:{id:"config-categories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-categories"}},[e._v("#")]),e._v(" Config Categories")]),e._v(" "),t("p",[e._v("Builder Configs are divided into the following categories:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/api/config-dev.html"}},[e._v("Dev Config")]),e._v(": Config related to local development.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/config-html.html"}},[e._v("Html Config")]),e._v(": Config related to HTML.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/config-tools.html"}},[e._v("Tools Config")]),e._v(": Config related to the low-level tools.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/config-source.html"}},[e._v("Source Config")]),e._v(": Config related to source code.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/config-output.html"}},[e._v("Output Config")]),e._v(": Config related to output.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/config-security.html"}},[e._v("Security Config")]),e._v(": Config related to security.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/config-performance.html"}},[e._v("Performance Config")]),e._v(": Config related to performance.")],1)]),e._v(" "),t("p",[e._v("You can find detailed descriptions of all configs on the "),t("RouterLink",{attrs:{to:"/en/api/"}},[e._v("API Reference")]),e._v(" page.")],1),e._v(" "),t("h2",{attrs:{id:"default-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-values"}},[e._v("#")]),e._v(" Default Values")]),e._v(" "),t("p",[e._v("The Builder presets a default value for each config, and the default value is suitable for most scenarios. At the same time, the upper-level framework will also override some of the default values based on the requirements of the vertical scene.")]),e._v(" "),t("p",[e._v("In most cases, you don't need to define any Builder config, just use it right out of the box.")]),e._v(" "),t("h2",{attrs:{id:"use-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-config"}},[e._v("#")]),e._v(" Use Config")]),e._v(" "),t("h3",{attrs:{id:"in-the-upper-framework"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-the-upper-framework"}},[e._v("#")]),e._v(" In the Upper Framework")]),e._v(" "),t("p",[e._v("When you use a Builder-based upper-level framework, you can define the Builder config directly through the framework's config file, and the upper-level framework will pass the config to the Builder.")]),e._v(" "),t("p",[e._v("For example, in the Modern.js 2.0 framework, you can define the Builder's "),t("RouterLink",{attrs:{to:"/en/api/config-source.html#source-alias"}},[e._v("source.alias")]),e._v(" config in "),t("a",{attrs:{href:"https://modernjs.dev/docs/apis/app/config/usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("modern.config.ts"),t("OutboundLink")],1),e._v(" file.")],1),e._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// modern.config.ts")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  source"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v("'@common'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./src/common'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Commonly used framework config files include:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Framework")]),e._v(" "),t("th",[e._v("Config File")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Modern.js 2.0")]),e._v(" "),t("td",[t("code",[e._v("modern.config.ts")])])]),e._v(" "),t("tr",[t("td",[e._v("EdenX")]),e._v(" "),t("td",[t("code",[e._v("edenx.config.ts")])])]),e._v(" "),t("tr",[t("td",[e._v("PIA")]),e._v(" "),t("td",[t("code",[e._v("pia.config.ts")])])])])]),e._v(" "),t("h3",{attrs:{id:"using-the-node-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-node-api"}},[e._v("#")]),e._v(" Using the Node API")]),e._v(" "),t("p",[e._v("When you call the Builder through the Node API, you can pass in the Builder config through the Provider's "),t("code",[e._v("builderConfig")]),e._v(" option:")]),e._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" builderWebpackProvider "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@modern-js/builder-webpack-provider'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" provider "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("builderWebpackProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  builderConfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// some configs")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Please refer to "),t("RouterLink",{attrs:{to:"/en/api/builder-core.html#createbuilder"}},[e._v("API - createBuilder")]),e._v(" for details.")],1),e._v(" "),t("h2",{attrs:{id:"relationship-with-framework-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relationship-with-framework-config"}},[e._v("#")]),e._v(" Relationship with Framework Config")]),e._v(" "),t("p",[e._v("Generally speaking, the Builder config is a subset of the framework config.")]),e._v(" "),t("p",[t("strong",[e._v("Builder config only deals with build-related behaviors")]),e._v(", while framework config covers a wider range, including runtime, server, deployment, etc., so framework config is extended from Builder config.")]),e._v(" "),t("h2",{attrs:{id:"debug-the-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-the-config"}},[e._v("#")]),e._v(" Debug the config")]),e._v(" "),t("p",[e._v("You can enable Builder's debug mode by adding the "),t("code",[e._v("DEBUG=builder")]),e._v(" environment variable when executing a build.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DEBUG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("builder "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("pnpm")]),e._v(" dev\n")])])]),t("p",[e._v("In debug mode, Builder will write the Builder config to the dist directory, which is convenient for developers to view and debug.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Inspect config succeed, open the following files to view the content:\n\n   - Builder Config: /Project/demo/dist/builder.config.js\n   - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n")])])]),t("p",[e._v("Open the generated "),t("code",[e._v("/dist/builder.config.js")]),e._v(" file to see the complete content of the Builder config.")])])}),[],!1,null,null,null);t.default=r.exports}}]);