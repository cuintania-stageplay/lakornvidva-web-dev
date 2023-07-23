import { styled } from 'styled-components';
import Synopsis from './Synopsis';
import SocialMedia from './SocialMedia';
import CharacterPane from './CharacterPane';
import VdoBox from './VdoBox';
import BuyButton from './BuyButton';

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const BuyButtonStyle = styled.div`
  @media screen and (max-width: 480px) {
    padding-top: max(25px, 3.5vw);
    padding-bottom: max(25px, 3.5vw);
  }

  padding-top: 2vw;
`;

export default function Body() {
  return (
    <BodyStyle>
      <BuyButtonStyle>
        <BuyButton />
      </BuyButtonStyle>
      <VdoBox />
      <Synopsis />
      <CharacterPane />
      <SocialMedia />
    </BodyStyle>
  );
}
