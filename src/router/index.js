import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
  {
    path: '/donate',
    name: 'Donate',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Donate.vue')
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Products.vue')
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})



export default router
