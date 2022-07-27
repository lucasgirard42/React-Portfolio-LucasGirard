import './Home.css';
import React, { useState } from 'react'
import Divider from '../Divider/Divider';
import imgProfil from './profil.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";

import TitreDevWeb from './TitreDevWeb/TitreDevWeb';
import { useRef } from 'react';
import { useSpring, } from 'react-spring';




function Home() {

    

    return (
        
        <div className='home'>
            <div className='grid-item1'>
                <img className='imgProfil' src={imgProfil} alt="profil" />
            </div>
            <TitreDevWeb />
            <Divider />
            <Swiper className='swiper'
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
               
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide >FRONT-END</SwiperSlide>
                <SwiperSlide >BACK-END</SwiperSlide>
                <SwiperSlide >REACT</SwiperSlide>
                <SwiperSlide >SYMFONY</SwiperSlide>
                <SwiperSlide >SEO</SwiperSlide>
                <SwiperSlide >WORDPRESS</SwiperSlide>
            </Swiper>
            <div className="mouse-icon">
                <div className="wheel"></div>
            </div>
        </div>
    )
}

export default Home; 
