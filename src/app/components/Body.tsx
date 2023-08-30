import { styled } from 'styled-components';
import Synopsis from './Synopsis';
import SocialMedia from './SocialMedia';
import CharacterPane from './CharacterPane';
import VdoBox from './VdoBox';
import CommentPane from './CommentPane';

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SectionLineBox = styled.div`
  width: 85vw;

  margin-top: max(15px, 3vw);
  margin-bottom: max(15px, 3vw);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const SectionLineRed = styled.div`
  width: 39vw;
  height: 2.3px;
  background: linear-gradient(90deg, rgb(0, 0, 0, 0), #e93224);
`;

const SectionLineGreen = styled(SectionLineRed)`
  background: linear-gradient(90deg, #00e225, rgb(0, 0, 0, 0));
`;

export default function Body() {
  return (
    <BodyStyle>
      <VdoBox />
      <Synopsis />
      <CharacterPane />
      <CommentPane />
      <SectionLineBox>
        <SectionLineRed />
        <SectionLineGreen />
      </SectionLineBox>
      <SocialMedia />
    </BodyStyle>
  );
}
