import { Dispatch } from "redux";
import { Action } from "src/types/appState";

import { User } from "src/types/user";
import AuthApi from "src/api/auth";

export const AUTH_LOGIN = "auth/login";
export const AUTH_LOGOUT = "auth/logout";

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("localUser") || "{}") as User
};

const reducer = (
  state: AuthState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: payload
      };
    case AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const login = (userLogin: string) => async (dispatch: Dispatch) => {
  const { data: user } = await AuthApi.login({ userLogin });
  localStorage.setItem("localUser", JSON.stringify(user));
  dispatch({
    type: AUTH_LOGIN,
    payload: user
  });
};

export const register = (user: User) => async (dispatch: Dispatch) => {
  const { data: payload } = await AuthApi.signUp(user);
  localStorage.setItem("localUser", JSON.stringify(payload));
  dispatch({
    type: AUTH_LOGIN,
    payload
  });
};

export const logout = () => (dispatch: Dispatch) => {
  localStorage.setItem("localUser", "{}");
  dispatch({
    type: AUTH_LOGOUT
  });
};

export default reducer;
