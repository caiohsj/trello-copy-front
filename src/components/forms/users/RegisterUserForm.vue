<template>
  <form @submit.prevent="handleSubmit" class="form" autocomplete="on">
    <input
      v-model="name"
      :placeholder="$t('components.forms.users.registerForm.placeholders.name')"
      type="text"
      class="text-field"
      autocomplete="name"
      id="name"
    />
    <input
      v-model="email"
      :placeholder="
        $t('components.forms.users.registerForm.placeholders.email')
      "
      type="email"
      class="text-field"
      id="email"
    />
    <input
      v-model="password"
      :placeholder="
        $t('components.forms.users.registerForm.placeholders.password')
      "
      type="password"
      class="text-field"
      id="password"
    />
    <input
      type="submit"
      :value="$t('components.forms.users.registerForm.buttons.register')"
      class="btn btn-primary"
      id="btn_register"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const name = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = (): void => {
  emit("submit", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<style lang="scss" scoped>
.form {
  height: 240px;
}
</style>
