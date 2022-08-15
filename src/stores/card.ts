import { defineStore } from "pinia";
import { CardResource } from "@/api/resources/card";
import { useToastStore } from "./toast";
import type { StateCard } from "@/types/stores/StateCard";
import type { Card } from "@/types/models/Card";
import { useBoardStore } from "./board";

export const useCardStore = defineStore({
  id: "card",
  state: (): StateCard => ({
    card: {
      id: 0,
      title: "",
      description: "",
      column_id: 0,
    },
    showCardModal: false,
  }),
  getters: {
    getCard: (state) => state.card,
  },
  actions: {
    saveCard(card: Card, indexCard: number, indexColumn: number) {
      if (card.id == 0) {
        CardResource.create(card)
          .then((response) => {
            useBoardStore().setColumnCard(indexColumn, indexCard, response);
          })
          .catch((err) => useToastStore().showToast(err));
      } else {
        CardResource.update(card)
          .then()
          .catch((err) => {
            useToastStore().showToast(err);
          });
      }
    },
    fetchCard(id: number) {
      CardResource.show(id)
        .then((response) => {
          this.$patch((state) => (state.card = response));
        })
        .catch((err) => useToastStore().showToast(err));
    },
    setShowCardModal(show: boolean) {
      this.showCardModal = show;
    },
    setCard(card: Card) {
      this.card = card;
    },
  },
});
