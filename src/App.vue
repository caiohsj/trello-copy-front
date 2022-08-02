<script setup lang="ts">
import { RouterView } from "vue-router";
import Toast from "@/components/common/ToastAlert.vue";
</script>

<template>
  <toast />
  <RouterView />
</template>

<style scoped>
h1 {
  color: white;
}
</style>
