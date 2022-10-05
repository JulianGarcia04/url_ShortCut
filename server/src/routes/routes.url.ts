import {Router} from "express";
import ServicesUrl from "../services/services.url";
import { validationSession } from "../middlewares/validation.session";

class RoutesUrl extends ServicesUrl {
  private _router:Router = Router();

  constructor() {
    super();
    this._router.get('/url', validationSession, this.getUrls);

    this._router.post('/url', validationSession, this.createUrl);
  }

  get router(){
    return this._router;
  }
}

export default RoutesUrl;
