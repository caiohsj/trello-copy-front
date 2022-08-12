import type { BackGroundPhoto } from "./BackgroundPhoto";
import type { Column } from "./Column";

export interface Board {
  id: number;
  name: string;
  background_color: string;
  background_photo: BackGroundPhoto;
  columns: Column[];
}
