import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { cacheRTL, Container, theme } from "./styles/theme";

import AppBar from "./components/appbar/AppBar";
import { useEffect, useState } from "react";
import { UiContext } from "./contextApi/uiContext";
import AppMain from "./components/appmain/AppMain";
import { Route, Routes } from "react-router-dom";
import Product from "./components/product/Product";
import { get_spacialProducts } from "./services/spacialProduct";

export default function App() {
  const [openMenuItems, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subItem, setSubItem] = useState({
    title: "موبایل",
    submenu: [
      { subName: "برند های مختلف گوشی", child: ["گوشی اپل", "گوشی سامسونگ"] },
      {
        subName: "گوشی بر اساس قیمت",
        child: ["گوشی تا 2 میلیون تومان", "گوشی  تا 4 میلیون تومان"],
      },
    ],
    icon: "Smartphone",
  });
  const [spacialProducts, setSpacialProducts] = useState([]);

  useEffect(function () {
    const fetchSpacialProduct = () => {
      //loading
      setLoading(true);
      const fetched = get_spacialProducts();

      setSpacialProducts(fetched);
      setLoading(false);
      //loaded
    };
    fetchSpacialProduct();
  }, []);

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <UiContext.Provider
          value={{
            openMenuItems,
            setOpenMenu,
            subItem,
            setSubItem,
            spacialProducts,
          }}
        >
          <Container>
            <AppBar />
            <Routes>
              <Route path="/" element={<AppMain />} />
              <Route path="/product/:name" element={<Product />} />
            </Routes>
          </Container>
        </UiContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
