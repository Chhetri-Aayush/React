import styles from "./errrmessage.module.css";

let ErrorMessage = ({ listArray }) => {
  let condition =
    listArray.length === 0 ? (
      <p className={`message ${styles.message}`}> i am hungry</p>
    ) : null;
  return <>{condition}</>;
};

export default ErrorMessage;
