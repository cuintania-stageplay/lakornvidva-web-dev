import { styled } from "styled-components";
import { sukhumvit_text } from "../fonts";

const SynopsisStyle = styled.div`
  font-family: ${sukhumvit_text.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;

  text-align: center;

  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export default function Synopsis() {
  return (
    <SynopsisStyle>
      กาลครั้งหนึ่ง ณ หมู่บ้านที่แสนอบอุ่น
      <br />
      มีเด็กหญิงหน้าตาน่ารักนั่งเล่นดูคุณแม่ทำอาหารอยู่ในครัว
      <br />
      เพื่อนบ้านทุกคนต่างพากันเรียกเธอว่า หนูน้อยหมวกแดง
    </SynopsisStyle>
  );
}
