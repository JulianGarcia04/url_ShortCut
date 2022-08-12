import {Schema, model} from 'mongoose';

class url {
  protected urlSchema:Schema;

  constructor() {
    this.urlSchema = new Schema({
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

  protected getModel(){
    return model('url', this.urlSchema);
  }
}

export default url;
