import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {

  const [time, setTime] = useState("");
  const [updatedtime, setUpdatedtime] = useState();
  const [status, setStatus] = useState(false);

  const handlechange = (event) => {

    if (event.key === 'Enter') {

      setStatus(true);

      setUpdatedtime(() => {
        let t = Number(time)
        t = Math.floor(t);
        return t;
      }

      );

      let a = event.target.value;
      if (isNaN(a)) {
        setUpdatedtime(0);
      }

      if (status) {
        let a = event.target.value;
        if (isNaN(a)) {
          setUpdatedtime(0);
          return;
        }
        setUpdatedtime(() => {
          let t = Number(time)
          t = Math.floor(t);
          return t;
        });
        setStatus(true);
      }
      return;
    }



    let t = event.target.value;
    t = Number(t);
    setTime(t);


  }


  useEffect(() => {

    let id = setInterval(() => {
      if (updatedtime == 0) {
        setStatus(false);
      }
      if (status && updatedtime > 0) {
        setUpdatedtime(updatedtime - 1);
      }
    }, 1000);

    return (() => {
      clearInterval(id);
    })

  }, [updatedtime])



  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyUp={handlechange} /> sec.
        </h1>
      </div>
      <div id="current-time">{updatedtime}</div>
    </div>
  )
}


export default App;
