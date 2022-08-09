import type { BackGroundPhoto } from "./BackgroundPhoto";

export interface Board {
  id: number;
  name: string;
  background_color: string;
  background_photo: BackGroundPhoto;
}
