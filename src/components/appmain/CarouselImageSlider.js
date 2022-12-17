import { Box, styled } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { ButtonBox, Container, DotIcon } from "../../styles/appmain";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CarouselImageSlider() {
  const swiperRef = useRef(0);
  const data = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/165f27bd204f7cf46a71da07e1cf499e170f6f5a_1668502891.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/49d1bc3107926f635c4457fa8bfd53a8a4528df7_1668335427.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/78f4f3986a6d2efbbf76f1b176c346b9567c6e6f_1668266678.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/c7a0650e84cb7237e9e557dfb1c52a99c21db153_1668408420.jpg?x-oss-process=image/quality,q_95",
  ];

  return (
    <>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          //
        }}
        // install Swiper modules

        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        className="swiper"
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map((item, index) => {
          console.log(item);
          return (
            <SwiperSlide key={index} className="siwper-slide">
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
