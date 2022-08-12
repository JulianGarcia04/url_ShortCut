import express, {Express} from 'express';
import dotenv from 'dotenv';

dotenv.config();
class configServer {
  public app:Express=express();

  constructor(){
    this.app.set('PORT', process.env.PORT || 4000);
    this.app.use(express.json());
  }
}

export default configServer;
