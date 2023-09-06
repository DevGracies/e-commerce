import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Wrap } from "./ContextHook";
// import { Provider } from "./GlobalContext";
// import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Wrap>
      <App />
    </Wrap>
  </React.StrictMode>,
  document.getElementById("root")
);
