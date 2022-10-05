import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

class connection {
  private db:any;
  private USERNAME:string | undefined;
  private PASSWORD:string|undefined;
  private DATA_BASES:string|undefined;

  constructor(){
    this.USERNAME = process.env.MONGO_USERNAME;
    this.PASSWORD = process.env.MONGO_PASSWORD;
    this.DATA_BASES = process.env.MONGO_DATABASE;
  }

  async Connection(){
    try {
      if (!this.db) {
        this.db = await mongoose.connect(`mongodb+srv://${this.USERNAME}:${this.PASSWORD}@${this.DATA_BASES}.i09hovr.mongodb.net/?retryWrites=true&w=majority`);
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

