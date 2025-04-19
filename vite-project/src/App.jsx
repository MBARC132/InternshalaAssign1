import { useState } from "react";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import './components/App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (text) => {
    if(newTodo.trim() === "") return;
    const newTodoObj = {
      id:Date.now(),
      text:text,
      completed:false,
    }
    setTodos([...todos, newTodoObj]);
    setNewTodo("");
  }

  const deletetodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, text: newText } : todo
      )
    )
  }

  const togglecomplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  return (
    <>
    <Header />
    <div className="Container">
    <input type="text" 
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)} 
    placeholder="Add a New Task"/>
    <button onClick = {() => addTodo(newTodo)}>Add To-Do</button>
    </div>
    <ToDoList 
    todos={todos}
    deletetodo={deletetodo}
    editTodo={editTodo}
    togglecomplete={togglecomplete}
    />
    </>
  )
}

export default App;