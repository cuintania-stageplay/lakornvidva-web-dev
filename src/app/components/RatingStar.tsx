import { styled } from 'styled-components';
import Image from 'next/image';

import Fullstar from '../images/util/Full_star.png';
import Halfstar from '../images/util/Half_star.png';
import Emptystar from '../images/util/Empty_star.png';

const Wrapper = styled.div`
  width: 4vw;
  height: 4vw;

  border: none;
  border-radius: 2vw;

  background: radial-gradient(rgba(22, 36, 32, 1) 0%, rgba(22, 36, 32, 0) 40%);

  filter: brightness(150%) saturate(115%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RatingBox = styled.div`
  width: 18vw;

  background: radial-gradient(
    rgba(0, 255, 209, 0.15) 5%,
    rgba(255, 255, 255, 0) 80%
  );

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function RatingStar(props: { star: number; index: number }) {
  let i = 0;
  const ratingStar = [];

  for (i; i < Math.floor(props.star); i++) {
    ratingStar.push(
      <Wrapper key={String(props.index) + '_' + i.toString()}>
        <Image
          width={Fullstar.width}
          height={Fullstar.height}
          src={Fullstar.src}
          alt='1'
        />
      </Wrapper>
    );
  }

  if (!Number.isInteger(props.star)) {
    ratingStar.push(
      <Wrapper key={String(props.index) + '_' + i.toString()}>
        <Image
          width={Halfstar.width}
          height={Halfstar.height}
          src={Halfstar.src}
          alt='0.5'
        />
      </Wrapper>
    );

    i++;
  }

  for (i; i < 5; i++) {
    ratingStar.push(
      <Wrapper key={String(props.index) + '_' + i.toString()}>
        <Image
          width={Emptystar.width}
          height={Emptystar.height}
          src={Emptystar.src}
          alt='0'
          key={String(props.index) + '_' + i.toString()}
        />
      </Wrapper>
    );
  }
  return <RatingBox>{ratingStar}</RatingBox>;
}
