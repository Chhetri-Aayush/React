function Input() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input type="text" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
