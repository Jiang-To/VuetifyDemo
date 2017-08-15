'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import utils from '@/utils/auth.utils.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: utils.loadUserFromLocalStorage(),
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
        utils.setUserToLocalStorage(user);
        state.user = user
      }
    },
    setError: (state, error) => {
      if (error !== null && error !== undefined) {
        state.error = error;
      }
    },
    removeUser: (state) =>{
      utils.removeUserToLocalStorage();   
      state.user = null;
    }
  },
  actions: {
    login: ({ commit }, credential) => {
      let { username, password } = credential
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'demo' && password === 'Password!') {
            commit('setUser', { username: 'demo' });
            resolve();
          } else {
            commit('setError', 'invalid username or password');
            reject();
          }
        }, (Math.random() * 1000))
      })
    },
    logout: ({ commit }) =>{
      return new Promise((resolve, reject) => {
          commit('removeUser');
          resolve();
      })
    }
  }
});