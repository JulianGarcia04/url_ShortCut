import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar.jsx';
import '../static/styles/layout.scss';

const MainLayout = (props)=>{

    const navBarState = useSelector(state=>state.stateMenu.value);

    return(
        <div className='containerLayout'>
            <NavBar/>
            <div className={`contentLayout ${navBarState?'w-87':''}`}>
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout