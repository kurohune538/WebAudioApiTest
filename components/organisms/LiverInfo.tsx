import React from "react";
import styled from "@emotion/styled";

interface LiverInfoProps {
  imgSrc: string;
  name: string;
  time: Date;
}
const LiverInfo: React.FC<LiverInfoProps> = ({ imgSrc, name, time }) => (
  <Wrapper>
    <div>
      <img src={imgSrc} />
      <p>{name}</p>
    </div>
    <div>
      <p>残り時間：{time}</p>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  background: #333;

  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
`;

export default LiverInfo;
