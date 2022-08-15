<template>
  <div
    v-if="boardStore.getBoard"
    :style="background"
    class="board-view w-full relative overflow-x-auto bg-cover bg-no-repeat"
  >
    <div class="absolute bottom-0 top-0 p-4">
      <section class="flex gap-2">
        <div
          class="column bg-gray-200 rounded-md px-4 pb-2"
          v-for="(column, indexColumn) in boardStore.getBoard.columns"
          :key="column.id"
        >
          <input
            @keyup.enter="handleSaveColumn($event, column, indexColumn)"
            v-model="column.title"
            class="ease-in-out duration-100 w-full focus:border-b-2 border-gray-800 bg-transparent outline-none pt-2 pl-2 font-bold"
            type="text"
            id="inputNameColumn"
          />

          <card-column
            v-for="(card, indexCard) in column.cards"
            @clicked="cardColumnClicked(card, indexCard, indexColumn)"
            :key="card.id"
            :item="card"
          />

          <button
            @click="addCard(indexColumn)"
            class="pl-2 w-full text-left hover:bg-slate-600 hover:text-white rounded-md"
          >
            + Adicionar cartão
          </button>
        </div>
        <button
          @click="addColumn"
          class="p-2 mb-4 bg-emerald-500 rounded-md text-gray-200 font-bold hover:opacity-75 transition-all h-fit"
        >
          +
        </button>
      </section>
    </div>

    <card-modal />
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "@/stores/board";
import { useColumnStore } from "@/stores/column";
import { useCardStore } from "@/stores/card";
import type { Column } from "@/types/models/Column";
import { computed } from "vue";
import { useRoute } from "vue-router";
import CardColumn from "@/components/CardColumn.vue";
import CardModal from "@/components/modals/CardModal.vue";
import type { Card } from "@/types/models/Card";

const boardStore = useBoardStore();
const columnStore = useColumnStore();
const cardStore = useCardStore();
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
  boardStore.addColumnToBoard();
};

const addCard = (indexColumn: number) => {
  boardStore.addCardToColumn(indexColumn);
};

const handleSaveColumn = (e: any, column: Column, index: number) => {
  e.target.blur();
  columnStore.saveColumn(column, index);
};

const cardColumnClicked = (card: Card, indexCard: number, indexColumn: number) => {
  cardStore.setCard(card);
  cardStore.setIndexCard(indexCard);
  cardStore.setIndexColumn(indexColumn);
  cardStore.setShowCardModal(true);
};
</script>

<style lang="scss">
.board-view {
  height: calc(100vh - 52px);

  .column {
    min-width: 300px;
    max-width: 320px;
    height: fit-content;
  }
}
</style>
