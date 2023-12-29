import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import MainCombination from "../components/MainCombination";
import MainType from "../components/MainType";

import Cup from '../imgs/cup.png';
import Snack from '../imgs/snack.png';
import Ramen from '../imgs/ramen.png';

const MainContainer = styled.div`
  margin-bottom: 72px;
`

const Main = () => {
  return ( 
    <MainContainer>
      <MainBanner/>
      <MainType typeName="음료/주류" img={Cup} colorName="#DD4C4C"/>
      <MainType typeName="간식/스낵류" img={Snack} colorName="#CFC469"/>
      <MainType typeName="국물류" img={Ramen} colorName="#EDD099"/>
      <MainCombination combinationName="최근 등록된 조합" />
      <MainCombination combinationName="인기 조합" />
      <MainCombination combinationName="추천 조합" />
    </MainContainer>
  );
}
export default Main;