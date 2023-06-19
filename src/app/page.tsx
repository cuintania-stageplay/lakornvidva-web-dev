"use client";
// pre-loaded custom fonts
import { styled } from "styled-components";

import Body from "./components/Body";
import TopBar from "./components/TopBar";

const Homepage = styled.html`
  background-image: radial-gradient(
      rgba(17, 16, 11, 0.75) 5%,
      rgba(17, 16, 11, 1) 50%
    ),
    url(https://grainy-gradients.vercel.app/noise.svg);
  height: auto;
`;

export default function Home() {
  return (
    <Homepage>
      <TopBar />
      <Body />
    </Homepage>
  );
}
