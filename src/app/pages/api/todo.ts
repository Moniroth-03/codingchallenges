// src/pages/api/todo.ts

import { NextApiRequest, NextApiResponse } from 'next';

const todos = [
  { id: '1', todo: 'Learn Next.js', isCompleted: false, createdAt: '2023-01-01T00:00:00Z' },
  { id: '2', todo: 'Build a Todo App', isCompleted: false, createdAt: '2023-01-02T00:00:00Z' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
