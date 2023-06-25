'use client';
import { styled } from 'styled-components';

import Body from './components/Body';
import TopBar from './components/TopBar';

import Noise from './images/noise.webp';
import Partical from './images/particle.webp';
import Gradient from './images/gradient.webp';
import Sponsor from './components/Sponsor';

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
  justify-content: space-between;

  min-height: 100vh;
`;

export default function Home() {
  return (
    <Homepage>
      <TopBar />
      <Body />
      <Sponsor />
    </Homepage>
  );
}
