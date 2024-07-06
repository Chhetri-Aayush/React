import { useContext, useRef, useState } from "react";
import { MyContext } from "../store/contextObject";

//      INPUT USING USESTATE
// function Input({ handleOnClickAdd }) {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");

//   function handleNameChange(event) {
//     let newName = event.target.value;
//     setName(newName);
//   }
//   function handleDateChange(event) {
//     let newDate = event.target.value;
//     setDate(newDate);
//   }

//   function addDataToList(event) {
//     event.preventDefault();
//     handleOnClickAdd(name, date);
//     setName("");
//     setDate("");
//   }

//   return (
//     <>
//       <div className="container text-center">
//         <form className="row" onSubmit={addDataToList}>
//           <div className="col-4">
//             <input
//               type="text"
//               value={name}
//               onChange={handleNameChange}
//               placeholder="Enter your ToDo...."
//             />
//           </div>
//           <div className="col-4">
//             <input type="date" value={date} onChange={handleDateChange} />
//           </div>
//           <div className="col-3">
//             <button className="btn btn-success">Add</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
//
//
//
//
//
//
//
//
//      INPUT USING USEREF
//
//
//

function Input() {
  const { handleOnClickAdd } = useContext(MyContext);
  const todoNameRef = useRef();
  const todoDateRef = useRef();

  function addDataToList(event) {
    event.preventDefault();
    const name = todoNameRef.current.value;
    const date = todoDateRef.current.value;
    handleOnClickAdd(name, date);
    todoNameRef.current.value = "";
    todoDateRef.current.value = "";
  }

  return (
    <>
      <div className="container text-center">
        <form className="row" onSubmit={addDataToList}>
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter your ToDo...."
              ref={todoNameRef}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={todoDateRef} />
          </div>
          <div className="col-3">
            <button className="btn btn-success">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Input;
