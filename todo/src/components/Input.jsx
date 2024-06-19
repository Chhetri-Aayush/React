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

  function addDataToList() {
    handleOnClickAdd(name, date);
    setName("");
    setDate("");
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date" value={date} onChange={handleDateChange} />
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={addDataToList}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
