import type { NextApiRequest, NextApiResponse } from 'next';
import { middlewareAuth } from '@/lib/middlewareAuth';

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (!(req as any).user) {
        return res.status(401).json({ message: '허가되지 않음' });
      }
      res.status(200).json({
        message: '인증 성공',
        user: (req as any).user,
      });
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
}
export default middlewareAuth(Handler);
