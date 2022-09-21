import React from "react";
import useModal from "../hooks/useModal";
import arrowMenu from '../static/icons/icon-sidebar-back.svg';
import '../static/styles/CardUrl.scss'

const CardUrl = ()=>{

    const stateMenu = useModal();

    return(
        <div className={`cardUrl ${stateMenu.modal? 'h-50':''}`}>
            <div className="headerCard">
                <span>https://mail.google.com/mail/u/0/#inbox</span>
                <img src={arrowMenu} alt="arrowMenu" width={15} className="arrowMenuCard" onClick={stateMenu.changeState} />
            </div>
            {
                (stateMenu.modal || window.screen.availWidth >= 1024)&&
                <div className="footerCard">
                    <span>https://beatly/5ED12</span>
                    <button>Copy</button>
                </div>
            }
        </div>
    )
}

export default CardUrl;