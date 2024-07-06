import { useCallback, useEffect, useState } from "react";
import "./app.css";

function App() {
  const [color, setColor] = useState("");
  const [typeOfColor, setTypeOfColor] = useState("");

  function RandomHEXcolor() {
    let digits = "0123456789ABCDEF";
    let HEXcode = "#";
    for (let i = 1; i <= 6; i++) {
      let rand = Math.floor(Math.random() * digits.length);
      HEXcode += digits.charAt(rand);
    }
    setColor(HEXcode);
  }
  function RandomRGBcolor() {
    let RGBcode = "";
    let randR = Math.floor(Math.random() * 256);
    let randG = Math.floor(Math.random() * 256);
    let randB = Math.floor(Math.random() * 256);
    RGBcode = `rgb(${randR},${randG},${randB})`;
    setColor(RGBcode);
  }

  useEffect(() => {
    if (typeOfColor === "hex") RandomHEXcolor();
    else if (typeOfColor === "rgb") RandomRGBcolor();
  }, [typeOfColor]);

  return (
    <>
      <div className="outerDiv" style={{ backgroundColor: color }}>
        <div style={{ position: "absolute", top: "30%", left: "40%" }}>
          <h2 style={{ fontSize: "70px", color: "white" }}>
            {typeOfColor === "rgb"
              ? "RGB Color"
              : typeOfColor === "hex"
              ? "HEX Color"
              : null}
          </h2>
          <h1
            style={{
              position: "absolute",
              top: "180px",
              fontSize: "70px",
              color: "white",
            }}
          >
            {color}
          </h1>
        </div>

        <div className="buttonDiv">
          <button
            onClick={() => setTypeOfColor("hex")}
            style={{
              fontSize: "30px",
              margin: "9px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            Create Hex Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            style={{
              fontSize: "30px",
              margin: "9px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            Create RGB Color
          </button>
          <button
            // onClick={typeOfColor === "hex" ? RandomHEXcolor : RandomRGBcolor}
            onClick={() => {
              if (typeOfColor === "hex") RandomHEXcolor();
              else RandomRGBcolor();
            }}
            style={{
              fontSize: "30px",
              margin: "9px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            Generate Random Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
