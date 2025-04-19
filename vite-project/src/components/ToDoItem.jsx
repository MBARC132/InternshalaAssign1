import './App.css';

function ToDoItem({ todo, deletetodo, togglecomplete, editTodo }) {

    return (
        <>
        <li>
        <span onClick={() => togglecomplete(todo.id)}>
        {todo.completed ? '✅' : '⬜'} {todo.text}
      </span>
      <button onClick={() => deletetodo(todo.id)}>Delete</button>
      <button
        onClick={() => {
          const newText = prompt("Edit task:", todo.text);
          if (newText) editTodo(todo.id, newText);
        }}
      >
        Edit
      </button>
    </li>
        </>
    )
}

export default ToDoItem;