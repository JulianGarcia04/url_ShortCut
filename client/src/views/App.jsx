import React, {useState, useEffect} from "react";
import {copyElement, createUrlController, createUrlClient} from "../controllers/app.controller.js";
import useMenu from "../hooks/useModal";
import useInput from "../hooks/useValue";
import { useSelector } from "react-redux";
import { getAllUrlLarge } from "../services/url.services.js";
import imageIndex from '../static/images/IMAGE.svg';
import CardUrl from "../components/CardUrl";
import '../static/styles/App.scss'

const App = ()=>{

    //states
    const navBarState = useSelector(state=>state.stateMenu.value); //redux state of the navbar
    const [urls, setUrls] = useState([]); //urls data
    const token = useSelector(state=>state.token.value) //token of login
    const stateMenu = useMenu(); // perzonalizated hook for state of little menu
    const {actions, reducer} = useInput(); //save the input value in a state of react 

    //fetching of data
    useEffect(()=>{
        if(!token){
            let data = JSON.parse(localStorage.getItem("temporalsUrls"));
            if(!data){
                return
            }
            data.reverse();
            data.length = 3;
            setUrls(data);
            return
        }
        getAllUrlLarge(token)
        .then(res=>{
            res.data.reverse();
            res.data.length = 3;
            setUrls(res.data);
        });
    }, [token])

    //save jsx with the data
    const dataStructured = urls.map((e) => {
      return (
        <CardUrl
          stateMenu={stateMenu}
          urlLarge={e.originalUrl}
          urlShort={e.urlShort}
          onClick={() => copyElement(e.urlShort)}
          key={e._id}
        />
      );
    });

    //Send url
    const onSubmitUrl = async(e)=>{
        token
        ?
        createUrlController({
            originalUrl: reducer.input
        }, token)
        :
        createUrlClient({
            originalUrl: reducer.input
        })
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
                    {dataStructured}
                </div>
            </div>
        </div>
    )
}

export default App;