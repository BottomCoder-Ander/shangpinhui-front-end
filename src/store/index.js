import Vue from 'vue'
import Vuex from 'vuex'

// vue插件，user一次
Vue.use(Vuex)
// 引入小仓库
import home from './home'
import search from './search'

export default new Vuex.Store({
  modules:{
    home,
    search
  }
});

