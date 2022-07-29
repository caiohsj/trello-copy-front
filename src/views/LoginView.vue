<template>
  <h1>Fazer Login</h1>

  <form @submit.prevent="handleSignIn">
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <input type="submit" value="Fazer login">
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useSessionStore } from "../stores/session"
import { useRouter } from "vue-router";

const sessionStore = useSessionStore()
const router = useRouter()

sessionStore.$subscribe(() => {
  if (sessionStore.hasSession) router.push({ name: 'home' })
})

const email = ref('')
const password = ref('')

const handleSignIn = () => {
  sessionStore.createSession({ email: email.value, password: password.value })
}
</script>

<style>
</style>
