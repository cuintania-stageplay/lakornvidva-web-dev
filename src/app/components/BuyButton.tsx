import Image from 'next/legacy/image';
import { styled } from 'styled-components';
import { chopsin } from '../fonts';
import ticketPic from '../images/util/ticket.png';
import cursor from '../images/util/cursor.png';

const FullButton = styled.div`
  @media screen and (max-width: 480px) {
    padding-top: max(25px, 3.5vw);
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: #d9d9d9;
  width: max(200px, 24.5vw);
  height: max(59px, 7.3vw);
  border-radius: max(29.5px, 3.65vw);

  font-family: ${chopsin.style.fontFamily};
  font-size: max(20px, 2.23vw);

  color: #000000;

  padding-right: 2.6vw;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background: #d9d9d9;
    width: max(212px, 25.9vw);
    height: max(65px, 8vw);
    border-radius: max(32.5px, 4vw);
  }
`;

const TicketBg = styled.div`
  width: max(40px, 4.94vw);
  height: max(40px, 4.94vw);

  background: #ffffff;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Cursor = styled.div`
  width: max(50px, 6.66vw);
  margin-top: min(-20px, -2.86vw);
  margin-left: max(191.3px, 23.4375vw);
`;

export default function BuyButton() {
  return (
    <FullButton>
      <Button
        onClick={() =>
          window.open(
            'https://www.ticketmelon.com/lakornvidva/the-neverlasting',
            '_blank'
          )
        }
      >
        <TicketBg>
          <Image
            src={ticketPic.src}
            width={ticketPic.width}
            height={ticketPic.height}
            alt='>>'
          />
        </TicketBg>
        BUY NOW
      </Button>
      <Cursor>
        <Image
          layout='responsive'
          src={cursor.src}
          width={128}
          height={128}
          alt='Click here'
        />
      </Cursor>
    </FullButton>
  );
}
