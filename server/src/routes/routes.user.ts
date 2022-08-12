import {Router, Request, Response} from 'express';

class RoutesUser {
  private router:Router = Router();

  constructor() {
    this.router.get('/user', (req:Request, res:Response)=>{
      res.send('Estoy en usuarios')
    })
    this.router.get('/user/:id', (req:Request, res:Response)=>{
      res.send('Estoy en usuarios')
    })
    this.router.post('/user', (req:Request, res:Response)=>{
      res.send('Estoy en usuarios')
    })
    this.router.put('/user/:id', (req:Request, res:Response)=>{
      res.send('Estoy en usuarios')
    })
    this.router.delete('/user/:id', (req:Request, res:Response)=>{
      res.send('Estoy en usuarios')
    })
  }

  public getRouter(){
    return this.router;
  }
}

export default RoutesUser;
