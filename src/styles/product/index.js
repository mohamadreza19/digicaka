import { styled, Typography, Box, Grid, Button, Dialog } from "@mui/material";
import { DiscountBox } from "../appmain";

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
  width: "70%",
  src,
}));
export const ProductImage = styled("img")(({ src }) => ({
  width: "100%",
  src,
}));
//product image slider

export const SliderProductRootBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
}));
export const SliderItemBox = styled(Box)(() => ({
  width: "80px",
  height: "80px",
  border: "1px solid #a1a3a8 ",
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginLeft: "0.5rem",
}));
export const SliderImg = styled("img")(({ src, isLast }) => ({
  width: "80%",
  objectFit: "contain",
  filter: isLast == "true" ? "blur(4px)" : "blur(0px)",
  opacity: isLast == "true" ? "0.5" : "1",
  src,
}));
//Dialog

//  DialogSlider
export const Dialog_v1 = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    maxWidth: "1000px",
  },
}));

export const DialogSliderBox = styled(Box)(() => ({
  width: "900px",
}));
export const DS_TitleBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  marginTop: "0.5rem",
  justifyContent: "space-between",
}));

export const DSTitle = styled(Typography)(() => ({}));
export const DS_MainBox = styled(Box)(() => ({
  width: "90%",
  margin: "0 auto",
}));
export const DSM_CloumnOne = styled(Box)(() => ({
  width: 400,
}));
export const DSM_CloumnTwo = styled(Box)(() => ({
  width: 400,
  // display: "flex",
  // flexWrap: "wrap",
}));
export const DSM_Img = styled("img")(({ src }) => ({
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

// END grid
export const EndGridColumnOne = styled(Box)(() => ({
  width: "60%",
}));
export const EndGridColumnTwo = styled(Box)(() => ({
  width: "40%",
  margin: "4rem 0 0 1rem",
  border: "1px solid #E0E0E2",
  borderRadius: "8px",
}));
export const EGCT_SellerInfoBox = styled(Box)(() => ({
  width: "100%",
  // margin:'1rem'
  padding: "1rem",
}));
export const EGCT_SellerInfo_Item = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "1rem",
}));

export const EGCT_SellerInfoRowOne = styled(Box)(() => ({}));
export const EGCT_SellerInfoRowTow = styled(Box)(() => ({}));
export const EGCT_SellerInfoRowThree = styled(Box)(() => ({}));
export const EGCT_SellerInfoRowFour = styled(Box)(() => ({
  display: "flex",
}));

export const DiscountBox_v2 = styled(DiscountBox)(() => ({
  margin: "0",
}));
export const PersionNumber_v2 = styled(Typography)(() => ({
  fontFamily: "IranSens",
}));
export const Button_v1 = styled(Button)(() => ({}));
//EndBox

export const EndBox = styled(Box)(() => ({
  marginBottom: "10px",
  position: "sticky",
}));

// export const EB_TitleBox = styled(Box)(({ onLeaveArea }) => ({
//   display: "flex",
//   position: onLeaveArea == true ? "fixed" : "block",
//   top: "10%",
//   backgroundColor: "#FFFFFF",
//   width: "90%",
//   left: "5%",
//   right: "5%",
//   padding: "10px 0",
// }));

export const EB_TitleBox = (props) => {
  const { onLeaveArea } = props;
  console.log(onLeaveArea);
  return (
    <div
      style={{
        display: "flex",
        position: onLeaveArea ? "fixed" : "static",
        top: "10%",
        backgroundColor: "#FFFFFF",
        width: "96%",
        left: "2%",
        right: "2%",
        padding: "10px 0",
      }}
    >
      {props.children.map((child, item) => {
        return child;
      })}
    </div>
  );
};

export const EB_TitleItemBox = styled(Box)(() => ({
  paddingBottom: "1rem",
  paddingTop: "1rem",
  borderBottom: "3px solid #ef3c51",
  marginLeft: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "24px",
  minWidth: "60px",
  minHeight: "24px",
}));
export const EB_Title = styled(Typography)(() => ({}));
//EB_PropertyBox

export const EB_PropertyBox = styled(Box)(() => ({
  // display:'flex',
  // flexDirection:'column',
  borderBottom: "3px solid #F0F0F1",
  marginTop: "2rem",
}));
export const EB_PropertyItemBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
}));
export const EB_TitleOfPropertyBox = styled(Box)(() => ({
  paddingBottom: "1rem",
  borderBottom: "3px solid #ef3c51",
  height: "40px",
  minWidth: "74px",
  minHeight: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // fontWeight: 400,
  // lineHeight: 2.15
  marginBottom: "4rem",
}));

export const EB_BodyOfPropertyBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
export const EB_BodyOfProperty = styled(Typography)(() => ({
  fontWeight: 400,
  lineHeight: 2.15,
}));
//Comment Box

export const CommentBox = styled(Grid)(() => ({
  //  display:'flex',
}));
export const CB_TitleBox = styled(Box)(() => ({
  margin: "2rem 0",
}));
export const CB_ScoreAndSortBox = styled(Box)(() => ({
  marginBottom: "2rem",
  display: "flex",
  flexDirection: "column",
}));

export const CB_BigScoreBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
}));
export const CB_StarRiteBox = styled(Box)(() => ({
  marginTop: "1rem",
  marginBottom: "2rem",
}));

export const MyButton = styled(Button)(() => ({
  color: "#ef3c51 ",
  borderColor: "#ef3c51 ",
  "&:hover": {
    color: "#ef3c51 ",
    backgroundColor: "#FFFFFF",
    borderColor: "#ef3c51",
  },
}));
// EB_jeader

export const Badge_v1 = styled(Box)(() => ({
  width: "35px",
  height: "25px",
  color: "#FFFFFF",
  borderRadius: "4px",
  backgroundColor: "#00A049",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.9rem",
}));
