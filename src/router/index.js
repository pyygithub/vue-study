import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/m-home/m-home'
import ManageDesc from '../components/m-manage-desc/m-manage-desc'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/manageDesc',
      name: 'manageDesc',
      component: ManageDesc
    }
  ]
})
