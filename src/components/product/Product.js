import {
  ArrowBackIos,
  AssignmentTurnedIn,
  Balance,
  BarChart,
  Close,
  Done,
  Favorite,
  FormatListBulleted,
  GppGood,
  Hail,
  Info,
  MoreHoriz,
  Notifications,
  Reply,
  Share,
  Star,
  Store,
  StoreMallDirectory,
  StoreSharp,
  ThumbDown,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  ClickAwayListener,
  Dialog,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import { UiContext } from "../../contextApi/uiContext";
import {
  Discount,
  DiscountBox,
  Price,
  PriceBox,
  RedPercent,
  RedPercentBox,
  Toman,
  TomanBox,
} from "../../styles/appmain";
import {
  Badge_CommentBox,
  Badge_v1,
  Button,
  Button_v1,
  CB_BigScoreBox,
  CB_ScoreAndSortBox,
  CB_StarRiteBox,
  CB_TitleBox,
  CommentBox,
  DialogSliderBox,
  Dialog_v1,
  DiscountBox_v2,
  DSM_CloumnOne,
  DSM_CloumnTwo,
  DSM_Img,
  DSTitle,
  DS_MainBox,
  DS_TitleBox,
  EB_BodyOfProperty,
  EB_BodyOfPropertyBox,
  EB_PropertyBox,
  EB_PropertyItemBox,
  EB_Title,
  EB_TitleBox,
  EB_TitleItemBox,
  EB_TitleOfPropertyBox,
  EGCT_SellerInfoBox,
  EGCT_SellerInfoRowFour,
  EGCT_SellerInfoRowOne,
  EGCT_SellerInfoRowThree,
  EGCT_SellerInfoRowTow,
  EGCT_SellerInfo_Item,
  EndBox,
  EndGridColumnOne,
  EndGridColumnTwo,
  InfoProduct,
  MyButton,
  NaveStateEndItemBox,
  NavState,
  NavStateBox,
  NavStateEndBox,
  NavStateStartBox,
  PbStartBox,
  PersionNumber_v2,
  ProductAction,
  ProductEndBox,
  ProductImage,
  ProductImageAndBtn,
  ProductImageBox,
  RootContiner,
  SliderImg,
  SliderItemBox,
  SliderProductRootBox,
} from "../../styles/product";

import { SideBySideMagnifier } from "react-image-magnifiers";
import { ReadMoreText } from "./layout/ReadMoreText";
import { Waypoint } from "react-waypoint";
import SeparableTitles from "./layout/SeparableTitles";
import { ReadMoreProperty } from "./layout/ReadMoreProperty";
export default function Product() {
  const { name } = useParams();
  const { spacialProducts } = useContext(UiContext);
  const [product, SetProduct] = useImmer({
    category: ["init", "init", "init"],
    name: ["init", "init"],
    availableColors: [["init,init"]],
    availableSizes: [["init"]],
    property: {
      init: "init",
    },
  });
  const [selectedColorOrSize, setSelectedColorOrSize] = useImmer(["init"]);
  const [IsDialogOpen, SetIsDialogOpen] = useImmer(false);
  const [SelectedImageIndex, setSelectedImageIndex] = useImmer(0);
  const [onLeave_EB_TitleBox, setOnLeave_EB_TitleBox] = useImmer(false);
  const [indexOfTitle, setIndexOfTitle] = useImmer(0);
  const triger = useScrollTrigger({
    threshold: 200,
  });

  useEffect(
    function fillingPoroduct() {
      const matched = spacialProducts.find((item) => item.name[0] === name);
      SetProduct(() => matched);

      if (matched) {
        // [0][1] for have first ficked color
        "availableColors" in matched &&
          setSelectedColorOrSize(() => matched.availableColors[0][1]);
        // [0][1] for have first ficked size
        "availableSizes" in matched &&
          setSelectedColorOrSize(() => matched.availableSizes[0]);
          console.log(matched)
      }
    },
    [spacialProducts.length > 0]
  );

  const StartGrid = () => {
    return (
      <div className="w-100 d-flex mt-4rem">
        <PbStartBox>
          <ProductAction
            className="product-icon"
            variant="body2"
            aria-hidden="true"
          >
            <Tooltip placement="left-start" title="افزودن به علاقه مندی">
              <Favorite />
            </Tooltip>
          </ProductAction>
          <ProductAction variant="body2">
            <Tooltip placement="left-start" title="اشتراک گذاری">
              <Share />
            </Tooltip>
          </ProductAction>
          <ProductAction variant="body2">
            <Tooltip placement="left-start" title="اطلاع رسانی شگفت انگیز">
              <Notifications />
            </Tooltip>
          </ProductAction>
          <ProductAction variant="body2">
            <Tooltip placement="left-start" title="نمودار قیمت">
              <BarChart />
            </Tooltip>
          </ProductAction>
          <ProductAction variant="body2">
            <Tooltip placement="left-start" title="مقایسه">
              <Balance />
            </Tooltip>
          </ProductAction>
          <ProductAction variant="body2">
            <Tooltip placement="left-start" title="افزودن به لیست">
              <FormatListBulleted />
            </Tooltip>
          </ProductAction>
        </PbStartBox>
        <ProductEndBox>
          <ProductImageBox>
            <SideBySideMagnifier
              className="test-magnify"
              imageSrc={
                "https://dkstatics-public.digikala.com/digikala-products/7b909fe2cb331170306d361b4b24991e7b6d17e2_1656122727.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_80"
              }
              largeImageSrc={product.link}
              switchSides
              fillAvailableSpace={false}
              // zoomContainerBorder={"1px solid gray"}
              overlayOpacity={0.5}
              // overlayBoxColor={"#EF3C51"}
            />
            {/* <ProductImage src={product.link} /> */}
          </ProductImageBox>
        </ProductEndBox>
      </div>
    );
  };
  const EndGrid = () => {
    const NavBox = styled(Box)(() => ({}));

    const Nav = styled(Typography)(() => ({
      color: "#19BFD6",
    }));
    //
    const PersionNumber = styled(Typography)(() => ({
      fontFamily: "IranSens",
    }));
    const ScoreItemBox = styled(Box)(() => ({
      display: "flex",
    }));
    const ScoreItemContentBox = styled(Box)(() => ({
      marginLeft: "4px",
    }));
    //
    const ColorBox = styled(Box)(({ isone, background }) => ({
      backgroundColor: background,
      width: "30px",
      height: "30px",
      minHeight: "30px",
      borderRadius: "50%",
      cursor: "pointer",
      marginLeft: isone != "true" ? "1rem" : "0",
      display: "flex",
      justifyContent: "center",
    }));
    const EitherSizeOrColorBox = () => {
      if ("availableColors" in product) {
        return (
          <div
            id="ColorBox"
            className="mt-4 w-100 d-flex flex-column justify-start"
          >
            <div className="d-flex  w-100 justify-content-start">
              <Typography variant="h6">رنگ : {selectedColorOrSize}</Typography>
            </div>

            <div className="w-100 d-flex justify-content-start mt-1rm">
              {product.availableColors.map((item, index) => {
                // ['colorCode','colorName']

                return (
                  <Tooltip key={index} placement="bottom" title={item[1]}>
                    <ColorBox
                      onClick={() => setSelectedColorOrSize(item[1])}
                      isone={index == 0 ? "true" : ""}
                      background={item[0]}
                    >
                      {selectedColorOrSize === item[1] ? <Done /> : null}
                    </ColorBox>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        );
      } else if ("availableSizes" in product) {
        return (
          <div className="mt-4 w-100 d-flex justify-start flex-column">
            <div className="d-flex  w-100 justify-content-start">
              <PersionNumber variant="h6">
                سایز: {selectedColorOrSize}
              </PersionNumber>
            </div>

            <Select
              className="w-10 w-25 mt-1rm"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedColorOrSize}
              onChange={(event) => {
                setSelectedColorOrSize(event.target.value);
              }}
            >
              {product.availableSizes.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    <PersionNumber variant="body1">{item}</PersionNumber>
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        );
      } else return null;
    };
    const PropertyBox = () => {
      if ("property" in product) {
        const keyAndValue = Object.entries(product.property).slice(0,3)

        return (
          <div
            id="PropertyBox"
            className="mt-4 w-100 d-flex flex-column justify-start"
          >
            {" "}
            <Typography className="font-weight-bold mb-1rm" variant="h6">
              ویژگی ها{" "}
            </Typography>
            {keyAndValue.map((item, index) => {
              return (
                <Typography key={index} className=" mb-1rm" variant="body2">
                  <span className="text-muted m">
                    {item[0].replaceAll("-", " ")}
                  </span>
                  <span className="ms-2 me-2">:</span>
                  <span className="font-weight-bold">{item[1]}</span>
                </Typography>
              );
            })}
          </div>
        );
      }
      return null;
    };

    return (
      <div className="d-flex w-100  ">
        <EndGridColumnOne>
          <NavBox className="w-100 d-flex justify-content-start">
            <Link to={"/"}>
              <Nav variant="body1">محصول</Nav>
            </Link>
            <span className="mrl">/</span>
            <Link to={"/"}>
              <Nav variant="body1">
                {product.category[3]?.replaceAll("-", " ")}
              </Nav>
            </Link>
          </NavBox>
          <div
            id="TitleBox"
            className="w-100 d-flex justify-content-start mt-1rm"
          >
            <Typography className="fw-bold" variant="h6">
              {product.name[1]}
            </Typography>
          </div>
          <Divider className="bg-black ms-2 mt-1rm" />
          <div id="ReplayBox" className="mt-2 w-100 d-flex justify-start">
            <ScoreItemBox className="">
              <ScoreItemContentBox>
                <Star fontSize="small" className="fill-yellow" />
              </ScoreItemContentBox>
              <ScoreItemContentBox>
                <PersionNumber variant="caption">
                  {`4.2`}
                  <span className="text-muted">{`(92)`}</span>
                </PersionNumber>
              </ScoreItemContentBox>
            </ScoreItemBox>
            {/* // */}
            <a href="comment-box">
              <ScoreItemBox className="ms-3 text-blue-info">
                <ScoreItemContentBox>
                  <PersionNumber variant="caption">{"67"}</PersionNumber>
                </ScoreItemContentBox>
                <ScoreItemContentBox>
                  <Typography variant="caption">دیدگاه</Typography>
                </ScoreItemContentBox>
              </ScoreItemBox>
            </a>
            {/* // */}
            <a href="ask-box">
              <ScoreItemBox className="ms-3 text-blue-info">
                <ScoreItemContentBox>
                  <PersionNumber variant="caption">{"3"}</PersionNumber>
                </ScoreItemContentBox>
                <ScoreItemContentBox>
                  <Typography variant="caption">پرسش</Typography>
                </ScoreItemContentBox>
              </ScoreItemBox>
            </a>
          </div>

          <div
            id="PecentPeopleLikeBox"
            className="mt-2 w-100 d-flex justify-start"
          >
            <ThumbUpOffAlt className="fill-green " fontSize="small" />
            <PersionNumber
              className="ms-1"
              variant="caption"
            >{`78%`}</PersionNumber>
            <PersionNumber
              className="ms-1 me-1"
              variant="caption"
            >{`(40)`}</PersionNumber>
            <Typography variant="caption">
              از خریداران این کالا را پیشنهاد کردا اند
            </Typography>
            <Tooltip
              title="
            خریداران کالا با انتخاب گزینه پیشنهاد یا عدم پیشنهاد تجربه خود را با کاربران به اشتراک می گذارند
            "
              placement="bottom"
            >
              <Info className="fill-gray " fontSize="small" />
            </Tooltip>
          </div>
          <EitherSizeOrColorBox />
          <PropertyBox />
        </EndGridColumnOne>
        <EndGridColumnTwo className="bg-gray-200">
          <EGCT_SellerInfoBox id="SellerBox" className="w-100 ">
            <EGCT_SellerInfoRowOne className="d-flex w-100  flex-column  ">
              <EGCT_SellerInfo_Item className="  border-bottom ">
                <p className="font-weight-bold .font-size-1_6rm">فروشنده</p>
                <div className="d-flex mt-1rm">
                  <StoreSharp />
                  {/* sellerName */}
                  <Typography className="ms-2" variant="subtitle1">
                    کارزین تل
                  </Typography>
                </div>
                <div className="d-flex align-items-center  justify-content-center mt-2">
                  <PersionNumber className="color-green" variant="caption">
                    {"100%"}
                  </PersionNumber>
                  <Typography
                    sx={{ color: "#81858B" }}
                    variant="caption"
                    className="ms-md-2 "
                  >
                    رضایت از کالا
                  </Typography>
                  <span className="ms-2 me-2">|</span>
                  <Typography sx={{ color: "#81858B" }} variant="caption">
                    عملکرد
                  </Typography>
                  <Typography
                    variant="caption"
                    className="ms-md-2  color-green"
                  >
                    {"عالی"}
                  </Typography>
                </div>
              </EGCT_SellerInfo_Item>
            </EGCT_SellerInfoRowOne>
            <EGCT_SellerInfoRowTow>
              <EGCT_SellerInfo_Item className="border-bottom">
                <div className="d-flex">
                  <GppGood />
                  <PersionNumber className="ms-2" variant="button">
                    {"گارانتی 6 ماهه ارمان همرا ارتباط آریا"}
                  </PersionNumber>
                </div>
              </EGCT_SellerInfo_Item>
            </EGCT_SellerInfoRowTow>
            <EGCT_SellerInfoRowThree>
              <EGCT_SellerInfo_Item className="border-bottom">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <AssignmentTurnedIn className="fill-blue" />
                    <Typography
                      className="font-weight-bold ms-2"
                      variant="body1"
                    >
                      {"موجود در انبار دیجی کالا"}
                    </Typography>
                  </div>
                  <ArrowBackIos fontSize="small" />
                </div>
              </EGCT_SellerInfo_Item>
            </EGCT_SellerInfoRowThree>
            <EGCT_SellerInfoRowFour>
              <EGCT_SellerInfo_Item>
                <div className="d-flex justify-content-end">
                  <DiscountBox_v2 className="me-2">
                    <Discount variant="caption">909,590</Discount>
                  </DiscountBox_v2>
                  <RedPercentBox>
                    <RedPercent>{"12%"}</RedPercent>
                  </RedPercentBox>
                </div>
                <div className="d-flex">
                  <Info className="fill-gray" fontSize="small" />
                  <Typography className="text-gray ms-2" variant="caption">
                    قیمت فروشنده
                  </Typography>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="pricebox">
                    <PriceBox>
                      <Price variant="body1" className="price">
                        999999
                      </Price>
                    </PriceBox>
                    <TomanBox>
                      <Toman src="/fonts/toman.svg" />
                    </TomanBox>
                  </div>
                </div>
                <Button_v1 variant="contained" className="bg-red">
                  افزودن به سبد
                </Button_v1>
              </EGCT_SellerInfo_Item>
            </EGCT_SellerInfoRowFour>
          </EGCT_SellerInfoBox>
        </EndGridColumnTwo>
      </div>
    );
  };
  const SliderDialog = () => {
    return (
      <Dialog_v1 open={IsDialogOpen}>
        <ClickAwayListener onClickAway={() => SetIsDialogOpen(false)}>
          <DialogSliderBox>
            <div className="w-96">
              <DS_TitleBox className="border-bottom">
                <DSTitle
                  variant="body1"
                  className="color-red font-weight-bold "
                >
                  تصاویر رسمی
                </DSTitle>
                <div
                  className="cur-pointer"
                  onClick={() => SetIsDialogOpen(false)}
                >
                  <Close />
                </div>
              </DS_TitleBox>
              <DS_MainBox className="d-flex mt-2 mb-2">
                <DSM_CloumnOne>
                  <DSM_Img
                    src={
                      "anotherLink" in product
                        ? product.anotherLink[SelectedImageIndex]
                        : ""
                    }
                  />
                </DSM_CloumnOne>
                <DSM_CloumnTwo>
                  <Grid container rowSpacing={2}>
                    {product.anotherLink?.map((item, index) => {
                      return (
                        <Grid
                          onClick={() => {
                            setSelectedImageIndex(() => index);
                          }}
                          key={index}
                          item
                          md={3}
                        >
                          <SliderItemBox>
                            <SliderImg src={item} />
                          </SliderItemBox>
                        </Grid>
                      );
                    })}
                  </Grid>
                </DSM_CloumnTwo>
              </DS_MainBox>
            </div>
          </DialogSliderBox>
        </ClickAwayListener>
      </Dialog_v1>
    );
  };

  return (
    <RootContiner>
      <NavStateBox>
        <NavStateStartBox>
          <NavState variant="body2">دیجی کالا</NavState>
          <NavState variant="body2">/</NavState>
          <NavState variant="body2">
            {product.category[0].replaceAll("-", " ")}
          </NavState>
          <NavState variant="body2">/</NavState>
          <NavState variant="body2">
            {product.category[1].replaceAll("-", " ")}
          </NavState>
          <NavState variant="body2">/</NavState>
          <NavState variant="body2">
            {product.category[2].replaceAll("-", " ")}
          </NavState>
        </NavStateStartBox>
        <NavStateEndBox>
          <NaveStateEndItemBox>
            <NavState variant="body2">ثبت اگهی در پیندو</NavState>
            <NavState variant="body2">
              <Hail />
            </NavState>
          </NaveStateEndItemBox>
          <NaveStateEndItemBox>
            <NavState variant="body2">فروش در دیجی کالا</NavState>
            <NavState variant="body2">
              <Store />
            </NavState>
          </NaveStateEndItemBox>
        </NavStateEndBox>
      </NavStateBox>
      <Grid container>
        <ProductImageAndBtn sm={12} item md={5}>
          <StartGrid />
          <SliderProductRootBox>
            {product.anotherLink?.map((item, index) => {
              return (
                <SliderItemBox
                  key={index}
                  onClick={() => {
                    SetIsDialogOpen(true);
                    setSelectedImageIndex(() => index);
                  }}
                >
                  <SliderImg src={item} />
                </SliderItemBox>
              );
            })}
            <SliderItemBox onClick={() => SetIsDialogOpen(true)}>
              <SliderImg isLast={"true"} src={product.link} />
              <MoreHoriz className="position-absolute" />
            </SliderItemBox>
            <SliderDialog />
          </SliderProductRootBox>
        </ProductImageAndBtn>
        <InfoProduct sm={12} item md={7}>
          <EndGrid />
        </InfoProduct>
      </Grid>
      <EndBox>
        <Waypoint onEnter={(e)=>{
            setOnLeave_EB_TitleBox(true)
        }}/>
        <EB_TitleBox
          className="border-bottom"
          onLeaveArea={onLeave_EB_TitleBox}
          indexOfTitle={indexOfTitle}
        />

        {/* introduction */}
        <EB_PropertyBox id="introduction-box">
         
            <EB_PropertyItemBox>
              <EB_TitleOfPropertyBox>
                <Typography className=" font-weight-bold" variant="h6">
                  معرفی
                </Typography>
              </EB_TitleOfPropertyBox>
              <EB_BodyOfPropertyBox>
                <EB_BodyOfProperty variant="body2">
                 
                   {
                    'introduction' in product &&  <ReadMoreText>{product.introduction[0]}</ReadMoreText>
                   }
                  
                </EB_BodyOfProperty>
              </EB_BodyOfPropertyBox>
            </EB_PropertyItemBox>
          
        </EB_PropertyBox>
        <Waypoint
       topOffset={40}
         onPositionChange={(e)=>{
            if(e.currentPosition=="above" && e.previousPosition =="inside"){
              setIndexOfTitle(1)
            }
            if(e.currentPosition=="inside" && e.previousPosition =="above"){
              setIndexOfTitle(0)
            }
        }}/>
        {/* introduction */}

        <EB_PropertyBox id="property-box">
          
            <EB_PropertyItemBox>
              <EB_TitleOfPropertyBox>
                <Typography className="font-weight-bold" variant="h6">
                  مشخصات
                </Typography>
              </EB_TitleOfPropertyBox>

              <EB_BodyOfPropertyBox>
                <div className="d-flex justify-content-start align-self-start">
                  <Typography className="font-weight-bold" variant="h6">
                    مشخصات
                  </Typography>
                </div>
                    {"property" in product  &&<ReadMoreProperty>{product?.property}</ReadMoreProperty>}
                 
                
              </EB_BodyOfPropertyBox>
            </EB_PropertyItemBox>
          
        </EB_PropertyBox>

        <Waypoint 
        //  bottomOffset={-500}
        topOffset={40}
        onPositionChange={(e)=>{
          console.log(e)
            if(e.currentPosition=="above" && e.previousPosition =="inside"){
              setIndexOfTitle(2)
            }
            if(e.currentPosition=="inside" && e.previousPosition =="above"){
              setIndexOfTitle(1)
            }
        }}/>
        <CommentBox  container >
          {/* <Waypoint onEnter={()=>setIndexOfTitle(2)}/> */}
          <Grid item lg={3} md={3} sm={12}>
            <CB_TitleBox>
              
              <Typography id="viewpoint-box" className="font-weight-bold mb-3" variant="h6">
                امتیاز و دیدگاه کاربران
              </Typography>
              <div
                style={{
                  width: "74px",
                  height: "2.5px",
                  backgroundColor: "red",
                }}
              ></div>
            </CB_TitleBox>
            <CB_ScoreAndSortBox>
              <CB_BigScoreBox>
                <Typography variant="h4">{"۵"}</Typography>

                <Typography variant="body1">از {"۵"}</Typography>
              </CB_BigScoreBox>
              <CB_StarRiteBox>
                {[1, 2, 3, 4, 5].map((i, index) => (
                  <Star key={index} fontSize="small" className="fill-yellow " />
                ))}
              </CB_StarRiteBox>
              <Typography variant="caption">
                شما هم درباره درباره این کالا نظر بدهید
              </Typography>
              <MyButton className=" mt-3" variant="outlined">
                ثبت دیدگاه
              </MyButton>
            </CB_ScoreAndSortBox>
          </Grid>
          <Grid className="mt-5"  item lg={9} md={9} sm={12}>
            {[1,2,3,4].map((comment,index)=>{
              
              return(
            <div key={index} className={`w-90 mx-auto d-flex flex-column justify-content-center pb-4 ${index !==0 ? 'mt-4':' '} border-bottom`}>
              <header>
                <div className="d-flex justify-content-start align-items-center w-100 ">
                  <Badge_v1>{"۵.۰"}</Badge_v1>
                  <Typography className="font-weight-bold ms-2" variant="h6">
                    {"از هر نظر عالی"}
                  </Typography>
                </div>
              </header>
              <div className="w-90 mt-4 ms-5 d-flex flex-column justify-content-start align-items-start ">
                <main className=" d-flex justify-content-start align-items-center pb-2 border-bottom_v2 w-100">
                <PersionNumber_v2 variant="caption">
                  <span>{'27'}</span>
                  <span className="ms-1">{'ابان'}</span>
                  <span className="ms-1">{'1400'}</span>
                  <span className="ms-1">.</span>
                  <span className="ms-1">{'مرضیه برزگر مرادی'}</span>
                </PersionNumber_v2>
                <Badge_CommentBox ><Typography variant="caption">{'خریدار'}</Typography></Badge_CommentBox>
                </main>
                    <section className="mt-4 border-bottom_v2  w-100 pb-2">
                      <Typography variant="body1">
                      برای نوجوانان عالیه
                      </Typography>
                    </section>
                    <section className="mt-4 border-bottom_v2  w-100 pb-2 ms-5 d-flex flex-column">
                      {
                        //replayBox
                        [1,2,3,4].map((item,index)=>{
                          return(
                            <div className="d-flex  flex-column w-100" key={index}>
                            <article id="row1" className="d-flex ">
                              <Typography variant="caption">
                                پاسخ
                              </Typography>
                              <Typography className="ms-3" variant="body1">
                                اره خوبه 
                              </Typography>
                            </article>
                            <article id="row2" className="d-flex"  style={{
                              marginRight:'2.5rem'
                            }}>
                              
                              <div id="col-1">
                              <Typography className="text-muted " variant="caption">
                              محمدرضا محسنی زاده
                              </Typography>
                              </div>
                              <div id="col-2" className="ms-auto d-flex mt-2" >
                             <Typography className="text-muted me-5" variant="button">
                              ایا این پاسخ کافی بود ؟
                             </Typography>
                             <div id="action-buttons" className="d-flex">
                                <span className="d-flex align-items-center"> 
                                 <PersionNumber_v2>0</PersionNumber_v2>
                                <ThumbUp className="ms-2 cur-pointer" fontSize="small"/>
                                </span>
                                <span className="d-flex align-items-center ms-2"> 
                                 <PersionNumber_v2>0</PersionNumber_v2>
                                <ThumbDown className="ms-2 cur-pointer" fontSize="small"/>
                                </span>
                             </div>
                              </div>
                            </article>
                        </div>
                          )
                        })
                      }
                      
                    </section>
              </div>
             
            </div>
              )
            })}
            
          </Grid>
        </CommentBox>
      </EndBox>
    </RootContiner>
  );
}