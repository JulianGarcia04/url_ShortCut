import {Schema, model} from 'mongoose';

class User{
  private userSchema:Schema;

  constructor() {
    this.userSchema = new Schema({
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
  getSchemaUser(){
    return this.userSchema;
  }
}

let userModel = new User().getSchemaUser();

export default model('user', userModel);
