import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [val, setVal] = useState(0);
  const [startStop, setStartStop] = useState(true);
  const [timeInterval, setTimeInterval] = useState();

  const handleStartStop = (startstopVal) => {
    if (!startstopVal) {
      setTimeInterval(
        setInterval(() => {
          setVal((prev) => prev + 10);
        }, 10)
      );
    } else {
      clearInterval(timeInterval);
    }
  };

  return (
    <div className="container">
      <div>
        <span>{('0' + Math.floor((val / 60000) % 60)).slice(-2)}</span>&ensp;
        <span>{('0' + Math.floor((val / 1000) % 60)).slice(-2)}</span>&ensp;
        <span>{('0' + ((val / 10) % 1000)).slice(-2)}</span>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '2vw',
        }}
      >
        <button
          style={{
            color: 'brown',
            backgroundColor: 'lightblue',
            border: 'none',
            height: '8vw',
            width: '20vw',
            borderRadius: '23px',
          }}
          onClick={() => {
            setStartStop((prev) => !prev);
            handleStartStop(!startStop);
          }}
        >
          {startStop ? 'Start' : 'Stop'}
        </button>
        <button
          style={{
            color: 'brown',
            backgroundColor: 'lightblue',
            border: 'none',
            height: '8vw',
            width: '20vw',
            borderRadius: '23px',
          }}
          onClick={() => setVal(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
