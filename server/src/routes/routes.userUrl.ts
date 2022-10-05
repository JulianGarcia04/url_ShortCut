import { Router } from "express";
import ServicesUserUrl from "../services/services.userUrl";
import { validationSession } from "../middlewares/validation.session";

class routesUserUrl extends ServicesUserUrl{
  private _router:Router = Router();

  constructor() {

    super();

    this._router.get('/user/url', validationSession, this.getAll);

  }

  get router(){
    return this._router;
  }
}

export default routesUserUrl;
