import { SidebarState } from "src/redux/ducks/sidebar";

export type Action = {
  type: string;
  payload: any;
};
export type AppState = {
  sidebar: SidebarState;
};
