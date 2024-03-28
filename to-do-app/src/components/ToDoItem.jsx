function ToDoItem(){

    return(
        <div className="conatiner text-center ">
            <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter your " />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-danger">
            Delete
          </button>
        </div>
      </div>
        </div>

    );

}
export default ToDoItem;