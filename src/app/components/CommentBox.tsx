import { styled } from 'styled-components';
import Image from 'next/image';

import { sukhumvit_medium, sukhumvit_text } from '../fonts';
import AnonymousPic from '../images/util/Anonymous.png';

import RatingStar from './RatingStar';

const Box = styled.div`
  width: 85vw;
  min-height: max(80px, 15vw);

  padding: 2.2vw;
  gap: 1vw;

  border: 0.2vw solid rgba(255, 255, 255, 1);
  border-radius: 2.5vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const UpperBox = styled.div`
  width: 80vw;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  width: 8vw;
  height: 8vw;

  padding: 0.3vw;

  border: 0.2vw solid rgba(255, 255, 255, 1);
  border-radius: 5vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 72vw;

  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Name = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(2.5vw, 12px);
  font-weight: 400;
  text-align: left;
`;

const Comment = styled.div`
  font-family: ${sukhumvit_text.style.fontFamily};
  font-size: max(1.75vw, 10.5px);
  font-weight: 400;
  text-align: left;
`;

const LowerBox = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export default function CommentBox() {
  return (
    <Box>
      <UpperBox>
        <Wrapper>
          <Image
            width={AnonymousPic.width}
            height={AnonymousPic.height}
            src={AnonymousPic.src}
            alt='Profile Pic'
          />
        </Wrapper>
        <TextBox>
          <Name>ANONYMOUS</Name>
          <Comment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque
            ut nibh mattis porta. Duis nisi nisi, malesuada nec gravida vel,
            convallis ac enim. Sed congue viverra bibendum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Suspendisse pharetra diam nec luctus porttitor.
          </Comment>
        </TextBox>
      </UpperBox>
      <LowerBox>
        <RatingStar />
      </LowerBox>
    </Box>
  );
}
