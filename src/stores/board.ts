import { defineStore } from "pinia";
import { BoardResource } from "@/api/resources/board";
import type { Board } from "@/types/models/Board";
import type { Column } from "@/types/models/Column";
import { useToastStore } from "./toast";
import type { StateBoard } from "@/types/stores/StateBoard";
import i18n from "@/locales";

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
      columns: new Array<Column>(),
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
    addColumnToBoard() {
      this.$patch((state) => {
        state.board.columns.push({
          id: 0,
          title: i18n.global.t("stores.board.column.title"),
          cards: [],
          board_id: state.board.id,
        });
      });
    },
    addCardToColumn(indexColumn: number) {
      this.$patch((state) => {
        state.board.columns[indexColumn].cards.push({
          id: 0,
          title: i18n.global.t("stores.board.card.title", { column: state.board.columns[indexColumn].title }),
          description: "",
          column_id: state.board.columns[indexColumn].id,
        });
      });
    },
    setBoardColumn(index: number, column: Column) {
      this.$state.board.columns[index] = column;
    },
  },
});
