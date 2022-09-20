import React from 'react';
import NavBar from '../components/NavBar.jsx';
import '../static/styles/layout.scss';

const MainLayout = (props)=>{
    return(
        <div className='containerLayout'>
            <NavBar/>
            <div className='contentLayout'>
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout