import { styled } from 'styled-components';

import { sukhumvit_medium } from '../fonts';
import CommentBox from './CommentBox';

import { comment } from '../text/Text';
import { useState } from 'react';

const Header = styled.div`
  width: 90vw;

  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
  align-items: center;
`;

const LineGreenBack = styled.div`
  width: 10vw;
  height: 2.3px;
  background: linear-gradient(90deg, #00e225, rgb(0, 0, 0, 0));
`;

const LineGreenFront = styled.div`
  width: 5vw;
  height: 2.3px;
  background: linear-gradient(90deg, rgb(0, 0, 0, 0), #00e225);
`;

const TextBox = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(2vw, 11px);

  padding: 1vw;
`;

const CommentList = styled.div`
  margin: 3vw;

  gap: 2.65vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MoreComment = styled.button`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(2vw, 11px);

  text-align: right;
  color: rgba(0, 255, 209, 1);

  text-shadow: 0 0 3px rgba(1, 226, 38, 1);

  text-decoration: underline;
  text-decoration-color: #01e226;
`;

const Footer = styled.div`
  width: 90vw;

  margin: 2.5vw;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function CommentPane() {
  const [isMoreComment, setIsMoreComment] = useState(true);

  let commentList = [];

  for (let i = 0; i < comment.length; i++) {
    commentList.push(<CommentBox index={i} key={i}/>);
  }

  return (
    <>
      <Header>
        <LineGreenFront />
        <TextBox>{comment.length} COMMENTS</TextBox>
        <LineGreenBack />
      </Header>
      <CommentList>
        {isMoreComment ? commentList.slice(0, 3) : commentList}
      </CommentList>
      <Footer>
        <MoreComment
          onClick={() => {
            setIsMoreComment(!isMoreComment);
          }}
        >
          {isMoreComment ? 'More Comments' : 'Less Comments'}
        </MoreComment>
      </Footer>
    </>
  );
}
