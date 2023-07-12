import { styled, keyframes } from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

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
  width: auto;
  height: max(420px, 75vh);
`;

export default function CardModal(prop: {
  characterName: string;
  frontCard: string;
  backCard: string;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const variantsContainer = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  const variantsImage = {
    front: { rotateY: 0 },
    back: { rotateY: -180 },
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Outer isShow={prop.isShow}>
      <Blocker
        onClick={() => {
          prop.setIsShow(false);
          setIsFlipped(false);
        }}
      />
      <Inner>
        <motion.div
          style={{
            width: 'auto',
            height: '100%',
            perspective: 1000,
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          <motion.div
            animate={isFlipped ? 'back' : 'front'}
            variants={variantsContainer}
            style={{
              width: '100%',
              height: '100%',
            }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          >
            <motion.img
              src={isFlipped ? prop.backCard : prop.frontCard}
              animate={isFlipped ? 'back' : 'front'}
              variants={variantsImage}
              style={{
                width: '100%',
                height: '100%',
              }}
              transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </Inner>
    </Outer>
  );
}
