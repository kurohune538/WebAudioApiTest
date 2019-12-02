import React from "react";
import styled from "@emotion/styled";

interface ViewCountProps {
  count: number;
}

// TODO: 画像の準備
const ViewCount: React.FC<ViewCountProps> = ({ count }) => (
  <Wrapper>
    <img src="" />
    <span>{count}</span>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  background: #333;

  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
`;

export default ViewCount;
