import { defineStore } from "pinia";
import { BoardResource } from "@/api/resources/board";
import type { Board } from "@/types/models/Board";
import { useToastStore } from "./toast";
import type { StateBoard } from "@/types/stores/StateBoard";

export const useBoardStore = defineStore({
  id: "board",
  state: (): StateBoard => ({
    board: {
      id: 0,
      name: "",
      background_color: "",
      background_photo: {
        url: "",
      },
    },
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
    fetchBoard(id: number) {
      BoardResource.show(id)
        .then((response) => {
          this.$patch((state) => (state.board = response));
        })
        .catch((err) => useToastStore().showToast(err));
    },
  },
});
