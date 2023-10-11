import { JwtPayload, Secret, SignOptions, verify, sign } from 'jsonwebtoken';

export default class JWT {
  private static secret: Secret = process.env.JWT_SECRET || 'secret';

  private static jwtConfig: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '10d',
  };

  static sign(payload: JwtPayload): string {
    return sign(payload, JWT.secret, JWT.jwtConfig);
  }

  static verify(token: string): JwtPayload | string {
    try {
      return verify(token, JWT.secret) as JwtPayload;
    } catch (e) {
      return 'Token must be a valid token';
    }
  }
}