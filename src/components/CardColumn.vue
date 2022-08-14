<template>
  <div class="p-2 mb-2 shadow-lg">
    {{ props.item.title }}
  </div>
</template>

<script lang="ts" setup>
import type { Card } from "@/types/models/Card";

const props = defineProps<{
  item: Card;
}>();
</script>
