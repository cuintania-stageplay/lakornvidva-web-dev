import Image from 'next/legacy/image';
import { styled } from 'styled-components';
import GIS from '../images/sponsor/GISC_Logo.png';
import CPAll from '../images/sponsor/CPALL_Logo.png';
import LANNA from '../images/sponsor/LANNA_Logo.png';
import Ekachai from '../images/sponsor/Ekachai_Logo.png';

const SectionLine = styled.div`
  width: 53.5vw;
  height: 2px;

  margin-top: 2.5vw;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.131823) 0%,
    #ffffff 42.14%,
    #ffffff 56.21%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const SponsorName = styled.div`
  width: max(200px, 55vw);
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
  align-items: center;
`;

const Wrapper = styled.div`
  width: max(30px, 6.5vw);
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
            src={GIS.src}
            width={GIS.width}
            height={GIS.height}
            alt='gis'
          />
        </Wrapper>
        <Wrapper>
          <Image
            src={CPAll.src}
            width={CPAll.width}
            height={CPAll.height}
            alt='CPALL'
          />
        </Wrapper>
        <Wrapper>
          <Image
            src={LANNA.src}
            width={LANNA.width}
            height={LANNA.height}
            alt='LANNA'
          />
        </Wrapper>

        <Wrapper>
          <Image
            src={Ekachai.src}
            width={Ekachai.width}
            height={Ekachai.height}
            alt='Ekachai'
          />
        </Wrapper>
      </SponsorName>
    </SponsorStyle>
  );
}
