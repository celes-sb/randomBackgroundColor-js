"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

function RandomBackground() {
  const [randomIndex, setRandomIndex] = useState();

  const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];

  const getRandomIndex = () => {
    setRandomIndex(Math.floor(darkColorsArr.length * Math.random()));
    return setRandomIndex;
  };

  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

  const changeBackgroundColor = () => {
    const color = darkColorsArr[getRandomIndex()];

    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  };

  const btn = document.querySelector("#btn");
  btn.onclick = changeBackgroundColor;

  return (
    <>
      <h1>Random Background Color changer</h1>
      <p>
        Hex Code: <span id="bg-hex-code">#110815</span>
      </p>
      <button class="btn" id="btn">
        Click Me
      </button>
    </>
  );
}

export default RandomBackground;
