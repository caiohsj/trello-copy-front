import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from "@/stores/session";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/entrar',
      name: 'signIn',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'register',
      component: () => import('@/views/UserRegisterView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const sessionStore = useSessionStore()

  if (to.meta.requiresAuth && !sessionStore.hasSession) {
    return { name: 'signIn' }
  }

  if (to.name == 'signIn' && sessionStore.hasSession) {
    return { name: 'home' }
  }
})

export default router
