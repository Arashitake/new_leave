import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 开始给vuex中定义响应式全局数据共享对象this.$store
export default new Vuex.Store({
  // 定义响应式的数据，就类似于data，是全局
  state: {
    // 存储token
    user: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')): ''
  },
  // 定义改变state数据的行为
  mutations: {
    // 修改token，并将token存入localStorage
    login(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  // actions是处理异步数据加载和提交mutations的机制。间接改变state
  // 注意：不能直接更改state的数据，更改的方式通过commit("mutations定义的事情")
  actions: {
    // 改变state的数据状态，异步：参数this.$store.commit('mutationHandler', payload);

  },
  getters: {},
  modules: {
  }
})
