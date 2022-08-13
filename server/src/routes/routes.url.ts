import { Express, Router, Request, Response } from "express";

class RoutesUrl {
  private router:Router = Router();

  constructor() {
    this.router.get('/url', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this.router.get('/url/:id', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this.router.post('/url', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this.router.put('/url/:id', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })

    this.router.delete('/url/:id', (req:Request, res:Response)=>{
      res.send('Estoy en URL');
    })
  }

  getRouter(){
    return this.router;
  }
}

export default RoutesUrl;
