<template>
  <div class="register-view">
    <div class="card-form">
      <h1 class="title">
        Fazer Cadastro
      </h1>

      <register-form @submit="handleSignIn" />

      <router-link
        :to="{ name: 'signIn' }"
        class="link"
      >
        Já possuo uma conta
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user"
import { useSessionStore } from "../stores/session"
import { useRouter, RouterLink } from "vue-router"
import RegisterForm from "@/components/forms/users/RegisterForm.vue";
import type { User } from "@/types/models/User"

const sessionStore = useSessionStore()
const userStore = useUserStore()
const router = useRouter()

sessionStore.$subscribe(() => {
  if (sessionStore.hasSession) router.push({ name: 'home' })
})

const handleSignIn = (user: User) => {
  userStore.createUser(user)
}
</script>

<style lang="scss">
body {
  background: #f9fafc;

  .register-view {
    display: flex;
    justify-content: center;

    .card-form {
      width: 416px;
      background: #FFFFFF;
      padding: 40px 30px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      .title {
        text-align: center;
        color: #5E6C84;
        font-size: 16px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
