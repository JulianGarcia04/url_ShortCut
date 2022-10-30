import {Schema, model} from 'mongoose';

class Url {
  private _urlSchema:Schema;

  constructor() {
    this._urlSchema = new Schema({
      userId:{
        type:String,
        required: true
      },
      originalUrl:{
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      urlShort: {
        type: String,
        require: false,
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
