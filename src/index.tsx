import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import actions from "./actions";
import App from "./App";
import { store } from "./state";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

store.dispatch(actions.init());
