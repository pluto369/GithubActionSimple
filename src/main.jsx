import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Map from "./Map";
import "antd/dist/antd.css";
import "maptalks/dist/maptalks.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
