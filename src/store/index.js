'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_EVN !== 'production'

export default new Vuex.Store({
  modules: {
    auth
  },
  strict: debug
})
