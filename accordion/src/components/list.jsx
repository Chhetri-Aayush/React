// import { useState } from "react";
// import datas from "../data/data";
// import styles from "./list.module.css";

// function ListComponent() {
//   const [selected, setSelected] = useState(null);

//   function handleOnClick(id) {
//     setSelected(selected === id ? null : id);
//   }

//   return (
//     <div>
//       {datas.map((dataItem, dataIndex) => (
//         <div key={dataIndex}>
//           <div
//             key={dataIndex}
//             className={`${styles.customDiv}`}
//             onClick={() => handleOnClick(dataItem.id)}
//           >
//             {" "}
//             {dataItem.question} <span className={`${styles.add}`}>+</span>
//           </div>
//           {selected === dataItem.id ? <div>{dataItem.answer} </div> : null}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListComponent;

import { useState } from "react";
import datas from "../data/data";
import styles from "./list.module.css";

function ListComponent() {
  const [selected, setSelected] = useState(null);

  function handleOnClick(id) {
    setSelected(selected === id ? null : id); // Toggle selected state
  }

  return (
    <div>
      {datas.map((dataItem) => (
        <div
          key={dataItem.id}
          className={styles.customDiv}
          onClick={() => handleOnClick(dataItem.id)}
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
      ))}
    </div>
  );
}

export default ListComponent;