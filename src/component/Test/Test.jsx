import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Test.css";

// import required modules
import { Grid, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiperTest"
      >
        <SwiperSlide className="swiperSlideTest">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperSlideTest" >Slide 2</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 3</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 4</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 5</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 6</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 7</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 8</SwiperSlide>
        <SwiperSlide className="swiperSlideTest">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
