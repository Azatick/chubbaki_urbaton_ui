import { WasteTakePoint } from "./wasteTakePoint";

export interface TrashCan {
  wasteTakePoint: WasteTakePoint;
  wasteCategories: WasteCategory[];
}

export interface WasteCategory {
  id: string;
  name: string;
  material: MaterialEnum;
}

export enum MaterialEnum {
  Plastic = 1,
  Carton = 2,
  Paper = 3,
  Metal = 4,
  Glass = 5,
  Batteries = 6,
  Clothes = 7
}
