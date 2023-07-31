import { styled } from 'styled-components';
import Synopsis from './Synopsis';
import SocialMedia from './SocialMedia';
import CharacterPane from './CharacterPane';
import VdoBox from './VdoBox';

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default function Body() {
  return (
    <BodyStyle>
      <VdoBox />
      <Synopsis />
      <CharacterPane />
      <SocialMedia />
    </BodyStyle>
  );
}
