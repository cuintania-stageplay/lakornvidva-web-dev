import Image from "next/image";
import facebookIcon from "../images/facebook_icon.png";
import igIcon from "../images/instagram_icon.png";
import tiktokIcon from "../images/tiktok_icon.png";
import { styled } from "styled-components";

const IconBox = styled.div`
  width: max(200px, 21.2vw);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconStyle = styled.a`
  width: max(6.5vw, 55px);
  border-width: 6px;
  border-radius: 50%;
  border-color: transparent;

  &:hover {
    border-color: ${(props) => props.color};
  }
`;

export default function SocialMedia() {
  return (
    <IconBox>
      <IconStyle
        color="#00E225"
        href="https://www.facebook.com/culakornvidva/?locale=hi_IN"
      >
        <Image src={facebookIcon.src} width={100} height={100} alt="FB" />
      </IconStyle>
      <IconStyle
        color="#358FAF"
        href="https://www.instagram.com/lakornvidva/?fbclid=IwAR0vLYfwf-zvx3zeYrm2imllb3WnkPMNTx9T7J4p6pI1NTkA3TipODF_jYk"
      >
        <Image src={igIcon.src} width={100} height={100} alt="IG" />
      </IconStyle>
      <IconStyle
        color="#E93224"
        href="https://www.facebook.com/culakornvidva/?locale=hi_IN"
      >
        <Image src={tiktokIcon.src} width={100} height={100} alt="Tiktok" />
      </IconStyle>
    </IconBox>
  );
}
