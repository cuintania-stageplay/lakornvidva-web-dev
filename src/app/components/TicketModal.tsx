import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const Outer = styled.div<{ $isShow?: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  animation: ${fadeIn} 0.25s linear;

  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export default function TicketModal(prop: {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Outer
      $isShow={prop.isShow}
      onClick={() => prop.setIsShow(!prop.isShow)}
    ></Outer>
  );
}
