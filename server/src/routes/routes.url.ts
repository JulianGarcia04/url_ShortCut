import {Router} from "express";
import ServicesUrl from "../services/services.url";

class RoutesUrl extends ServicesUrl {
  private _router:Router = Router();

  constructor() {
    super();
    this._router.get('/url', this.getUrls);

    this._router.get('/url/:id', this.getUrl);

    this._router.post('/url', this.createUrl);

    this._router.put('/url/:id', this.updateUrl);

    this._router.delete('/url/:id', this.deleteUrl);
  }

  get router(){
    return this._router;
  }
}

export default RoutesUrl;
