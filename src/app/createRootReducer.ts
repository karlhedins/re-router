import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import appReducer from "./appReducer";

const createRootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history),
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default createRootReducer;
