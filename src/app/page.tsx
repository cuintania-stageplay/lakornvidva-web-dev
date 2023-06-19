"use client";
// pre-loaded custom fonts
import { useState } from "react";
import { styled } from "styled-components";

import Body from "./components/Body";
import TopBar from "./components/TopBar";

const Homepage = styled.div`
  background-image: radial-gradient(
      rgba(17, 16, 11, 0.75) 5%,
      rgba(17, 16, 11, 1) 50%
    ),
    url(https://grainy-gradients.vercel.app/noise.svg);
  height: auto;
`;

export default function Home() {
  const [language, setLanguage] = useState("TH");
  return (
    <Homepage>
      <TopBar language={language} setLanguage={setLanguage} />
      <Body language={language} />
    </Homepage>
  );
}
