import { Box, createTheme, styled } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { prefixer } from "stylis";

export const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export const colors = {
  background: "#FFFFFF",
  boldText: "#232933",
  lightText: "#62666D",
  gray: "#F0F0F1",
};
export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#343434 !important",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Yekan,ubonto"],
  },
  palette: {
    background: {
      default: colors.background,
    },
  },
});

export const Container = styled(Box)(() => ({}));
