function Value({ data }) {
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div className="container text-center" key={index}>
              <div className="row">
                <div className="col-4">
                  <p>{item.name}</p>
                </div>
                <div className="col-4">
                  <p>{item.date}</p>
                </div>
                <div className="col-3">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Value;
