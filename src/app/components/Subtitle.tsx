import styled from 'styled-components';
import { sukhumvit_medium } from '../fonts';
import { quote } from '../text/Text';

const Quote = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(12px, 2.23vw);
  font-weight: 900;
  text-align: center;

  position: absolute;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(150, 150, 150, 0.75) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const QuoteBorder = styled(Quote)`
  text-shadow: -0.05vw -0.05vw 0 #006a04, 0 -0.05vw 0 #006a04,
    0.05vw -0.05vw 0 #006a04, 0.05vw 0 0 #006a04, 0.05vw 0.05vw 0 #006a04,
    0 0.05vw 0 #006a04, -0.05vw 0.05vw 0 #006a04, -0.05vw 0 0 #006a04;

  -webkit-filter: drop-shadow(-4px -4px 10px rgba(228, 68, 68, 0.8));
`;

const QuoteBox = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Subtitle() {
  return (
    <QuoteBox>
      <QuoteBorder>{quote}</QuoteBorder>
      <Quote>{quote}</Quote>
    </QuoteBox>
  );
}
