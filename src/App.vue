<template>
  <nav-bar :show="needNav" @logout="handleLogout" />
  <toast />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute, useRouter } from "vue-router";
import Toast from "@/components/common/ToastAlert.vue";
import NavBar from "@/components/navs/NavBar.vue";
import { computed } from "vue";
import { useSessionStore } from "@/stores/session";

const router = useRouter();
const route = useRoute();

const sessionStore = useSessionStore();

sessionStore.$subscribe(() => {
  if (sessionStore.hasSession) return router.push({ name: "home" });
  router.push({ name: "signIn" });
});

const needNav = computed(() => {
  return route.meta.requiresNav ? true : false;
});

const handleLogout = () => {
  sessionStore.destroySession();
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
