import { colors } from "../theme";
import { Box, styled, Typography } from "@mui/material";

// CarouselImageSlider
export const Container = styled(Box)(() => ({
  width: "100%",
  position: "relative",
}));

export const ButtonBox = styled(Box)(() => ({
  display: "flex",
  width: "10%",
  position: "absolute",
  top: "95%",
}));
export const DotIcon = styled("div")(({ theme, active }) => ({
  marginLeft: "8px",
  width: active ? "16px" : "5px",
  height: "5px",
  background: active ? "#FFFFFF" : "#959592",
  borderRadius: "12px",
  cursor: "pointer",
}));
//MiddleContainer

export const MiddleContainer = styled(Box)(() => ({
  width: "75%",
  height: "100px",
  margin: "1rem auto",
}));
export const LogoesBox = styled(Box)(() => ({
  width: "96%",
  display: "flex",
  justifyContent: "center",
  margin: "1rem auto",
}));

export const LogoBox = styled(Box)(() => ({
  margin: "1rem auto",
  width: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
}));

export const Logo = styled("img")(({ src }) => ({
  width: "50%",
  src,
}));
export const LogoCaptionBox = styled(Box)(() => ({
  marginTop: "6px",
}));

export const LogoCaption = styled(Typography)(() => ({
  color: colors.lightText,
  fontSize: "12px",
}));

//Handllycarousel

export const HandllyCarouselBox = styled(Box)(() => ({}));

export const HandllyItemsBox = styled(Box)(() => ({
  width: "99.70%",
  height: "80%",
  display: "flex",

  /* position: relative; */
  overflow: "hidden",
  justifyContent: "left",
  alignItems: "center",
  scrollBehavior: "smooth",
}));
export const ItemBox = styled(Box)(({ isfirst, islast }) => ({
  width: "182px",
  minWidth: "182px",
  height: "200px",
  marginLeft: "2px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",
  borderTopRightRadius: JSON.parse(islast) ? "8px" : "0",
  borderBottomRightRadius: JSON.parse(islast) ? "8px" : "0",
  borderTopLeftRadius: JSON.parse(isfirst) ? "8px" : "0",
  borderBottomLeftRadius: JSON.parse(isfirst) ? "8px" : "0",
}));

export const ImgHandllyBox = styled(Box)(() => ({
  width: "150px",
  height: "150px",
  marginRight: "1rem",
  backgroundColor: " rgba(32, 179, 179, 0.938)",
  margin: "0 auto 1rem auto",
}));

export const HandllyImg = styled("img")(({ src }) => ({
  width: "100%",
  height: "100%",
  src,
  objectFit: "contain",
}));
export const PriceTomanBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 1rem",
}));
export const PriceBox = styled(Box)(() => ({}));

export const Price = styled(Typography)(() => ({
  fontWeight: "bold",
  fontFamily: "IranSens",
}));
export const TomanBox = styled(Box)(() => ({
  width: "16px",
}));
export const Toman = styled("img")(({ src }) => ({
  width: "100%",
  src,
}));
export const RedPercentBox = styled(Box)(() => ({
  backgroundColor: "#EF3C51",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  width: "34px",
  height: "20px",
}));
export const RedPercent = styled(Typography)(() => ({
  fontFamily: "IranSens",
  color: "#FFFFFF",
  objectFit: "contain",
  fontSize: "0.8rem",
}));

export const DiscountBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "end",
  marginRight: "2rem",
}));
export const Discount = styled(Typography)(() => ({
  fontFamily: "IranSens",
  color: "#c0c2c5",
  objectFit: "contain",
  textDecoration: "line-through",
}));
// right item
export const RightItemBox = styled(Box)(({ isright }) => ({
  width: "172px",
  minWidth: "182px",
  height: "200px",
  marginLeft: "2px",
  backgroundColor: isright ? "#EF3C51" : "#FFFFF",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
}));
export const RightItemTitleImgBox = styled(Box)(() => ({
  width: "40%",
}));
export const RightItemTitleImg = styled("img")(({ src }) => ({
  width: "100%",
  src,
  objectFit: "contain",
}));
export const RightItemAmaizingImgBox = styled(Box)(() => ({
  width: "60%",
}));
export const RightItemAmaizingImg = styled("img")(({ src }) => ({
  width: "100%",
  src,
  objectFit: "contain",
}));
export const RightItemCaption = styled(Typography)(() => ({
  color: "#FFFFFF",
}));
//Arrows
export const RightArrowBox = styled(Box)(() => ({
  cursor: "pointer",
  opacity: "0.5",
  position: "absolute",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  left: "24%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const LeftArrowBox = styled(Box)(() => ({
  cursor: "pointer",
  opacity: "0.5",
  position: "absolute",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  left: "24%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left: "85%",
}));

// Fresh

export const FreshBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
//start
export const FreshItemsBox = styled(Box)(() => ({
  margin: "8px 0",
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FreshStartBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "row",
}));
export const FreshStartImgBox = styled(Box)(() => ({
  width: "fit-content",
  display: "flex",
  height: "fit-content",
  justifyContent: "center",
  alignItemst: "center",
  marginLeft: "1rem",
}));
export const FreshStartImg = styled("img")(({ src }) => ({
  width: "100%",
  src,
  objectFit: "contain",
}));
export const FreshDiscountBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#39AE00",
  borderRadius: "9999px",
  height: "fit-content",
  padding: "6px 10px",
  marginLeft: "1rem",
}));
export const FreshDiscount = styled(Typography)(() => ({
  color: "#FFFFFF",
  fontFamily: "IranSens",
}));
export const FreshEndBox = styled(Box)(() => ({
  justifySelf: "end",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
}));
export const FreshContentBox = styled(Box)(() => ({
  width: "100px",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
}));
