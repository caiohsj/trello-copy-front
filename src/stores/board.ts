import { defineStore } from "pinia";
import { BoardResource } from "@/api/resources/board";
import type { Board } from "@/types/models/Board";
import { useToastStore } from "./toast";

export const useBoardStore = defineStore({
  id: "board",
  state: () => ({
    board: {},
    boards: new Array<Board>(),
  }),
  getters: {
    getBoard: (state) => state.board,
    getBoards: (state) => state.boards,
  },
  actions: {
    createBoard(board: FormData) {
      BoardResource.create(board)
        .then((response) => {
          this.$patch((state) => (state.board = response));
          this.fetchBoards();
        })
        .catch((err) => useToastStore().showToast(err));
    },
    fetchBoards() {
      BoardResource.index()
        .then((response) => {
          this.$patch((state) => (state.boards = response));
        })
        .catch((err) => useToastStore().showToast(err));
    },
  },
});
