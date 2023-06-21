import { styled } from "styled-components";
import { sukhumvit_medium } from "../fonts";
import { synopsis } from "../text/Text";
import { useState } from "react";

const SynopsisStyle = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;

  width: 1400px;

  padding: 160px;
  padding-bottom: 20px;

  text-align: center;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke-color: #000000;
  -webkit-text-stroke-width: 0.75px;
`;

const SynopsisBox = styled.div`
  min-height: 1100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Seemore = styled.button`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.25);

  text-align: right;

  width: 1400px;

  text-decoration-line: underline;
  text-decoration-color: rgba(255, 255, 255, 0.25);
`;

export default function Synopsis(state: { language: string }) {
  const [isSeemore, setIsSeemore] = useState(true);
  return (
    <SynopsisBox>
      <SynopsisStyle>
        {isSeemore
          ? synopsis.get(state.language)?.substring(0, 194)
          : synopsis.get(state.language)}
      </SynopsisStyle>
      <Seemore
        onClick={() => {
          setIsSeemore(!isSeemore);
        }}
      >
        {isSeemore ? "See more" : "Show less"}
      </Seemore>
    </SynopsisBox>
  );
}
