import { useState } from "react";
import datas from "../data/data";
import styles from "./list.module.css";

function ListComponent() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  let accordionList = datas.map((dataItem) => (
    <div
      key={dataItem.id}
      className={styles.customDiv}
      onClick={() => handleSingleSelection(dataItem.id)}
    >
      <div className={styles.question}>
        {dataItem.question}
        <span className={styles.add}>
          {selected === dataItem.id ? "-" : "+"}
        </span>
      </div>
      {selected === dataItem.id && (
        <div className={styles.answer}>{dataItem.answer}</div>
      )}
    </div>
  ));

  return <div>{accordionList}</div>;
}

export default ListComponent;
