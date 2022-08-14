import {Schema, model} from 'mongoose';

class Url {
  private _urlSchema:Schema;

  constructor() {
    this._urlSchema = new Schema({
      originalUrl:{
        type: String,
        required: true,
        trim: true
      }
    },{
      timestamps: true,
      versionKey: false
    })
  }

  public get urlSchema(){
    return this._urlSchema;
  }
}

const urlModel = new Url().urlSchema;

export default model('url', urlModel);
