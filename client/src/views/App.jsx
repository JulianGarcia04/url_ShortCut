import React from "react";
import useMenu from "../hooks/useModal";
import { useSelector } from "react-redux";
import imageIndex from '../static/images/IMAGE.svg';
import CardUrl from "../components/CardUrl";
import '../static/styles/App.scss'

const App = ()=>{

    const navBarState = useSelector(state=>state.stateMenu.value);
    const stateMenu = useMenu();

    return (
        <div className="containerIndex">
            <img src={imageIndex} alt="myImage" className="imgIndex" />
            <div className={`urlCenter ${navBarState?'w-87':''}`}>
                <form>
                    <input type="text" placeholder="Link to here" name="originalUrl" />
                    <input type="submit" value="Shorted"/>
                </form>
                <div className="urlsContainer">
                    <CardUrl stateMenu={stateMenu}/>
                </div>
            </div>
        </div>
    )
}

export default App;