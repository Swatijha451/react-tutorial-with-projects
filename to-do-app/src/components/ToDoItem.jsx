import styles from "./ToDoItem.module.css";
import { MdDelete } from "react-icons/md";

function ToDoItem({todoName,todoDate,onDeleteClick}){

    return(
        <div className="container">
                <div className={`${styles.myrow} row`}>
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger"
                        onClick={()=>onDeleteClick(todoName)}><MdDelete /></button>
                </div>
            </div>
        </div>

    );

}
export default ToDoItem;