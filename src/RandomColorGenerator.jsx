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
      <h1>Random Color Generator 🎨</h1>

      <div className="color-display" style={{ backgroundColor: color }}>
        Generated Color: {color}
      </div>

      <button
        className="button"
        onClick={() => setColor(randomColor(parameters))}
      >
        Generate
      </button>

      <h3>Want more control?</h3>
      <div className="inputs">
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
