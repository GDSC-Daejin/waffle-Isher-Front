import styled from "styled-components";

const DetailCommentContainer = styled.div`
  background-color: white;
  border-top: 2px solid #EAEBED;
  border-radius: 15px 15px 0px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  h1 {
    padding: 0px 10px;
    font-size: 16px;
  }
`

const CommentBox = styled.div`
  padding: 20px 40px;
  border-top: 1px solid #EAEBED;
  border-bottom: 1px solid #EAEBED;
  h2 {
    padding: 5px 0px;
    font-size: 18px;
    color: #7E8189;
  }
  p {
    font-size: 1rem;
    padding: 5px 0px;
  }
`

const MenuDetailComment = () => {
  return ( 
    <DetailCommentContainer>
      <h1>댓글 10개</h1>
      <CommentBox>
        <h2>유저 이름</h2>
        <p>유익한 정보 감사합니다.</p>
      </CommentBox>
      <CommentBox>
        <h2>유저 이름</h2>
        <p>유익한 정보 감사합니다.</p>
      </CommentBox>
      <CommentBox>
        <h2>유저 이름</h2>
        <p>유익한 정보 감사합니다.</p>
      </CommentBox>
      <CommentBox>
        <h2>유저 이름</h2>
        <p>유익한 정보 감사합니다.</p>
      </CommentBox>
      <CommentBox>
        <h2>유저 이름</h2>
        <p>유익한 정보 감사합니다.</p>
      </CommentBox>
    </DetailCommentContainer>
  );
}
export default MenuDetailComment;