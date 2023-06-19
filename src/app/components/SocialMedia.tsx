import Image from "next/image";
import facebookIcon from "../images/facebook_icon.png";
import igIcon from "../images/instagram_icon.png";
import tiktokIcon from "../images/tiktok_icon.png";
import { styled } from "styled-components";

const IconBox = styled.div`
  width: 420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function SocialMedia() {
  return (
    <IconBox>
      <a href="https://www.facebook.com/culakornvidva/?locale=hi_IN">
        <Image src={facebookIcon.src} width={100} height={100} alt="FB" />
      </a>
      <a href="https://www.instagram.com/lakornvidva/?fbclid=IwAR0vLYfwf-zvx3zeYrm2imllb3WnkPMNTx9T7J4p6pI1NTkA3TipODF_jYk">
        <Image src={igIcon.src} width={100} height={100} alt="IG" />
      </a>
      <a href="https://www.facebook.com/culakornvidva/?locale=hi_IN">
        <Image src={tiktokIcon.src} width={100} height={100} alt="Tiktok" />
      </a>
    </IconBox>
  );
}
