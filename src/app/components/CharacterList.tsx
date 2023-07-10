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

const CharacterBox = styled.div`
  width: 73vw;

  padding: 5vw;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function CharacterList() {
  return (
    <>
      <CharacterBox>
        <CharacterIcon
          characterName='Ryu'
          icon={RyuIcon.src}
          frontCard={RyuFront.src}
          backCard={RyuBack.src}
        />
        <CharacterIcon
          characterName='Plu'
          icon={PluIcon.src}
          frontCard={PluFront.src}
          backCard={PluBack.src}
        />
        <CharacterIcon
          characterName='Nampud'
          icon={NampudIcon.src}
          frontCard={NampudFront.src}
          backCard={NampudBack.src}
        />
        <CharacterIcon
          characterName='Pat'
          icon={PatIcon.src}
          frontCard={PatFront.src}
          backCard={PatBack.src}
        />
      </CharacterBox>

      <CharacterBox>
        <CharacterIcon
          characterName='Friend'
          icon={FriendIcon.src}
          frontCard={FriendFront.src}
          backCard={FriendBack.src}
        />
        <CharacterIcon
          characterName='Aom'
          icon={AomIcon.src}
          frontCard={AomFront.src}
          backCard={AomBack.src}
        />
        <CharacterIcon
          characterName='Auto'
          icon={AutoIcon.src}
          frontCard={AutoFront.src}
          backCard={AutoBack.src}
        />
        <CharacterIcon
          characterName='Dena'
          icon={DenaIcon.src}
          frontCard={DenaFront.src}
          backCard={DenaBack.src}
        />
      </CharacterBox>
      <CharacterBox>
        <CharacterIcon
          characterName='Boom'
          icon={BoomIcon.src}
          frontCard={BoomFront.src}
          backCard={BoomBack.src}
        />
        <CharacterIcon
          characterName='Magic'
          icon={MagicIcon.src}
          frontCard={MagicFront.src}
          backCard={MagicBack.src}
        />
      </CharacterBox>
    </>
  );
}
