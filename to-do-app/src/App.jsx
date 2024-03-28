import "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import styles from './App.module.css';
function App() {
  return (
    <center className="container">
      <AppName/>
      <AddToDo/>
      <ToDoItem></ToDoItem> 
    </center>
  );
}

export default App;
