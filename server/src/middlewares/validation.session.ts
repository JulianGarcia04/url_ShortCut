import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import boom from '@hapi/boom';
import env from 'dotenv';
import { Request, Response, NextFunction } from 'express';

env.config();

declare global {
  namespace Express {
    interface Request {
      userId:string|JwtPayload
    }
  }
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
      id: string;
  }
}

export const validationSession = (req:Request, res:Response, next:NextFunction)=>{
  const session = req.headers['x-access-token'];
  if (!session) {
    throw boom.unauthorized("Access restrinfy");
  }
  const verifyToken = jwt.verify(session.toString(), process.env.SECURE as Secret) as JwtPayload;
  req.userId = verifyToken.id;
  next();
}
