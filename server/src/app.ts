import express, {Express} from 'express';
import dotenv from 'dotenv';

dotenv.config();

class server {
  protected app:Express=express();

  private getPort(){
    return this.app.set('PORT', process.env.PORT || 4000);
  }

  listen(){
    let PORT = this.getPort();
    this.app.listen(PORT, ()=>{
      console.log('Server to listen to port '+PORT);
    })
  }
}

export default server;
