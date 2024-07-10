"use client";

import React, { useEffect, useState } from "react";
import Layout from "./layout";
import axios from "axios";

interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
  createdAt: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the existing todos from the API
    const fetchTodos = async () => {
      try {
        const response = await axios.get("/api/todo");
        setTodos(response.data.todos); // Assuming the API returns an array of todos
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      if (editId) {
        setTodos(
          todos.map((todo) =>
            todo.id === editId ? { ...todo, todo: inputValue } : todo
          )
        );
        setEditId(null);
      } else if (!todos.some((todo) => todo.todo === inputValue)) {
        const newTodo: Todo = {
          id: Date.now().toString(),
          todo: inputValue,
          isCompleted: false,
          createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTodo]);
      } else {
        alert("Todo already exists");
      }
      setInputValue("");
    }
  };

  const handleRemove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string, value: string) => {
    setEditId(id);
    setInputValue(value);
  };

  const handleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h3>made by EK MONIROTH</h3>
      <input
        placeholder="Enter your todolist"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.todo}
            <button onClick={() => handleComplete(todo.id)}>
              {todo.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button onClick={() => handleEdit(todo.id, todo.todo)}>Edit</button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
