import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterStore from "./Redux/Toolkit/Store/CounterStore"; // uncomment wihle Using reduxToolking
//import CounterStore from "./Redux/Redux/Store/CounterStore"; // uncomment wihle Using redux only
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={CounterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
