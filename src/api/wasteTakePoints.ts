import { AxiosWrapper } from "./axios";
import { WasteTakePoint } from "src/types/wasteTakePoint";

export class WasteTakePointsApi extends AxiosWrapper {
  static fetchPoints() {
    return this.get<null, WasteTakePoint[]>("/wastetakepoint");
  }
}
