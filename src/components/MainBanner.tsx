import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import styled from "styled-components";

import Testfood from '../imgs/food2.jpg';
import Testfood1 from '../imgs/food3.jpg';

const BannerContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .slide {
    width: 100%;
    height: 300px;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const MainBanner = () => {
  return ( 
    <BannerContainer>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide className='slide'>
          <img src={Testfood} alt="음식 이미지" />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Testfood1} alt="음식 이미지" />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={Testfood1} alt="음식 이미지" />
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
}

export default MainBanner;