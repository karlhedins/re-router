import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";

import App from "./app/App";
import store, { history } from "./app/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // NOTE: StrictMode causes double renders
  // <React.StrictMode>

  // NOTE: Passing redux context explicitly
  // to make sure that the ConnectedRouter doesn't pick up a different ReactReduxContext
  // https://github.com/supasate/connected-react-router#development
  <Provider store={store} context={ReactReduxContext}>
    <App history={history} context={ReactReduxContext} />
  </Provider>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
