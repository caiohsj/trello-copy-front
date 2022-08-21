import http from "@/api/http";
import type { Card } from "@/types/models/Card";

export const CardResource = {
  create(card: Card) {
    return http.post("/api/v1/cards", card);
  },
  update(card: Card) {
    return http.put(`/api/v1/cards/${card.id}`, card);
  },
  show(id: number) {
    return http.get(`/api/v1/cards/${id}`);
  },
  destroy(id: number) {
    return http.delete(`/api/v1/cards/${id}`);
  },
};
