import { useEffect, useState } from "react";
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
        <div
          style={{
            color: "white",
            fontSize: "50px",
            position: "relative",
            top: "180px",
            left: "300px",
            width: "370px",
          }}
        >
          <h2>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
          <h1>{color}</h1>
        </div>

        <div className="buttonDiv">
          <button
            onClick={() => setTypeOfColor("hex")}
            style={{
              margin: "10px",
              fontSize: "25px",
              padding: "7px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Create Hex Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            style={{
              margin: "10px",
              fontSize: "25px",
              padding: "7px",
              borderRadius: "3px",
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
              margin: "10px",
              fontSize: "25px",
              padding: "7px",
              borderRadius: "3px",
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
