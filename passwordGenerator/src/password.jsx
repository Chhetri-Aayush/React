import { useState, useCallback, useEffect, useRef } from "react";

function Password() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordReference = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordReference.current.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()_-+={}[]";

    for (let i = 1; i <= length; i++) {
      let rand = Math.floor(Math.random() * str.length);
      password += str.charAt(rand);
    }
    setPass(password);
  }, [length, numberAllowed, charAllowed, setPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="firstDiv">
        <h1>Password Generator</h1>
        <div>
          <input type="text" value={pass} readOnly ref={passwordReference} />
          <button onClick={copyToClipboard}>copy</button>
        </div>
        <div>
          <div className="rangeDiv">
            <input
              type="range"
              className="form-range"
              min="8"
              max="100"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              id="customRange3"
            ></input>
            <label htmlFor="customRange3" className="form-label lableDiv">
              Length {length}
            </label>
          </div>
          <div className="form-check numberDiv">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="NumberCheckBox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prevValue) => !prevValue)}
            />
            <label className="form-check-label" htmlFor="NumberCheckBox">
              Numbers
            </label>
          </div>
          <div className="form-check characterDiv">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="charactersCheckBox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prevValue) => !prevValue)}
            />
            <label className="form-check-label" htmlFor="charactersCheckBox">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
