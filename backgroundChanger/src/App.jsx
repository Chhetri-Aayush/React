import "./app.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("White");
  const colors = ["Red", "Blue", "Green", "Pink", "Orange"];
  function handleOnClick(colorsItem) {
    setColor(colorsItem);
  }
  return (
    <>
      <div style={{ backgroundColor: color }} className="mainDiv">
        <div className="buttonContainer">
          {colors.map((colorsItem, colorsIndex) => (
            <button
              style={{ backgroundColor: colorsItem }}
              className="button"
              key={colorsIndex}
              onClick={() => handleOnClick(colorsItem)}
            >
              {colorsItem}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
