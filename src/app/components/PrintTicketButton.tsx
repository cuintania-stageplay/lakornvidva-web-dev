import { styled } from 'styled-components';
import Image from 'next/legacy/image';
import { useState } from 'react';

import { chopsin } from '../fonts';
import PrinterIcon from '../images/util/print_icon.png';
import TicketModal from './TicketModal';

const Button = styled.button`
  width: max(30vw, 200px);
  height: max(6.4vw, 42.67px);

  border: 1px solid #d9d9d9;
  border-radius: max(3.2vw, 21.335px);

  color: #d9d9d9;
  font-family: ${chopsin.style.fontFamily};
  font-size: max(1.65vw, 11.5px);

  padding: 0.8vw;

  margin-top: 0.8vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(
    180deg,
    rgba(63, 192, 86, 0.21) 0%,
    rgba(237, 31, 31, 0.29) 100%
  );

  &:hover {
    background: linear-gradient(180deg, #462770 0%, #386e98 100%);
  }
`;

const Wrapper = styled.div`
  width: max(30px, 4.5vw);
  height: max(25px, 3.75vw);
`;

export default function PrintTicketButton() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <Button onClick={() => setIsShow(!isShow)}>
        <Wrapper>
          <Image
            width={PrinterIcon.width}
            height={PrinterIcon.height}
            src={PrinterIcon}
            alt='>>'
          />
        </Wrapper>
        PRINT YOUR TICKET
      </Button>
      <TicketModal isShow={isShow} setIsShow={setIsShow} />
    </>
  );
}
