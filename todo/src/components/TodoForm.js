import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });
  const handleTaskInput = (e) => {
    setTodo({ ...todo, task: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {

      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
    console.log(addTodo);
  }


  return (
    <div>
      <form>
        <input name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInput} />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>

    </div>
  )
}
export default TodoForm
