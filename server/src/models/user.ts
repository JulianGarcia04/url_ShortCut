import {Schema, model} from 'mongoose';

class User{
  private _userSchema:Schema;

  constructor() {
    this._userSchema = new Schema({
      nombre: {
        type: String,
        required: true
      },
      apellido: {
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

export default model('user', userModel);
