import styled from "styled-components"

import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";

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
  memberId: string;
  memberName: string;
  memberEmail: string;
  memberNickname: string;
  memberPhonenumber: string; 
  memberPassword: string;
  checkPassword: string;
}

const SignUp = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState<SignUpUser>({
    memberId: '',
    memberName: '',
    memberEmail: '',
    memberNickname: '',
    memberPhonenumber: '',
    memberPassword: '',
    checkPassword: ''
  })

  const [nameTest, setNameTest] = useState(true);
  const [passwordTest, setPasswordTest] = useState(true);

  const validateName = (input: string): boolean => {
    const validCharacters = /^[a-z0-9]+$/;
    const startsWithLowerCase = /^[a-z]/;
    const validLength = /^.{4,12}$/;
    return validCharacters.test(input) && startsWithLowerCase.test(input) && validLength.test(input);
  };

  const validatePassword = (input: string): boolean => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W).{6,20}$/;
    return pattern.test(input);
  };

  const handleNameBlur = () => {
    setNameTest(validateName(user.memberName));
  };
  const handlePasswordBlur = () => {
    setPasswordTest(validatePassword(user.memberPassword));
  };

  const handleLegister = () => {
    if (!user.memberName || !user.memberEmail || !user.memberPassword) {
      alert("모든 정보를 입력해 주세요.");
      return;
    }
    if (user.memberPassword !== user.checkPassword) {
      alert('비밀번호 확인이 잘못됐습니다.')
      return;
    }
    if (!passwordTest) {
      alert('비밀번호를 제대로 입력해 주세요.')
      return;
    }

    const newUser = user;
    signupMutation.mutate(newUser);
  }

  const handleOnChangeUser = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name] : e.target.value
    }))
  }

  const signupMutation = useMutation((newUser:SignUpUser) => 
    axios.post('http://ec2-43-201-12-132.ap-northeast-2.compute.amazonaws.com:8080/signin', newUser), {
      mutationKey: 'createUser',
      onSuccess: e => console.log(e),
      onError: e => console.log(e)
    }
  )

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
          <label htmlFor="memberId">아이디</label>
          <input type="text" id="memberId" name="memberId" value={user.memberId} onChange={handleOnChangeUser} placeholder="아이디" onBlur={handleNameBlur}/>
          {nameTest ? '' : <p>영문 소문자와 숫자만 사용하여, 영문 소문자로<br/> 시작하는 4 ~ 12자의 아이디를 입력해 주세요.</p> }
        </SignUpNameBox>
        <SignUpNameBox>
          <label htmlFor="memberName">이름</label>
          <input type="text" id="memberName" name="memberName" value={user.memberName} onChange={handleOnChangeUser} placeholder="이름" onBlur={handleNameBlur}/>
        </SignUpNameBox>
        <SignUpNickNameBox>
          <label htmlFor="memberNickname">닉네임</label>
          <input type="text" id="memberNickname" name="memberNickname" value={user.memberNickname} onChange={handleOnChangeUser} placeholder="닉네임"/>
        </SignUpNickNameBox>
        <SignUpPasswordBox>
          <label htmlFor="memberPasword">비밀번호</label>
          <input type="password" id="memberPasword" name="memberPasword" value={user.memberPassword} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호" onBlur={handlePasswordBlur}/>
          <input type="password" name="checkpassword" value={user.checkPassword} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호 확인"/>
          {passwordTest ? '' : <p>영문 대문자와 소문자, 숫자, 특수문자 중<br/> 2가지 이상을 조합하여 6 ~ 20자로 입력해 주세요.</p>}
        </SignUpPasswordBox>
        <SignUpPhoneNumberBox>
          <label htmlFor="memberPassword">핸드폰번호</label>
          <input type="text" id="memberPassword" name="memberPassword" value={user.memberPassword} onChange={handleOnChangeUser} placeholder="- 없이 입력해 주세요."/>
        </SignUpPhoneNumberBox>
        <SignUpEmailBox>
          <label htmlFor="memberEmail">이메일</label>
          <input type="text" id="memberEmail" name="memberEmail" value={user.memberEmail} onChange={handleOnChangeUser} placeholder="이메일"/>
        </SignUpEmailBox>
      </SignUpForm>
      <button className="registerbutton" onClick={handleLegister}>가입하기</button>
    </SignUpContainer>
  );
}

export default SignUp;