import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./app.module.css";
import Buttons from "./components/buttons";
import Disp from "./components/display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  // function handleOnClick(buttonText) {
  //   if (buttonText.trim() === "C") {
  //     setCalVal("");
  //   } else if (buttonText.trim() === "=") {
  //     setCalVal(eval(calVal));
  //   } else {
  //     setCalVal((prevVal) => prevVal + buttonText.trim());
  //   }
  // }
  //
  //
  /*........now why is ther trim() in above function is because if not for the trim the numbers or button stored in array might function differently 
  so it is to avoid those empty spaces like ["9 ","8"] the 9 have some whitespace which is also acoounted for and it will behave funny if that
  whitespace is no taken in to account ...if the numbers had whitespace then it would be something like this 
  The prevVal will become something like "1 ", "1 +", or "C " which is not intended for calculations or clearing the display.
  but if in the array no whitespace is incluced then the below code is just fine*/
  function handleOnClick(buttonText) {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal((prevVal) => prevVal + buttonText);
    }
  }
  /* now how is the prevVal is the value of calVal is because it is something like the map method where the item and index are the default
  parameters...and similarly the prevVal is the default parameters of the setCalVal function which is the state improviser function of useState  */
  return (
    <>
      <div className={`${styles.mainDiv}`}>
        <Disp displayValue={calVal}></Disp>
        <Buttons handleOnClick={handleOnClick}></Buttons>
      </div>
    </>
  );
}

export default App;
