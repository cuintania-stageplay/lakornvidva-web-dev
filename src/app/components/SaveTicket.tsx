import { styled } from 'styled-components';
import { chopsin } from '../fonts';
import Image from 'next/legacy/image';
import DownloadIcon from '../images/util/download_icon.png';

const Button = styled.button`
  width: max(150px, 20vw);
  height: max(33.75px, 4.5vw);

  border-radius: max(16.875px, 2.25vw);

  background: linear-gradient(
    104.23deg,
    #377ea3 14.9%,
    #433377 52.86%,
    #6c2469 84.92%
  );

  font-family: ${chopsin.style.fontFamily};
  font-size: max(12px, 1.5vw);

  padding: 1.25vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: max(16.875px, 2.25vw);
  height: max(16.875px, 2.25vw);
`;

export default function SaveTicket() {
  return (
    <Button>
      <Wrapper>
        <Image
          width={DownloadIcon.width}
          height={DownloadIcon.height}
          src={DownloadIcon.src}
          alt='>>'
        />
      </Wrapper>
      save ticket
    </Button>
  );
}
