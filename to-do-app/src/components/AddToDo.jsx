import { useState } from "react";
import styles from "./AddToDo.module.css"
import { IoMdAdd } from "react-icons/io";


function AddToDo({onNewItem}) {

  const [todoName,settodoName]=useState("");
  const [dueDate,setdueDate]=useState("");
 
  const handleNameChange=(event)=>{
    settodoName(event.target.value);

  }

  const handleDateChange=(event)=>{

    setdueDate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
    onNewItem(todoName,dueDate);
    //setting it empty after setting value
    setdueDate("");
    settodoName("");
  }


  return (
    <div className="container ">
      <div className={`${styles.myrow} row`}>
            <div className="col-6">
                <input type="text" placeholder="Enter your task to-do here" value={todoName} onChange={handleNameChange}/>
            </div>
            <div className="col-4">
                <input type="date" value={dueDate} onChange={handleDateChange}></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success"
                onClick={handleAddButtonClicked}
                ><IoMdAdd />
                </button>
            </div>
      </div>
    </div>
  );
}
export default AddToDo;
