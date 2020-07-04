import Vue from 'vue'
import Router from 'vue-router'
// 引入Home组件
// import Home from '@/pages/home/Home'
// 引入City组件
// import City from '@/pages/city/City'
// 引入Detail组件
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // 异步组件加载
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    // 动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
    // 传递参数
    // props: true
  }, {
    path: '/*',
    redirect: to => {
      return '/'
    }
  }],
  // 滚动行为，顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
