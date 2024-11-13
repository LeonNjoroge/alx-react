import './Login.css';
import React from 'react';

function Login (){
    return(
        <div>
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
        </div>
    );
}

export default Login;