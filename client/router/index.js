import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/users/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }, {
      path: '/hidden',
      component: Login
    }, {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})

