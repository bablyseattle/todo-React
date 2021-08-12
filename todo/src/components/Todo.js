import React, { useState } from 'react'

const Todo = ({ todo, toggleComplete, removeTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);


  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  }
  const handleButtonClick = () => {
    removeTodo(todo.id)
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...todo, task: e.target.value });
  }


  function handleEditClick() {
    setIsEditing(true);
  }

  function handleUpdateClick() {
    setIsEditing(false);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" defaultChecked={todo.completed} onClick={handleCheckboxClick}
      />
      {
        isEditing ? (
          <div>
            <input
              type="text" onChange={handleEditInputChange} />
            <button className="button" type="submit" onClick={handleUpdateClick}>Update</button>
          </div>

        )

          :
          <li className="checkboxtext"
            style={{
              textDecoration: todo.completed ? "line-through" : null
            }}
          >{currentTodo.task}</li>

      }

      <button className="button" onClick={handleButtonClick}>X</button>

      <button className="button" disabled={todo.completed} onClick={() => handleEditClick()}>
        Edit
      </button>

    </div>
  )
}

export default Todo
