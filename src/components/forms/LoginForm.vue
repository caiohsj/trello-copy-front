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

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;

  .text-field {
    height: 38px;
    padding-left: 8px;
    border: 2px solid #DFE1E6;
    border-radius: 2px;
    outline: none;
    background: #FAFBFC;

    &:focus {
      border: none;
      outline: 2px solid #4c9aff;
    }
  }

  .btn {
    height: 36px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.btn-primary {
      background: #61BD4F;
      color: #FFFFFF;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
