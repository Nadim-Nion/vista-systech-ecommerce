import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

interface JWTPayload {
  id: Types.ObjectId;
  email: string;
  role?: string;
}

export const generateJWTToken = (jwtPayload: JWTPayload, secretKey: string, expiresIn: string): string => {
  return jwt.sign(jwtPayload, secretKey, {
    expiresIn,
  } as jwt.SignOptions);
};
