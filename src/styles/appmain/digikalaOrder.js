import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Container = styled("div")(() => ({
  width: "100%",

  margin: "2rem auto 0 auto",
}));
export const AvatarBox = styled("a")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  margin: 0,
}));
export const TilteBox = styled("div")(() => ({
  width: "170px",
  height: "170px",
}));
export const Img = styled("img")(({ src }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  src,
}));
export const Caption = styled(Typography)(() => ({}));
