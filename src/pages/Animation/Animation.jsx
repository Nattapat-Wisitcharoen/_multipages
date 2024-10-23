import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Animation.css';

const fieldwidth = 700;
const fieldHeight = 400;
const diameter = 120;
const maxLeft = fieldwidth - diameter - 2;
const maxTop = fieldHeight - diameter - 2;

const BallAnimation = () => {
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [ballImage, setBallImage] = useState('none');

  const vx = 5;
  const vy = 5;

  const runClick = () => {
    setRunning(!running);
  };

  const calculate = () => {
    let { x, y } = position;
    let newRotation = rotation;

    if (goRight) {
      x += vx;
      newRotation += 5;
      if (x >= maxLeft) {
        setGoRight(false);
        newRotation += 90;
      }
    } else {
      x -= vx;
      newRotation -= 5;
      if (x <= 0) {
        setGoRight(true);
        newRotation += 90;
      }
    }

    if (goDown) {
      y += vy;
      if (y >= maxTop) {
        setGoDown(false);
        newRotation += 90;
      }
    } else {
      y -= vy;
      if (y <= 0) {
        setGoDown(true);
        newRotation += 90;
      }
    }

    setPosition({ x, y });
    setRotation(newRotation % 360);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(calculate, 25);
      return () => clearInterval(interval);
    }
  }, [running, position, goRight, goDown]);

  return (
    <div className='animation-container'>
    <div id="container">
      <div id="field">
        <div
          id="ball"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            backgroundImage: ballImage,
            transform: `rotate(${rotation}deg)`,
          }}
        ></div>
      </div>
      <div id="control">
        <button id="run" className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={runClick}>
          <span className={`bi bi-${running ? 'pause' : 'play'}`}>&nbsp;{running ? 'Pause' : 'Run'}</span>
        </button>&nbsp;&nbsp;
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => setBallImage('none')}>None</button>
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setBallImage('url(/_multipages/basketball.png)')}>Basketball</button>
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setBallImage('url(/_multipages/football.png)')}>Football</button>
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setBallImage('url(/_multipages/volleyball.png)')}>Volleyball</button>
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setBallImage('url(/_multipages/human.JPG)')}>Human</button>
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setBallImage('url(/_multipages/cartoon.png)')}>Cartoon</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setBallImage('url(/_multipages/logo.png)')}>Logo</button>
      </div>
    </div>
    </div>
  );
};

export default BallAnimation;
