<template>
  <form
    @submit.prevent="handleSubmit"
    class="form"
  >
    <input
      v-model="email"
      :placeholder="$t('components.forms.loginForm.placeholders.email')"
      type="text"
      class="text-field"
    />
    <input
      v-model="password"
      :placeholder="$t('components.forms.loginForm.placeholders.password')"
      type="password"
      class="text-field"
    />
    <input
      type="submit"
      :value="$t('components.forms.loginForm.buttons.login')"
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
