import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Ram Nami Trading Co."
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    },
    meta: {
      title: "About | Ram Nami Trading Co."
    }
  },
  {
    path: '/donate',
    name: 'Donate',
    component: function () {
      return import('../views/Donate.vue')
    },
    meta: {
      title: "Donate | Ram Nami Trading Co."
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: function () {
      return import('../views/Products.vue')
    },
    meta: {
      title: "Products | Ram Nami Trading Co."
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
})

// browser tab names
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router
