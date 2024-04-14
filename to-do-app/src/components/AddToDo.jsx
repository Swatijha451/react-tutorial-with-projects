//import { useState } from "react";
import styles from "./AddToDo.module.css"
import { IoMdAdd } from "react-icons/io";
import { useRef } from "react";
import { useContext } from "react";
import { todoItemsContext } from "../store/todoItemsContext";
import { useState } from "react";


function AddToDo() {
//4th code using context api
const {addNewItem}=useContext(todoItemsContext);




  // const [todoName,settodoName]=useState("");
  // const [dueDate,setdueDate]=useState("");

  const todoNameElement=useRef();
  const dueDateElement=useRef();
 //1st code
  // const handleNameChange=(event)=>{
  //   settodoName(event.target.value);
  // }

  // const handleDateChange=(event)=>{
  //   setdueDate(event.target.value);
  // }


  //3rd code
  const handleAddButtonClicked=(event)=>{
    event.preventDefault();

    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName,dueDate);

//2ndcode
    // onNewItem(todoName,dueDate);
    // console.log(event);
    //setting it empty after setting value
    //  setdueDate("");
    //  settodoName("");
  }


  return (
    <div className="container ">
      <form className={`${styles.myrow} row`} onSubmit={handleAddButtonClicked}>
            <div className="col-6">
                <input type="text" 
                ref={todoNameElement}
                placeholder="Enter your task to-do here" 

                // value={todoName} 
                // onChange={handleNameChange}

                />
            </div>
            <div className="col-4">
                <input type="date" 
                ref={dueDateElement}

                // value={dueDate} 
                // onChange={handleDateChange}
                />       
            </div>
            <div className="col-2">
                <button className="btn btn-success"  
                ><IoMdAdd />
                </button>
            </div>
      </form>
    </div>
  );
}
export default AddToDo;
