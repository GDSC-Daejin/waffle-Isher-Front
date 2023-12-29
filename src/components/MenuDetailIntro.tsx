import styled from "styled-components";

const DetailIntroContainer = styled.div`
  text-align: center;
  h1 {
    margin: 20px 0px;
    font-size: 22px;
  }
  p {
    line-height: 24px;
    padding: 0px 30px 20px;
    font-size: 20px;
  }
`

const MenuDetailIntro = () => {
  return ( 
    <DetailIntroContainer>
      <h1>설명</h1>
      <p>이건 어쩌고 저쩌고 라면을 넣어서 이렇게 저렇게 만들어서 야무지게 섞어가지고 아주 맛있게 만들면 됩니다.</p>
    </DetailIntroContainer>
  );
}
export default MenuDetailIntro;