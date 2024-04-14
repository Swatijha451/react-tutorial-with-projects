
import { todoItemsContext } from "../store/todoItemsContext";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"
import { useContext } from "react";

const ToDoItems=()=>{    
    // const contextObj=useContext(todoItemsContext);
    // const todo=contextObj.items;

    const {items}=useContext(todoItemsContext);

return (
    <div className="container">
        {items.map(item=>
        <ToDoItem 
        key={item.itemName}
        todoName={item.itemName} 
        todoDate={item.dueDate} 
        ></ToDoItem>
        )}
    </div>
)};
export default ToDoItems;