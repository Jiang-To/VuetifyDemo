import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/users/Login'
import Logout from '@/components/users/Logout'

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
    },{
      path: '/logout',
      component: Logout
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

