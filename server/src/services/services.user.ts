import user from '../models/user';
import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';

abstract class servicesUser {

  protected async getUsers(req:Request, res:Response, next:NextFunction){
    try {
      let datas = await user.find();
      if (datas.length == 0) {
        throw boom.notFound('Not data in databases');
      }
      res.json(datas);
    } catch (error) {
      next(error);
    }
  }

  protected async getUser(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await user.findById(id);
      if(!data){
        throw boom.notFound('Data not exists')
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async createData(req:Request, res:Response, next:NextFunction){
    try {
      let dataFound = await user.findOne({email:req.body.email});
      let body = req.body;
      if (dataFound) {
        throw boom.badData("data now is created");
      }
      let data = await user.create(body);
      res.json({
        message:"Data created",
        data: data
      })
    } catch (error) {
      next(error);
    }
  }

  protected async updateData(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let {id} = req.params;
      let oldData = await user.findById(id);
      if (!oldData) {
        throw boom.notFound('data not exists');
      }
      let newData = await user.findByIdAndUpdate(id, body, {new:true});
      res.json({
        message: "data updated",
        oldData:oldData,
        newData:newData
      })
    } catch (error) {
      next(error);
    }
  }

  protected async deleteData(req:Request, res:Response, next:NextFunction){
    try {
      let {id} = req.params;
      let data = await user.findByIdAndDelete(id);
      if (!data) {
        throw boom.conflict('data not exists');
      }
      res.json({
        message: "data deleted",
        dataDeleted: data
      })
    } catch (error) {
      next(error);
    }
  }
}

export default servicesUser;
