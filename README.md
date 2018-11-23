# Node-Babel-Jest-Startkit

搭建 Node + Babel7 + Jest 的脚手架，用于开发试验 Node 应用。使用 airbnb/babel-preset-airbnb 做 Babel 配置，不去拼凑各种 Babel 插件和配置文。

该脚手架依赖的库包只有：

包名|版本|描述
--|:--:|--
@babel/cli | ^7.1.5 | Babel 命令工具
@babel/core | ^7.1.6 | Babel 核心包
babel-core | 7.0.0-bridge.0 | Babel7 与 Babel6 兼容包
babel-jest | ^23.6.0 | Babel 与 Jest 联姻包
babel-preset-airbnb | ^3.0.1 | 来自 airbnb 的 Babel 预设包
jest | ^23.6.0 | Jest 测试套件
regenerator-runtime | ^0.13.1 | 用于 generator、 async 函数的运行时支持包

项目操作命令：

1. 使用 `yarn build` 构建项目，将 src/ 目录下的 js 文件转译到 lib/ 目录，命令详请：

```
node ./node_modules/.bin/babel ./src --out-dir ./lib
```

2. 使用 `yarn start` 运行主脚本，即 lib/main.js ，命令详请：

```
node ./lib/main.js
```

3. 使用 `yarn test` 测试 src/ 目录的 *.test.js 文件，命令详请：

```
node ./node_modules/.bin/jest ./src
```

另外，可执行 `yarn build:watch` 在文件改动时实时编译，执行 `yarn test:watch` 用于实时测试。

## 预设 Babel 转译功能

* ES2015 所有特性，比如 arrow-function 、for-of 、spread 等

* @babel/plugin-proposal-object-rest-spread

* @babel/plugin-transform-exponentiation-operator

* @babel/plugin-transform-jscript

* @babel/plugin-transform-member-expression-literals

* @babel/plugin-transform-property-literals

* @babel/plugin-transform-property-mutators

* @babel/plugin-transform-template-literals
