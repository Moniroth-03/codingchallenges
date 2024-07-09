"use client";

import React, { useState, useEffect } from "react";
import Layout from "./layout";

interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
  createdAt: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Fetch initial todos from the API
    fetch("/api/todo")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        todo: inputValue,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  return (
    <Layout>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default TodoList;
