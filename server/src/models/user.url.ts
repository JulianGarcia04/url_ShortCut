import { Schema, model } from 'mongoose';


class UserUrl {
  protected userUrlSchema:Schema = new Schema({
    id_user:{
      type:String,
      unique: true,
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

  protected getModel(){
    return model('userUrl', this.userUrlSchema);
  }
}

export default UserUrl;
