import { Request, Response, NextFunction } from 'express';
import JWT from '../auth/JWT';

export default class LoginValidate {
  static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password, username } = req.body;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !password || !username) return res.status(400).json({ message: 'All fields must be filled' });
    if (!regex.test(email) || password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }

  static extractToken = (bearerToken: string): string => (
    bearerToken.includes(' ') ? bearerToken.split(' ')[1] : bearerToken
  );

  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const tokne = LoginValidate.extractToken(authorization);

    const tokenValidate = JWT.verify(tokne);
    req.body.token = tokenValidate;
    if (tokenValidate === 'Token must be a valid token') {
      return res.status(401).json({ message: tokenValidate });
    }

    next();
  }
}