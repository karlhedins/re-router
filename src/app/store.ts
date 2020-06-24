import { createBrowserHistory } from "history";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./createRootReducer";

export const history = createBrowserHistory();

// Disabling redux-immutable-state-invariant and serializable-state-invariant-middleware
// since they impact the performance negatively
// https://redux-toolkit.js.org/api/getdefaultmiddleware#development
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [...customizedMiddleware, routerMiddleware(history)],
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./createRootReducer", () => {
    // eslint-disable-next-line global-require
    const newCreateRootReducer = require("./createRootReducer").default;
    store.replaceReducer(newCreateRootReducer(history));
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
