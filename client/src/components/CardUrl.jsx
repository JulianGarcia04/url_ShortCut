import React from "react";
import { ChevronDown, ChevronUp } from 'react-feather';
import '../static/styles/CardUrl.scss'

const CardUrl = ({stateMenu, urlLarge, urlShort, onClick})=>{
    return(
        <div className={`cardUrl ${stateMenu.state? 'h-50':''}`}>
            <div className="headerCard">
                <span>{urlLarge}</span>
                {
                    !stateMenu.state
                    ?<ChevronUp onClick={stateMenu.changeState} className="arrowMenuCard"/>
                    :<ChevronDown onClick={stateMenu.changeState} className="arrowMenuCard" />
                }
            </div>
            {
                (stateMenu.state || window.screen.availWidth >= 1024)&&
                <div className="footerCard">
                    <span>{urlShort}</span>
                    <button onClick={onClick}>Copy</button>
                </div>
            }
        </div>
    )
}

export default CardUrl;