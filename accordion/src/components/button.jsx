import styles from "./button.module.css";
function ButtonComponents() {
  return (
    <>
      <button className={`${styles.customButton}`}>
        {" "}
        Enable Multi Selection
      </button>
    </>
  );
}

export default ButtonComponents;
