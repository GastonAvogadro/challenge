import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "../assets/carousel/slide1.jpg";
import slide2 from "../assets/carousel/slide2.jpg";
import slide3 from "../assets/carousel/slide3.jpg";
import slide4 from "../assets/carousel/slide4.jpg";

function Carousel() {
  const swiperData = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide1,
    slide2,
    slide3,
    slide4,
    slide1,
    slide2,
    slide3,
    slide4,
  ];

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      loop
      freeMode={false}
      slidesOffsetBefore={-70}
    >
      {swiperData.map((slide, i) => (
        <SwiperSlide key={i}>
          <img src={slide} alt={`Slide ${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
