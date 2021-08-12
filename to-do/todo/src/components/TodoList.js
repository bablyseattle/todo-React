import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos }) => {

  const todoList = todos.map((todo) =>
    <Todo key={todo.id} todo={todo} />
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
