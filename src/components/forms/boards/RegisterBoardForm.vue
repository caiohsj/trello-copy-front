<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input
      v-model="name"
      :placeholder="
        $t('components.forms.boards.registerForm.placeholders.name')
      "
      type="text"
      class="text-field"
      id="name"
    />
    <input
      v-model="backgroundColor"
      :placeholder="
        $t('components.forms.boards.registerForm.placeholders.backgroundColor')
      "
      type="text"
      class="text-field"
      id="background_color"
    />
    <input
      @change="handleFile"
      type="file"
      class="text-field"
      id="background_photo"
    />
    <input
      type="submit"
      :value="$t('components.forms.boards.registerForm.buttons.register')"
      class="btn btn-primary"
      id="btn_login"
    />
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const name = ref("");
const backgroundColor = ref("");
const backgroundPhoto = ref();

const handleFile = (e: any) => {
  backgroundPhoto.value = e.target.files[0];
};

const handleSubmit = () => {
  const params: FormData = new FormData();
  params.append("name", name.value);
  params.append("background_color", backgroundColor.value);
  params.append("background_photo", backgroundPhoto.value);
  emit("submit", params);
};
</script>
