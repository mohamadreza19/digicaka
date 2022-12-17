import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
export default function SwiperSlider() {
  const swiperRef = useRef(null);
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          //
        }}
        // install Swiper modules

        modules={[Navigation, Pagination]}
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
        onSlideChange={() => console.log("slide change")}
        ref={swiperRef}
      >
        <SwiperSlide className="siwper-slide">1</SwiperSlide>
        <SwiperSlide className="siwper-slide">2</SwiperSlide>
        <SwiperSlide className="siwper-slide">3</SwiperSlide>
        <SwiperSlide className="siwper-slide">4</SwiperSlide>
      </Swiper>
    </div>
  );
}
