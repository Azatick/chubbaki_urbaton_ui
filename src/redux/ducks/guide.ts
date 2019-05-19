import { Dispatch } from "redux";
import { Action } from "src/types/appState";

import { User } from "src/types/user";
import AuthApi from "src/api/auth";

export const GUIDE_OPEN = "guide/open";
export const GUIDE_CLOSE = "guide/close";

export interface GuideState {
  open?: boolean;
}

const initialState: GuideState = {
  open: false
};

const reducer = (
  state: GuideState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case GUIDE_OPEN:
      return {
        ...state,
        open: true
      };
    case GUIDE_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export const openGuide = () => (dispatch: Dispatch) => {
  dispatch({
    type: GUIDE_OPEN
  });
};

export const closeGuide = () => (dispatch: Dispatch) => {
  dispatch({
    type: GUIDE_CLOSE
  });
};

export default reducer;
