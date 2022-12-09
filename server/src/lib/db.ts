import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

class connection {
  private db:any;
  private USERNAME:string | undefined;
  private PASSWORD:string|undefined;
  private DATA_BASES:string|undefined;
  private URL:string|undefined;
  private ENV:string;

  constructor(){
    this.USERNAME = process.env.MONGO_USERNAME;
    this.PASSWORD = process.env.MONGO_PASSWORD;
    this.DATA_BASES = process.env.MONGO_DATABASE;
    this.ENV = process.env.NODE_ENV!;
    if (this.ENV==='production') {
      this.URL = `mongodb+srv://${this.USERNAME}:${this.PASSWORD}@${this.DATA_BASES}.i09hovr.mongodb.net/?retryWrites=true&w=majority`
    }else if(this.ENV === 'testing'){
      this.URL = 'mongodb://localhost:27017/urlShortCutTest'
    }else {
      this.URL = 'mongodb://localhost:27017/urlShortCut'
    }
  }

  async Connection(){
    try {
      if (!this.db) {
        this.db = await mongoose.connect(this.URL!);
        console.log(`database is connected with mongodb`);
        await mongoose.syncIndexes()
        return this.db
      } else {
        return this.db
      }
    } catch (error) {
      console.log(error);
    }
  }
}

let db = new connection().Connection();

export default db;

