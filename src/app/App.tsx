import { AnyAction } from "@reduxjs/toolkit";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import React, { Context } from "react";
import { ReactReduxContextValue } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Hello from "../hello";
import Home from "../home";
import NavBar from "../navbar";

type AppProps = {
  history: History;
  context: Context<ReactReduxContextValue<any, AnyAction>>;
};

const App = ({ history, context }: AppProps) => {
  return (
    <ConnectedRouter history={history} context={context} noInitialPop>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
