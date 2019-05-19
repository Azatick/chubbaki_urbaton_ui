import { SidebarState } from "src/redux/ducks/sidebar";
import { AuthState } from "src/redux/ducks/auth";
import { GuideState } from "src/redux/ducks/guide";

export type Action = {
  type: string;
  payload: any;
};
export type AppState = {
  sidebar: SidebarState;
  auth: AuthState;
  guide: GuideState;
};
