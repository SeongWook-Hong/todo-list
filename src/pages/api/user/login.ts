import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/db/dbConnect';
import User from '@/db/models/User';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      const loginUser = await User.findOne(req.body);
      if (!loginUser) {
        return res.status(404).send('해당 유저 없음');
      }
      const token = jwt.sign(
        { userId: loginUser._id, email: loginUser.email },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' },
      );
      res.setHeader(
        'Set-Cookie',
        `loginToken=${token}; HttpOnly; Path=/; Max-Age=3600`,
      );
      res.send(token);
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
