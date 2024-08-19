import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';
import nextCookies from 'next-cookies';

export function middlewareAuth(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = nextCookies({ req });
    const token = cookies.loginToken;

    if (!token) {
      return res
        .status(401)
        .json({ message: '인증 토큰을 확인할 수 없습니다.' });
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!,
      ) as jwt.JwtPayload;
      (req as any).user = decoded;
      return handler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({ message: '정당한 토큰이 아니거나 만료 되었습니다.' });
    }
  };
}
