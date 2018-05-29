import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import profile from '@/components/profile'
import stat from '@/components/stat'
import Eat from '@/components/Eat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/stat',
      name: 'stat',
      component: stat
    },
    {
      path: '/Eat',
      name: 'Eat',
      component: Eat
    }
  ]
})
