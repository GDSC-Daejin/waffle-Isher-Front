import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TypeBox = styled.div`
  position: relative;
  width: 90%;
  height: 70px;
  margin: 15px auto;
  background-color: ${props => props.color};
  color: black;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-decoration: none;
  cursor: pointer;
  h1 {
    margin-left: 20px;
    font-size: 24px;
    line-height: 72px;
  }
  img {
    position: absolute;
    width: 70px;
    top: -30px;
    right: 10px;
    transform: rotate(15deg);
    z-index: 1;
  }
`

interface MainTypeData {
  typeName: string;
  img: string;
  colorName: string;
}

//{typeName, img, colorName}

const MainType:React.FC<MainTypeData> = ({typeName, img, colorName}) => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/home')
  }
  return ( 
    <TypeBox color={colorName} onClick={handleOnClick}>
      <h1>{typeName}</h1>
      <img src={img} alt="이미지" />
    </TypeBox>
  );
}
export default MainType;