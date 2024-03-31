import  "./AddToDo.module.css"


function AddToDo() {
  return (
    <div className="container text-center">
      <div className="row myrow">
            <div className="col-6">
                <input type="text" placeholder="Enter your task to-do here" />
            </div>
            <div className="col-4">
                <input type="date" ></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-outline-success myButton">
                    Add
                </button>
            </div>
      </div>
    </div>
  );
}
export default AddToDo;
