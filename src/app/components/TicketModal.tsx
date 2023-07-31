import { styled, keyframes } from 'styled-components';
import React, { useRef, useState } from 'react';

import SaveTicket from './SaveTicket';
import { chopsin } from '../fonts';
import Ticket from './Ticket';

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const Outer = styled.div<{ $isShow?: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  animation: ${fadeIn} 0.25s linear;

  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  z-index: 15;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 85vh;
`;

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const TextStyle = styled.div`
  font-family: ${chopsin.style.fontFamily};
  font-size: max(20px, 3vw);
  font-weight: 900;

  background-color: white;
  color: transparent;
  text-shadow: 0px 3px 3px rgba(108, 108, 108, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

export default function TicketModal(prop: {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const printRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState('');

  return (
    <Outer $isShow={prop.isShow}>
      <Blocker
        onClick={() => {
          prop.setIsShow(!prop.isShow);
          setInputValue('');
        }}
      />
      <Inner>
        <TextStyle>YOUR TICKET</TextStyle>
        <Ticket
          printRef={printRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <SaveTicket printRef={printRef} inputValue={inputValue} />
      </Inner>
    </Outer>
  );
}
