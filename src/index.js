import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./Context/CreateContext";
import { CartProvider } from "react-use-cart";
// import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
