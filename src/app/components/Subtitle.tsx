import styled from "styled-components";
import { sukhumvit_medium } from "../fonts";
import { quote } from "../text/Text";

const Quote = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(12px, 2.23vw);
  font-weight: 1200;
  text-align: center;

  padding-top: 1.38vh;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(255, 255, 255, 0.51) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 0.02vw;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function Subtitle() {
  return <Quote>{quote}</Quote>;
}
