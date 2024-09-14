import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function ColorContainer() {
  const color = randomColor();

  console.log(color);

  return (
    <div className="main-container">
      <h1>Random Color Generator</h1>

      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Generated Color: {color}</p>
      </div>

      <button
        onClick={() => {
          const newColor = randomColor();
        }}
      >
        Generate
      </button>
    </div>
  );
}
