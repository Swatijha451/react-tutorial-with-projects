import "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import styles from './App.module.css';
import Welcome from "./components/Welcome";
import { useState } from "react";
function App() {
  // const items=[
  //   {
  //     itemName:"go to college",
  //     dueDate:"14/2/24"
  
  //   },
  //   {
  //     itemName:"do your leetcode question",
  //     dueDate:"14/2/24"
  //   },
  //   {
  //     itemName:"update your github",
  //     dueDate:"14/2/24"
  //   },
  // ] ;

  const [items,setItem]=useState([]);

  const handleNewItem=(itemName,dueDate)=>{
    // console.log(`new item ${itemName} Date:${dueDate}`)
    const newtodoItem=[...items,{itemName:itemName,dueDate:dueDate}];
    setItem(newtodoItem);
  }

  const handleDeleteButton=(todoItemName)=>{//believing the name to be unique
    // console.log(`itemName ${itemName}`);
    const newtodoItems=items.filter((item)=>item.itemName!==todoItemName)
    setItem(newtodoItems);

  }



  return (
    <center className={styles.container}>
      <AppName/>
      <AddToDo onNewItem={handleNewItem}/>
       <ToDoItems items={items} onDeleteClick={handleDeleteButton}></ToDoItems> 
       {items.length===0 && <Welcome></Welcome>}
    </center>
  );
}

export default App;
