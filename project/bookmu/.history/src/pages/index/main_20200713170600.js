import Vue from 'vue'
import App from './index'
// 实现路由跳转
import MpvueRouterPatch from 'mpvue-router-patch'

// 异常处理
// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

Vue.use(MpvueRouterPatch)

const app = new Vue(App)
app.$mount()
