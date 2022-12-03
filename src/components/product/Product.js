import {
  Balance,
  BarChart,
  Done,
  Favorite,
  FormatListBulleted,
  Hail,
  Info,
  Notifications,
  Share,
  Star,
  Store,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import { UiContext } from "../../contextApi/uiContext";
import {
  InfoProduct,
  NaveStateEndItemBox,
  NavState,
  NavStateBox,
  NavStateEndBox,
  NavStateStartBox,
  PbStartBox,
  ProductAction,
  ProductEndBox,
  ProductImage,
  ProductImageAndBtn,
  ProductImageBox,
  RootContiner,
} from "../../styles/product";

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
            <ProductImage src={product.link} />
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
      console.log(product.property);
      if ("property" in product) {
        const keyAndValue = Object.entries(product.property);

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
        <div className="w-72">
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
            <PersionNumber variant="caption">{`78%`}</PersionNumber>
            <PersionNumber variant="caption">{`(40)`}</PersionNumber>
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
        </div>
        <div className="w-28">slm dobareh</div>
      </div>
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
        <ProductImageAndBtn sm={12} item md={4}>
          <StartGrid />
        </ProductImageAndBtn>
        <InfoProduct sm={12} item md={8}>
          <EndGrid />
        </InfoProduct>
      </Grid>
    </RootContiner>
  );
}
