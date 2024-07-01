import { useRef } from "react";

function Demo() {
  const sampleRef = useRef(0);

  function handleOnClick() {
    sampleRef.current += 1;
    console.log(sampleRef.current);
  }
  return (
    <>
      <p ref={sampleRef}>{sampleRef.current}</p>
      <button onClick={handleOnClick}></button>
    </>
  );
}

export default Demo;
