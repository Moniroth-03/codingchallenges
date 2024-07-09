import React, { useState } from 'react';
import Layout from './layout';

interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
  createdAt: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        todo: inputValue,
        isCompleted: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
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
          <li key={todo.id}>
            {todo.todo}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
