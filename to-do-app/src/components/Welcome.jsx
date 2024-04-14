import styles from "./Welcome.module.css"
import { useContext } from "react";
import { todoItemsContext } from "../store/todoItemsContext";


const Welcome=()=>{

    // const contextObj=useContext(todoItemsContext);
    // const todo=contextObj.items;

    const {items}=useContext(todoItemsContext);

return (
    items.length===0 && <p className={styles.para}>Enjoy your day!</p>
);
}
export default Welcome;