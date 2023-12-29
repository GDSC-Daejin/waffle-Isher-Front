import styled from "styled-components";

import Food from '../imgs/food.jpeg';
import { Link } from "react-router-dom";

const MyRecipeContainer = styled.div`
  display: flex;
  width: 370px;
  height: 130px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 20px;
`

const MyRecipeLeft = styled.div`
  img {
    width: 110px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0px 0px 20px;
  }
`
const MyRecipeRight = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`

const MyRecipeDeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-radius: 0px 20px 20px 0px;
  background-color: #FF6465;
  cursor: pointer;
  p {
    padding: 5px;
    font-size: 16px;
  }
`

const MyRecipeRightTop = styled.div`
  text-align: center;
  padding: 10px;
  p {
    font-size: 18px;
    line-height: 22px;
  }
`

const MyRecipeRightBottom = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    object-fit: cover;
  }
`

const MyRecipeBox = () => {
  return ( 
    <MyRecipeContainer>
      <MyRecipeLeft>
        <img src={Food} alt="음식사진" />
      </MyRecipeLeft>
      <MyRecipeRight to={'/menuDetail'}>
        <MyRecipeRightTop>
          <p>세븐 일레븐에서 어쩌구 저쩌구 하면 감칠맛과 매운맛을...</p>
        </MyRecipeRightTop>
        <MyRecipeRightBottom>
          <img src={Food} alt="음식사진" />
          <img src={Food} alt="음식사진" />
          <img src={Food} alt="음식사진" />
        </MyRecipeRightBottom>
      </MyRecipeRight>
      <MyRecipeDeleteBox>
        <p>삭제</p>
      </MyRecipeDeleteBox>
    </MyRecipeContainer>
  );
}
export default MyRecipeBox;