"use client";
// pre-loaded custom fonts
import { chopsin, anantason, sukhumvit_medium, sukhumvit_text } from "./fonts";
import "./page.css";
import { styled } from "styled-components";

import SwitchButton from "./components/SwitchButton";
import Header from "./components/Header";
import Synopsis from "./components/Synopsis";
import Subtitle from "./components/Subtitle";
import BuyButton from "./components/BuyButton";
import SocialMedia from "./components/SocialMedia";

const Homepage = styled.html`
  background-image: radial-gradient(
      rgba(17, 16, 11, 0.5) 5%,
      rgba(17, 16, 11, 1) 50%
    ),
    url(https://grainy-gradients.vercel.app/noise.svg);
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Homepage>
      <SwitchButton />
      <Body>
        <Header />
        <Subtitle />
        <Synopsis />
        <BuyButton />
        <SocialMedia />
      </Body>
    </Homepage>
  );
}
