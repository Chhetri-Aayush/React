import React, { useState, memo } from "react";

// Separate component for date display
const DateDisplay = memo(() => {
  const currentDate = new Date().toLocaleString();
  return <p>Current Date and Time: {currentDate}</p>;
});

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <p>Counter: {count}</p>
      <DateDisplay />
    </div>
  );
};

export default Counter;
