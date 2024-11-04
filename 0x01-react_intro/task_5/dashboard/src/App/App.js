import './App.css';
import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function App() {

  let isIndex = true;
  return (
    <div>
      {/* Header Section */}
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='Site Logo'/>
        <h1>School dashboard</h1>
      </div>

      {/* Body Section */}
      <div className='App-body'>
        <p>Login to access the full dashboard</p>


        <form>
          {/* Email Input */}
          
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' />

          {/* Password Input */}

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' />


          {/* Ok button */}
            <button type='submit'>OK</button>
        </form>
      </div>

      {/* Footer section */}
      <div className='App-footer'>
        <p>&copy; {getFullYear()} - {getFooterCopy(isIndex)}</p>
        
      </div>
    </div>
  );
}

export default App;
