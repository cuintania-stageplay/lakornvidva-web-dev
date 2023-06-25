import { styled } from 'styled-components';

import Synopsis from './Synopsis';
import Subtitle from './Subtitle';
import BuyButton from './BuyButton';
import SocialMedia from './SocialMedia';

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const BuyButtonStyle = styled.div`
  padding-top: max(25px, 3.5vw);
  /*@media screen and (min-height: 70vw) {
    display: none;
  }*/
`;

export default function Body() {
  return (
    <BodyStyle>
      <Subtitle />
      <BuyButtonStyle>
        <BuyButton />
      </BuyButtonStyle>

      <Synopsis />
      <SocialMedia />
    </BodyStyle>
  );
}
