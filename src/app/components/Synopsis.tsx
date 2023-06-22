import { styled } from "styled-components";
import { sukhumvit_medium } from "../fonts";
import { synopsis } from "../text/Text";
import { useState } from "react";

const SynopsisStyle = styled.div<{ isSeeMore?: boolean }>`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 2.23vw);

  width: 73vw;

  line-height: 3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isSeeMore ? "3" : "none")};
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

const SynopsisBox = styled.div`
  /*min-height: 50vw;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Seemore = styled.button`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 2.23vw);
  color: rgba(255, 255, 255, 0.5);

  text-align: right;

  width: 73vw;

  text-decoration-line: underline;
  text-decoration-color: rgba(255, 255, 255, 0.25);
`;

export default function Synopsis(state: { language: string }) {
  const [isSeemore, setIsSeemore] = useState(true);
  return (
    <SynopsisBox>
      <SynopsisStyle isSeeMore={isSeemore}>
        {synopsis.get(state.language)}
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
