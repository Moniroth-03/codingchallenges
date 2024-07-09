"use client";
"use client";import React, { useState } from "react";
import Layout from "./layout";

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
    <Layout>
      <input
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
    </Layout>
  );
};

export default Home;
