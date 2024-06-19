import styles from "./list.module.css";

const List = ({ item, handleBuybutton }) => {
  return (
    <li className={` list-group-item ${styles.list}`}>
      {item}
      <button
        className={`${styles.buybutton} btn btn-info`}
        onClick={handleBuybutton}
      >
        Buy
      </button>
    </li>
  );
};

export default List;
