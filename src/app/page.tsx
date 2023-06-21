"use client";
// pre-loaded custom fonts
import { useState } from "react";
import { styled } from "styled-components";

import Body from "./components/Body";
import TopBar from "./components/TopBar";

import Noise from "./images/noise.png";
import Partical from "./images/particle.png";
import Gradient from "./images/gradient.png";
import Sponsor from "./components/Sponsor";

const Homepage = styled.div`
  background-image: url(${Noise.src}), url(${Gradient.src}),
    url(${Partical.src});
  background-color: #11100b;
  mix-blend-mode: normal, luminosity, darken;
  background-size: contain, cover, 50%;

  background-position: top, bottom, bottom;

  background-blend-mode: normal, overlay, normal;
  background-repeat: no-repeat;
  backdrop-filter: brightness(60%), normal, overlay;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export default function Home() {
  const [language, setLanguage] = useState("TH");
  return (
    <Homepage>
      <TopBar language={language} setLanguage={setLanguage} />
      <Body language={language} />
      <Sponsor />
    </Homepage>
  );
}
