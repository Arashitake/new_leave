import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'


Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
