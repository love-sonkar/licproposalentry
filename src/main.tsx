import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import UseContext from "./useContext/UseContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <UseContext>
        <App />
      </UseContext>
    </HashRouter>
  </React.StrictMode>
);
