import React from "react";
import { ChevronDown, ChevronUp } from 'react-feather';
import '../static/styles/CardUrl.scss'

const CardUrl = ({stateMenu})=>{
    return(
        <div className={`cardUrl ${stateMenu.state? 'h-50':''}`}>
            <div className="headerCard">
                <span>https://mail.google.com/mail/u/0/#inbox</span>
                {
                    !stateMenu.state
                    ?<ChevronUp onClick={stateMenu.changeState} className="arrowMenuCard"/>
                    :<ChevronDown onClick={stateMenu.changeState} className="arrowMenuCard" />
                }
            </div>
            {
                (stateMenu.state || window.screen.availWidth >= 1024)&&
                <div className="footerCard">
                    <span>https://beatly/5ED12</span>
                    <button>Copy</button>
                </div>
            }
        </div>
    )
}

export default CardUrl;