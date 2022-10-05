import { Router } from "express";
import ServicesRedirect from "../services/services.redirect";

class RoutesRedirect extends ServicesRedirect {
  private _router:Router = Router();

  constructor() {
    super()

    this._router.get('/:id', this.redirectUrl);
  }

  get routes():Router{
    return this._router;
  }
}

export default new RoutesRedirect().routes;
