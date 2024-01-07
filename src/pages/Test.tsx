import styled from "styled-components"

import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useMutation } from "react-query";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  margin-bottom: 70px;
  h1 {
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #EEEEEE;
  }
  .CgClose {
    padding: 15px;
    position: absolute;
    left: -150px;
  }
  .registerbutton {
    width: 350px;
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
  p {
    font-size: 1rem;
  }
`

const SignUpTop = styled.div`
  position: relative;
`

const SignUpForm = styled.form`
  padding: 25px;
  border-top: 3px solid black;
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
  p {
    margin-top: 5px;
    line-height: 20px;
    color: #d8818d;
  }
`

const SignUpNameBox = styled.div`
`
const SignUpNickNameBox = styled.div`
`
const SignUpPhoneNumberBox = styled.div`
`

const SignUpPasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`
const SignUpEmailBox = styled.div`
  display: flex;
  flex-direction: column;
`

interface SignUpUser {
  username: string;
  nickname: string;
  phonenumber: string;
  email: string;
  password: string;
  checkpassword: string;
}

const Test = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState<SignUpUser>({
    username: '',
    nickname: '',
    phonenumber: '',
    email: '',
    password: '',
    checkpassword: ''
  })

  const testMutation = useMutation((newUser:SignUpUser) => 
    axios.post('http://ec2-43-201-12-132.ap-northeast-2.compute.amazonaws.com:8080/signin', newUser), {
      mutationKey: 'createUser',
      onSuccess: e => console.log(e),
      onError: e => console.log(e)
    }
  )

  const handleLegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newUser = user;
    testMutation.mutate(newUser);
  }

  const handleOnChangeUser = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name] : e.target.value
    }))
  }

  const handleBack = () => {
    navigate('/login')
  }

  return ( 
    <SignUpContainer>
      <SignUpTop>
        <CgClose className="CgClose" onClick={handleBack} size={30}/>
        <h1>회원가입</h1>
      </SignUpTop>
      <SignUpForm>
        <SignUpNameBox>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" name="username" value={user.username} onChange={handleOnChangeUser} placeholder="아이디"/>
        </SignUpNameBox>
        <SignUpNickNameBox>
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" name="nickname" value={user.nickname} onChange={handleOnChangeUser} placeholder="닉네임"/>
        </SignUpNickNameBox>
        <SignUpPasswordBox>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" value={user.password} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호"/>
          <input type="password" name="checkpassword" value={user.checkpassword} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호 확인"/>
        </SignUpPasswordBox>
        <SignUpPhoneNumberBox>
          <label htmlFor="phonenumber">핸드폰번호</label>
          <input type="text" id="phonenumber" name="phonenumber" value={user.phonenumber} onChange={handleOnChangeUser} placeholder="- 없이 입력해 주세요."/>
        </SignUpPhoneNumberBox>
        <SignUpEmailBox>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" name="email" value={user.email} onChange={handleOnChangeUser} placeholder="이메일"/>
        </SignUpEmailBox>
      </SignUpForm>
      <button className="registerbutton" onClick={handleLegister}>가입하기</button>
    </SignUpContainer>
  );
}

export default Test;