import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import SearchRecommendBox from "../components/SearchRecommendBox";

const SearchContainer = styled.div`
  padding: 15px;
  h1 {
    font-weight: bold;
    margin: 100px 0px 30px;
  }
  h2 {
    font-weight: bold;
    margin: 50px 0px 30px;
  }
`

const Search = () => {

  const recipeName = ['불닭', '바나나 우유', '오징어칩', '스윙칩', '코코볼', '야무진 감자칩']

  return (
    <SearchContainer>
      <h1>상품을 검색해 보세요.</h1>
      <SearchInput/>
      <h2>추천 검색어</h2>
      {recipeName.map((item, index)=> (
        <SearchRecommendBox key={index}>{item}</SearchRecommendBox>
      ))}
    </SearchContainer>
  );
}

export default Search;