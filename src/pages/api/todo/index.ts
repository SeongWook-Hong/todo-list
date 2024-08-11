import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@db/dbConnect';
import Todo from '@db/models/Todo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      const newTodo = await Todo.create(req.body);
      res.send(newTodo);
      break;

    case 'GET':
      const todos = await Todo.find();
      res.send(todos);
      break;

    default:
      res.send('');
      break;
  }
}
