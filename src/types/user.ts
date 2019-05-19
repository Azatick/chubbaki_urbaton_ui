import { TrashCan } from "./trashCan";

type UserLocation = {
  id: string;
  address: string;
  longitude: number;
  latitude: number;
};

export interface User {
  id?: string;
  login?: string;
  trashCans?: TrashCan[];
  currentLocation?: UserLocation;
}
