import mongoose from "mongoose";


class connection {
  private db:any;

  async Connection(){
    try {
      this.db = await mongoose.connect('mongodb://localhost:27017/urlShurtcup');
      console.log('database is connected with mongodb');
    } catch (error) {
      console.log(error);
    }
  }
}

let db = new connection();

db.Connection();

