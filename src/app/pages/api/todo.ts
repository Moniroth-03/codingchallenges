import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dummyData = [
    { id: '1', todo: 'Sample Todo 1', isCompleted: false, createdAt: new Date().toISOString() },
    { id: '2', todo: 'Sample Todo 2', isCompleted: true, createdAt: new Date().toISOString() },
  ];

  res.status(200).json(dummyData);
}
