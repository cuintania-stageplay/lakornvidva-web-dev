import { styled } from 'styled-components';

import { sukhumvit_medium } from '../fonts';
import { intro } from '../text/Text';

const IntroBox = styled.pre`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(11px, 2vw);
  font-weight: 500;
  text-align: center;

  padding-top: max(15px, 2vw);

  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.75) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke-color: #000000;
  -webkit-text-stroke-width: 0.05vw;
`;

export default function Intro() {
  return <IntroBox>{intro}</IntroBox>;
}
