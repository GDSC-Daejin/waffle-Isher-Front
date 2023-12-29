import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import styled from "styled-components";

import "swiper/css/pagination";
import 'swiper/css';

const SwiperContainer = styled.div`
  padding: 10px 10px 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  .slide {
    height: 70px;
    background-color: white;
    border-radius: 20px;
  }
`

const MenuDetailSwiper = () => {
  return ( 
    <SwiperContainer>
      <h2>재료</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={8}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        breakpoints={{
          300: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 50
          }
        }}
      >
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
        <SwiperSlide className='slide'></SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
export default MenuDetailSwiper;