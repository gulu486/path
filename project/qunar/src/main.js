// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端300毫秒点击延迟处理fastclick库,新版chrome一解决.配置html{touch-action:manipulation}
// import fastClick from 'fastclick'
// 全局引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入store文件
import store from './store'
// 兼容es6，手机白屏问题
import 'babel-polyfill'
// 引入reset.css基础样式配置
import 'styles/reset.css'
// 1像素边框解决
import 'styles/border.css'
// 引入iconfont.css
import 'styles/iconfont.css'
// 引入swiper.css
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// fastClick方法
// fastClick.attach(document.body)
// 使用VueAwesomeSwiper，后面可以跟一些参数
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 传入
  router,
  store,
  components: { App },
  template: '<App/>'
})
