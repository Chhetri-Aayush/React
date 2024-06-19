import styles from "./buttons.module.css";

let Buttons = ({ handleOnClick }) => {
  let numbers = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={`${styles.buttonsDiv}`}>
      {numbers.map((item, index) => {
        return (
          <button
            className={`${styles.buttons}`}
            key={index}
            onClick={() => handleOnClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
