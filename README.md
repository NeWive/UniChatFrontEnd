# UniChatFrontEnd 说明文档
## 项目简介
- 基于 `@vue/cli`, `vue-router`, `vuex`, `electron`
- 第一次使用项目需要安装依赖，运行一下脚本
```shell script
# 请不要使用cnpm安装依赖，可能会出现玄学bug
# 如果安装速度较慢，请将npm 换源至淘宝等国内npm的源
# 如果换源后还是慢请自挂东南枝
npm install
# 安装依赖成功后可以运行以下脚本
# 打开热加载服务器
npm run serve
# 热加载服务器启动后访问http://localhost:8080
# 打包发行
npm run build
```
## 项目目录说明
### `src` 源代码
- `main.js`为入口文件，挂载根节点
- `*.scss`为样式文件
- `Init.vue`为根节点
- `background.js`为electron相关内容
#### `assets` 静态图片内容
#### `sassUtils`sass 复用Mixin
- `cleatFixMixin.scss` 清除浮动Mixin
- `fontMixin.scss` 文字样式Mixin
- `overFlow` overflow 相关Mixin
#### sassConfig
#### `module` 复用函数
- `debounce.js` 函数防抖
#### `config` 配置文件
- `list.config.js` 大部分静态文字内容以及部分测试数据
- `route.config.js` 路由配置
- `store.config.js` 全局状态管理
- `validate.config.js` 正则相关
#### `components`主组件
##### `elements` 子组件
## [UniChatBackEnd](https://github.com/OhnkytaBlabdey/unichat-back-end) Github 联动
