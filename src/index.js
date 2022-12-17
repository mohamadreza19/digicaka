import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import SwiperSlider from "./components/test/Slider";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
