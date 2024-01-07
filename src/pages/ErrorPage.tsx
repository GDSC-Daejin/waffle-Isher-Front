import styled from "styled-components";

import ErrorImg from '../imgs/error.png';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 80%;
    object-fit: cover;
  }
  h1 {
    margin-top: 50px;
    font-size: 28px;
  }
`

const Error = () => {
  return ( 
    <ErrorContainer>
      <img src={ErrorImg} alt="#" />
      <h1>유효하지 않는 페이지 입니다.</h1>
    </ErrorContainer>
  );
}
export default Error;