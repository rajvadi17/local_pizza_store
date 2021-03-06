import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./duck/store";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

ReactDOM.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <Route>
          <App />
        </Route>
      </ConnectedRouter>
    </Provider>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
