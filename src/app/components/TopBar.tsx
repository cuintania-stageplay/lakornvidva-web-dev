import React from 'react';
import { styled } from 'styled-components';
import Image from "next/legacy/image";

import Logo from '../images/logo/logo-white.png';
import SwitchButton from './SwitchButton';
import Header from './Header';

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

export default function TopBar() {
  return (
    <>
      <Bar>
        <Wrapper>
          <Image
            layout='responsive'
            src={Logo.src}
            width={150}
            height={150}
            alt='LAKORNVIDVA'
          />
        </Wrapper>
      </Bar>
      <Header />
    </>
  );
}
