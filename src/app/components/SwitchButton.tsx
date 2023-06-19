"use client";

import styled from "styled-components";
import { chopsin, anantason, sukhumvit_medium, sukhumvit_text } from "../fonts";

//box around circle
const Box = styled.label`
  position: relative;
  display: inline-block;
  height: 55px;
  width: 152px;
  left: 0px;
  top: 0px;
  border-radius: 70px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 48px;
    width: 48px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Language = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 12px;
  font-family: ${chopsin.style.fontFamily};
  font-size: 25px;
  color: white;

  &:after {
    content: attr(data-th);
    position: absolute;
    right: 15px;
    opacity: 1;
  }

  &:before {
    content: attr(data-eng);
    position: absolute;
    left: 15px;
    opacity: 0;
  }
`;

const BoxInput = styled.input`
  /*Hide default check box*/
  opacity: 0;
  width: 0;
  height: 0;

  & + ${Slider} {
    background-color: #960000;
  }

  &:checked + ${Slider} {
    background-color: #159600;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(96px);
    -ms-transform: translateX(96px);
    transform: translateX(96px);
  }

  &:checked ~ ${Language}::after {
    opacity: 0;
  }

  &:checked ~ ${Language}::before {
    opacity: 1;
  }
`;

function switchLanguage(state: {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  if (state.language == "TH") state.setLanguage("ENG");
  else state.setLanguage("TH");
}

export default function SwitchButton(state: {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Box>
      <BoxInput
        onClick={() => switchLanguage(state)}
        type="checkbox"
      ></BoxInput>
      <Slider></Slider>
      <Language data-th="TH" data-eng="ENG"></Language>
    </Box>
  );
}
