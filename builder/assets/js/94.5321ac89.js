(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{317:function(t,o,v){"use strict";v.r(o);var e=v(4),l=Object(e.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"功能导航"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#功能导航"}},[t._v("#")]),t._v(" 功能导航")]),t._v(" "),o("p",[t._v("在这里，你可以了解到 Modern.js Builder 支持的主要功能。")]),t._v(" "),o("h2",{attrs:{id:"javascript-编译"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#javascript-编译"}},[t._v("#")]),t._v(" JavaScript 编译")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Babel 编译")]),t._v(" "),o("td",[t._v("默认开启 Babel 编译，将 JavaScript 和 TypeScript 代码转换为向后兼容的 JavaScript 语法")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-babel"}},[t._v("tools.babel")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("TS 编译")]),t._v(" "),o("td",[t._v("默认通过 Babel 编译 TS 文件，支持切换为 "),o("code",[t._v("ts-loader")]),t._v(" 编译")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/typescript.html#typescript-转译"}},[t._v("TypeScript 转译")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-babel"}},[t._v("tools.babel")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-tsloader"}},[t._v("tools.tsLoader")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("TS 类型检查")]),t._v(" "),o("td",[t._v("默认通过 TS Checker 检查类型问题")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/typescript.html#类型检查"}},[t._v("类型检查")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-tschecker"}},[t._v("tools.tsChecker")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("JS 压缩")]),t._v(" "),o("td",[t._v("默认在生产环境构建时开启压缩")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-terser"}},[t._v("tools.terser")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("Polyfill")]),t._v(" "),o("td",[t._v("默认会注入 core-js 等 Polyfill")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-polyfill"}},[t._v("output.polyfill")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("SourceMap 生成")]),t._v(" "),o("td",[t._v("默认在生产环境构建时生成高质量 SourceMap")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-disablesourcemap"}},[t._v("output.disableSourceMap")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("文件别名")]),t._v(" "),o("td",[t._v("可选功能，通过 alias 设置文件别名")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/basic/alias.html"}},[t._v("路径别名")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-alias"}},[t._v("source.alias")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("限制源代码路径")]),t._v(" "),o("td",[t._v("可选功能，限制源代码的引用路径")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-modulescopes"}},[t._v("source.moduleScopes")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("esbuild 编译")]),t._v(" "),o("td",[t._v("可选功能，通过 esbuild 对 JavaScript 和 TypeScript 代码进行转译和压缩")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/plugins/plugin-esbuild.html"}},[t._v("esbuild 插件")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("SWC 编译")]),t._v(" "),o("td",[t._v("可选功能，通过 SWC 对 JavaScript 和 TypeScript 代码进行转译和压缩")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/plugins/plugin-swc.html"}},[t._v("SWC 插件")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("Node 产物")]),t._v(" "),o("td",[t._v("可选功能，支持构建出运行在 Node.js 环境的 JavaScript 产物")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/build-target.html#node-产物"}},[t._v("Node 产物")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("Web Worker 产物")]),t._v(" "),o("td",[t._v("可选功能，支持构建出运行在 Web Worker 环境的 JavaScript 产物")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/build-target.html#web-worker-产物"}},[t._v("Web Worker 产物")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("浏览器范围")]),t._v(" "),o("td",[t._v("可选功能，通过 browserslist 来设置 Web 应用需要兼容的浏览器范围")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/basic/browserslist.html"}},[t._v("浏览器范围")])],1)])])])])]),t._v(" "),o("h2",{attrs:{id:"css-编译"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#css-编译"}},[t._v("#")]),t._v(" CSS 编译")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("PostCSS 编译")]),t._v(" "),o("td",[t._v("默认开启 PostCSS 编译，内置 autoprefixer 等多个插件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-postcss"}},[t._v("tools.postcss")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-autoprefixer"}},[t._v("tools.autoprefixer")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("Sass 预处理")]),t._v(" "),o("td",[t._v("默认支持编译 "),o("code",[t._v(".scss")]),t._v(" 和 "),o("code",[t._v(".sass")]),t._v(" 文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-sass"}},[t._v("tools.sass")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("Less 预处理")]),t._v(" "),o("td",[t._v("默认支持编译 "),o("code",[t._v(".less")]),t._v(" 文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-less"}},[t._v("tools.less")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("CSS Modules 编译")]),t._v(" "),o("td",[t._v("默认支持编译 "),o("code",[t._v("*.module.*")]),t._v(" 文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-cssloader"}},[t._v("tools.cssLoader")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("CSS Modules 类型提示")]),t._v(" "),o("td",[t._v("可选功能，自动生成 CSS Modules 的类型定义文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-enablecssmoduletsdeclaration"}},[t._v("enableCssModuleTSDeclaration")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("CSS 压缩")]),t._v(" "),o("td",[t._v("默认在生产环境构建时开启压缩")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-minifycss"}},[t._v("tools.minifyCss")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("抽取 CSS 文件")]),t._v(" "),o("td",[t._v("默认会将 CSS 抽取为独立的文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-cssextract"}},[t._v("tools.cssExtract")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("Styled Components")]),t._v(" "),o("td",[t._v("默认支持 styled-components 编译")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-styledcomponents"}},[t._v("tools.styledComponents")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("将 CSS 插入到 JS 中")]),t._v(" "),o("td",[t._v("可选功能，通过 "),o("code",[t._v("style-loader")]),t._v(" 插入样式")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-styleloader"}},[t._v("tools.styleLoader")])],1)])])])])]),t._v(" "),o("h2",{attrs:{id:"html-编译"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html-编译"}},[t._v("#")]),t._v(" HTML 编译")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("设置标题")]),t._v(" "),o("td",[t._v("设置 HTML 的 title 标签")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/html-template.html#设置页面标题"}},[t._v("设置页面标题")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-title"}},[t._v("html.title")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-titlebyentries"}},[t._v("html.titleByEntries")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("设置 meta")]),t._v(" "),o("td",[t._v("设置 HTML 的 meta 标签")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/html-template.html#设置-meta-标签"}},[t._v("设置 meta 标签")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-meta"}},[t._v("html.meta")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-metabyentries"}},[t._v("html.metaByEntries")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("设置 favicon")]),t._v(" "),o("td",[t._v("设置页面的 favicon 图标")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/html-template.html#设置页面图标"}},[t._v("设置页面图标")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-favicon"}},[t._v("html.favicon")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-faviconbyentries"}},[t._v("html.faviconByEntries")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("设置 app 图标")]),t._v(" "),o("td",[t._v("设置 iOS 系统下的 apple icon")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/html-template.html#设置页面图标"}},[t._v("设置页面图标")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-html.html#html-appicon"}},[t._v("html.appIcon")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("使用 EJS 模板引擎")]),t._v(" "),o("td",[t._v("可选功能，使用 EJS 模板语法")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/html-template.html#ejs"}},[t._v("模板引擎 - EJS")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("使用 Pug 模板引擎")]),t._v(" "),o("td",[t._v("可选功能，使用 Pug 模板语法")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/guide/basic/html-template.html#pug"}},[t._v("模板引擎 - Pug")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("内联 JS 文件")]),t._v(" "),o("td",[t._v("可选功能，将 JS 内联到 HTML 中")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/advanced/inline-assets.html"}},[t._v("静态资源内联")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-enableinlinescripts"}},[t._v("output.enableInlineScripts")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("内联 CSS 文件")]),t._v(" "),o("td",[t._v("可选功能，将 CSS 内联到 HTML 中")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/advanced/inline-assets.html"}},[t._v("静态资源内联")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-enableinlinestyles"}},[t._v("output.enableInlineStyles")])],1)])])])])]),t._v(" "),o("h2",{attrs:{id:"开发调试相关"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#开发调试相关"}},[t._v("#")]),t._v(" 开发调试相关")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("自动打开页面")]),t._v(" "),o("td",[t._v("可选功能，在启动 Dev Server 时自动在浏览器中打开页面 URL")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-dev.html#dev-starturl"}},[t._v("dev.startUrl")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("HTTPS Dev Server")]),t._v(" "),o("td",[t._v("可选功能，开启 Dev Server 对 HTTPS 的支持")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-dev.html#dev-https"}},[t._v("dev.https")])],1)])])])])]),t._v(" "),o("h2",{attrs:{id:"react-相关"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#react-相关"}},[t._v("#")]),t._v(" React 相关")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("React Refresh")]),t._v(" "),o("td",[t._v("默认支持 React Refresh 热更新")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-dev.html#dev-hmr"}},[t._v("dev.hmr")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("SVG 转 React 组件")]),t._v(" "),o("td",[t._v("默认支持在 React 组件中引用 SVG 作为组件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/basic/svg-assets.html"}},[t._v("引用 SVG 资源")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-svgdefaultexport"}},[t._v("output.svgDefaultExport")])],1)])])])])]),t._v(" "),o("h2",{attrs:{id:"静态资源相关"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#静态资源相关"}},[t._v("#")]),t._v(" 静态资源相关")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("引用图片资源")]),t._v(" "),o("td",[t._v("支持在代码中引用图片资源")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/basic/static-assets.html"}},[t._v("引用静态资源")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("引用字体资源")]),t._v(" "),o("td",[t._v("支持在代码中引用字体资源")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/basic/static-assets.html"}},[t._v("引用静态资源")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("引用视频资源")]),t._v(" "),o("td",[t._v("支持在代码中引用视频资源")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/basic/static-assets.html"}},[t._v("引用静态资源")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("静态资源内联")]),t._v(" "),o("td",[t._v("默认将体积较小的图片等资源内联到 JS 中")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/advanced/inline-assets.html"}},[t._v("静态资源内联")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-dataurilimit"}},[t._v("output.dataUriLimit")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("清理静态资源")]),t._v(" "),o("td",[t._v("每次开始构建前，自动清理 dist 目录下的静态资源")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-cleandistpath"}},[t._v("output.cleanDistPath")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("拷贝静态资源")]),t._v(" "),o("td",[t._v("可选功能，将静态资源拷贝到 dist 目录下")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-copy"}},[t._v("output.copy")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("生成 manifest 文件")]),t._v(" "),o("td",[t._v("可选功能，生成包含静态资源信息的 manifest 文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-enableassetmanifest"}},[t._v("output.enableAssetManifest")])],1)])])])])]),t._v(" "),o("h2",{attrs:{id:"性能相关"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#性能相关"}},[t._v("#")]),t._v(" 性能相关")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("功能")]),t._v(" "),o("th",[t._v("描述")]),t._v(" "),o("th",[t._v("相关链接")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("产物自动拆包")]),t._v(" "),o("td",[t._v("Builder 中内置了多种拆包策略，自动将代码包拆分为体积适中的文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/advanced/split-chunk.html"}},[t._v("拆包最佳实践")])],1),o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-chunksplit"}},[t._v("performance.chunkSplit")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("展示产物体积")]),t._v(" "),o("td",[t._v("在生产环境构建后，默认展示所有静态资源的体积信息")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-printfilesize"}},[t._v("performance.printFileSize")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("分析产物体积")]),t._v(" "),o("td",[t._v("可选功能，通过 Bundle Analyzer 分析产物体积")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-bundleanalyze"}},[t._v("performance.bundleAnalyze")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("移除 console")]),t._v(" "),o("td",[t._v("可选功能，移除代码中的 "),o("code",[t._v("console.xx")])]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-removeconsole"}},[t._v("performance.removeConsole")])],1)])])]),t._v(" "),o("tr",[o("td",[t._v("优化 moment.js 体积")]),t._v(" "),o("td",[t._v("可选功能，移除 moment.js 多余的 locale 文件")]),t._v(" "),o("td",[o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-removemomentlocale"}},[t._v("performance.removeMomentLocale")])],1)])])])])])])}),[],!1,null,null,null);o.default=l.exports}}]);