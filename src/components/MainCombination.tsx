import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import 'swiper/css';
import FoodTest from '../imgs/food1.jpg';

const CombinationContainer = styled.div`
  margin: 10px 0px;
  padding: 5px 20px;
  border-top: 1px solid black;
  h1 {
    margin: 10px 0px;
    font-size: 22px;
  }
  .slide {
    p {
      margin: 10px 0px 20px;
      text-align: center;
      font-size: 16px;
    }
    .slideBox {
      position: relative;
      width: 100%;
      height: 90px;
      margin: 2px 0px;
      background-color: white;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
            slidesPerView: 3,
            spaceBetween: 30
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          900: {
            slidesPerView: 6,
            spaceBetween: 50
          }
        }}
      >
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <Link to={'/menuDetail'}>
            <img className='slideBox' src={FoodTest} alt='푸드 이미지'>
            </img>
          </Link>
          <p>조합 이름</p>
        </SwiperSlide>

      </Swiper>
    </CombinationContainer>
  );
}

export default MainCombination;