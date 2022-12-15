import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  let timerId = ""
  let [timeLeft, setTimeLeft] = useState(0);


  useEffect(() => {
    if (timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000);
    }
  }, [timeLeft])


  const countInReverse = (e) => {
    if (e.keyCode === 13) {
      clearTimeout(timerId)
      let timeCountValue = document.getElementById('timeCount').value;
      if (!isNaN(timeCountValue)) {
        setTimeLeft(parseInt(timeCountValue));
      } else {
        if (timerId !== "") {
          clearTimeout(timerId)
        }
        setTimeLeft(0)
      }
    }
  }

  return (
    <div className="main">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={countInReverse} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeLeft}</div>
    </div>
  )
}


export default App;