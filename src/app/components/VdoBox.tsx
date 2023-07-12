import { styled } from 'styled-components';
import Intro from './Intro';
import Subtitle from './Subtitle';
import TeaserVDO from './Teaser';
import BuyButton from './BuyButton';

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

const BuyButtonStyle = styled.div`
  @media screen and (max-width: 480px) {
    padding-top: max(25px, 3.5vw);
    padding-bottom: max(25px, 3.5vw);
  }

  padding-top: 2vw;
`;

export default function VdoBox() {
  return (
    <>
      <PCBox>
        <TeaserVDO />
        <TextBox>
          <Subtitle />
          <Intro />
          <BuyButtonStyle>
            <BuyButton />
          </BuyButtonStyle>
        </TextBox>
      </PCBox>
      <MobileBox>
        <TeaserVDO />
        <BuyButtonStyle>
          <BuyButton />
        </BuyButtonStyle>
        <Subtitle />
        <Intro />
      </MobileBox>
    </>
  );
}
