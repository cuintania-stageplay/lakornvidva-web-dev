import { styled } from 'styled-components';
import Image from 'next/image';

import { sukhumvit_medium } from '../fonts';
import DownloadIcon from '../images/util/download02_icon.png';

const Button = styled.button`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: max(1.2vw, 8px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    font-size: 10px;

    text-decoration: underline;
  }

  &:hover {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 54, 54, 0.5) 0%,
      rgba(255, 0, 0, 0) 100%
    );
  }
`;

const Wrapper = styled.div`
  width: max(7.75vw, 40px);
  height: max(4.5vw, 23px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default function DownloadAgendaButton() {
  return (
    <Button
      onClick={() =>
        window.open(
          'https://drive.google.com/file/d/1jPLm7SrXw9w-l2N8wlj6eeCxlmFz1nXJ/view?usp=sharing',
          '_blank'
        )
      }
    >
      <Wrapper>
        <Image
          width={DownloadIcon.width}
          height={DownloadIcon.height}
          src={DownloadIcon.src}
          alt='Click here to download'
        />
      </Wrapper>
      ดาวน์โหลดสูจิบัตร
    </Button>
  );
}
