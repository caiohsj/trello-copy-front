<template>
  <div class="h-screen p-4" v-if="boardStore.getBoard" :style="background">
    <button
      class="p-2 mb-4 bg-emerald-500 rounded-md text-gray-200 font-bold hover:opacity-75 transition-all"
    >
      Adicionar coluna
    </button>

    <section>
      <div class="bg-gray-200 rounded-md px-4">
        <input
          class="ease-in-out duration-100 w-full focus:border-b-2 border-gray-800 bg-transparent outline-none"
          type="text"
          id="inputNameColumn"
          value="coluna"
        />

        <div>
          Card 1
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "@/stores/board";
import { computed } from "vue";
import { useRoute } from "vue-router";

const boardStore = useBoardStore();
const route = useRoute();

boardStore.fetchBoard(Number(route.params.id));

const background = computed(() => {
  if (!boardStore.getBoard) return "";

  if (boardStore.getBoard.background_photo.url) {
    return `background-image: url(http://localhost:3000${boardStore.getBoard.background_photo.url});`;
  }

  return `background: ${boardStore.getBoard.background_color};`;
});
</script>
