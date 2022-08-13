import { Express, Router, Request, Response } from "express";

class routesUserUrl{
  private router:Router = Router();

  constructor() {
    this.router.get('/user-url', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this.router.get('/user-url/:id', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this.router.post('/user-url', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this.router.put('/user-url/:id', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })

    this.router.delete('/user-url/:id', (req:Request, res:Response)=>{
      res.send('Aqui voy a ver mi nueva URL');
    })
  }

  getRouter(){
    return this.router;
  }
}

export default routesUserUrl;
