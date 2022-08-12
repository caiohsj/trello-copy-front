import type { Card } from "./Card";

export interface Column {
  id: number;
  title: string;
  cards: Card[];
}
