import React from "react";
import styled from "styled-components";

const RecommendBox = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 10px 50px 10px 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  p {
    font-size: 25px;
  }
`

interface RecommendBox {
  children: string;
}

const SearchRecommendBox:React.FC<RecommendBox> = ({children}) => {
  return ( 
    <RecommendBox>
      <p>&#35; {children}</p>
    </RecommendBox>
  );
}
export default SearchRecommendBox;