import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import Input from "./components/Input";
import Value from "./components/value";
import { useReducer, useState } from "react";
import { MyContext } from "./store/contextObject";

function App() {
  //
  //............USING USESTATE HOOK
  //
  // const [data, setData] = useState([]);
  // // function handleOnClickAdd(name, date) {
  // //   setData([...data, { name, date }]);
  // // }
  // //
  // //
  // //
  // //...........same as above but with state updater function
  // function handleOnClickAdd(name, date) {
  //   if (name != "" && date != "")
  //     setData((previousValue) => [...previousValue, { name, date }]); // it uses another shorthand of {name ,date } directly adds
  // }
  // function handleOnClickDelete(index) {
  //   let result = data.filter((item, dataIndex) => {
  //     return dataIndex != index;
  //   });
  //   setData(result);
  // }
  //
  //
  //
  //
  //

  //............USING USEREDUCER HOOK

  function reducer(previousData, action) {
    let newData = previousData;
    switch (action.type) {
      case "add_button":
        if (action.payload.name !== "" && action.payload.date !== "") {
          newData = [
            ...previousData,
            { name: action.payload.name, date: action.payload.date },
          ];
        }
        return newData;

      case "delete_button":
        newData = previousData.filter((item, dataIndex) => {
          return dataIndex !== action.payload.index;
        });
        return newData;

      default:
        return previousData;
    }
  }
  const [data, dispatch] = useReducer(reducer, []);

  function handleOnClickAdd(name, date) {
    const addAction = { type: "add_button", payload: { name, date } };
    dispatch(addAction);
  }

  function handleOnClickDelete(index) {
    const deleteAction = { type: "delete_button", payload: { index } };
    dispatch(deleteAction);
  }

  return (
    <>
      <MyContext.Provider
        value={{ data, handleOnClickAdd, handleOnClickDelete }}
      >
        <center>
          <Top />
          <Input />
          <Value />
        </center>
      </MyContext.Provider>
    </>
  );
}

export default App;
