import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  p {
    font-size: 1rem;
  }
`

const SignUpForm = styled.form`
  margin-top: 70px;
  padding: 70px 25px 0px;
  height: 70vh;
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
    line-height: 28px;
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

const SignUpNameBox = styled.div`
`
const SignUpPasswordBox = styled.div`
`

interface LoginUser {
  memberId: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<LoginUser>({
    memberId: '',
    password: ''
  })

  const handleOnChangeUser = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name] : e.target.value
    }))
  }

  const loginMutation = useMutation((user:LoginUser) => 
  axios.post('http://ec2-43-201-12-132.ap-northeast-2.compute.amazonaws.com:8080/login', user), {
    mutationKey: 'loginUser',
    onSuccess: e => console.log(e.data),
    onError: e => console.log(e)
  }
)

  const handleLegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user.memberId || !user.password) {
      alert("모든 정보를 입력해 주세요.");
      return;
    }
    const loginUser = user;
    loginMutation.mutate(loginUser);
  }

  return ( 
    <LoginContainer>
      <h1>로그인</h1>
      <SignUpForm>
        <h1>안녕하세요 &#58;&#41;<br/>편의점 마술사 입니다.</h1>
        <SignUpNameBox>
        <label htmlFor="memberId">아이디</label>
          <input type="text" id="memberId" name="memberId" value={user.memberId} onChange={handleOnChangeUser} placeholder="아이디"/>
        </SignUpNameBox>
        <SignUpPasswordBox>
        <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" value={user.password} autoComplete="current-password" onChange={handleOnChangeUser} placeholder="비밀번호"/>
        </SignUpPasswordBox>
      <button className="registerbutton" onClick={handleLegister}>가입하기</button>
      <a href="/signup">Don't have an account? <span>signup</span></a>
      </SignUpForm>
    </LoginContainer>
  );
}
export default Login;