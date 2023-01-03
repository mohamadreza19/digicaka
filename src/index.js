import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import Test from "./components/test/Test";
import Test2 from "./components/test/Test2";
import { Test3 } from "./components/test/Test3";



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
