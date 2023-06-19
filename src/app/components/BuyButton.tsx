import Image from "next/image";
import { styled } from "styled-components";
import { chopsin } from "../fonts";
import ticketPic from "../images/ticket.png";
import cursor from "../images/cursor.png";

const FullButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: #d9d9d9;
  width: 470px;
  height: 140px;
  border-radius: 70px;

  font-family: ${chopsin.style.fontFamily};
  font-size: 40px;

  color: #000000;

  padding-right: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TicketBg = styled.div`
  width: 95px;
  height: 95px;

  padding: 13.5px;

  background: #ffffff;
  background-size: 95px;
  border-radius: 50%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Cursor = styled.div`
  margin-top: -55px;
  margin-left: 450px;
`;

export default function BuyButton() {
  return (
    <FullButton>
      <Button
        onClick={() =>
          (window.location.href =
            "https://www.google.com/doodles/doodle-champion-island-games-begin")
        }
      >
        <TicketBg>
          <Image src={ticketPic.src} width={68} height={68} alt=">>" />
        </TicketBg>
        BUY NOW
      </Button>
      <Cursor>
        <Image src={cursor.src} width={128} height={128} alt="Click here" />
      </Cursor>
    </FullButton>
  );
}
