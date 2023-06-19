import styled from "styled-components";
import { sukhumvit_medium } from "../fonts";
import { quote } from "../text/Text";

const Quote = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: 40px;
  font-weight: 1200;
  text-align: center;

  padding-top: 15px;

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
  -webkit-text-stroke-width: 0.25px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function Subtitle(state: { language: string }) {
  return <Quote>{quote.get(state.language)}</Quote>;
}
