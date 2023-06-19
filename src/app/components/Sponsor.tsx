import { styled } from "styled-components";
import { anantason, chopsin, sukhumvit_text } from "../fonts";

const SectionLine = styled.div`
  width: 1029px;
  height: 2px;

  margin-top: 50px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.131823) 0%,
    #ffffff 42.14%,
    #ffffff 56.21%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const SponsorName = styled.div`
  width: 1029px;

  padding-top: 20px;
  padding-bottom: 100px;
  font-family: "Cordia New";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: center;

  color: #ffffff;
`;

export default function Sponsor() {
  return (
    <div>
      <SectionLine />
      <SponsorName>Sponsor1 Sponsor2 Sponsor3</SponsorName>
    </div>
  );
}
