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

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RatingBox = styled.div`
  width: 15vw;

  background: radial-gradient(
    rgba(0, 255, 209, 0.15) 5%,
    rgba(255, 255, 255, 0) 80%
  );

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function RatingStar(prop: { star: number }) {
  let i = 0;
  const ratingStar = [];

  for (i; i < Math.floor(prop.star); i++) {
    ratingStar.push(
      <Wrapper>
        <Image
          width={Fullstar.width}
          height={Fullstar.height}
          src={Fullstar.src}
          alt='1'
          key={i}
        />
      </Wrapper>
    );
  }

  if (!Number.isInteger(prop.star)) {
    ratingStar.push(
      <Wrapper>
        <Image
          width={Halfstar.width}
          height={Halfstar.height}
          src={Halfstar.src}
          alt='0.5'
          key={i}
        />
      </Wrapper>
    );

    i++;
  }

  for (i; i < 5; i++) {
    ratingStar.push(
      <Wrapper>
        <Image
          width={Emptystar.width}
          height={Emptystar.height}
          src={Emptystar.src}
          alt='0'
          key={i}
        />
      </Wrapper>
    );
  }
  return <RatingBox>{ratingStar}</RatingBox>;
}
