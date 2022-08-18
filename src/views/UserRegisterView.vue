<template>
  <div class="register-view">
    <div class="card-form">
      <h1 class="title">
        {{ $t("views.userRegisterView.cardForm.title") }}
      </h1>

      <register-user-form @submit="handleSignIn" />

      <router-link :to="{ name: 'signIn' }" class="link">
        {{ $t("views.userRegisterView.cardForm.linkToLogin") }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";
import RegisterUserForm from "@/components/forms/users/RegisterUserForm.vue";
import type { User } from "@/types/models/User";

const userStore = useUserStore();

const handleSignIn = (user: User) => {
  userStore.createUser(user);
};
</script>

<style lang="scss">
body {
  background: #f9fafc;

  .register-view {
    display: flex;
    justify-content: center;

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
