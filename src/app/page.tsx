"use client";
// pre-loaded custom fonts
import SwitchButton from "./components/SwitchButton";
import Header from "./components/Header";
import { chopsin, anantason, sukhumvit_medium, sukhumvit_text } from "./fonts";
import "./page.css";
import { styled } from "styled-components";
import Synopsis from "./components/Synopsis";
import Subtitle from "./components/Subtitle";

const Homepage = styled.html`
  background-image: radial-gradient(
      rgba(17, 16, 11, 0.5) 5%,
      rgba(17, 16, 11, 1) 50%
    ),
    url(https://grainy-gradients.vercel.app/noise.svg);
  width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <Homepage>
      <SwitchButton />
      <Header />
      <Subtitle />
      <Synopsis />
    </Homepage>
  );
}
