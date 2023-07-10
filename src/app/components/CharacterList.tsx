import CharacterIcon from './CharacterIcon';
import { RyuIcon, RyuFront, RyuBack } from './CharacterPicture';

export default function CharacterList() {
  return (
    <>
      {RyuIcon.src}
      <CharacterIcon
        characterName='Ryu'
        icon={RyuIcon.src}
        frontCard={RyuFront.src}
        backCard={RyuBack.src}
      />
    </>
  );
}
