import { styled, Typography, Box, Grid } from "@mui/material";

export const RootContiner = styled(Box)(() => ({
  width: "94%",
  margin: "0 auto",
}));
export const NavStateBox = styled(Box)(() => ({
  width: "100%",
  marginTop: "1.5rem",
  display: "flex",
}));
export const NavStateStartBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
}));

export const NavState = styled(Typography)(() => ({
  color: "#62666D",
  marginLeft: "0.8rem",
}));
export const NavStateEndBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "end",
}));
export const NaveStateEndItemBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

// ProductIntroduction
export const ProductIntroductionBox = styled(Box)(() => ({
  width: "100%",
}));
export const ProductImageAndBtn = styled(Grid)(() => ({
  // marginTop: "2rem",
  // marginLeft: "1rem",
}));

export const PbStartBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "10%",
}));
export const ProductAction = styled(Typography)(() => ({
  color: "#62666D",
  marginBottom: "1rem",
  cursor: "pointer",
}));

export const ProductEndBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  marginTop: "2rem",
  justifyContent: "center",
}));
export const ProductImageBox = styled(Box)(({ src }) => ({
  width: "60%",
  src,
}));
export const ProductImage = styled("img")(({ src }) => ({
  width: "100%",
  src,
}));

//info box
export const InfoProduct = styled(Grid)(() => ({
  marginTop: "2rem",
  display: "flex",
}));

export const InfoStartBox = styled(Box)(() => ({
  // width: "80%",
  backgroundColor: "red",
}));
export const InfoEndBox = styled(Box)(() => ({
  marginTop: "2rem",
  // width: "20%",
  backgroundColor: "blue",
}));
