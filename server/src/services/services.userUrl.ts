import userUrl from '../models/user.url';
import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';

abstract class ServicesUserUrl {
  protected async getAll(req:Request, res:Response, next:NextFunction){
    try {
      let data = await userUrl.find();
      if(data.length === 0){
        throw boom.notFound("Data bases is empty");
      };
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default ServicesUserUrl;
