import CharacterList from './CharacterList';
import { styled } from 'styled-components';
import { sukhumvit_medium } from '../fonts';

const PaneStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5vw;
`;

const CharHeader = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(2vw, 12px);
  font-weight: 700;

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
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(1.67vw, 11px);
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
  padding-bottom: 5vw;
`;

export default function CharacterPane() {
  return (
    <PaneStyle>
      <CharHeader>ตัวละคร</CharHeader>
      <CharQuote>เราเชื่อว่านี่คือพื้นที่แห่ง “ความฝัน และ ความหวัง”</CharQuote>
      <CharacterList />
    </PaneStyle>
  );
}
