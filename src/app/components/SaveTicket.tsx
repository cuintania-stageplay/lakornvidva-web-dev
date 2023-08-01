import { styled } from 'styled-components';
import Image from 'next/legacy/image';
import html2canvas from 'html2canvas';

import { chopsin } from '../fonts';
import DownloadIcon from '../images/util/download_icon.png';

const Button = styled.button`
  width: max(250px, 20vw);
  height: max(42.5px, 4.5vw);

  border-radius: max(21.25px, 2.25vw);

  background: linear-gradient(
    104.23deg,
    #377ea3 14.9%,
    #433377 52.86%,
    #6c2469 84.92%
  );

  color: white;
  font-family: ${chopsin.style.fontFamily};
  font-size: max(15px, 1.5vw);

  padding: 1.25vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: max(20px, 2.25vw);
  height: max(20px, 2.25vw);
`;

export default function SaveTicket(prop: {
  printRef: React.RefObject<HTMLDivElement>;
  inputValue: string;
}) {
  const handleDownload = async () => {
    if (prop.printRef.current) {
      const element = prop.printRef.current;
      const canvas = await html2canvas(element, {
        backgroundColor: null,
      });
      const data = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');

      const inputName = prop.inputValue == '' ? 'you' : prop.inputValue;

      link.href = data;
      link.download = 'Ticket-for-' + inputName + '.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Button onClick={handleDownload}>
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
