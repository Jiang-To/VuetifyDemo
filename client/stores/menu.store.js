import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [{
      title: 'Login',
      path: '/login'
    }, {
      title: 'fake',
      path: '/fake'
    }]
  },
  strict: true
});
