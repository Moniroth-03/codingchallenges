

import { NextApiRequest, NextApiResponse } from 'next';

let todos = [
  { id: '1', todo: 'Learn Next.js', isCompleted: false, createdAt: '2023-01-01T00:00:00Z' },
  { id: '2', todo: 'Build a Todo App', isCompleted: false, createdAt: '2023-01-02T00:00:00Z' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(todos);
      break;
    case 'POST':
      const newTodo = req.body;
      todos.push(newTodo);
      res.status(201).json({ success: true });
      break;
    case 'PUT':
      const updatedTodo = req.body;
      todos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
      res.status(200).json({ success: true });
      break;
    case 'DELETE':
      const { id } = req.query;
      todos = todos.filter(todo => todo.id !== id);
      res.status(200).json({ success: true });
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
