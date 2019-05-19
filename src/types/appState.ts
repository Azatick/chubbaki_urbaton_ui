import { SidebarState } from "src/redux/ducks/sidebar";
import { AuthState } from "src/redux/ducks/auth";

export type Action = {
  type: string;
  payload: any;
};
export type AppState = {
  sidebar: SidebarState;
  auth: AuthState;
};
