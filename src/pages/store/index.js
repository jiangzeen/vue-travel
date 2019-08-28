import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // 提供计算属性的功能,根据一些数据计算出一些需要的数据,避免数据冗余
  getters: {
    doubleCity: function () {
      return state.city + ' ' + state.city
    }
  }
})
