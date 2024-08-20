import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/db/dbConnect';
import Todo from '@/db/models/Todo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();
  const { todoId } = req.query;
  const token = req.cookies.loginToken;
  if (!token) {
    return res.status(401).send('Authentication required');
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = (decoded as { userId: string }).userId;

  switch (req.method) {
    case 'PATCH':
      const updateTodo = await Todo.findByIdAndUpdate(
        { userId: userId, _id: todoId },
        req.body,
        {
          new: true,
        },
      );
      res.send(updateTodo);
      break;

    case 'DELETE':
      const deleteTodo = await Todo.findByIdAndDelete({
        userId: userId,
        _id: todoId,
      });
      res.status(204).send(deleteTodo);
      break;

    default:
      res.send('');
      break;
  }
}
