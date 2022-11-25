import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { cacheRTL, Container, theme } from "./styles/theme";

import AppBar from "./components/appbar/AppBar";
import { useEffect, useState } from "react";
import { UiContext } from "./contextApi/uiContext";
import AppMain from "./components/appmain/AppMain";

export default function App() {
  const [openMenuItems, setOpenMenu] = useState(false);
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

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <UiContext.Provider
          value={{
            openMenuItems,
            setOpenMenu,
            subItem,
            setSubItem,
          }}
        >
          <Container>
            <AppBar />
            <AppMain />
          </Container>
        </UiContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
