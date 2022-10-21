import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import useStatePassword from '../hooks/useModal';
import useInput from "../hooks/useValue";
import { usersLoginController } from "../controllers/users.controller";
import { setToken } from "../features/token/tokenSlice";
import { Eye, EyeOff } from "react-feather";
import '../static/styles/Login.scss';

const Login = ()=>{

    const statePassword = useStatePassword();

    const userName = useInput();

    const userPassword = useInput();

    const navegate = useNavigate();

    const dispatch = useDispatch();

    const data = {
        nameInput: userName.reducer.input,
        passwordInput:userPassword.reducer.input
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const token = await usersLoginController(data);
        dispatch(setToken(token))
        navegate('/');
    }


    return (
        <div className="background-container">
            <div className="principal-container">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type={userName.reducer.input.search('@')!==-1?'email':'text'} placeholder="User/email" autoComplete="off" required onChange={userName.actions.handleChange}/>
                    </div>
                    <div className="formPassword">
                        <input type={statePassword.state?'text':'password'} name="password" placeholder="Password" required autoComplete="off" onChange={userPassword.actions.handleChange}/>
                        {
                            statePassword.state
                            ?<EyeOff className="eye" onClick={statePassword.changeState}/>
                            :<Eye className="eye" onClick={statePassword.changeState}/>
                        }
                    </div>
                    <label htmlFor="checkMe">
                        <input type="checkbox" id="checkMe"/>
                        Remember me
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;