import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/db/dbConnect';
import Todo from '@/db/models/Todo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  const token = req.cookies.loginToken;
  if (!token) {
    return res.status(401).send('Authentication required');
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = (decoded as { userId: string }).userId;

  switch (req.method) {
    case 'POST':
      const newTodo = await Todo.create({ userId, ...req.body });
      res.send(newTodo);
      break;

    case 'GET':
      const todos = await Todo.find({ userId });
      res.send(todos);
      break;

    default:
      res.send('');
      break;
  }
}
