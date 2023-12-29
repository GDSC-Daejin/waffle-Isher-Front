import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

import MenuDetailSwiper from "../components/MenuDetailSwiper";
import TestImg from '../imgs/test.jpeg';

const MenuDetailContainer = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  h1 {
    margin: 15px 5px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

const GoodContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  background-color: white;
  .heart {
    margin-right: 20px;
    color: red;
  }
`


const MenuDetail = () => {
  return ( 
    <MenuDetailContainer>
      <img src={TestImg} alt="테스트 이미지" />
      <GoodContainer><FaHeart className="heart" size={30}/></GoodContainer>
      <h1>작성자</h1>
      <MenuDetailSwiper/>
    </MenuDetailContainer>
  );
}
export default MenuDetail;