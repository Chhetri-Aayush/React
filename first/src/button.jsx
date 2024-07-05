import { useState } from "react";

function Dishan() {
  const [isClicked, setIsClicked] = useState(false);

  function handleOnClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      {isClicked ? (
        <p style={{ fontSize: "50px" }}>dishan is gay</p>
      ) : (
        <p style={{ fontSize: "50px" }}> dishan is lesbian</p>
      )}
      <button
        style={{ width: "90px", height: "20px", cursor: "pointer" }}
        onClick={handleOnClick}
      >
        {" "}
        click Me
      </button>
    </>
  );
}

export default Dishan;
