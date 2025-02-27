# 使用 Storybook

[Storybook](https://storybook.js.org/) 是一个专门用于组件调试的工具，它围绕着组件开发提供了：

- 丰富多样的调试能力
- 可与一些测试工具结合使用
- 可重复使用的文档内容
- 可分享能力
- 工作流程自动化

在使用 Storybook 时，难免会遇到各种配置问题，需要手动配置 Babel 插件，手动配置 Webpack 去支持 less，sass 等。而 Modern.js builder 包含了许多强大的功能，使用 Modern.js builder 开发 Storybook 项目会极大的简化配置成本。

使用 Modern.js builder 还可以一键在 Webpack 和 Rspack 之间进行切换。对于使用 Modern.js builder 开发应用的用户，也可以很方便的直接使用现有的 Modern.js 配置用 Storybook 进行组件的测试。

## 快速开始

在开始之前，当前 Storybook 支持底层使用 Webpack 或是 Rspack 进行构建，根据你的需求安装下列任何一个包：

- @modern-js/builder-webpack-provider： 使用 Webpack 构建，更好的兼容性
- @modern-js/builder-rspack-provider：使用 Rspack 构建，极致的启动速度（推荐）

### 在 Modern.js 项目中使用, 没有使用过 Storybook 插件(@modern-js/plugin-storybook)

如果没有使用旧版本 Storybook 插件， 情直接使用如下命令开启 Storybook 功能。

```bash
$ npx modern new
? 请选择你想要的操作 启用可选功能
? 请选择功能名称 启用「Storybook」V7
```

该命令会创建好 Storybook 常用的模版，包括

- 创建配置文件夹 `.storybook`，以及默认配置文件 `.storybook/main.ts`
- 创建 stories 组件示例
- 更新 package.json，新增依赖 @storybook/addon-essential 和 @modern-js/storybook，以及创建 storybook 相关脚本

运行 `npm run storybook` 即可启动 Storybook 预览。

### 从 @modern-js/plugin-storybook 迁移

你仍然可以运行上方的命令，来创建模版以及修改 package.json，也可以手动升级。

若你在旧版本对 storybook 进行了一些自定义配置，需要将配置文件 `root/config/storybook/main.(j|t)s` 移动到 `root/.storybook/main.(j|t)s`。

并在 `root/.storybook/main.(j|t)s` 中添加以下配置，指定 framework 为 @modern-js/storybook：

```diff
const config = {
+  framework: {
+    name: '@modern-js/storybook'
+  },
};

export default config;
```

升级 @storybook/addon-\* 系列依赖，升级到 7 版本。

最后按照 Storybook 官网文档，对一些 breaking change 做相应的更新，例如 stories 的写法，MDX 的写法等，参考[storybook 迁移文档](https://storybook.js.org/docs/react/migration-guide)。

在项目的 package.json 中添加相应的命令

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
  }
}
```

使用 `npm run storybook` 即可启动

### 原生 Storybook 项目，没有使用 Modern.js

若当前 Storybook 版本还是 6，需要先按照 Storybook 官网文档升级到版本 7 ，参考[storybook 迁移文档](https://storybook.js.org/docs/react/migration-guide)。

```diff filename='.storybook/main.js'
const config = {
-  framework: '@storybook/react-webapck5',
+  framework: {
+    name: '@modern-js/storybook'
+  },
};

export default config;
```

Modern.js 的配置文件默认为 `modern.config.(j|t)s`，配置请查看 [builder 配置](https://modernjs.dev/builder/guide/basic/builder-config.html)。

若原来项目中包含了 Babel 等配置，需要对应的写在 modern 配置中，大部分 Babel 配置已经包含进了 Modern.js。

安装完成后进行相应的[配置](/guide/advanced/storybook#bundler)。

## 开启 Rspack 构建

Rspack 构建速度非常快，在 Modern.js 中只需要如下配置即可使用 Rspack 作为构建工具。

```diff filename='.storybook/main.js'
const config = {
  framework: {
    name: '@modern-js/storybook',
    options: {
-      bundler: 'webpack'
+      bundler: 'rspack'
    },
  },
  typescript: {
-    reactDocgen: 'react-docgen-typescript'
+    reactDocgen: 'react-docgen'
  }
};

export default config;
```

注意上面配置中，更改了 reactDocgen 配置，因为 Rspack 目前还不支持 @storybook/react-docgen-typescript-plugin。
在启动前，确保已安装 @modern-js/builder-rspack-provider 包。

## 配置

在 `.storybook/main.js` 中包含一些配置。

### configPath

- **类型**: `string`
- **默认值**: `modern.config.(j|t)s`

用于指定配置文件路径。

例如

```javascript filename='.storybook/main.js'
const config = {
  framework: {
    name: '@modern-js/storybook',
    options: {
      configPath: 'modern.storybook.config.ts'
    }
  }
};

export default config;
```

### bundler

- **类型**: `'webpack' | 'rspack'`
- **默认值**: `webpack`

指定底层构建工具使用 Webpack 还是 Rspack。请确保安装了对应的 provider，使用 Webpack 请安装 @modern-js/builder-webpack-provider，使用 Rspack 请安装 @modern-js/builder-rspack-provider。

例如

```javascript filename='.storybook/main.js'
const config = {
  framework: {
    name: '@modern-js/storybook',
    options: {
      bundler: 'rspack'
    }
  }
};

export default config;
```

### builderConfig

- **类型**: `BuilderConfig`
- **默认值**: `undefined`

更改 builder 的配置，该配置比配置文件拥有更高的优先级，若不想使用配置文件，也可直接在此处指定 Modern.js builder 配置。

例如

```javascript filename='.storybook/main.js'
const config = {
  framework: {
    name: '@modern-js/storybook',
    options: {
      builderCofnig: {
        alias: {
          react: require.resolve('react'),
          'react-dom': require.resolve('react-dom'),
        }
      }
    }
  }
};

export default config;
```

## 命令行

@modern-js/storybook 代理了部分 storybook cli 的命令。

### storybook dev

启动 Storybook，详情请看 <https://storybook.js.org/docs/react/api/cli-options#dev>

### storybook build

对 Storybook 进行生产环境构建，详情请看 <https://storybook.js.org/docs/react/api/cli-options#build>

## 配置文件

配置文件中除了 Modern.js builder 配置还包含一个额外的字段，builderPlugins，方便使用 builder 插件，例如启用 SWC 编译。

```typescript filename='modern.config.ts'
import { defineConfig } from '@modern-js/storybook';
import { builderPluginSwc } from '@modern-js/builder-plugin-swc';

const config = defineConfig({
  builderPlugins: [builderPluginSwc()]
});

export default config;
```

## Storybook addon 兼容性

由于当前文档中的 Storybook 版本为 7，因此请选择 storybook V7 的 addon。

当 addon 不需要额外的 Babel 或 Webpack 配置时，可以直接使用，如 @storybook/addon-essentials。

部分 addon 需要依赖 babel 插件和 Webpack 配置时，如 @storybook/addon-coverage，只能使用 @modern-js/builder-webpack-provider 才有支持。

## 收益

使用 @modern-js/storybook 可以带给你 Rspack 超快的构建，并且完全无需繁琐配置，开箱即用。并且默认包含了许多 Web 构建中的最佳实践，例如 code splitting 策略，内置 css module 和 postcss，开箱即用的 TypeScript 支持，内置常用 Babel 插件等等。

Modern.js builder 强大的能力都可以直接在 Storybook 项目中使用。

## Trouble Shooting

1. 使用 Modern.js builder 时不会读取 babel.config.json 等配置文件，因此 babel 配置需要在 [tools.babel](/api/config-tools.html#toolsbabel) 中进行配置。
同样的 webpack 配置需要写在 [tools.webpack](/api/config-tools.html#toolswebpack) 或 [tools.webpackChain](/api/config-tools.html#toolswebpackchain) 中。

2. 如果发现构建速度很慢，请检查是否开启了自动文档生成功能，如果想要最高的性能，请配置为 `react-docgen`。`react-docgen` 和 `react-docgen-typescript` 的区别是，前者基于 Babel 实现，后者基于 TypeScript 实现，前者性能会更好，但类型推断能力更弱。如果使用 Rspack 构建，则只支持 `react-docgen`。

```javascript filename='.storybook/main.js'
const config = {
  typescript: {
    reactDocgen: 'react-docgen'
  }
}

export default config
```
