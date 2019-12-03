import React from "react";
import styled from "@emotion/styled";

export type Comment = {
  id: number;
  name: string;
  contents: string;
};

interface CommentListViewProps {
  comments?: Comment[];
}
const CommentListView: React.FC<CommentListViewProps> = ({ comments }) => (
  <Wrapper>
    <ul>
      {comments &&
        comments.map((comment: Comment, i: number) => (
          <li key={i}>
            <span>{comment.name}</span>
            <span>{comment.contents}</span>
          </li>
        ))}
    </ul>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  background: #333;

  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
`;

export default CommentListView;
