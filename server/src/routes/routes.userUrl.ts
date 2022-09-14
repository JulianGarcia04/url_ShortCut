import { Router } from "express";
import ServicesUserUrl from "../services/services.userUrl";
import { validationSession } from "../middlewares/validation.session";

class routesUserUrl extends ServicesUserUrl{
  private _router:Router = Router();

  constructor() {

    super();

    this._router.get('/user/url', validationSession, this.getAll);

    this._router.get('/user/url/:id', validationSession, this.getOne);

    this._router.post('/user/url', validationSession, this.createOne);

    this._router.put('/user/url/:id', validationSession, this.updateOne);

    this._router.delete('/user/url/:id', validationSession, this.deleteOne);
  }

  get router(){
    return this._router;
  }
}

export default routesUserUrl;
