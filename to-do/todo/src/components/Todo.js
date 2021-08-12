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
      />
      <li style={{
        textDecoration: todo.completed ? "line-through" : null
      }} >{todo.task}</li>
      <button onClick={handleButtonClick}>X</button>

    </div>
  )
}

export default Todo
