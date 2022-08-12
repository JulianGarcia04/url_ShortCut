import configServer from './app';
import './lib/db';
class server extends configServer{
  PORT:number;
  constructor() {
    super();
    this.PORT = this.app.get('PORT');
  }

  public listen(){
    this.app.listen(this.PORT, ()=>{
      console.log('Server to listen to port '+this.PORT);
    })
  }
}

const app = new server();

app.listen();
