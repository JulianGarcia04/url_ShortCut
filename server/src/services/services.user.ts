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
        throw boom.notFound("The database doesn't has data");
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
        throw boom.notFound("Data does't exists, because the email is registed")
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  protected async loginUser(req:Request, res:Response, next:NextFunction){
    try {
      const {email, username, password} = req.body;
      const user = email
                 ? await User.findOne({email})
                 : await User.findOne({username})
      if(!user){
        throw boom.unauthorized("The email isn't correct");
      }
      const validatePassword:boolean = await user.validatePassword(password);
      if (!validatePassword) {
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
      let {urlImage, username, name, lastname, email, password} = req.body;
      let dataFound = await User.findOne({email});
      if (dataFound) {
        throw boom.badData("Data wasn't created");
      }
      let user = new User({urlImage, username, name, lastname, email, password});
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
        throw boom.notFound("data doesn't exists");
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
        throw boom.conflict("data doesn't exists");
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
