import { Express, Router, Request, Response } from "express";

class RoutesUrl {
  private _router:Router = Router();

  constructor() {
    this._router.get('/url', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this._router.get('/url/:id', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this._router.post('/url', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this._router.put('/url/:id', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this._router.delete('/url/:id', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })
  }

  get router(){
    return this._router;
  }
}

export default RoutesUrl;
