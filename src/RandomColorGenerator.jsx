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
        <div>Generated Color: {color}</div>
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

// ChatGPT version that converts the text inside to dark/light in according to the background color

// import randomColor from 'randomcolor';
// import React, { useEffect, useState } from 'react';

// export default function RandomColorControl() {
//   const [color, setColor] = useState(randomColor({ format: 'hex' })); // Force hex format
//   const [luminosity, setLuminosity] = useState('');
//   const [hue, setHue] = useState('');
//   const [textColor, setTextColor] = useState('black');

//   const parameters = {
//     luminosity: luminosity,
//     hue: hue,
//   };

//   // Function to convert hex to RGB
//   const hexToRgb = (hex) => {
//     const r = parseInt(hex.slice(1, 3), 16);
//     const g = parseInt(hex.slice(3, 5), 16);
//     const b = parseInt(hex.slice(5, 7), 16);
//     return { r, g, b };
//   };

//   // Function to calculate luminance
//   const getLuminance = ({ r, g, b }) => {
//     return 0.299 * r + 0.587 * g + 0.114 * b;
//   };

//   // Function to determine if the color is light or dark
//   const isLightColor = (luminance) => luminance > 128;

//   // useEffect hook to update the text color whenever the color changes
//   useEffect(() => {
//     const rgb = hexToRgb(color);
//     const luminance = getLuminance(rgb);
//     const newTextColor = isLightColor(luminance) ? 'black' : 'white';

//     // Debugging logs
//     console.log('Generated Color:', color);
//     console.log('RGB:', rgb);
//     console.log('Luminance:', luminance);
//     console.log('Text Color:', newTextColor);

//     setTextColor(newTextColor);
//   }, [color]);

//   return (
//     <div className="main-container">
//       <h1>Random Color Generator</h1>

//       <div
//         className="color-display"
//         style={{ backgroundColor: color, color: textColor }}
//       >
//         <p>Generated Color: {color}</p>
//       </div>

//       <button
//         className="button"
//         onClick={() => setColor(randomColor({ ...parameters, format: 'hex' }))} // Force hex format
//       >
//         Generate
//       </button>

//       <h3>Want more control?</h3>

//       <div className="inputs">
//         <input
//           value={luminosity}
//           onChange={(event) => setLuminosity(event.target.value)}
//           placeholder="light / dark"
//           className="luminosity-input"
//         />

//         <input
//           value={hue}
//           onChange={(event) => setHue(event.target.value)}
//           placeholder="red, green, blue etc."
//           className="hue-input"
//         />
//       </div>
//     </div>
//   );
// }
