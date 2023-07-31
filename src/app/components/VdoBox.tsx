import { styled } from 'styled-components';
import Intro from './Intro';
import Subtitle from './Subtitle';
import TeaserVDO from './Teaser';
import BuyButton from './BuyButton';
import PrintTicketButton from './PrintTicketButton';

const TextBox = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PCBox = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }

  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsidePCBox = styled.div`
  padding-top: 5vw;

  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
`;

const MobileBox = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }

  padding-top: 5vw;

  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vw;
`;

export default function VdoBox() {
  return (
    <>
      <PCBox>
        <BuyButton />
        <InsidePCBox>
          <TeaserVDO />
          <TextBox>
            <Subtitle />
            <Intro />
            <PrintTicketButton />
          </TextBox>
        </InsidePCBox>
      </PCBox>
      <MobileBox>
        <TeaserVDO />
        <BuyButton />
        <PrintTicketButton />
        <QuoteContainer>
          <Subtitle />
          <Intro />
        </QuoteContainer>
      </MobileBox>
    </>
  );
}
