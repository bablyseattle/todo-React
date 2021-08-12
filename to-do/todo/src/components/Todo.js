import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      />
      <li>{todo.task}</li>
      <button>X</button>

    </div>
  )
}

export default Todo
