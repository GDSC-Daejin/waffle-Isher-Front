import styled from "styled-components";

import Test from '../imgs/test.jpeg';
import MyRecipeBox from "../components/MyRecipeBox";

const MypageContainer = styled.div`
  
`

const MypageTopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: antiquewhite;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
  }
  h1 {
    margin-top: 10px;
  }
`

const MypageCountBox = styled.div`
  padding: 20px 0px;
  background-color: white;
  text-align: center;
  h2 {
    margin-bottom: 10px;
  }
`

const MypageRecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 100px;
`

const Mypage = () => {
  return ( 
    <MypageContainer>
      <MypageTopBox>
        <img src={Test} alt="유저 이미지" />
        <h1>찬영</h1>
      </MypageTopBox>
      <MypageCountBox>
        <h2>나의 레시피</h2>
        <h3>3</h3>
      </MypageCountBox>
      <MypageRecipeBox>
        <MyRecipeBox/>
        <MyRecipeBox/>
        <MyRecipeBox/>
      </MypageRecipeBox>
    </MypageContainer>
  );
}
export default Mypage;