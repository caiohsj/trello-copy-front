import { defineStore } from "pinia";
import { ColumnResource } from "@/api/resources/column";
import { useToastStore } from "./toast";
import type { StateColumn } from "@/types/stores/StateColumn";
import type { Column } from "@/types/models/Column";
import { useBoardStore } from "./board";

export const useColumnStore = defineStore({
  id: "column",
  state: (): StateColumn => ({
    column: {
      id: 0,
      title: "",
      cards: [],
      board_id: 0,
    },
  }),
  getters: {
    getColumn: (state) => state.column,
  },
  actions: {
    saveColumn(column: Column, index: number) {
      if (column.id == 0) {
        ColumnResource.create(column)
          .then((response) => {
            useBoardStore().setBoardColumn(index, response);
          })
          .catch((err) => useToastStore().showToast(err));
      } else {
        ColumnResource.update(column)
          .then()
          .catch((err) => {
            useToastStore().showToast(err);
          });
      }
    },
    fetchColumn(id: number) {
      ColumnResource.show(id)
        .then((response) => {
          this.$patch((state) => (state.column = response));
        })
        .catch((err) => useToastStore().showToast(err));
    },
  },
});
