qianguyihao

<img src="https://camo.githubusercontent.com/6e97c50a36095918c819119d8cb402e214d3581e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303432305f323135302e706e67"/>

```
mvvm模式
Model：负责数据存储
View：负责页面展示
View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
```

Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念）

```
Vue框架的特点
模板渲染：基于 html 的模板语法，学习成本低。
响应式的更新机制：数据改变之后，视图会自动刷新。【重要】
渐进式框架
组件化/模块化
轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到60kb）
```

```
Vue 的环境搭建
我们首先要安装好 NVM、Node.js环境，然后再来做下面的操作。
常见的插件
Webpack：代码模块化构建打包工具。
Gulp：基于流的自动化构建工具。
Babel：使用最新的 规范来编写 js。
Vue：构建数据驱动的Web界面的渐进式框架
Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。
以上这些包，都可以通过 NPM 这个包管理工具来安装。
```

```js
利用 vue-cli 新建一个空的项目
Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

# 全局安装 vue-cli
$ npm install -g @vue/cli
vue create my-app
```

备注：我们在 GitHub上下载的任何Vue有关的项目，第一步都是要首先执行 npm install，安装依赖的 mode_modules，然后再运行。我们发给同事的工程文件，建议不要包含 node_modules。

```
buid：打包配置的文件夹
config：webpack对应的配置
src：开发项目的源码
App.vue：入口组件。.vue文件都是组件。
main.js：项目入口文件。
static：存放静态资源
.babelrc：解析ES6的配置文件
.editorcofnig：编辑器的配置
.postcssrc.js：html添加前缀的配置
index.html：单页面的入口。通过 webpack打包后，会把 src 源码进行编译，插入到这个 html 里面来。
package.json：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等。
```

```
图片的base64编码
默认是10k以下，建议都通过 base64编码。在配置文件webpack.base.conf.js中进行修改：

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
```