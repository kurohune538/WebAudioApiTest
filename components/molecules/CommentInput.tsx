import React from "react";
import styled from "@emotion/styled";

interface CommentInputProps {
  onChange?: () => void;
}
const CommentInput: React.FC<CommentInputProps> = ({ onChange }) => (
  <Wrapper>
    <input type="text" placeholder="コメントを入力" onChange={onChange} />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  background: #333;

  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
`;

export default CommentInput;
