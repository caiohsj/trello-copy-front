<template>
  <div
    v-if="boardStore.getBoard"
    :style="background"
    style="height: calc(100vh - 52px)"
    class="w-full relative overflow-x-auto"
  >
    <div class="absolute bottom-0 top-0 p-4">
      <button
        @click="addColumn"
        class="p-2 mb-4 bg-emerald-500 rounded-md text-gray-200 font-bold hover:opacity-75 transition-all"
      >
        Adicionar coluna
      </button>

      <section class="flex gap-2">
        <div
          class="bg-gray-200 rounded-md px-4 pb-2"
          style="min-width: 300px"
          v-for="column in boardStore.getBoard.columns"
          :key="column.id"
        >
          <input
            class="ease-in-out duration-100 w-full focus:border-b-2 border-gray-800 bg-transparent outline-none pt-2 pl-2 font-bold"
            type="text"
            id="inputNameColumn"
            v-model="column.title"
          />

          <div
            class="p-2 mb-2 shadow-lg"
            v-for="card in column.cards"
            :key="card.id"
          >
            {{ card.title }}
          </div>
        </div>
      </section>
    </div>
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

const addColumn = () => {
  boardStore.$state.board.columns.push({
    id: 0,
    title: "Digite aqui o nome da coluna",
    cards: [],
  });
};
</script>
