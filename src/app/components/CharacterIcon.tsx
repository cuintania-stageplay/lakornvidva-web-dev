import { useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import CardModal from './CardModal';

const Wrapper = styled.button`
  background: radial-gradient(rgb(255, 255, 255, 1) 0%, transparent 70%);
  width: max(50px, 12vw);
  height: max(50px, 12vw);

  border-radius: max(25px, 10vw);
  border-color: transparent;
`;

export default function CharacterIcon(src: {
  characterName: string;
  icon: string;
  frontCard: string;
  backCard: string;
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setIsShow(!isShow)}>
        <Image
          src={src.icon}
          width={330}
          height={330}
          alt={src.characterName}
        />
      </Wrapper>
      <CardModal
        characterName={src.characterName}
        frontCard={src.frontCard}
        backCard={src.backCard}
        isShow={isShow}
        setIsShow={setIsShow}
      />
    </>
  );
}
