import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { NextPage } from "next";

import CommentListView, { Comment } from "../components/organisms/CommentListView";
import LiverInfo from "../components/organisms/LiverInfo";
import CommentInput from "../components/molecules/CommentInput";
import HomeIcon from "../components/atoms/HomeIcon";
import ViewCount from "../components/molecules/ViewCount";
import AvatarView from "../components/organisms/AvatarView";

interface LivePageProps {
  title: string;
  count: number;
  comments: Comment[];
  restTime: Date;
  liverName: string;
  liverImg: string;
  inputtedComment: string;
  backgroundImg: string;
  avatar: string;
}

const LivePage: NextPage<LivePageProps> = ({
  title,
  count,
  comments,
  restTime,
  liverName,
  liverImg,
  inputtedComment,
  backgroundImg,
  avatar,
}) => (
  <Wrapper>
    <Head>
      <title>{title} | らいぶや</title>
    </Head>

    <LiveView>
      <TopComponents>
        <LiverInfo time={restTime} name={liverName} imgSrc={liverImg} />
        <CommentInput />
      </TopComponents>

      <AvatarView background={backgroundImg} avatar={avatar} />
      <BottomComponents>
        <CommentListView comments={comments} />
        <HomeIcon />
        <ViewCount count={count} />
      </BottomComponents>
    </LiveView>
  </Wrapper>
);

LivePage.getInitialProps = async (ctx: any) => {
  console.log(ctx);
  return {
    title: ctx.query.title,
    count: 100,
    comments: [],
    restTime: null,
    liverName: "string",
    liverImg: "",
    inputtedComment: "",
    backgroundImg: "",
    avatar: "",
  };
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LiveView = styled.div`
  display: flex;
  background: #333;
  min-width: 400px;
  max-width: 1000px;
  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
`;

const TopComponents = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const BottomComponents = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;
`;

export default LivePage;
