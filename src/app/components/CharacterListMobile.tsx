import { styled } from 'styled-components';
import Image from 'next/image';

import CharacterIcon from './CharacterIcon';

import Logo from '../images/logo-white.png';
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
  @media screen and (min-width: 480px) {
    display: none;
  }

  width: 100vw;
  height: max(360px, 115vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ThreeCharacterBox = styled.div`
  width: max(320px, 90vw);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TwoCharacterBox = styled(ThreeCharacterBox)`
  width: max(250px, 75vw);
`;

const Wrapper = styled.div`
  width: max(70px, 20vw);
  height: max(70px, 20vw);
`;

export default function CharacterListMobile() {
  return (
    <CharacterStyle>
      <ThreeCharacterBox>
        <CharacterIcon
          characterName='Ryu'
          icon={RyuIcon.src}
          frontCard={RyuFront.src}
          backCard={RyuBack.src}
        />
        <CharacterIcon
          characterName='Aom'
          icon={AomIcon.src}
          frontCard={AomFront.src}
          backCard={AomBack.src}
        />
        <CharacterIcon
          characterName='Plu'
          icon={PluIcon.src}
          frontCard={PluFront.src}
          backCard={PluBack.src}
        />
      </ThreeCharacterBox>

      <ThreeCharacterBox>
        <CharacterIcon
          characterName='Auto'
          icon={AutoIcon.src}
          frontCard={AutoFront.src}
          backCard={AutoBack.src}
        />
        <CharacterIcon
          characterName='Nampud'
          icon={NampudIcon.src}
          frontCard={NampudFront.src}
          backCard={NampudBack.src}
        />
        <CharacterIcon
          characterName='Boom'
          icon={BoomIcon.src}
          frontCard={BoomFront.src}
          backCard={BoomBack.src}
        />
      </ThreeCharacterBox>

      <TwoCharacterBox>
        <CharacterIcon
          characterName='Magic'
          icon={MagicIcon.src}
          frontCard={MagicFront.src}
          backCard={MagicBack.src}
        />
        <CharacterIcon
          characterName='Pat'
          icon={PatIcon.src}
          frontCard={PatFront.src}
          backCard={PatBack.src}
        />
      </TwoCharacterBox>

      <ThreeCharacterBox>
        <CharacterIcon
          characterName='Dena'
          icon={DenaIcon.src}
          frontCard={DenaFront.src}
          backCard={DenaBack.src}
        />
        <Wrapper>
          <Image
            layout='responsive'
            src={Logo.src}
            width={150}
            height={150}
            alt='LAKORNVIDVA'
          />
        </Wrapper>
        <CharacterIcon
          characterName='Friend'
          icon={FriendIcon.src}
          frontCard={FriendFront.src}
          backCard={FriendBack.src}
        />
      </ThreeCharacterBox>
    </CharacterStyle>
  );
}
