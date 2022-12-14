import { Request, Response, NextFunction } from "express";
import boom from '@hapi/boom';
import Url from "../models/url";

abstract class ServicesRedirect {
  protected async redirectUrl(req:Request, res:Response, next:NextFunction){
    try {
      const {id} = req.params;

      let data:any = {};
      await (await Url.find()).forEach((e)=>{
        const idDocument = (e._id as string).toString();
        if(idDocument.endsWith(id)){
          data = e;
        }
      })

      if(!data){
        throw boom.notFound("Data doesn't exists");
      }

      res.redirect(data.originalUrl)

    } catch (error) {
      next(error);
    }
  }
}

export default ServicesRedirect;
