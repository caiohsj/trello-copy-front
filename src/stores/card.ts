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
    indexCard: 0,
    indexColumn: 0,
  }),
  getters: {
    getCard: (state) => state.card,
  },
  actions: {
    saveCard() {
      if (this.card.id == 0) {
        CardResource.create(this.card)
          .then((response) => {
            useBoardStore().setColumnCard(
              this.indexColumn,
              this.indexCard,
              response
            );
            this.setShowCardModal(false);
          })
          .catch((err) => useToastStore().showToast(err));
      } else {
        CardResource.update(this.card)
          .then(() => {
            this.setShowCardModal(false);
          })
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
    destroyCurrentCard() {
      CardResource.destroy(this.card.id)
        .then(() => {
          this.setCard({
            id: 0,
            title: "",
            description: "",
            column_id: 0,
          });
          useBoardStore().destroyColumnCard(this.indexColumn, this.indexCard);
          this.setIndexCard(0);
          this.setIndexColumn(0);
          this.setShowCardModal(false);
        })
        .catch((err) => useToastStore().showToast(err));
    },
    setShowCardModal(show: boolean) {
      this.showCardModal = show;
    },
    setCard(card: Card) {
      this.card = card;
    },
    setIndexCard(index: number) {
      this.indexCard = index;
    },
    setIndexColumn(index: number) {
      this.indexColumn = index;
    },
  },
});
