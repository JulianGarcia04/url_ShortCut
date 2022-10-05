import { Schema, model } from 'mongoose';


class UserUrl {
  private _userUrlSchema:Schema = new Schema({
    id_user:{
      type:String,
      required: true,
    },
    id_url:{
      type:String,
      unique:true,
      required:true
    },
    new_url:{
      type:String,
      required:true,
      trim: true
    }
  },{
    versionKey: false,
    timestamps: true
  })

  public get userUrlSchema(){
    return this._userUrlSchema;
  }
}

const userUrlModel = new UserUrl().userUrlSchema;

export default model('userUrl', userUrlModel);
