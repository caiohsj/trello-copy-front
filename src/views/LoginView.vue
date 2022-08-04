<template>
  <div class="login-view">
    <div class="card-form">
      <h1 class="title">
        {{ $t("views.loginView.cardForm.title") }}
      </h1>

      <login-form @submit="handleSignIn" />

      <router-link :to="{ name: 'register' }" class="link">
        {{ $t("views.loginView.cardForm.linkToRegister") }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from "../stores/session";
import { RouterLink } from "vue-router";
import LoginForm from "@/components/forms/LoginForm.vue";
import type { Session } from "@/types/models/Session";

const sessionStore = useSessionStore();

const handleSignIn = (form: Session) => {
  sessionStore.createSession({ email: form.email, password: form.password });
};
</script>

<style lang="scss">
body {
  background: #f9fafc;

  .login-view {
    display: flex;
    justify-content: center;
    align-items: center;

    .card-form {
      width: 416px;
      background: #ffffff;
      padding: 40px 30px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      .title {
        text-align: center;
        color: #5e6c84;
        font-size: 16px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
