import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"

const ToDoItems=({items,onDeleteClick})=>{
return (
    <div className="container">
        {items.map(item=>
        <ToDoItem 
        key={item.itemName}
        todoName={item.itemName} 
        todoDate={item.dueDate} 
        onDeleteClick={onDeleteClick}></ToDoItem>
        )}
    </div>
)};
export default ToDoItems;