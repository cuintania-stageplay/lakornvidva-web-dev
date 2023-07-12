import { styled } from 'styled-components';

import CharacterIcon from './CharacterIcon';

import { RyuIcon, RyuFront, RyuBack } from './CharacterPicture';
import { PluIcon, PluFront, PluBack } from './CharacterPicture';
import { NampudIcon, NampudFront, NampudBack } from './CharacterPicture';
import { PatIcon, PatFront, PatBack } from './CharacterPicture';
import { FriendIcon, FriendFront, FriendBack } from './CharacterPicture';
import { AomIcon, AomFront, AomBack } from './CharacterPicture';
import { AutoIcon, AutoFront, AutoBack } from './CharacterPicture';
import { DenaIcon, DenaFront, DenaBack } from './CharacterPicture';
import { BoomIcon, BoomFront, BoomBack } from './CharacterPicture';
import { MagicIcon, MagicFront, MagicBack } from './CharacterPicture';

const CharacterStyle = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }

  width: 100vw;
  height: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CharacterBox = styled.div`
  width: 98vw;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CharacterLastBox = styled(CharacterBox)`
  width: 49vw;
`;

export default function CharacterListPC() {
  return (
    <CharacterStyle>
      <CharacterBox>
        <CharacterIcon
          characterName='Ryu'
          icon={RyuIcon.src}
          frontCard={RyuFront.src}
          backCard={RyuBack.src}
          color='#e93224'
        />
        <CharacterIcon
          characterName='Plu'
          icon={PluIcon.src}
          frontCard={PluFront.src}
          backCard={PluBack.src}
          color='#ba3345'
        />
        <CharacterIcon
          characterName='Nampud'
          icon={NampudIcon.src}
          frontCard={NampudFront.src}
          backCard={NampudBack.src}
          color='#ed2a6f'
        />
        <CharacterIcon
          characterName='Pat'
          icon={PatIcon.src}
          frontCard={PatFront.src}
          backCard={PatBack.src}
          color='#ffb21e'
        />
      </CharacterBox>

      <CharacterBox>
        <CharacterIcon
          characterName='Friend'
          icon={FriendIcon.src}
          frontCard={FriendFront.src}
          backCard={FriendBack.src}
          color='#faff00'
        />
        <CharacterIcon
          characterName='Aom'
          icon={AomIcon.src}
          frontCard={AomFront.src}
          backCard={AomBack.src}
          color='#66b234'
        />
        <CharacterIcon
          characterName='Auto'
          icon={AutoIcon.src}
          frontCard={AutoFront.src}
          backCard={AutoBack.src}
          color='#00e225'
        />
        <CharacterIcon
          characterName='Dena'
          icon={DenaIcon.src}
          frontCard={DenaFront.src}
          backCard={DenaBack.src}
          color='#21dec7'
        />
      </CharacterBox>

      <CharacterLastBox>
        <CharacterIcon
          characterName='Boom'
          icon={BoomIcon.src}
          frontCard={BoomFront.src}
          backCard={BoomBack.src}
          color='#0dc0ff'
        />
        <CharacterIcon
          characterName='Magic'
          icon={MagicIcon.src}
          frontCard={MagicFront.src}
          backCard={MagicBack.src}
          color='#8e1eff'
        />
      </CharacterLastBox>
    </CharacterStyle>
  );
}
