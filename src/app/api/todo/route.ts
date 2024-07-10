
import { NextResponse } from 'next/server'
 
export const GET = async (request: Request) => {
  let todos = [
        { id: '1', todo: 'Learn Next.js', isCompleted: false, createdAt: '2023-01-01T00:00:00Z' },
        { id: '2', todo: 'Build a Todo App', isCompleted: false, createdAt: '2023-01-02T00:00:00Z' },
      ];
  return NextResponse.json({ todos })
}