import { styled } from 'styled-components';

import { chopsin } from '../fonts';
import TicketCard from '../images/util/ticket_card.png';
import { ChangeEvent } from 'react';

const Wrapper = styled.div`
  width: max(135px, 30.375vh);
  height: max(274.2px, 61.695vh);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrintComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameInput = styled.input`
  position: absolute;
  margin-top: max(100px, 22.5vh);

  width: max(96px, 21.6vh);

  font-family: ${chopsin.style.fontFamily};
  font-size: max(7.5px, 1.5vh);
  font-weight: 900;

  text-align: center;

  color: white;
  outline: none;
  border: none;
  background: none;
`;

const InputForPrint = styled.pre`
  position: absolute;
  margin-top: max(100px, 22.5vh);

  font-family: ${chopsin.style.fontFamily};
  font-size: max(7.5px, 1.5vh);
  font-weight: 900;

  text-align: center;

  color: white;
  background: none;
`;

export default function Ticket(props: {
  printRef: React.RefObject<HTMLDivElement>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(event.target.value);
  };

  return (
    <Wrapper>
      <PrintComponent ref={props.printRef}>
        <img src={TicketCard.src} alt='Your Ticket' />
        <InputForPrint>{props.inputValue}</InputForPrint>
      </PrintComponent>
      <NameInput
        type='text'
        value={props.inputValue}
        onChange={handleInputChange}
        placeholder='Your name'
        maxLength={12}
      />
    </Wrapper>
  );
}
