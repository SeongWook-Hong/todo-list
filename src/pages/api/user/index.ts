import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/db/dbConnect';
import User from '@/db/models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      const newUser = await User.create(req.body);
      res.send(newUser);
      break;

    case 'GET':
      const user = await User.findOne(req.query);
      if (!user) return res.status(404).send('User Not Found');
      res.send(user);
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
