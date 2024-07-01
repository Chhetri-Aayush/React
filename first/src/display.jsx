// import React, { useState, memo } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment Counter</button>
//       <p>Counter: {count}</p>
//       <p>Current Date and Time: {Date().toLocaleString()}</p>
//     </div>
//   );
// };

// export default Counter;

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   // This variable is re-evaluated on each render
//   const currentDate = new Date().toLocaleString();

//   // This function is recreated on each render
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <button onClick={increment}>Count: {count}</button>
//       <p>Current Date and Time: {currentDate}</p>
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let currentDate = new Date().toLocaleString();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <p>Counter: {count}</p>
      <p>Current Date and Time: {currentDate}</p>
      <p>hello wolrd</p>
    </div>
  );
};

export default Counter;
