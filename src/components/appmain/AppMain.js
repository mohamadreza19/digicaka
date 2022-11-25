import { useMediaQuery, useTheme } from "@mui/material";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export default function AppMain() {
  const theme = useTheme();

  const matched = useMediaQuery(theme.breakpoints.down("md"));
  return matched ? <Mobile /> : <Desktop />;
}
