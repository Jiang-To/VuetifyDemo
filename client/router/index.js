import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/users/Login'
import Logout from '@/components/users/Logout'
import Fake from '@/components/Fake'

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
      path: '/fake*',
      component: Fake
    }, {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})

