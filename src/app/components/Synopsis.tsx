import { styled } from 'styled-components';
import { sukhumvit_medium } from '../fonts';
import { synopsis } from '../text/Text';
import { useState } from 'react';

const SynopsisStyle = styled.pre<{ isSeeMore?: boolean }>`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 2vw);

  width: 73vw;

  line-height: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isSeeMore ? '3' : 'none')};
  -webkit-box-orient: vertical;

  padding: 8.33vw 1vw 1vh 1vw;

  text-align: center;

  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke-color: #000000;
  -webkit-text-stroke-width: 0.04vw;
`;

const SynopsisBig = styled(SynopsisStyle)`
  @media screen and (max-width: 610px) {
    display: none;
  }
`;

const SynopsisSmall = styled(SynopsisStyle)`
  @media screen and (min-width: 610px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    ${(props) => (props.isSeeMore ? 'display: none;' : '')}
  }
`;

const SynopsisBox = styled.div`
  /*min-height: 50vw;*/
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    align-items: center;
  }

  align-items: flex-end;
  flex-direction: column;

  padding-bottom: max(25px, 5vw);
`;

const Seemore = styled.button`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 1.8vw);

  text-decoration-line: underline;
`;

const SeemoreBig = styled(Seemore)`
  @media screen and (max-width: 480px) {
    display: none;
  }

  text-align: right;
  color: rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.25);
`;

const SeemoreSmall = styled(Seemore)`
  @media screen and (min-width: 481px) {
    display: none;
  }

  padding-top: max(15px, 2vw);
  text-align: center;
  color: rgba(255, 99, 99, 0.75);
  text-decoration-color: rgba(255, 99, 99, 0.75);
`;

export default function Synopsis() {
  const [isSeemore, setIsSeemore] = useState(true);
  return (
    <SynopsisBox>
      <SynopsisBig isSeeMore={isSeemore}>{synopsis['TH_Big']}</SynopsisBig>

      <SynopsisSmall isSeeMore={isSeemore}>
        {synopsis['TH_Small']}
      </SynopsisSmall>

      <SeemoreBig
        onClick={() => {
          setIsSeemore(!isSeemore);
        }}
      >
        {isSeemore ? 'See more' : 'See less'}
      </SeemoreBig>

      <SeemoreSmall
        onClick={() => {
          setIsSeemore(!isSeemore);
        }}
      >
        {isSeemore ? 'อ่านเรื่องย่อ' : 'ปิดเรื่องย่อ'}
      </SeemoreSmall>
    </SynopsisBox>
  );
}
