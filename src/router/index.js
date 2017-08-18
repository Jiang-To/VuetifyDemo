import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Fake from '@/components/Fake'
import Login from '@/components/users/Login'
import Logout from '@/components/users/Logout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/logout',
    name: 'logout',
    component: Logout
  }, {
    path: '/fake*',
    name: 'fake',
    component: Fake
  }, {
    path: '*',
    redirect: '/'
  }]
  // mode: 'history'
})
