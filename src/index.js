import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Wrap } from "./ContextHook";
import CreateContext from "./Context/CreateContext";
// import { Provider } from "./GlobalContext";
// import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <CreateContext>
      <App />
    </CreateContext>
  </React.StrictMode>,
  document.getElementById("root")
);
