import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/db/dbConnect';
import User from '@/db/models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const findUser = await User.findById(id);
      res.status(200).send(findUser);
      break;

    case 'DELETE':
      const deleteUser = await User.findByIdAndDelete(id);
      res.status(204).send(deleteUser);
      break;

    default:
      res.send('');
      break;
  }
}
