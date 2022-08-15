<template>
  <base-modal v-model="cardStore.showCardModal">
    <div class="card-modal w-60 h-60">Modal</div>
  </base-modal>
</template>

<script lang="ts" setup>
import BaseModal from "./BaseModal.vue";
import { useCardStore } from "@/stores/card";

const cardStore = useCardStore();
</script>
