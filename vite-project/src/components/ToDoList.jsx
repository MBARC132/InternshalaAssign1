import ToDoItem from "./ToDoItem";
import './App.css';

function ToDoList ({todos, deletetodo, togglecomplete, editTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <ToDoItem 
                key={todo.id}
                todo={todo}
                deletetodo={deletetodo}
                editTodo={editTodo}
                togglecomplete={togglecomplete}
                />
            ))}
        </ul>
    )
}

export default ToDoList;