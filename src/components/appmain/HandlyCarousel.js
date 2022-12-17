import "swiper/css";
import "swiper/css/navigation";
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
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

import { useImmer } from "use-immer";

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

  const handlyCarouselSwiperSlider = useRef(null);
  const [activeSlider, setActiveSlider] = useImmer({
    isMsounted: false,
    activeIndex: 0,
    isEnd: false,
  });

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
      <SwiperSlide>
        <RightItemBox>
          <RightItemCaption variant="body1">
            مشاهده همه
            <KeyboardArrowLeft />
          </RightItemCaption>
        </RightItemBox>
      </SwiperSlide>
    );
  };
  const RightArrow = () => {
    return activeSlider.activeIndex > 0 ? (
      <RightArrowBox
        onClick={() => handlyCarouselSwiperSlider?.current?.slidePrev()}
      ></RightArrowBox>
    ) : null;
  };

  const LeftArrow = () => {
    // if (activeIndex.isMsounted === true)
    return !activeSlider.isEnd ? (
      <LeftArrowBox
        onClick={() => handlyCarouselSwiperSlider?.current?.slideNext()}
      ></LeftArrowBox>
    ) : null;
  };
  return (
    <HandllyCarouselBox>
      <RedBox>
        <HandllyItemsBox className="handlly-item">
          <Swiper
            spaceBetween={0}
            slidesPerView={6}
            modules={[Navigation, FreeMode]}
            freeMode={true}
            // navigation={true}
            className="direction-rlt"
            onBeforeInit={(swiper) => {
              handlyCarouselSwiperSlider.current = swiper;
              setActiveSlider((draf) => {
                draf.isMsounted = true;
              });
            }}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => {
              setActiveSlider((draf) => {
                draf.activeIndex = swiper.activeIndex;
                draf.isEnd = swiper.isEnd;
              });
            }}
          >
            <RightArrow />
            {/* right item */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* light item */}
            {spacialProducts.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={`/product/${item.name[0]}`}>
                    <ItemBox
                      isfirst={`${index == 0 ? true : false}`}
                      islast={`${
                        index == spacialProducts.length - 1 ? true : false
                      }`}
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
                </SwiperSlide>
              );
            })}
            {/* left item */}
            <SwiperSlide>
              <RightItemBox>
                <RightItemCaption variant="body1">
                  مشاهده همه
                  <KeyboardArrowLeft />
                </RightItemCaption>
              </RightItemBox>
            </SwiperSlide>
            {/* left item */}
            <LeftArrow />
          </Swiper>
        </HandllyItemsBox>
      </RedBox>
    </HandllyCarouselBox>
  );
}
