import {
  Balance,
  BarChart,
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
  Box,
  Divider,
  Grid,
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
  });

  useEffect(() => {
    const matched = spacialProducts.find((item) => item.name[0] === name);
    SetProduct(() => matched);
    console.log(matched);
  }, [spacialProducts.length > 0]);

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

    return (
      <div className="d-flex w-100  ">
        <div className="w-72 ">
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
        </div>
        <div className="w-28">slm dobareh</div>
      </div>
    );
  };
  console.log(product.name[1]);
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
