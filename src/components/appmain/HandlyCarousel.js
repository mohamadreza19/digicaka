import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UiContext } from "../../contextApi/uiContext";
import { get_spacialProducts } from "../../services/spacialProduct";
import {
  HandllyItemsBox,
  HandllyCarouselBox,
  HandllyImg,
  ItemBox,
  ImgHandllyBox,
  PriceBox,
  Price,
  TomanBox,
  Toman,
  PriceTomanBox,
  Discount,
  DiscountBox,
  RedPercent,
  RedPercentBox,
  RightItemBox,
  RightItemTitleImg,
  RightItemTitleImgBox,
  RightItemAmaizingImgBox,
  RightItemAmaizingImg,
  RightItemCaption,
  RightArrowBox,
  LeftArrowBox,
} from "../../styles/appmain";

export const RedBox = styled(Box)(() => ({
  width: "100%",
  height: "250px",
  borderRadius: "12px",
  backgroundColor: "#EF3C51",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export function HandllyCarousel() {
  const { spacialProducts } = useContext(UiContext);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const scrollContainer = useRef(null);
  //
  const handleRightScroll = () => {
    scrollContainer.current.scrollBy(200, 0);
    console.log("slm");
  };
  const handleLeftScroll = () => {
    scrollContainer.current.scrollBy(-350, 0);
  };
  //
  const MappedItems = () => {
    return spacialProducts.map((item, index) => {
      return (
        <Link key={index} to={`/product/${item.name[0]}`}>
          <ItemBox
            isfirst={`${index == 0 ? true : false}`}
            islast={`${index == spacialProducts.length - 1 ? true : false}`}
          >
            <ImgHandllyBox>
              <HandllyImg src={item.link} />
            </ImgHandllyBox>
            <PriceTomanBox>
              <RedPercentBox>
                <RedPercent>{item.percent}</RedPercent>
              </RedPercentBox>
              <div className="pricebox">
                <PriceBox>
                  <Price variant="body1" className="price">
                    {item.price}
                  </Price>
                </PriceBox>
                <TomanBox>
                  <Toman src="/fonts/toman.svg" />
                </TomanBox>
              </div>
            </PriceTomanBox>
            <DiscountBox>
              <Discount variant="caption">{item.discount}</Discount>
            </DiscountBox>
          </ItemBox>
        </Link>
      );
    });
  };
  const RightItem = () => {
    return (
      <RightItemBox isright="true">
        <RightItemTitleImgBox>
          <RightItemTitleImg src="/images/amazing-typo.svg" />
        </RightItemTitleImgBox>
        <RightItemAmaizingImgBox>
          <RightItemAmaizingImg src="/images/box.png" />
        </RightItemAmaizingImgBox>
        <RightItemCaption variant="body1">
          مشاهده همه
          <KeyboardArrowLeft />
        </RightItemCaption>
      </RightItemBox>
    );
  };
  const LeftItem = () => {
    return (
      <RightItemBox>
        <RightItemCaption variant="body1">
          مشاهده همه
          <KeyboardArrowLeft />
        </RightItemCaption>
      </RightItemBox>
    );
  };

  return (
    <HandllyCarouselBox>
      <RedBox>
        <RightArrowBox
          onClick={() => {
            handleRightScroll();
            console.log(startX);
          }}
          className="arrow-box"
        >
          <ArrowForwardIos className="arrow-forward" />
        </RightArrowBox>
        <HandllyItemsBox
          onMouseDown={(e) => {
            isMouseDown.current = true;
            startX.current = e.pageX - scrollContainer.current.offsetLeft;
          }}
          onMouseUp={() => {
            isMouseDown.current = false;
          }}
          onMouseMove={(e) => {
            if (!isMouseDown.current) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.current.offsetLeft;
            const walk = (x - startX.current) * 3;

            scrollContainer.current.scrollLeft = scrollLeft.current - walk;
          }}
          ref={scrollContainer}
        >
          <RightItem />
          <MappedItems />
          <LeftItem />
        </HandllyItemsBox>
        <LeftArrowBox
          onClick={() => {
            handleLeftScroll();
            console.log(startX);
          }}
          className="arrow-box"
        >
          <ArrowBackIos className="arrow-forward" />
        </LeftArrowBox>
      </RedBox>
    </HandllyCarouselBox>
  );
}
