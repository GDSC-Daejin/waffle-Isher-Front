import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import HomeListBox from "../components/HomeListBox";
import HomeMenuBox from "../components/HomeMenuBox";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 10px;
`

const HomeListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

const HomeMenuContainer = styled.div`
  width: 95%;
  margin: 30px 0px 100px;
`

const Home = () => {
  return ( 
    <HomeContainer>
      <SearchInput/>
      <HomeListContainer>
        <HomeListBox>국물류</HomeListBox>
        <HomeListBox>간식&#47;스낵류</HomeListBox>
        <HomeListBox>음료&#47;주류</HomeListBox>
      </HomeListContainer>
      <HomeMenuContainer>
        <HomeMenuBox/>
        <HomeMenuBox/>
        <HomeMenuBox/>
        <HomeMenuBox/>
      </HomeMenuContainer>
    </HomeContainer>
  );
}

export default Home;