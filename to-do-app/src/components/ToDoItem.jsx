import "./ToDoItem.module.css";
function ToDoItem({todoName,todoDate}){

    return(
        <div className="container">
                <div className="row myrow">
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>

    );

}
export default ToDoItem;