const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 构建清缓存
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // 基础配置：entry（入口）、module（loader解析）、plugins（插件）、output（出口）
  // 进阶配置：resolve（查询文件）、devtool（使用source map等）、devServer（开启服务）
  entry: {
    app:'./app/js/main.js'
  },
  // devServer配置，npm install --save-dev webpack-dev-server
  devServer: {
    // 静态文件输出路径
    contentBase: path.join(__dirname, "dist"),
    // 开启gzip压缩
    compress: true,
    // 端口
    port: 9000
  },
  module: {
    rules:[
      {test:/\.html$/,use:'html-loader'},
      {test:/\.vue$/,use:'vue-loader'},
      {
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]'
              }
            }, {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }, {
          use: [
            'vue-style-loader',
            'css-loader', {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }],
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    })
  ],
  output: {
    filename: '[name].min.js',
    path:path.resolve(__dirname,'/dist')
  }
}