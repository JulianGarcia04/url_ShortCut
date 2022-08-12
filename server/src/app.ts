import express, {Express} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import adminRoutes from './routes/routes.admin';

dotenv.config();
class configServer {
  protected app:Express=express();

  constructor(){
    this.app.set('PORT', process.env.PORT || 4000);
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    adminRoutes(this.app);
  }
}

export default configServer;
