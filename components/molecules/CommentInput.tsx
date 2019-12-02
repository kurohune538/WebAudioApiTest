import React from "react";
import styled from "@emotion/styled";

interface CommentInputProps {
  value: string;
}
const CommentInput: React.FC<CommentInputProps> = ({ value }) => (
  <Wrapper>
    <input type="text" placeholder="コメントを入力" value={value} />
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
