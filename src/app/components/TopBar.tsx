import React from "react";
import { styled } from "styled-components";
import Image from "next/image";

import Logo from "../images/logo-white.png";
import SwitchButton from "./SwitchButton";

const Bar = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function TopBar(state: {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Bar>
      <SwitchButton language={state.language} setLanguage={state.setLanguage} />
      <Image src={Logo.src} width={150} height={150} alt="LAKORNVIDVA" />
    </Bar>
  );
}
