import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/db/dbConnect';
import Todo from '@/db/models/Todo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case 'PATCH':
      const updateTodo = await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updateTodo);
      break;

    case 'DELETE':
      const deleteTodo = await Todo.findByIdAndDelete(id);
      res.status(204).send(deleteTodo);
      break;

    default:
      res.send('');
      break;
  }
}
