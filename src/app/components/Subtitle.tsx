import styled from "styled-components";
import { sukhumvit_medium } from "../fonts";

const Quote = styled.div`
  font-family: ${sukhumvit_medium.style.fontFamily};
  font-size: 40px;
  text-align: center;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(255, 255, 255, 0.51) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default function Subtitle() {
  return (
    <Quote>‘เรื่องราวมันเริ่มเมื่อตอนที่พบเครื่องมือเอเลี่ยนประหลาด’</Quote>
  );
}
