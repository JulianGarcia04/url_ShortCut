import Url from '../models/url';
import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import dotenv from 'dotenv';

dotenv.config();

abstract class ServicesUrl {
  protected async getUrls(req:Request, res:Response, next:NextFunction){
    try {
      let userId = req.userId;
      let data = await Url.find({userId});
      if(data.length == 0){
        throw boom.notFound("It have data in the database");
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  // protected async getUrl(req:Request, res:Response, next:NextFunction){ // In this function I will get a url which it has the id specificed
  //   try {
  //     let {id} = req.params;
  //     let data = await Url.findById(id);
  //     if (res.statusCode >= 400 || !data) {
  //       throw boom.notFound('data not exits');
  //     }
  //     res.json(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  protected async createUrl(req:Request, res:Response, next:NextFunction){ //I will created to url with url shutcut
    try {

      const { originalUrl } = req.body; //get to original url from body request

      if (!originalUrl) {
        //Validate the existents of original url
        throw boom.badData("The field is empty");
      }
      const userId = req.userId; //get to user id from middleware authentication
      const url = new Url({ userId, originalUrl }); //I had created a new url instans it going save to databases
      const urlId: string = (url._id as string).toString();
      const urlShort = new URL(
        `${req.protocol}://${req.hostname}${
          process.env.PORT ? ":" + process.env.PORT : ""
        }/${urlId.substring(urlId.length - 7, urlId.length)}`
      ); //I had created the new url, which it's now shutcut
      url.urlShort = urlShort;
      url.save();
      res.json({    //Response of server
        message: "data created correctly"
      })
    } catch (error) {
      next(error);
    }
  }

  // protected async updateUrl(req:Request, res:Response, next:NextFunction){
  //   try {
  //     let {id} = req.params;
  //     let body = req.body;
  //     let oldData = await Url.findById(id);
  //     if (res.statusCode >= 400 || !oldData) {
  //       throw boom.notFound('data not exits');
  //     }
  //     let newData = await Url.findByIdAndUpdate(id, body, {new: true});
  //     res.json({
  //       message: "data updated correctly",
  //       oldData: oldData,
  //       newData: newData
  //     })
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // protected async deleteUrl(req:Request, res:Response, next:NextFunction){
  //   try {
  //     let {id} = req.params;
  //     let data = await Url.findByIdAndDelete(id);
  //     if (res.statusCode >= 400 || !data) {
  //       throw boom.notFound('data not exits');
  //     }
  //     res.json({
  //       message: "data deleted correctly",
  //       data: data
  //     })
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default ServicesUrl;
