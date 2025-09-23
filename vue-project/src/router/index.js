import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '@/components/Navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/Navbar',
      name: 'navbar',
      component: Navbar,
    },

  ],
})

export default router
