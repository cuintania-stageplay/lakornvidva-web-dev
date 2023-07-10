import { styled, keyframes } from 'styled-components';
import Image from 'next/image';

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const Outer = styled.div<{ isShow?: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  animation: ${fadeIn} 0.25s linear;

  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Blocker = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const Inner = styled.div`
  width: max(22vw, 240px);

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function CardModal(prop: {
  characterName: string;
  frontCard: string;
  backCard: string;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Outer isShow={prop.isShow}>
      <Blocker onClick={() => prop.setIsShow(false)} />
      <Inner>
        <Image
          src={prop.frontCard}
          width={450}
          height={735}
          alt={prop.characterName}
        />
      </Inner>
    </Outer>
  );
}
