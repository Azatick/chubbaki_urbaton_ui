import { Dispatch } from "redux";
import { AppState, Action } from "src/types/appState";

export const SIDEBAR_TOGGLE = "sidebar/toggle";

export interface SidebarState {
  visible: boolean;
}

const initialState: SidebarState = {
  visible: false
};

const reducer = (
  state: SidebarState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        visible: payload
      };
    default:
      return state;
  }
};

export const toggleSidebar = () => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { sidebar } = getState();
  dispatch({
    type: SIDEBAR_TOGGLE,
    payload: !sidebar.visible
  });
};

export default reducer;
