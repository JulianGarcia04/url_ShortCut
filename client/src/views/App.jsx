import React from "react";
import MainLayout from "../layout/MainLayout";
import imageIndex from '../static/images/IMAGE.svg';
import CardUrl from "../components/CardUrl";
import '../static/styles/App.scss'

const App = ()=>{
    return (
        <MainLayout>
            <div className="containerIndex">
                <img src={imageIndex} alt="myImage" className="imgIndex" />
                <div className="urlCenter">
                    <form>
                        <input type="text" placeholder="Link to here" name="originalUrl" />
                        <input type="submit" value="Shorted"/>
                    </form>
                    <div className="urlsContainer">
                        <CardUrl/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default App;