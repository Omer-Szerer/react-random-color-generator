import randomColor from 'randomcolor';
import React, { useState } from 'react';

function ColorContainer() {
  const random = randomColor();
  const [color, setColor] = useState(random);

  return (
    <div className="color-container">
      <h1>Random Color Generator</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Generated Color: {color}</p>
      </div>
    </div>
  );
}

export default ColorContainer;
