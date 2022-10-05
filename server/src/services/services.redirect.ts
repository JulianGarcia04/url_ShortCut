import { Request, Response, NextFunction } from "express";
import boom from '@hapi/boom';
import Url from "../models/url";
import userUrl from "../models/user.url";

abstract class ServicesRedirect {
  protected async redirectUrl(req:Request, res:Response, next:NextFunction){
    try {
      const {id} = req.params;

      let getId = await userUrl.find({id_url: {$regex: `${id}$`}})

      if(!getId || getId.length === 0){
        throw boom.notFound("Data doesn't exists");
      }

      let data = await Url.findById(getId[0].id_url);

      if(!data){
        throw boom.notFound("Data doesn't exists");
      }

      // await (await Url.find()).forEach((e)=>{
      //   const idDocument = (e._id as string).toString();
      //   if(idDocument.endsWith(id)){
      //     data = e;
      //   }
      // })

      // if(!data){
      //   throw boom.notFound("Data doesn't exists");
      // }

      res.json({
        message: 'data is found',
        data: data.originalUrl
      })

    } catch (error) {
      next(error);
    }
  }
}

export default ServicesRedirect;
