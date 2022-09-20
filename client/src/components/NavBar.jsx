import React, {useState, useRef, useEffect} from "react";
import useModal from "../hooks/useModal";
import menuBars from '../static/icons/bars-solid.svg';
import iconQuestion from '../static/icons/icon-sidebar-question.svg';
import arrowMenu from '../static/icons/icon-sidebar-back.svg';
import iconFile from '../static/icons/icon-sidebar-file.svg'
import iconApp from '../static/icons/icon-sidebar-appstore.svg';
import iconSingUp from '../static/icons/icon-sidebar-adduser.svg';
import iconSingIn from '../static/icons/icon-sidebar-login.svg';
import '../static/styles/NavBar.scss';

const NavBar = ()=>{

    const [menu, setMenu] = useState(false);

    const stateModal = useModal();

    const navBar = useRef(null);
    const iconArrow = useRef(null);

    const abrirMenu = ()=>{
        stateModal.changeState();
        navBar.current.classList.toggle('open');
        iconArrow.current.classList.toggle('rotate');
    }


    return (
        <nav ref={navBar} className="nav-container">
            <div className="nav-header">
                <img ref={iconArrow} src={arrowMenu} alt="" width={30} className="arrowMenu" onClick={abrirMenu}/>
                <h1>BEATLY</h1>
                <img src={menuBars} alt="" width={30} className="menuBars" onClick={abrirMenu}/>
            </div>
            {
                (stateModal.modal || window.screen.availWidth >= 1024) &&
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
                        <div>
                            <img src={iconSingIn} alt="Login" width={30} />
                            <span>Sign in</span>
                        </div>
                    </div>
                </>
            }
        </nav>
    )
}

export default NavBar;