import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function ColorContainer() {
  const color = randomColor({
    luminosity: 'lumInput',
    hue: 'hueInput',
  });

  const [lumInput, setLumInput] = useState(randomColor.luminosity);
  const [hueInput, setHueInput] = useState(randomColor.hue);

  console.log(color);

  return (
    <div className="main-container">
      <h1>Random Color Generator</h1>

      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Generated Color: {color}</p>
      </div>

      <div className="inputs">
        <h>Want more control?</h>
        <input
          value={lumInput}
          onChange={(event) => setLumInput(event.currentTarget.value)}
          placeholder="light or Dark"
          className="lum-input"
        />
        <input placeholder="red, blue, green etc." className="hue-input" />
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
