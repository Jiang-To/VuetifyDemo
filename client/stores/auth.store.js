'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let loadUserFromLocalStorage = () =>{
  return JSON.parse(localStorage.getItem('user'))
}

let setUserToLocalStorage = (user) =>{
  localStorage.setItem('user', JSON.stringify(user));
}

let removeUserToLocalStorage = () =>{
  localStorage.removeItem('user');
}

export default new Vuex.Store({
  state: {
    user: loadUserFromLocalStorage(),
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
        setUserToLocalStorage(user);
        state.user = user
      }
    },
    setError: (state, error) => {
      if (error !== null && error !== undefined) {
        state.error = error;
      }
    },
    removeUser: (state) =>{
      removeUserToLocalStorage();   
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