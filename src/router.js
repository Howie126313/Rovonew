/*
 * @Author: Howie 
 * @Date: 2019-10-07 17:46:25 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-11 11:22:25
 */

import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`)
}

const router = new Router({
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: loadView('home')
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: loadView('aboutus')
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: loadView('joinus')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: loadView('contactus')
    }
  ]
})

export default router

