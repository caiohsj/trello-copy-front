<template>
  <div class="boards-view">
    <register-board-form @submit="handleSubmit" />
    <div class="boards-list">
      <div
        v-for="board in boardStore.getBoards"
        :key="board.id"
        class="board"
        :style="background(board)"
        @click="navigateToBoard(board)"
      >
        {{ board.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "@/stores/board";
import RegisterBoardForm from "@/components/forms/boards/RegisterBoardForm.vue";
import type { Board } from "@/types/models/Board";
import { useRouter } from "vue-router";

const background = (board: Board) => {
  if (board.background_photo.url) {
    return `background-image: url(http://localhost:3000${board.background_photo.url});`;
  }

  return `background: ${board.background_color};`;
};

const boardStore = useBoardStore();

boardStore.fetchBoards();

const handleSubmit = (params: FormData) => {
  boardStore.createBoard(params);
};

const router = useRouter();

const navigateToBoard = (board: Board) => {
  router.push({ name: "board", params: { id: board.id } });
};
</script>

<style lang="scss" scoped>
.boards-view {
  padding: 18px;
  .boards-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 26px;

    .board {
      background-color: aqua;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      width: 140px;
      height: 100px;
      border-radius: 12px;
      padding: 8px;
      margin: 8px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0px 0px 12px 14px #00000033;
      }
    }
  }
}
</style>
