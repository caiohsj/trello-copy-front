<template>
  <div
    class="p-2 mb-2 shadow-lg cursor-pointer bg-gray-50 rounded-md mt-2 hover:bg-gray-300"
  >
    <div
      class="ease-in-out duration-100 w-full bg-transparent outline-none cursor-pointer focus:cursor-text h-fit break-words"
    >
      {{ props.item.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Card } from "@/types/models/Card";

const props = defineProps<{
  item: Card;
}>();
</script>
