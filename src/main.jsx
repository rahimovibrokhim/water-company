import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/src/base-component.js'
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/offcanvas.js'
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
