import { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv';

config()
class ServicesUploadImages {

  protected uploadImageRequest(req:Request, res:Response, next:NextFunction){
    try {
      let image = req.file;
      console.log(image);
      res.json({"message":"Image uploaded correctly", "url":`${req.protocol}://${req.hostname}${process.env.PORT?":"+process.env.PORT:''}/api/v2/user/images/${image?.filename}`});
    } catch (error) {
      next(error);
    }
  }
}

export default ServicesUploadImages;
