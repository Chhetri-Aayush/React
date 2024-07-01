import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <button onClick={increment}>Count: {count}</button>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
