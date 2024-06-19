import styles from "./display.module.css";

const Display = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter  item here"
      className={`${styles.display}`}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default Display;
