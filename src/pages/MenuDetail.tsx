import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

import MenuDetailSwiper from "../components/MenuDetailSwiper";
import TestImg from '../imgs/test.jpeg';
import MenuDetailIntro from "../components/MenuDetailIntro";
import MenuDetailComment from "../components/MenuDetailComment";

const MenuDetailContainer = styled.div`
  margin-bottom: 70px;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
      <MenuDetailIntro/>
      <MenuDetailComment/>
    </MenuDetailContainer>
  );
}
export default MenuDetail;