import React from "react";
import styled from "@emotion/styled";

interface AvatarViewProps {
  background?: string;
  avatar?: string;
}
const AvatarView: React.FC<AvatarViewProps> = ({ background, avatar }) => (
  <Wrapper>{/* TODO Avatarをここで動かす */}</Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  background: #333;

  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
`;

export default AvatarView;
