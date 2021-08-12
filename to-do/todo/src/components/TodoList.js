import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos, toggleComplete }) => {

  const todoList = todos.map((todo) =>
    <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
  );
  return (
    < div >
      <ul>
        {todoList}
      </ul>

    </div >
  )
}



export default TodoList
