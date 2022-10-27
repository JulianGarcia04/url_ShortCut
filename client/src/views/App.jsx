import React from "react";
import useMenu from "../hooks/useModal";
import useInput from "../hooks/useValue";
import { useSelector } from "react-redux";
import { createUrlController } from "../controllers/url.controller.js";
import imageIndex from '../static/images/IMAGE.svg';
import CardUrl from "../components/CardUrl";
import '../static/styles/App.scss'

const App = ()=>{

    const navBarState = useSelector(state=>state.stateMenu.value);
    const token = useSelector(state=>state.token.value)
    const stateMenu = useMenu();
    const {actions, reducer} = useInput();

    const onSubmitUrl = async(e)=>{
        e.preventDefault();
        createUrlController({
            originalUrl: reducer.input
        }, token)
    }

    return (
        <div className="containerIndex">
            <img src={imageIndex} alt="myImage" className="imgIndex" />
            <div className={`urlCenter ${navBarState?'w-87':''}`}>
                <form>
                    <input type="text" placeholder="Link to here" onChange={actions.handleChange} />
                    <input type="submit" value="Shorted" onClick={onSubmitUrl}/>
                </form>
                <div className="urlsContainer">
                    <CardUrl stateMenu={stateMenu}/>
                </div>
            </div>
        </div>
    )
}

export default App;