import Vue from 'vue'
// 引入vuex插件
import Vuex from 'vuex'
// 引入js包
import state from './state'
// import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// 导出Store
export default new Vuex.Store({
  state,
  // actions,
  mutations,
  getters
})
