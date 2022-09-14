import {Router} from "express";
import ServicesUrl from "../services/services.url";
import { validationSession } from "../middlewares/validation.session";

class RoutesUrl extends ServicesUrl {
  private _router:Router = Router();

  constructor() {
    super();
    this._router.get('/url', validationSession, this.getUrls);

    this._router.get('/url/:id', validationSession, this.getUrl);

    this._router.post('/url', validationSession, this.createUrl);

    this._router.put('/url/:id', validationSession, this.updateUrl);

    this._router.delete('/url/:id', validationSession, this.deleteUrl);
  }

  get router(){
    return this._router;
  }
}

export default RoutesUrl;
