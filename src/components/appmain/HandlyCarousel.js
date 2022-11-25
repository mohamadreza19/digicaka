import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { useRef } from "react";
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

const data = [
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/7b909fe2cb331170306d361b4b24991e7b6d17e2_1656122727.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/226a58af1aa6eaec0bbd65d296525c4ae2729818_1660380705.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/3c76e3dc1fe83c20dd2b87c2923e0f78906c147b_1665825159.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/429a4550c9251537d0d1c3dbbecc5ec9a66c86d4_1654576288.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/7b909fe2cb331170306d361b4b24991e7b6d17e2_1656122727.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/226a58af1aa6eaec0bbd65d296525c4ae2729818_1660380705.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/3c76e3dc1fe83c20dd2b87c2923e0f78906c147b_1665825159.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/429a4550c9251537d0d1c3dbbecc5ec9a66c86d4_1654576288.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/7b909fe2cb331170306d361b4b24991e7b6d17e2_1656122727.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/226a58af1aa6eaec0bbd65d296525c4ae2729818_1660380705.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/3c76e3dc1fe83c20dd2b87c2923e0f78906c147b_1665825159.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-products/429a4550c9251537d0d1c3dbbecc5ec9a66c86d4_1654576288.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    price: "399,000",
    percent: "33%",
    discount: "595,000",
  },
];
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
    return data.map((item, index) => {
      return (
        <ItemBox
          isfirst={`${index == 0 ? true : false}`}
          islast={`${index == data.length - 1 ? true : false}`}
          key={index}
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
