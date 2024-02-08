'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';

interface SleepSliderProps {
  sleepvalue: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  key: string; // Add a key property
}

const SleepSlider: React.FC<SleepSliderProps> = ({
  sleepvalue,
  onChange,
  key
}) => {
  const shouldShift = sleepvalue > -1 && sleepvalue < 101;

  useEffect(() => {
    document.documentElement.style.setProperty(
      `--sleep-value-${key}`, // Use key to set unique CSS variable name
      sleepvalue.toString()
    );
  }, [sleepvalue, key]);

  return (
    <div className="sleep-slider-container">
      <div className="sleepcontrol">
        <input
          id={`track-${key}`} // Use key to generate unique IDs
          type="range"
          min="0"
          max="100"
          value={sleepvalue}
          onChange={onChange}
          className="sleepslider-input"
        />

        <div
          className="sleeptooltip"
          style={{ '--shift': shouldShift ? 1 : 0 } as React.CSSProperties}
        ></div>
        <div
          className="sleepcontrol__track"
          style={{ '--shift': shouldShift ? 1 : 0 } as React.CSSProperties}
        ></div>
      </div>
      {/* <style>{SleepSliderStyle}</style> */}
    </div>
  );
};

const SleepForm: React.FC = () => {
  const [sleepslidervalue1, setSleepSliderValue1] = useState<number>(50);
  const [sleepslidervalue2, setSleepSliderValue2] = useState<number>(50);

  const handleSliderChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const sleepvalue = parseInt(event.target.value, 10);
    setSleepSliderValue1(sleepvalue);
    document.documentElement.style.setProperty(
      '--sleep-value-1', // Use unique key for first slider
      sleepvalue.toString()
    );
  };

  const handleSliderChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const sleepvalue = parseInt(event.target.value, 10);
    setSleepSliderValue2(sleepvalue);
    document.documentElement.style.setProperty(
      '--sleep-value-2', // Use unique key for second slider
      sleepvalue.toString()
    );
  };

  return (
    <div>
      <h2 className="text-center">
        How much sleep did you get "last night" and when?
      </h2>
      <br />
      <form>
        <SleepSlider
          sleepvalue={sleepslidervalue1}
          onChange={handleSliderChange1}
          key="1" // Assign a unique key to the first slider
        />
        <SleepSlider
          sleepvalue={sleepslidervalue2}
          onChange={handleSliderChange2}
          key="2" // Assign a unique key to the second slider
        />
        <br />
        <br />
        <style>{SleepSliderStyle}</style> {/* Include the styles */}
      </form>
    </div>
  );
};

const SleepSliderStyle = `
  .sleeptooltip::before {
    color: white;
    content: var(--sleepLabel, "morning") " " counter(low) "%";
    left: 0.5rem;
  }

  .sleeptooltip::after {
    color: white;
    content: var(--eveningLabel, "midnight") " " counter(high) "%";
    right: 0.5rem;
  }

  .sleepcontrol__track::before {
    background: #64B5F6; /* Light blue */
  }

  .sleepcontrol__track::after {
    background: #B71C1C; /* Dark red */
  }

  @font-face {
  font-family: "Geist Sans";
  src: url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype");
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

.sleep-slider-container {
  width: 600px; /* Adjust the width as needed */
  margin: 0 auto;
}

.sleepcontrol {
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sleepcontrol:focus-within,
.sleepcontrol:hover {
  --active: 1;
}



.sleeptooltip {
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  pointer-events: none;
  transform: translateY(calc(var(--shift, 0) * 50%));
  transition: transform var(--speed) var(--timing);
  z-index: 2;
  counter-reset: low var(--sleep-value) high calc(100 - var(--sleep-value));
}

.sleeptooltip::before,
.sleeptooltip::after {
  --range: calc((50 - (var(--sleep-value) / 100 * 10)) * 1%);
  font-variant: tabular-nums;
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-family: monospace;
}

.sleepcontrol__track {
  --sleep: hsl(
    24 74% calc(24% + (30% * (var(--sleep-value, 0) / 100))) / 0.4
  );
  --evening: hsl(0 0% 100% / calc(0.1 + (0.4 * (var(--sleep-value, 0) / 100))));
  height: calc(50% + (var(--shift) * 50%));
  width: 100%;
  position: absolute;
  bottom: 0;
  pointer-events: none;
  transition: height var(--speed) var(--timing);
}

.sleepcontrol__track::before,
.sleepcontrol__track::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 4px;
  transition: width var(--sleep--update);
}

.sleepcontrol__track::before {
  left: 0;
  width: calc(var(--sleep-value, 0) * 1% - 0.5rem);
}

.sleepcontrol__track::after {
  right: 0;
  width: calc((100 - var(--sleep-value, 0)) * 1% - 0.5rem);
}

.sleepcontrol__indicator {
  height: 5%;
  border-radius: 4px;
  width: 4px;
  position: absolute;
  top: 50%;
  background: hsl(0 0% 100% / calc((var(--active, 0) * 0.5) + 0.5));
  left: calc(var(--sleep-value, 0) * 1%);
  z-index: 2;
  translate: -50% -50%;
  transition: left var(--sleep--update), background var(--sleep--update);
}

.sleepslider-input {
  position: relative;
  width: 100%;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
}

`;

export { SleepSlider, SleepSliderStyle };

export default SleepForm;
