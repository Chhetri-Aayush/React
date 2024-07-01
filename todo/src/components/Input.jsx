import { useState } from "react";

function Input({ handleOnClickAdd }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleNameChange(event) {
    let newName = event.target.value;
    setName(newName);
  }
  function handleDateChange(event) {
    let newDate = event.target.value;
    setDate(newDate);
  }

  function addDataToList(event) {
    event.preventDefault();
    handleOnClickAdd(name, date);
    setName("");
    setDate("");
  }

  return (
    <>
      <div className="container text-center">
        <form className="row" onSubmit={addDataToList}>
          <div className="col-4">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your ToDo...."
            />
          </div>
          <div className="col-4">
            <input type="date" value={date} onChange={handleDateChange} />
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
