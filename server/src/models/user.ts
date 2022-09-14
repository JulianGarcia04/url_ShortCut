import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';


class User{
  private _userSchema:Schema;

  constructor() {
    this._userSchema = new Schema({
      urlImage: {
        type: String,
        required: false
      },
      nombre: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      }
    },{
      versionKey: false,
      timestamps: true
    })
  }
  get userSchema() {
    return this._userSchema;
  }
}
let userModel = new User().userSchema;

userModel.methods.encryptPassword = async (password:string)=>{
 const salt = await bcrypt.genSalt(10);
 return bcrypt.hash(password, salt);
}

userModel.methods.validatePassword = async function(password:string){
  let validation = await bcrypt.compare(password, this.password);
  return validation
}

export default model('user', userModel);
