import jwt from 'jsonwebtoken';
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
        return res.status(404).send('해당 유저가 없습니다.');
      }
      const token = jwt.sign(
        { userId: loginUser._id, email: loginUser.email },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' },
      );
      res.setHeader(
        'Set-Cookie',
        `loginToken=${token}; Path=/; Max-Age=3600 SameSite=Strict`,
      );
      res.send(loginUser);
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
