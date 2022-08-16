import {Router} from 'express';
import servicesUser from '../services/services.user';

class RoutesUser extends servicesUser{
  private _router:Router = Router();

  constructor() {
    super();

    this._router.get('/user', this.getUsers);

    this._router.get('/user/:id', this.getUser);

    this._router.post('/user', this.createData);

    this._router.put('/user/:id', this.updateData);

    this._router.delete('/user/:id', this.deleteData);
  }

  public get router(){
    return this._router;
  }
}

export default RoutesUser;
