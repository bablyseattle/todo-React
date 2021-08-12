import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {

  const todoList = todos.map((todo) =>
    <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
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
