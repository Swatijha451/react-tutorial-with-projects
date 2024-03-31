import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"

const ToDoItems=({items})=>{
return (
    <div className="container">
        {items.map(item=><ToDoItem todoName={item.itemName} todoDate={item.dueDate}></ToDoItem>
        )}
    </div>
)};
export default ToDoItems;