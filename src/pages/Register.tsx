import { useState } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .registerbutton {
    width: 300px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const RegisterForm = styled.form`
  margin: 70px 0px;
  padding: 70px 25px 0px;
  height: 80vh;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.2) 0px 1px 10px 1px;
  label {
    display: block;
    margin: 15px 0px;
    font-size: 16px;
    color: #949494;
  }
  input {
    width: 270px;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #d2d2d2;
  }
  h1 {
    line-height: 2rem;
    padding-left: 0;
  }
  a {
    display: block;
    margin-top: 30px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    span {
      color: purple;
    }
  }
`

const RegisterBox = styled.div`
  
`

const Register = () => {

  const [register, setRegister] = useState({
    menuName: '',
    menuMethod:'',
    menuTime:'',
    menuDifficulty:'',
    menuPrice:'',
  })

  const handleOnChangeUser = (e:React.ChangeEvent<HTMLInputElement>)=> {

    // menuDifficulty input 의 보안을 위한 코드들
    const { name, value } = e.target;
    const validNumber = /^[1-5]$/;
    if (name === "menuDifficulty" && value !== "" && !validNumber.test(value)) {
      alert('1~5점 까지 입력하실 수 있습니다.')
      return;
    }


    setRegister(prevUser => ({
      ...prevUser,
      [e.target.name] : e.target.value
    }))
  }

  return ( 
    <RegisterContainer>
      <RegisterForm>
        <h1>안녕하세요 &#58;&#41;<br/>조합을 등록해 보세요.</h1>
          <RegisterBox>
          <label htmlFor="menuName">조합 이름</label>
            <input type="text" id="menuName" name="menuName" value={register.menuName} onChange={handleOnChangeUser} placeholder="조합의 이름을 알려주세요."/>
          </RegisterBox>
          <RegisterBox>
          <label htmlFor="menuMethod">조합 방법</label>
            <input type="text" id="menuMethod" name="menuMethod" value={register.menuMethod} onChange={handleOnChangeUser} placeholder="조합을 만드는 방법을 알려주세요."/>
          </RegisterBox>
          <RegisterBox>
          <label htmlFor="menuTime">조합 시간</label>
            <input type="text" id="menuTime" name="menuTime" value={register.menuTime} onChange={handleOnChangeUser} placeholder="조합의 요리시간(분) 을 알려주세요."/>
          </RegisterBox>
          <RegisterBox>
          <label htmlFor="menuDifficulty">조합 난이도</label>
            <input type="text" id="menuDifficulty" name="menuDifficulty" value={register.menuDifficulty} onChange={handleOnChangeUser} placeholder="조합의 난이도를 알려주세요. (1 ~ 5)"/>
          </RegisterBox>
          <RegisterBox>
          <label htmlFor="menuPrice">조합 비용</label>
            <input type="text" id="menuPrice" name="menuPrice" value={register.menuPrice} onChange={handleOnChangeUser} placeholder="조합의 비용을 알려주세요."/>
          </RegisterBox>
          <button className="registerbutton">등록하기</button>
      </RegisterForm>

    </RegisterContainer>
  );
}
export default Register;