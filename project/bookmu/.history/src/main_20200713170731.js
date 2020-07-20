import Vue from 'vue'
import App from './App'
// 实现路由跳转,mpvue-router-patch
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
