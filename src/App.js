import React , {useState} from 'react'; //Tells the file use React, useState is hook
import './App.css';
import Todo from './Todo';
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => { 
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todos,input]);
    setInput("");
  }
  const delTodo = (value) => {
    //If needed to confirm before deletion (can do it using react-popup too)
    // if(window.confirm("Are you sure you want to delete this To-do?")){}
      todos.splice(value,1); //Delete the todoitem related to the index
      setTodo([...todos]);
      
}
  return (
    <div className="app">
      <h1 className="appTitle">To-do App</h1>
      <form>
       <div className="inputContainer">
       <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter To-do"/>
        <button className="btnAdd" type="submit" onClick={handleSubmit} disabled={!input} ><FontAwesomeIcon icon={faPlusCircle} /></button>
       </div>
      </form>
     { todos.map((todo, index) =>(
        <Todo key={index} value={index} title={todo} onDelete={delTodo} />
     ))}
    </div>
  );
}

export default App;
