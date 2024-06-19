import styles from "./display.module.css";

let Disp = ({ displayValue }) => {
  return (
    <>
      <div>
        <input
          type="text"
          className={`${styles.input}`}
          value={displayValue}
          readOnly
        />
      </div>
    </>
  );
};

export default Disp;
