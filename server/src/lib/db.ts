import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

class connection {
  private db:any;
  private HOST:string | undefined;
  private PORT:string|undefined;
  private DATA_BASES:string|undefined;

  constructor(){
    this.HOST = process.env.MONGO_HOST;
    this.PORT = process.env.MONGO_PORT;
    this.DATA_BASES = process.env.MONGO_DATABASE;
  }

  async Connection(){
    try {
      this.db = await mongoose.connect(`mongodb://${this.HOST}:${this.PORT}/${this.DATA_BASES}`);
      console.log(`database is connected with mongodb`);
    } catch (error) {
      console.log(error);
    }
  }
}

let db = new connection();

db.Connection();
