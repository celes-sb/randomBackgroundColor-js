"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

function RandomBackground() {
  const [randomIndex, setRandomIndex] = useState(0);

  const colorsArr = [
    "#2C3E50", // Dark Blue Gray
    "#34495E", // Blue Gray
    "#2C2C2C", // Almost Black
    "#616A6B", // Dim Gray
    "#4A235A", // Dark Purple
    "#2F4F4F", // Dark Slate Gray
    "#0E4B5A", // Dark Cyan
    "#36454F", // Charcoal
    "#2C3E50", // Dark Blue Gray
    "#800020", // Burgundy
    "#2B2B2B", // Jet
    "#3B3B3B", // Onyx
    "#1C1C1C", // Eerie Black
    "#4B0082", // Indigo
    "#191970", // Midnight Blue
    "#000080", // Navy
    "#00008B", // Dark Blue
    "#2E8B57", // Sea Green
    "#2E2E2E", // Davy's Gray
    "#556B2F", // Dark Olive Green
    "#8B4513", // Saddle Brown
    "#4B5320", // Army Green
    "#483D8B", // Dark Slate Blue
    "#2F4F4F", // Dark Slate Gray
    "#2E2E2E", // Davy's Gray
    "#6B4226", // Liver
    "#5D3A1A", // Dark Brown
    "#800000", // Maroon
    "#3D3D3D", // Charcoal
    "#34282C", // Black Coffee
    "#FF5733", // Bright Red-Orange
    "#FFC300", // Bright Yellow
    "#DAF7A6", // Light Green
    "#FF33FF", // Bright Magenta
    "#33FF57", // Bright Lime
    "#33FFCE", // Bright Cyan
    "#33A1FF", // Bright Sky Blue
    "#A133FF", // Bright Purple
    "#FF5733", // Bright Red-Orange
    "#FF5733", // Bright Red-Orange
    "#FFCC33", // Bright Gold
    "#FF33A1", // Bright Pink
    "#FF6F61", // Bright Coral
    "#FFD700", // Bright Yellow Gold
    "#ADFF2F", // Bright Green Yellow
    "#FFA07A", // Light Salmon
    "#FF4500", // Bright Orange Red
    "#00FF00", // Bright Green
    "#00FF7F", // Bright Spring Green
    "#00FFFF", // Bright Aqua
    "#0000FF", // Bright Blue
    "#8A2BE2", // Bright Blue Violet
    "#FF1493", // Bright Deep Pink
    "#FF69B4", // Bright Hot Pink
    "#FF6347", // Bright Tomato
    "#FFFF00", // Bright Yellow
    "#7FFF00", // Bright Chartreuse
    "#00FA9A", // Bright Medium Spring Green
    "#00CED1", // Bright Dark Turquoise
    "#1E90FF" // Bright Dodger Blue
  ];

  const getRandomIndex = () => {
    return Math.floor(colorsArr.length * Math.random());
  };

  const changeBackgroundColor = () => {
    const index = getRandomIndex();
    setRandomIndex(index);
  };

  const color = colorsArr[randomIndex];

  return (
    <>
      <div className={styles.description}>
        <h2>
          Hex Code: <span id="bg-hex-code">{color}</span>
        </h2>
        <button
          className={styles.button}
          id="btn"
          onClick={changeBackgroundColor}
        >
          Click Me
        </button>
      </div>

      <style jsx global>{`
        body {
          background-color: ${color};
        }
      `}</style>
    </>
  );
}

export default RandomBackground;
