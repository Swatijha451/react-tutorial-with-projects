import { createContext } from "react";

export const todoItemsContext=createContext(
    {
    items:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
    }
);