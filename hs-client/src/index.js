import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "mobx-react";
import controller from "./controller";

ReactDOM.render(
  <Provider {...controller.provide()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
