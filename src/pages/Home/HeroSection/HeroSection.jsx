import React, { memo } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Section from './Section/Section';



const HeroSection = () => {

    return (<>
        <Swiper
            spaceBetween={30}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Section heading={"Welcome To Gufi Restaurant"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum assumenda reiciendis in voluptates eos est cupiditate sapiente sit libero deserunt et atque, sed minima?"} btnText={"Know More"} bgUrl="/hero-imgs/hero-1.webp"/>
            </SwiperSlide>

            <SwiperSlide>
                <Section heading={"Provide The Best and Quality Food"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum assumenda reiciendis in voluptates eos est cupiditate sapiente sit libero deserunt et atque, sed minima?"} btnText={"Know More"} bgUrl="/hero-imgs/hero-2.webp"/>
            </SwiperSlide>

            <SwiperSlide>
                <Section heading={"Our Waiters Try Their Best"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cum assumenda reiciendis in voluptates eos est cupiditate sapiente sit libero deserunt et atque, sed minima?"} btnText={"Know More"} bgUrl="/hero-imgs/hero-3.webp"/>
            </SwiperSlide>
        </Swiper>

    </>)
}

export default memo(HeroSection);
