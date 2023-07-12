import Image from 'next/image';
import { styled } from 'styled-components';
import SponsorPic01 from '../images/GISC_Logo.png';
import SponsorPic02 from '../images/CPALL_Logo.png';

const SectionLine = styled.div`
  width: 53.5vw;
  height: 2px;

  margin-top: 5.5vh;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.131823) 0%,
    #ffffff 42.14%,
    #ffffff 56.21%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const SponsorName = styled.div`
  width: 53.5vw;
  padding-top: 2vw;
  padding-bottom: 8vw;
  font-family: 'Cordia New';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;

  color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: max(50px, 6.5vw);
  mix-blend-mode: normal;
  filter: drop-shadow(0px 0px 1.75px #ffffff);
`;

const SponsorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  bottom: 0px;
`;

export default function Sponsor() {
  return (
    <SponsorStyle>
      <SectionLine />
      <SponsorName>
        <Wrapper>
          <Image
            layout='responsive'
            src={SponsorPic01.src}
            width={517}
            height={339}
            alt='gis'
          />
        </Wrapper>
        <Wrapper>
          <Image
            layout='responsive'
            src={SponsorPic02.src}
            width={7993}
            height={5188}
            alt='CPALL'
          />
        </Wrapper>
      </SponsorName>
    </SponsorStyle>
  );
}
