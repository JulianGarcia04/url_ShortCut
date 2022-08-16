import { Request, Response, NextFunction } from 'express';

class ServicesUploadImages {

  protected uploadImageRequest(req:Request, res:Response, next:NextFunction){
    try {
      let image = req.file;
      console.log(image);
      res.json({"message":"Image uploaded correctly"});
    } catch (error) {
      next(error);
    }
  }
}

export default ServicesUploadImages;
