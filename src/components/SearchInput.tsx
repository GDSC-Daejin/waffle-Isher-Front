import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { ChangeEvent, useState } from "react";

const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 40%;
    padding: 10px 50px 10px 30px;
    background-color: white;
    font-size: 24px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 1s;
    &:hover {
      width: 60%;
      transition: all 1s;
    }
  }
  svg {
    font-size: 30px;
    position: relative;
    left: -40px;
  }
`

const SearchInput = () => {

  const [search, setSearch] = useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  
  return ( 
    <SearchInputBox>
      <input type="text" value={search} onChange={handleChange} placeholder="검색하기"/>
      <IoSearch/>
    </SearchInputBox>
  );
}

export default SearchInput;