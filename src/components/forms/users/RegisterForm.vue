<template>
  <form
    @submit.prevent="handleSubmit"
    class="form"
    autocomplete="on"
  >
    <input
      v-model="name"
      placeholder="Insira seu nome"
      type="text"
      class="text-field"
    />
    <input
      v-model="email"
      placeholder="Insira o e-mail"
      type="text"
      class="text-field"
    />
    <input
      v-model="password"
      placeholder="Inserir senha"
      type="password"
      class="text-field"
    />
    <input
      type="submit"
      value="Fazer login"
      class="btn btn-primary"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(['submit'])

const name = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  emit('submit', {
    name: name.value,
    email: email.value,
    password: password.value
  })
}
</script>

<style lang="scss" scoped>
.form {
  height: 240px;
}
</style>
