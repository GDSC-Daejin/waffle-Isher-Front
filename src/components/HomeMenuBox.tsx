import styled from "styled-components";

import { BiHeartCircle } from "react-icons/bi";
import Food from '../imgs/food.jpeg';
import User from '../imgs/test.jpeg';
import { Link } from "react-router-dom";
import React from "react";

const HomeMBox = styled(Link)`
  display: flex;
  margin: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-decoration: none;
  cursor: pointer;
  h1 {
    font-size: 20px;
    color: black;
  }
`

const HomeMLeftBox = styled.div`
  flex-grow: 1;
  margin-right: 25px;
  img {
    width: 154px;
    height: 115px;
    border-radius: 15px;
    object-fit: cover;
  }
`

const HomeMRightBox = styled.div`
  flex-grow: 2;
  position: relative;
  .heart {
    position: absolute;
    color: red;
    bottom: 0px;
    right: 10px;
  }
`

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 100%;
  }
  h1 {
    margin-left: 15px;
  }
`

const IntroBox = styled.div`
  margin: 15px 0px;
  h2 {
    font-size: 1rem;
    line-height: 20px;
    color: #B06868;
  }
`

const HomeMenuBox = () => {

  const handleGoodClick = (e:React.MouseEvent<MouseEvent>) => {
    e.preventDefault();
  }
  
  return ( 
    <HomeMBox to={'/'}>
      <HomeMLeftBox>
        <img src={Food} alt="음식 이미지" />
        <ProfileBox>
          <img src={User} alt="유저 이미지" />
          <h1>롯데리아노예</h1>
        </ProfileBox>
      </HomeMLeftBox>
      <HomeMRightBox>
        <h1>롯데리아노예님의 오감자 치즈 후라이!!</h1>
        <IntroBox>
          <h2>조리 시간 : 10분</h2>
          <h2>난이도 : 4</h2>
          <h2>가격 : 8700원</h2>
        </IntroBox>
        <BiHeartCircle className="heart" onClick={handleGoodClick} size={30}/>
      </HomeMRightBox>
    </HomeMBox>
  );
}

export default HomeMenuBox;