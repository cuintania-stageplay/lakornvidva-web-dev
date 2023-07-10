import { styled } from 'styled-components';
import Image from 'next/image';

const Outer = styled.div<{ isShow?: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: max(22vw, 200px);
`;

export default function CardModal(prop: {
  characterName: string;
  frontCard: string;
  backCard: string;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Outer isShow={prop.isShow} onClick={() => prop.setIsShow(false)}>
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
