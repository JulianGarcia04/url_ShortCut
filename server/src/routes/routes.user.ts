import {Router, Request, Response} from 'express';
import servicesUser from '../services/services.user';

class RoutesUser extends servicesUser{
  private router:Router = Router();

  constructor() {
    super();
    this.router.get('/user', this.getUsers);

    this.router.get('/user/:id', this.getUser);

    this.router.post('/user', this.createData);

    this.router.put('/user/:id', this.updateData);

    this.router.delete('/user/:id', this.deleteData);
  }

  public getRouter(){
    return this.router;
  }
}

export default RoutesUser;
