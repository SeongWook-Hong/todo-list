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
      const loginUser = await User.findOne(req.body);
      if (!loginUser) {
        return res.status(404).send('User not found');
      }
      res.send(loginUser);
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
