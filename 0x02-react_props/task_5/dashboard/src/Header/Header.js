import './Header.css';
import React from 'react';
import logo from '../assets/holberton_logo.jpg';


function Header (){
    return(
        <div>
            {/* Header Section */}
            <div className='App-header'>
            <img src={logo} className='App-logo' alt='Site Logo'/>
            <h1>School dashboard</h1>
            </div>
        </div>
    );
}

export default Header;