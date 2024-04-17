import { createContext } from "react";
import { useReducer } from "react";

export const todoItemsContext=createContext(
    {
    items:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
    }
);
const[items,dispatchTodoItems]=useReducer(todoItemReducer,[]);//redcer function, initial state   

const todoItemReducer=(currTodoItems,action)=>{
    let newTodoItems=currTodoItems;
    if(action.type==="NEW_ITEM"){
      newTodoItems=[...currTodoItems,
      {
      itemName:action.payload.itemName,
      dueDate:action.payload.dueDate
      }
      ];
  
    }
    else if(action.type==="DELETE_ITEM"){
      newTodoItems=currTodoItems.filter((item)=>item.itemName!==action.payload.todoItemName);
    }
    return newTodoItems;
  }

//react component to have all the logic
const todoItemsContextProvider =({children})=>{
    const addNewItem=(itemName,dueDate)=>{
        const newItemAction={
          type:"NEW_ITEM",
          payload:{
            itemName:itemName,
            dueDate:dueDate,
          },
        };
        dispatchTodoItems(newItemAction);
    }
    
    const deleteItem=(todoItemName)=>{//believing the name to be unique
    
        //another code using uusereducer
        const deleteItemAction={
          type:"DELETE_ITEM",
          payload:{
            todoItemName:todoItemName
          },
        };
        dispatchTodoItems(deleteItemAction);
    };

    return ( 
    <todoItemsContext.Provider 
        value={
        {
        items:items,
        addNewItem:addNewItem,
        deleteItem:deleteItem,
        }
        } 
     >
    {children}
    </todoItemsContext.Provider>
    );
}

export default todoItemsContextProvider;