import React from "react";
import { styled } from "styled-components";
import Image from "next/image";

import Logo from "../images/logo-white.png";
import SwitchButton from "./SwitchButton";

const Bar = styled.div`
  padding: 2.5vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  height: max(50px, 7.8vw);
  width: max(50px, 7.8vw);
`;

export default function TopBar(state: {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Bar>
      <Wrapper>
        <Image
          layout="responsive"
          src={Logo.src}
          width={150}
          height={150}
          alt="LAKORNVIDVA"
        />
      </Wrapper>
    </Bar>
  );
}
