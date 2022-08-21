import { defineStore } from "pinia";
import { BoardResource } from "@/api/resources/board";
import type { Board } from "@/types/models/Board";
import type { Column } from "@/types/models/Column";
import type { Card } from "@/types/models/Card";
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
          title: "",
          cards: [],
          board_id: state.board.id,
        });
      });
    },
    addCardToColumn(indexColumn: number) {
      this.$patch((state) => {
        state.board.columns[indexColumn].cards.push({
          id: 0,
          title: "",
          description: "",
          column_id: state.board.columns[indexColumn].id,
        });
      });
    },
    setBoardColumn(index: number, column: Column) {
      this.board.columns[index] = column;
    },
    setColumnCard(indexColumn: number, indexCard: number, card: Card) {
      this.board.columns[indexColumn].cards[indexCard] = card;
    },
    destroyBoardColumn(indexColumn: number) {
      this.board.columns.splice(indexColumn, 1);
    },
    destroyColumnCard(indexColumn: number, indexCard: number) {
      this.board.columns[indexColumn].cards.splice(indexCard, 1);
    },
  },
});
