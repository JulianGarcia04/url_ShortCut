import url from '../models/url';
import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';

abstract class ServicesUrl {
  protected async getUrls(req:Request, res:Response, next:NextFunction){
    try {
      let data = await url.find();
      if(data.length == 0){
        throw boom.notFound("It have data in the database");
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async getUrl(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await url.findById(id);
      if (res.statusCode >= 400 || !data) {
        throw boom.notFound('data not exits');
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async createUrl(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let data = await url.create(body);
      res.json({
        message: "data created correctly",
        data: data
      })
    } catch (error) {
      next(error);
    }
  }

  protected async updateUrl(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let body = req.body;
      let oldData = await url.findById(id);
      if (res.statusCode >= 400 || !oldData) {
        throw boom.notFound('data not exits');
      }
      let newData = await url.findByIdAndUpdate(id, body, {new: true});
      res.json({
        message: "data updated correctly",
        oldData: oldData,
        newData: newData
      })
    } catch (error) {
      next(error);
    }
  }

  protected async deleteUrl(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await url.findByIdAndDelete(id);
      if (res.statusCode >= 400 || !data) {
        throw boom.notFound('data not exits');
      }
      res.json({
        message: "data deleted correctly",
        data: data
      })
    } catch (error) {
      next(error);
    }
  }
}

export default ServicesUrl;
