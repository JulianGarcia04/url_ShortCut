import React from "react";
import useStatePassword from '../hooks/useModal';
import useValue from "../hooks/useValue";
import { Eye, EyeOff } from "react-feather";
import '../static/styles/Login.scss';

const Login = ()=>{
    const statePassword = useStatePassword();

    const {reducer, actions} = useValue();

    return (
        <div className="background-container">
            <div className="principal-container">
                <h1>Sign in</h1>
                <form>
                    <div>
                        <input type={reducer.inputUser.search('@')!==-1?'email':'text'} placeholder="User/email" autoComplete="off" required onChange={actions.handleChange}/>
                    </div>
                    <div className="formPassword">
                        <input type={statePassword.state?'text':'password'} placeholder="Password" required autoComplete="off"/>
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