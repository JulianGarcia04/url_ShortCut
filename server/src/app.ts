import express, {Express} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import adminRoutes from './routes/routes.admin';
import errorHandler from './middlewares/error.hadler';

dotenv.config();
abstract class configServer {
  protected app:Express=express();

  constructor(){
    this.app.set('PORT', process.env.PORT || 4000);
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.urlencoded());
    adminRoutes(this.app);
    this.app.use(errorHandler.errorHandler);
    this.app.use(errorHandler.boomErrorHandler);
    this.app.use(errorHandler.formatError);
  }
}

export default configServer;
