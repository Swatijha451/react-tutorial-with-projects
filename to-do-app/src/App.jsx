import "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import styles from './App.module.css';
import Welcome from "./components/Welcome";
//import { useState } from "react";
import todoItemsContextProvider from "./store/todoItemsContext";
//import { useReducer } from "react";

// const todoItemReducer=(currTodoItems,action)=>{
//   let newTodoItems=currTodoItems;
//   if(action.type==="NEW_ITEM"){
//     newTodoItems=[...currTodoItems,
//     {
//     itemName:action.payload.itemName,
//     dueDate:action.payload.dueDate
//     }
//     ];

//   }
//   else if(action.type==="DELETE_ITEM"){
//     newTodoItems=currTodoItems.filter((item)=>item.itemName!==action.payload.todoItemName);
//   }
//   return newTodoItems;
// }

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

  //const [items,setItem]=useState([]);

  //replacing useState with useReducer
 // const[items,dispatchTodoItems]=useReducer(todoItemReducer,[]);//redcer function, initial state

  //const addNewItem=(itemName,dueDate)=>{
    // console.log(`new item ${itemName} Date:${dueDate}`)
    // const newtodoItem=[...items,{itemName:itemName,dueDate:dueDate}];
    // setItem(newtodoItem);
    // setItem((currValue)=>[//functional update
    //   ...currValue,{itemName:itemName,dueDate:dueDate}
    // ])

    //another code using usereducer
  //   const newItemAction={
  //     type:"NEW_ITEM",
  //     payload:{
  //       itemName:itemName,
  //       dueDate:dueDate,
  //     },
  //   };
  //   dispatchTodoItems(newItemAction);
  // }

  //const deleteItem=(todoItemName)=>{//believing the name to be unique
    // console.log(`itemName ${itemName}`);
    // const newtodoItems=items.filter((item)=>item.itemName!==todoItemName)
    // setItem(newtodoItems);

    //another code using uusereducer
  //   const deleteItemAction={
  //     type:"DELETE_ITEM",
  //     payload:{
  //       todoItemName:todoItemName
  //     },
  //   };
  //   dispatchTodoItems(deleteItemAction);

  // }

  // <todoItemsContext.Provider 
    //   value={
    //     {
    //     items:items,
    //     addNewItem:addNewItem,
    //     deleteItem:deleteItem,
    //     }
    //   } 
    //  >

  return ( 
    <todoItemsContextProvider>
      <center className={styles.container}>
        <AppName/>
        <AddToDo/>
        <ToDoItems></ToDoItems> 
        <Welcome></Welcome>
      </center>
    </todoItemsContextProvider>
  );
}

export default App;
