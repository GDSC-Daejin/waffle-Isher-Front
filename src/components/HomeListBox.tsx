import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeLBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 39px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`

interface HomeLBox {
  children: React.ReactNode;
}

const HomeListBox:React.FC<HomeLBox> = ({children}) => {
  return ( 
    <HomeLBox to={'/'}>
      {children}
    </HomeLBox>
  );
}
export default HomeListBox;