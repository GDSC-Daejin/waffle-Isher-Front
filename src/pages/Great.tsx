import styled from "styled-components";

import { MdDelete } from "react-icons/md";
import TestImg from '../imgs/food1.jpg';

const GreatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px;
  .line {
    width: 80%;
    height: 3px;
    background-color: gray;
  }
  h1 {
    margin: 15px 0px;
    font-size: 20px;
  }
`

const GreatBox = styled.div`
  width: 80%;
  margin: 15px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .greatboxintro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    h2 {
      margin-bottom: 5px;
      font-size: 20px;
    }
    h3 {
      font-size: 1rem;
    }
    .deletebutton {
      margin-right: 10px;
    }
  }
`

const Great = () => {
  // 현재 날짜를 가져오기
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = currentDate.getDate();

  return ( 
    <GreatContainer>
      <div className="line"></div>
      <h1>{`Today ${month}/${day}`}</h1>
      <GreatBox>
        <img src={TestImg} alt="#"/>
        <div className="greatboxintro">
          <div>
            <h2>아주맛있는 오감자 치즈 스틱</h2>
            <h3>롯데리아 캐찹도둑</h3>
          </div>
          <MdDelete className='deletebutton' size={25}/>
        </div>
      </GreatBox>
      <GreatBox>
        <img src={TestImg} alt="#"/>
        <div className="greatboxintro">
          <div>
            <h2>아주맛있는 오감자 치즈 스틱</h2>
            <h3>롯데리아 캐찹도둑</h3>
          </div>
          <MdDelete className='deletebutton' size={25}/>
        </div>
      </GreatBox>
      <GreatBox>
        <img src={TestImg} alt="#"/>
        <div className="greatboxintro">
          <div>
            <h2>아주맛있는 오감자 치즈 스틱</h2>
            <h3>롯데리아 캐찹도둑</h3>
          </div>
          <MdDelete className='deletebutton' size={25}/>
        </div>
      </GreatBox>
    </GreatContainer>
  );
}

export default Great;
