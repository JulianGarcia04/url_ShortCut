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

  protected async getOne(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await userUrl.findById(id);
      if (!data || res.statusCode >= 400) {
        throw boom.notFound('data not exits');
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async createOne(req:Request, res:Response, next:NextFunction){
    let body = req.body;
    if (!body) {
      throw boom.notAcceptable('empty fields');
    }
    let data = await userUrl.create(body);
    res.json({
      message: "Data created correctly",
      data: data
    });
  }

  protected async updateOne(req:Request, res:Response, next:NextFunction){
    let {id} = req.params;
    let body = req.body;
    let oldData = await userUrl.findById(id);
    if (!oldData || res.statusCode >= 400) {
      throw boom.notFound('Data not exits for it will update');
    }
    let newData = await userUrl.findByIdAndUpdate(id, body);
    res.json({
      message: "Data were updated correctly",
      oldData: oldData,
      newData: newData
    })
  }

  protected async deleteOne(req:Request, res:Response, next:NextFunction){
    let {id} = req.params;
    let data = await userUrl.findByIdAndDelete(id);
    if (!data || res.statusCode >= 400) {
      throw boom.notFound('data not exits');
    }
    res.json({
      message: "Data deleted correctly",
      data: data
    })
  }
}

export default ServicesUserUrl;
