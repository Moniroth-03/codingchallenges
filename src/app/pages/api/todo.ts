import { NextApiRequest, NextApiResponse } from 'next';

let todos = [
  { id: '1', todo: 'Sample Todo 1', isCompleted: false, createdAt: new Date().toISOString() },
  { id: '2', todo: 'Sample Todo 2', isCompleted: true, createdAt: new Date().toISOString() },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(todos);
      break;
    case 'POST':
      const newTodo = req.body;
      todos.push(newTodo);
      res.status(200).json({ success: true });
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
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
