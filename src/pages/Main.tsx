import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import MainCombination from "../components/MainCombination";

const MainContainer = styled.div`
  margin-bottom: 150px;
`

const Main = () => {
  return ( 
    <MainContainer>
      <MainBanner/>
      <MainCombination combinationName="최근 등록된 조합" />
      <MainCombination combinationName="인기 조합" />
      <MainCombination combinationName="추천 조합" />
    </MainContainer>
  );
}
export default Main;