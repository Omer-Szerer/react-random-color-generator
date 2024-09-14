import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function RandomColorControl() {
  const [color, setColor] = useState(randomColor);
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');
  const parameters = {
    luminosity: luminosity,
    hue: hue,
  };

  return (
    <div className="main-container">
      <h1>Random Color Generator</h1>

      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Generated Color: {color}</p>
      </div>

      <button onClick={() => setColor(randomColor(parameters))}>
        Generate
      </button>

      <div className="inputs">
        <h>Want more control?</h>
        <input
          value={luminosity}
          onChange={(event) => setLuminosity(event.target.value)}
          placeholder="light / dark"
          className="luminosity-input"
        />

        <input
          value={hue}
          onChange={(event) => setHue(event.target.value)}
          placeholder="red, green, blue etc."
          className="hue-input"
        />
      </div>
    </div>
  );
}
