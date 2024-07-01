import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startingTime, setStartingTime] = useState(null);
  const [now, setNow] = useState(null);
  const timeRef = useRef(null);

  function handleOnClickStart() {
    setStartingTime(Date.now());
    setNow(Date.now());

    timeRef.current = setInterval(() => setNow(Date.now()), 10);
  }

  let secondsPassed = 0;
  if (now != null && secondsPassed != null)
    secondsPassed = (now - startingTime) / 1000;

  function handleOnClickStop() {
    clearInterval(timeRef.current);
  }

  function handleOnClickReset() {
    setNow(null);
    clearInterval(timeRef.current);
  }

  return (
    <>
      <p> Time in seconds:{secondsPassed.toFixed(3)}</p>
      <button onClick={handleOnClickStart}> Start</button>
      <button onClick={handleOnClickStop}> Stop</button>
      <button onClick={handleOnClickReset}> Reset</button>
    </>
  );
}
