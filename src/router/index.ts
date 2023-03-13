import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    // {
    //   path: '/Login',
    //   name: 'index',
    //   component: LoginView
    // },
  ]
})

export default router
