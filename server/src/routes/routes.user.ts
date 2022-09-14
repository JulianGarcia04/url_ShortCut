import {Router} from 'express';
import servicesUser from '../services/services.user';
import { validationSession } from '../middlewares/validation.session';
class RoutesUser extends servicesUser{
  private _router:Router = Router();

  constructor() {
    super();

    this._router.get('/user', this.getUsers);

    this._router.get('/user/id', validationSession,  this.getUser);

    this._router.post('/user/login', this.loginUser);

    this._router.post('/user', this.createUser);

    this._router.put('/user/:id', this.updateData);

    this._router.delete('/user/:id', this.deleteData);
  }

  public get router(){
    return this._router;
  }
}

export default RoutesUser;
