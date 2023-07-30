import { useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/legacy/image';
import CardModal from './CardModal';

const Wrapper = styled.button<{ color: string }>`
  background: radial-gradient(rgb(255, 255, 255, 1) 0%, transparent 70%);
  width: 21vw;
  height: 21vw;

  @media screen and (max-width: 480px) {
    width: max(80px, 25vw);
    height: max(80px, 25vw);
  }

  display: flex;
  justify-content: center;

  border-radius: max(25px, 9vw);
  border-color: transparent;

  &: hover {
    background: radial-gradient(${(prop) => prop.color} 0%, transparent 70%);
  }
`;

export default function CharacterIcon(src: {
  characterName: string;
  icon: string;
  frontCard: string;
  backCard: string;
  color: string;
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Wrapper color={src.color} onClick={() => setIsShow(!isShow)}>
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
