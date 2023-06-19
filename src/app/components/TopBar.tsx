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

export default function TopBar() {
  return (
    <Bar>
      <SwitchButton />
      <Image src={Logo.src} width={150} height={150} alt="LAKORNVIDVA" />
    </Bar>
  );
}
