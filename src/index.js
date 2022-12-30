import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import Test from "./components/test/Test";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Test />
  </BrowserRouter>
  // </React.StrictMode>
);
