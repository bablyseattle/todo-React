import React from 'react'

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  }
  const handleButtonClick = () => {
    removeTodo(todo.id)
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick}
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}

      />
      <li>{todo.task}</li>
      <button onClick={handleButtonClick}>X</button>

    </div>
  )
}

export default Todo
