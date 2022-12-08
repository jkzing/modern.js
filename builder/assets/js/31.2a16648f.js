(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{254:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"inline-static-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-static-assets"}},[t._v("#")]),t._v(" Inline Static Assets")]),t._v(" "),s("p",[t._v("Inline static assets refer to the practice of including the content of a static asset directly in a HTML or JS file, instead of linking to an external file. This can improve the performance of a website by reducing the number of HTTP requests that the browser has to make to load the page.")]),t._v(" "),s("p",[t._v("However, static resource inlining also has some disadvantages, such as increasing the size of a single file, which may lead to slower loading. Therefore, in the actual scenario, it is necessary to decide whether to use static resource inlining according to the specific situation.")]),t._v(" "),s("p",[t._v("Builder will automatically inline static assets that are less than 10KB, but sometimes you may need to manually control assets to force them to be inlined or not, and this document explains how to precisely control the inlining behavior of static assets.")]),t._v(" "),s("h2",{attrs:{id:"automatic-inlining"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatic-inlining"}},[t._v("#")]),t._v(" Automatic Inlining")]),t._v(" "),s("p",[t._v("By default, Builder will inline assets when the file size of is less than a threshold (the default is 10KB). When inlined, the asset will be converted to a Base64 encoded string and will no longer send a separate HTTP request. When the file size is greater than this threshold, it is loaded as a separate file with a separate HTTP request.")]),t._v(" "),s("p",[t._v("The threshold can be modified with the "),s("RouterLink",{attrs:{to:"/en/api/config-output.html#output-dataurilimit"}},[t._v("output.dataUriLimit")]),t._v(" config. For example, set the threshold of images to 5000 Bytes, and set media assets not to be inlined:")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dataUriLimit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      media"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Infinite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"force-inlining"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#force-inlining"}},[t._v("#")]),t._v(" Force Inlining")]),t._v(" "),s("p",[t._v("You can force an asset to be inlined by adding the "),s("code",[t._v("inline")]),t._v(" query when importing the asset, regardless of whether the asset's size is smaller than the size threshold.")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. /foo.png?inline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the above example, the "),s("code",[t._v("foo.png")]),t._v(" image will always be inlined, regardless of whether the size of the image is larger than the threshold.")]),t._v(" "),s("p",[t._v("In addition to the "),s("code",[t._v("inline")]),t._v(" query, you can also use the "),s("code",[t._v("__inline")]),t._v(" query to force inlining of the asset:")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. /foo.png?__inline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"referenced-from-css-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referenced-from-css-file"}},[t._v("#")]),t._v(" Referenced from CSS file")]),t._v(" "),s("p",[t._v("When you reference a static asset in your CSS file, you can also force inline the asset with the "),s("code",[t._v("inline")]),t._v(" or "),s("code",[t._v("__inline")]),t._v(" queries.")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'. /icon.png?inline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do you really need to force inlining?")]),t._v(" "),s("p",[t._v("Inline large assets will significantly increase the first paint time or first contentful paint time of a page, which will hurt user experience. And when you inline a static asset multiple times into a CSS file, the base64 content will be repeatedly injected, causing the bundle size to grow . Please use forced inlining with caution.")])]),t._v(" "),s("h2",{attrs:{id:"force-no-inlining"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#force-no-inlining"}},[t._v("#")]),t._v(" Force no inlining")]),t._v(" "),s("p",[t._v("When you want to always treat some assets as separate files, no matter how small the asset is, you can add the "),s("code",[t._v("url")]),t._v(" query to force the asset not to be inlined.")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. /foo.png?url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the above example, the "),s("code",[t._v("foo.png")]),t._v(" image will always be loaded as a separate file, even if the size of the image is smaller than the threshold.")]),t._v(" "),s("p",[t._v("In addition to the "),s("code",[t._v("url")]),t._v(" query, you can also use the "),s("code",[t._v("__inline=false")]),t._v(" query to force the asset not to be inlined:")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. /foo.png?__inline=false'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"referenced-from-css-file-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referenced-from-css-file-2"}},[t._v("#")]),t._v(" Referenced from CSS file")]),t._v(" "),s("p",[t._v("When you reference a static asset in your CSS file, you can also force the asset not to be inlined with "),s("code",[t._v("url")]),t._v(" or "),s("code",[t._v("__inline=false")]),t._v(" queries.")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'. /icon.png?url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Do you really need to exclude assets from inlining?")]),t._v(" "),s("p",[t._v("Excluding assets from inlining will increase the number of assets that the Web App needs to load. This will reduce the efficiency of loading assets in a weak network environment or in scenarios where HTTP2 is not enabled. Please use force no Inline with caution.")]),t._v(" "),s("h2",{attrs:{id:"inline-js-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-js-files"}},[t._v("#")]),t._v(" Inline JS files")]),t._v(" "),s("p",[t._v("In addition to inlining static resource files into JS files, Builder also supports inlining JS files into HTML files.")]),t._v(" "),s("p",[t._v("Just enable the "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-enableinlinescripts"}},[t._v("output.enableInlineScripts")]),t._v(" config, and the generated JS files will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file.")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enableInlineScripts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Inline JS files may cause the single HTML file to be too large, and it will break the HTTP caching. Please use it with caution.")])])]),t._v(" "),s("h2",{attrs:{id:"inline-css-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-css-files"}},[t._v("#")]),t._v(" Inline CSS files")]),t._v(" "),s("p",[t._v("You can also inline CSS files into HTML files.")]),t._v(" "),s("p",[t._v("Just enable the "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-enableinlinestyles"}},[t._v("output.enableInlineStyles")]),t._v(" config, the generated CSS file will not be written into the output directory, but will be directly inlined to the corresponding in the HTML file.")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enableInlineStyles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);