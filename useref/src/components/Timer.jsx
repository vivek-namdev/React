import React, { useRef, useState } from 'react'

const Timer = () => {
    const[displayTime, setDisplayTime] = useState(0);
    const intervalRef = useRef(null);
    

    const startTimer = () => {
          if (intervalRef.current) return; // prevent multiple timers
        intervalRef.current = setInterval(() => {
            setDisplayTime(prev => prev + 1);
        }, 1000)
    };

    const endTimer = () => {
        clearInterval(intervalRef.current);
    };

  return (
    <div>
      <p>Time : {displayTime}s</p>
      <button onClick={startTimer}>Start</button>
      <br />
      <button onClick={endTimer}>Stop</button>
    </div>
  )
}

export default Timer
