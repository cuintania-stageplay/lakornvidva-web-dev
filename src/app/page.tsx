"use client";
// pre-loaded custom fonts
import { chopsin, anantason, sukhumvit_medium, sukhumvit_text } from "./fonts";
import "./page.css";
import Image from "next/image";
import { styled } from "styled-components";

import Logo from "./images/logo-white.png";

import SwitchButton from "./components/SwitchButton";
import Header from "./components/Header";
import Synopsis from "./components/Synopsis";
import Subtitle from "./components/Subtitle";
import BuyButton from "./components/BuyButton";
import SocialMedia from "./components/SocialMedia";
import Sponsor from "./components/Sponsor";

const Homepage = styled.html`
  background-image: radial-gradient(
      rgba(17, 16, 11, 0.75) 5%,
      rgba(17, 16, 11, 1) 50%
    ),
    url(https://grainy-gradients.vercel.app/noise.svg);
  height: auto;
`;

const Bar = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Homepage>
      <Bar>
        <SwitchButton />
        <Image src={Logo.src} width={150} height={150} alt="LAKORNVIDVA" />
      </Bar>
      <Body>
        <Header />
        <Subtitle />
        <Synopsis />
        <BuyButton />
        <SocialMedia />
        <Sponsor />
      </Body>
    </Homepage>
  );
}
