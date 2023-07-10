import { styled } from 'styled-components';
import Image from 'next/image';
import RyuPic from '../images/character-icon/ryu.png';

const Wrapper = styled.div`
  background: radial-gradient(rgb(255, 255, 255, 0.5), transparent);
  width: max(50px, 10vw);
  height: max(50px, 10vw);
  border-radius: max(25px, 5vw);
  border-color: transparent;
`;

export default function CharacterList() {
  return (
    <>
      <Wrapper>
        <Image src={RyuPic.src} width={330} height={330} alt='Ryu' />
      </Wrapper>
    </>
  );
}
