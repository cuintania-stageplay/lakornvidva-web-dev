import { styled } from "styled-components";
import { sukhumvit_medium } from "../fonts";
import { synopsis } from "../text/Text";
import { useState } from "react";

const SynopsisStyle = styled.pre<{ isSeeMore?: boolean }>`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 1.8vw);

  width: 73vw;

  line-height: 2;
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

const SynopsisBig = styled(SynopsisStyle)`
  @media screen and (max-width: 610px) {
    display: none;
  }
`;

const SynopsisSmall = styled(SynopsisStyle)`
  @media screen and (min-width: 610px) {
    display: none;
  }
`;

const SynopsisBox = styled.div`
  /*min-height: 50vw;*/
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;

  padding-bottom: max(25px, 15vw);
`;

const Seemore = styled.button`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 1.8vw);
  color: rgba(255, 255, 255, 0.5);

  text-align: right;

  text-decoration-line: underline;
  text-decoration-color: rgba(255, 255, 255, 0.25);
`;

export default function Synopsis(state: { language: string }) {
  const [isSeemore, setIsSeemore] = useState(true);
  return (
    <SynopsisBox>
      <SynopsisBig isSeeMore={isSeemore}>
        {synopsis.get(state.language + "_Big")}
      </SynopsisBig>
      <SynopsisSmall isSeeMore={isSeemore}>
        {synopsis.get(state.language + "_Small")}
      </SynopsisSmall>
      <Seemore
        onClick={() => {
          setIsSeemore(!isSeemore);
        }}
      >
        {isSeemore ? "See more" : "See less"}
      </Seemore>
    </SynopsisBox>
  );
}
