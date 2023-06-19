import { styled } from "styled-components";
import { sukhumvit_medium } from "../fonts";
import { synopsis } from "../text/Text";

const SynopsisStyle = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;

  padding: 160px;

  text-align: center;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke-color: #000000;
  -webkit-text-stroke-width: 0.5px;
`;

export default function Synopsis(state: { language: string }) {
  return <SynopsisStyle>{synopsis.get(state.language)}</SynopsisStyle>;
}
