import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import Input from "./components/Input";
import Value from "./components/value";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function handleOnClickAdd(name, date) {
    setData([...data, { name, date }]);
  }

  function handleOnClickDelete(index) {
    let result = data.filter((item, dataIndex) => {
      return dataIndex != index;
    });
    setData(result);
  }
  return (
    <>
      <center>
        <Top />
        <Input handleOnClickAdd={handleOnClickAdd} />
        <Value data={data} handleOnClickDelete={handleOnClickDelete} />
      </center>
    </>
  );
}

export default App;
