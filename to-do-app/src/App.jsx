import "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import styles from './App.module.css';
function App() {
  const items=[
    {
      itemName:"go to college",
      dueDate:"14/2/24"
  
    },
    {
      itemName:"do your leetcode question",
      dueDate:"14/2/24"
    },
    {
      itemName:"update your github",
      dueDate:"14/2/24"
    },
  ] ;

  return (
    <center className={styles.container}>
      <AppName/>
      <AddToDo/>
       <ToDoItems items={items}></ToDoItems> 
    </center>
  );
}

export default App;
