import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '@/components/Navbar.vue'
import Contactos from '@/views/Contactos.vue'
import Footer from '@/components/Footer.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'

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

    {
      path: '/Contactos',
      name: 'contactos',
      component: Contactos,
    },

    {
      path: '/Footer',
      name: 'footer',
      component: Footer,
    },

    {
      path: '/SobreNosotros',
      name: 'sobrenosotros',
      component: SobreNosotros,
    },

  ],
})

export default router
