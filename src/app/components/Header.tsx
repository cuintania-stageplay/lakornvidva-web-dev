"use client";

import styled from "styled-components";
import { chopsin, sukhumvit_medium, sukhumvit_text } from "../fonts";

const TitleEng = styled.div`
  font-family: ${chopsin.style.fontFamily};
  font-size: 120px;
  font-weight: 400;
  text-align: center;

  margin-top: -180px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #00e225 -17.9deg,
    var(--bright-red) 22.33deg,
    #ba3345 48.02deg,
    #c22d61 135deg,
    #47206d 163.09deg,
    #358faf 255deg,
    #66b234 318.11deg,
    #00e225 342.1deg,
    #e93224 382.33deg
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  background-blend-mode: lighten;
  mix-blend-mode: normal;
  text-border: 1px solid #846e6e;
  text-shadow: 0px 4px 30px rgba(255, 254, 254, 0.2);
`;

const TitleEngShadow = styled(TitleEng)`
  border: 1px solid #ffffff;
  filter: blur(15px);
  margin: 0px;
`;

const TitleTh = styled.div`
  font-family: ${sukhumvit_text.style.fontFamily};
  font-size: 128px;
  font-weight: 400;

  text-align: center;

  margin-top: -50px;

  background: conic-gradient(
    from 180deg at 50% 50%,
    #00e225 -7.5deg,
    #66b234 34.06deg,
    #358faf 93.07deg,
    #47206d 144.93deg,
    #c22d61 201.4deg,
    #ba3345 256.21deg,
    #e93224 311.63deg,
    #00e225 352.5deg,
    #66b234 394.06deg
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  text-fill-color: transparent;

  -webkit-text-stroke-color: #86a087;
  -webkit-text-stroke-width: 1px;

  text-shadow: 0px 4px 30px rgba(255, 255, 255, 0.2);
`;

export default function Header() {
  return (
    <div>
      <TitleEngShadow>LAKORNVIDVA</TitleEngShadow>
      <TitleEng>LAKORNVIDVA</TitleEng>
      <TitleTh>ละครวิดวะ</TitleTh>
    </div>
  );
}
