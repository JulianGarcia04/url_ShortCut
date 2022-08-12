import {Schema, model} from 'mongoose';

class User{
  protected userSchema:Schema;

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
        required: true
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
  protected getModel(){
    return model('user', this.userSchema);
  }
}



export default User;
