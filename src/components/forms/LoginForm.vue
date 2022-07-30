<template>
  <form
    @submit.prevent="handleSubmit"
    class="form"
  >
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

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  emit('submit', { email: email.value, password: password.value })
}
</script>
