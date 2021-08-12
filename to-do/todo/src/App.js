import React, { useState, useEffect } from "react";
import Form from "./components/TodoForm";
import TodoList from "./components/TodoList"
import './App.css';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },
    [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>To Do List</p>
        <Form addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
