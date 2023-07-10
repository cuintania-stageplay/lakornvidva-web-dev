import CharacterIcon from './CharacterIcon';
import RyuIcon from '../images/character-icon/ryu.png';
import RyuFront from '../images/character-card-front/ryu-front.png';
import RyuBack from '../images/character-card-back/ryu-back.png';

export default function CharacterList() {
  return (
    <>
      <CharacterIcon
        characterName='Ryu'
        icon={RyuIcon.src}
        frontCard={RyuFront.src}
        backCard={RyuBack.src}
      />
    </>
  );
}
