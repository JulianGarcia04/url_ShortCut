import { Express, Router, Request, Response } from "express";

class routesUserUrl{
  private _router:Router = Router();

  constructor() {
    this._router.get('/user-url', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this._router.get('/user-url/:id', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this._router.post('/user-url', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this._router.put('/user-url/:id', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this._router.delete('/user-url/:id', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })
  }

  get router(){
    return this._router;
  }
}

export default routesUserUrl;
