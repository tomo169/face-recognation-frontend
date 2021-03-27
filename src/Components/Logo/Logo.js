import React from 'react';
import Tilt from 'react-tilt';
import logo1 from './logo1.png';
import './logo.css';


const Logo = () => {
    return (
        <div className='center ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"><img alt='logo' src={logo1}></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;