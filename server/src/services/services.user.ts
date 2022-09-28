import User from '../models/user';
import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import jwt, { Secret } from 'jsonwebtoken';
import env from 'dotenv';

env.config();
abstract class servicesUser {
  protected async getUsers(req:Request, res:Response, next:NextFunction){
    try {
      let datas = await User.find();
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
      let id = req.userId
      let data = await User.findById(id);
      if(!data){
        throw boom.notFound('Data not exists')
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async loginUser(req:Request, res:Response, next:NextFunction){
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      if(!user){
        throw boom.unauthorized("The email isn't correct");
      }
      const validatePassword = await user.validatePassword(password);
      if (validatePassword) {
        throw boom.unauthorized("The password isn't correct")
      }
      const token = jwt.sign({id: user._id}, process.env.SECURE as Secret, {
        expiresIn: 60*60*24
      });
      res.setHeader('x-access-token', token);
      res.json("Welcome to the jungle")
    } catch (error) {
      next(error);
    }
  }

  protected async createUser(req:Request, res:Response, next:NextFunction){
    try {
      let {urlImage, username, nombre, apellido, email, password} = req.body;
      let dataFound = await User.findOne({email});
      if (dataFound) {
        throw boom.badData("data now is created");
      }
      let user = new User({urlImage, username, nombre, apellido, email, password});
      user.password = await user.encryptPassword(password);
      await user.save();
      const token = jwt.sign({id: user._id}, process.env.SECURE as Secret, {
        expiresIn: 60*60*24
      });
      res.setHeader('x-access-token', token);
      res.json({
        message:"Data created",
        data: user,
        auth: true
      })
    } catch (error) {
      next(error);
    }
  }

  protected async updateData(req:Request, res:Response, next:NextFunction){
    try {
      let body = req.body;
      let {id} = req.params;
      let oldData = await User.findById(id);
      if (!oldData) {
        throw boom.notFound('data not exists');
      }
      let newData = await User.findByIdAndUpdate(id, body, {new:true});
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
      let data = await User.findByIdAndDelete(id);
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
