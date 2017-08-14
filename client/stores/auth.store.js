'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: ''
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    isAuthenticated: (state) => {
      return (state.user !== null)
    }
  },
  mutations: {
    setUser: (state, user) => {
      if (user !== null && user !== undefined) {
        state.user = user
      }
    },
    setError: (state, error) => {
      if (error !== null && error !== undefined) {
        state.error = error;
      }
    }
  },
  actions: {
    login: ({ commit }, credential) => {
      let { username, password } = credential

      //fake action here
      setTimeout(() => {
        if (username === 'demo' && password === 'Password!') {
          commit('setUser', { username: 'demo' });
        } else {
          commit('setError', 'invalid username or password');
        }
      }, 1500)
    }
  }
});