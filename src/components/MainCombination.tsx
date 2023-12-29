import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import 'swiper/css';
import React from 'react';

const CombinationContainer = styled.div`
  margin: 10px;
  margin-bottom: 40px;
  h1 {
    margin: 10px 0px;
    font-size: 22px;
  }
  .slide {
    p {
      margin-top: 10px;
      text-align: center;
      font-size: 16px;
    }
    .slideBox {
      position: relative;
      height: 70px;
      background-color: white;
      border-radius: 10px;
    }
  }

`

interface CombinationData {
  combinationName: string;
}

const MainCombination:React.FC<CombinationData> = ({combinationName}) => {
  return ( 
    <CombinationContainer>
      <h1>{combinationName}</h1>
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
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <div className='slideBox'></div>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <div className='slideBox'></div>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <div className='slideBox'></div>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <div className='slideBox'></div>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <div className='slideBox'></div>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <div className='slideBox'></div>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
      </Swiper>
    </CombinationContainer>
  );
}

export default MainCombination;