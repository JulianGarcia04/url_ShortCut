import { Router, Request, Response } from "express";
import ServicesUserUrl from "../services/services.userUrl";

class routesUserUrl extends ServicesUserUrl{
  private _router:Router = Router();

  constructor() {

    super();

    this._router.get('/user-url', this.getAll);

    this._router.get('/user-url/:id', this.getOne);

    this._router.post('/user-url', this.createOne);

    this._router.put('/user-url/:id', this.updateOne);

    this._router.delete('/user-url/:id', this.deleteOne);
  }

  get router(){
    return this._router;
  }
}

export default routesUserUrl;
