import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeStateMenu } from '../features/navBar/navBarSlice';
import menuBars from '../static/icons/bars-solid.svg';
import iconQuestion from '../static/icons/icon-sidebar-question.svg';
import arrowMenu from '../static/icons/icon-sidebar-back.svg';
import iconFile from '../static/icons/icon-sidebar-file.svg'
import iconApp from '../static/icons/icon-sidebar-appstore.svg';
import iconSingUp from '../static/icons/icon-sidebar-adduser.svg';
import iconSingIn from '../static/icons/icon-sidebar-login.svg';
import '../static/styles/NavBar.scss';

const NavBar = ()=>{

    const stateMenu = useSelector(state=>state.stateMenu.value)

    const dispatch = useDispatch();


    return (
        <nav className={`nav-container ${stateMenu?'open':''}`}>
            <div className="nav-header">
                <img src={arrowMenu} alt="" width={30} className={`arrowMenu ${stateMenu?'rotate':''}`} onClick={()=>dispatch(changeStateMenu())}/>
                <Link to={'/'} className="logo">
                    <h4>BEATLY</h4>
                </Link>
                <img src={menuBars} alt="" width={30} className="menuBars" onClick={()=>dispatch(changeStateMenu())}/>
            </div>
            {
                (stateMenu || window.screen.availWidth >= 1024) &&
                <>
                    <div className="nav-body">
                        <div>
                            <img src={iconQuestion} alt="Question" width={30} />
                            <span>Whats</span>
                        </div>
                        <div>
                            <img src={iconFile} alt="File" width={30}/>
                            <span>Pricing</span>
                        </div>
                        <div>
                            <img src={iconApp} alt="AppStore" width={30}/>
                            <span>App</span>
                        </div>
                    </div>
                    <div className="nav-footer">
                        <div>
                            <img src={iconSingUp} alt="Register" width={30} />
                            <span>Sign Up</span>
                        </div>
                        <Link to={'/login'} className="loginUrl">
                            <div>
                                <img src={iconSingIn} alt="Login" width={30} />
                                <span>Sign In</span>
                            </div>
                        </Link>
                    </div>
                </>
            }
        </nav>
    )
}

export default NavBar;