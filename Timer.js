import React, { useState, useEffect } from "react";
import Score from "./Score";   // ✅ Score component import

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log("Time updated!");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      <h2>Time: {time}</h2>
      <Score value={100} />
    </div>
  );
}

export default Timer;
