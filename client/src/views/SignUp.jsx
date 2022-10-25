import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import useStatePassword from '../hooks/useModal';
import useInput from "../hooks/useValue";
import {setToken} from "../features/token/tokenSlice";
import { usersRegisterController } from "../controllers/users.controller";
import { uploadfile } from "../services/uploadFile.services";
import { Eye, EyeOff, Upload } from "react-feather";
import '../static/styles/Register.scss';

const SignUp = ()=>{

  //States 
  //hook of redux
  const dispatch = useDispatch();
  //hook of react-router-doom
  const navigate = useNavigate();
  //States of the image upload
  const [image, setImage] = useState('');
  const inputFile = useInput();
  const valueFile = inputFile.reducer.input;
  //State of the password 
  const statePassword = useStatePassword();
  //Data that I will send to the server for create new user
  const [urlImage, setUrlImage] = useState('');
  const username = useInput();
  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const password = useInput();

  //this algorithm upload files type image on the server 
  useEffect(()=>{
    if(!image){
      return
    }
    uploadfile(image.file).then(res=>setUrlImage(res.data.url)) //Fetching of data, that upload the files through axios
  }, [image])

  //This function does that the user feel that the image uploaded it fastly
  const uploadImage = (e)=>{
    inputFile.actions.handleChange(e);
    const urlImage = URL.createObjectURL(e.target.files[0]);
    setImage({url: urlImage, file: e.target.files[0]});
  }

  const onSubmit = async (e)=>{
    e.preventDefault();
    let token = await usersRegisterController({
      urlImage, 
      username: username.reducer.input,
      name: name.reducer.input,
      lastname: lastname.reducer.input,
      email: email.reducer.input,
      password: email.reducer.input
     })
    if(!token){
      return
    }
    dispatch(setToken(token));
    navigate('/');
  }


  return (
    <div className="background-container">
      <div className="principal-container">
        <h1>Sign Up</h1>
        <form>
          <div>
              <label htmlFor="imgUpload" className="imageUpload">
                  {valueFile.substring(valueFile.lastIndexOf("\\")+1, valueFile.length)||"Choose image"}
                  <input
                      type="file"
                      id="imgUpload"
                      accept="image/png, image/jpg, image/gif, image/jpeg, image/svg"
                      required
                      size={450}
                      onChange={uploadImage}
                  />
                  {
                    valueFile
                    ?<img src={image.url} alt="yo" width={30}/>
                    :<Upload width={30} height={30} color={"#6DD47E"} className="uploadIcon"/>
                  }
              </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              required
              onChange={username.actions.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              required
              onChange={name.actions.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="LastName"
              autoComplete="off"
              required
              onChange={lastname.actions.handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={email.actions.handleChange}
            />
          </div>
          <div className="formPassword">
            <input
              type={statePassword.state ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={password.actions.handleChange}
            />
            {statePassword.state ? (
              <EyeOff className="eye" onClick={statePassword.changeState} />
            ) : (
              <Eye className="eye" onClick={statePassword.changeState} />
            )}
          </div>
          <button type="submit" onClick={onSubmit}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;