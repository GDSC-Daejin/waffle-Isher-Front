import axios from "axios";
import { useState } from "react";
import { useMutation } from 'react-query';
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
`

const RegisterBox = styled.div``;

interface RegisterData {
  boardName: string;
  boardContent: string;
  boardCookingtime: string;
  boardCookinglevel: string;
  boardTotalprice: string;
  productId: number;
  categoryId: number;
}

const Register = () => {
  const [image, setImage] = useState<File | null>(null);
  const [register, setRegister] = useState<RegisterData>({
    boardName: "",
    boardContent: "",
    boardCookingtime: "",
    boardCookinglevel: "",
    boardTotalprice: "",
    productId: 1,
    categoryId: 2,
  });

  const handleOnChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validNumber = /^[1-5]$/;
    if (name === "boardCookinglevel" && value !== "" && !validNumber.test(value)) {
      alert("1~5점 까지 입력하실 수 있습니다.");
      return;
    }

    setRegister((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const uploadBoard = async ({ board, file }: { board: RegisterData; file: File | null }) => {
    console.log(board)
    console.log(file)
    try {
      const formData = new FormData();
      formData.append("board", JSON.stringify(board));
      if (file) {
        formData.append("file", file);
      }


      const response = await axios.post(
        "http://ec2-43-201-12-132.ap-northeast-2.compute.amazonaws.com:8080/board/insert",
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error during board upload");
    }
  };

  const { mutate } = useMutation(uploadBoard);

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate({ board: register, file: image });
  };

  return (
    <RegisterContainer>
      <RegisterForm>
        <h1>안녕하세요 &#58;&#41;<br/>조합을 등록해 보세요.</h1>
        <RegisterBox>
          <label htmlFor="boardName">조합 이름</label>
          <input
            type="text"
            id="boardName"
            name="boardName"
            value={register.boardName}
            onChange={handleOnChangeUser}
            placeholder="조합의 이름을 알려주세요."
          />
        </RegisterBox>
        <RegisterBox>
          <label htmlFor="boardContent">조합 방법</label>
          <input
            type="text"
            id="boardContent"
            name="boardContent"
            value={register.boardContent}
            onChange={handleOnChangeUser}
            placeholder="조합을 만드는 방법을 알려주세요."
          />
        </RegisterBox>
        <RegisterBox>
          <label htmlFor="boardCookingtime">조합 시간</label>
          <input
            type="text"
            id="boardCookingtime"
            name="boardCookingtime"
            value={register.boardCookingtime}
            onChange={handleOnChangeUser}
            placeholder="조합의 요리시간(분) 을 알려주세요."
          />
        </RegisterBox>
        <RegisterBox>
          <label htmlFor="boardCookinglevel">조합 난이도</label>
          <input
            type="text"
            id="boardCookinglevel"
            name="boardCookinglevel"
            value={register.boardCookinglevel}
            onChange={handleOnChangeUser}
            placeholder="조합의 난이도를 알려주세요. (1 ~ 5)"
          />
        </RegisterBox>
        <RegisterBox>
          <label htmlFor="boardTotalprice">조합 비용</label>
          <input
            type="text"
            id="boardTotalprice"
            name="boardTotalprice"
            value={register.boardTotalprice}
            onChange={handleOnChangeUser}
            placeholder="조합의 비용을 알려주세요."
          />
        </RegisterBox>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button className="registerbutton" onClick={handleRegister}>
          등록하기
        </button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
