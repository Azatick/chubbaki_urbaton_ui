import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ducks from "./ducks";

const create = () =>
  createStore(combineReducers(ducks as any), applyMiddleware(thunk));

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <Provider store={create()} children={children} />
);
