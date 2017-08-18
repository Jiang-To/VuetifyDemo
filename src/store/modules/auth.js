'use strict'

import authUtils from '../../utils/auth.js'
import types from '../types.js'

// initial status
const state = {
  user: authUtils.loadUserFromLocalStorage() || null,
  error: '',
  isAuthenticating: false
}

// getters
const getters = {
  currentUser: state => state.user,
  isAuthenticated: state => (state.user !== null && state.user !== undefined),
  authError: state => state.error,
  isAuthenticating: state => state.isAuthenticating
}

// mutations (only way to mutation the state)
const mutations = {
  setUser: (state, user) => {
    authUtils.setUserToLocalStorage(user)
    state.user = user
  },
  removeUser: (state) => {
    authUtils.removeUserToLocalStorage()
    state.user = null
  },
  setError: (state, error) => {
    state.error = error
  },
  cleanError: (state) => {
    state.error = null
  },
  setAuthenticating: (state, status) => {
    state.isAuthenticating = status
  }
}

// actions  (all component should call action functions with $store.dispatch(xxx))
const actions = {
  [types.auth.login] ({commit}, credential) {
    let { username, password } = credential

    commit('cleanError')
    commit('setAuthenticating', true)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((username === 'demo' && password === 'Password!') ||
            (username === 'guest' && password === '1234')) {
          commit('setUser', {username: username})
          commit('setAuthenticating', false)
          resolve()
        } else {
          commit('setError', 'invalid username or password')
          commit('setAuthenticating', false)
          reject()
        }
      }, (Math.random() * 1000))
    })
  },
  [types.auth.logout] ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('removeUser')
      resolve()
    })
  },
  [types.auth.cleanError] ({
    commit
  }) {
    commit('cleanError')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
