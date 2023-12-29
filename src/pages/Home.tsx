import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import HomeListBox from "../components/HomeListBox";
import HomeMenuBox from "../components/HomeMenuBox";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const HomeTopBox = styled.div`
  padding: 10px;
`

const HomeListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

const HomeMenuContainer = styled.div`
  width: 100%;
  margin: 30px 0px 75px;
  padding: 20px 0px;
  border-radius: 15px 15px 0px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.2) 0px 1px 10px 1px;
`

const Home = () => {
  return ( 
    <HomeContainer>
      <HomeTopBox>
        <SearchInput/>
        <HomeListContainer>
          <HomeListBox>국물류</HomeListBox>
          <HomeListBox>간식&#47;스낵류</HomeListBox>
          <HomeListBox>음료&#47;주류</HomeListBox>
        </HomeListContainer>
      </HomeTopBox>
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