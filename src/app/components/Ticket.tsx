import { styled } from 'styled-components';
import Image from 'next/legacy/image';

import { chopsin } from '../fonts';
import TicketCard from '../images/util/ticket_card.png';

const Wrapper = styled.div`
  width: max(135px, 30.375vh);
  height: max(274.2px, 61.695vh);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameInput = styled.input`
  position: absolute;
  margin-top: max(100px, 22.5vh);

  width: max(96px, 21.6vh);

  font-family: ${chopsin.style.fontFamily};
  font-size: max(10px, 1vh);
  font-weight: 900;

  text-align: center;

  color: white;
  outline: none;
  border: none;
  background: none;
`;

export default function Ticket() {
  return (
    <Wrapper>
      <Image
        width={TicketCard.width}
        height={TicketCard.height}
        src={TicketCard.src}
        alt='Your Ticket'
      />
      <NameInput type='text' placeholder='Your name' maxLength={12} />
    </Wrapper>
  );
}
