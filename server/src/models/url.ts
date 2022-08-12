import {Schema, model} from 'mongoose';

class url {
  protected urlSchema:Schema;

  constructor() {
    this.urlSchema = new Schema({
      originalUrl:{
        type: String,
        unique: true,
        required: true,
        trim: true
      }
    },{
      timestamps: true,
      versionKey: false
    })
  }

  getModel(){
    return model('url', this.urlSchema);
  }
}

export default url;
