import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import styled from "styled-components";

const BannerContainer = styled.div`
  .slide {
    height: 400px;
    background-color: white;
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
        <SwiperSlide className='slide'>베너 1</SwiperSlide>
        <SwiperSlide className='slide'>베너 2</SwiperSlide>
        <SwiperSlide className='slide'>베너 3</SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
}

export default MainBanner;