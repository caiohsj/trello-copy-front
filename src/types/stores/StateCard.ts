import type { Card } from "../models/Card";

export interface StateCard {
  card: Card;
  showCardModal: boolean;
  indexCard: number;
  indexColumn: number;
}
