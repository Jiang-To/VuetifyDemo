'use strict'

export default {
  loadUserFromLocalStorage: () => {
    return JSON.parse(localStorage.getItem('user'))
  },
  setUserToLocalStorage: (user) => {
    localStorage.setItem('user', JSON.stringify(user))
  },
  removeUserToLocalStorage: () => {
    localStorage.removeItem('user')
  }
}
