import { createRouter, createWebHistory } from "vue-router";
import { useSessionStore } from "@/stores/session";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/entrar",
      name: "signIn",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/cadastro",
      name: "register",
      component: () => import("@/views/UserRegisterView.vue"),
    },
    {
      path: "/",
      name: "home",
      meta: {
        requiresAuth: true,
        requiresNav: true,
      },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/quadros",
      name: "boards",
      meta: {
        requiresAuth: true,
        requiresNav: true,
      },
      component: () => import("@/views/BoardsView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  const sessionStore = useSessionStore();

  if (to.meta.requiresAuth && !sessionStore.hasSession) {
    return { name: "signIn" };
  }

  if (to.name == "signIn" && sessionStore.hasSession) {
    return { name: "home" };
  }
});

export default router;
