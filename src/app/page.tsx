"use client";
// pre-loaded custom fonts
import { styled } from "styled-components";

import Body from "./components/Body";
import TopBar from "./components/TopBar";

export default function Home() {
    return (
        <>
            <TopBar />
            <Body />
        </>
    );
}
