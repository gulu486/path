import Vue from 'vue';
import router from './router';
import App from './App.vue';

// 声明当前不是生产环境
Vue.config.productionTip=false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')