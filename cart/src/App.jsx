import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/errrmessage";
import Container from "./container";
import List from "./components/list";
import styles from "./app.module.css";
import Display from "./components/display";
import { useState } from "react";

function App() {
  let [listArray, setlistArray] = useState([]);
  function handleOnKeyDown(e) {
    if (e.key == "Enter") {
      let newItemInlistArray = e.target.value;
      e.target.value = " ";
      let newlistArray = [...listArray, newItemInlistArray];
      setlistArray(newlistArray);
    }
  }

  return (
    <Container>
      <h1 className={`${styles.heading}`}>Healthy Food Items</h1>
      <Display handleOnKeyDown={handleOnKeyDown}></Display>
      <ul className="list-group continer">
        <ErrorMessage listArray={listArray} />
        <div className={`${styles.cart}`}>
          {listArray.map((item) => (
            <List
              key={item}
              item={item}
              handleBuybutton={(e) => console.log(`${item} is bought`)}
            />
          ))}
        </div>
      </ul>
    </Container>
  );
}

export default App;
