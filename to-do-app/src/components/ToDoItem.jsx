import { useContext } from "react";
import styles from "./ToDoItem.module.css";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/todoItemsContext";

function ToDoItem({todoName,todoDate}){

    const {deleteItem}=useContext(todoItemsContext);

    return(
        <div className="container">
                <div className={`${styles.myrow} row`}>
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger"
                        onClick={()=>deleteItem(todoName)}><MdDelete /></button>
                </div>
            </div>
        </div>

    );

}
export default ToDoItem;