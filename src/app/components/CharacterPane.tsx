import { styled } from 'styled-components';
import { sukhumvit_medium } from '../fonts';

import CharacterListMobile from './CharacterListMobile';
import CharacterListPC from './CharacterListPC';

const PaneStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5vw;
`;

const CharHeader = styled.div`
  @media screen and (max-width: 480px) {
    font-size: max(4vw, 15px);
  }
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(2.23vw, 12px);
  font-weight: 900;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #f5f5f5 0%,
    rgba(245, 245, 245, 0.64) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const CharQuote = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }

  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(1.8vw, 12px);
  font-weight: 600;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(255, 255, 255, 0.49) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  padding-top: 2.5vw;
  padding-bottom: 3vw;
`;

const SectionLineBox = styled.div`
  width: 85vw;

  margin-top: max(15px, 3vw);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const SectionLineRed = styled.div`
  width: 39vw;
  height: 2.3px;
  background: linear-gradient(90deg, rgb(0, 0, 0, 0), #e93224);
`;

const SectionLineGreen = styled(SectionLineRed)`
  background: linear-gradient(90deg, #00e225, rgb(0, 0, 0, 0));
`;

export default function CharacterPane() {
  return (
    <PaneStyle>
      <CharHeader>ตัวละคร</CharHeader>
      <CharQuote>เราเชื่อว่านี่คือพื้นที่แห่ง “ความฝัน และ ความหวัง”</CharQuote>
      <CharacterListPC />
      <CharacterListMobile />
      <SectionLineBox>
        <SectionLineRed />
        <SectionLineGreen />
      </SectionLineBox>
    </PaneStyle>
  );
}
