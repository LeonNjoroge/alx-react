import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';

function App({isLoggedIn}) {


  return (
    <div>
      <Notifications/>
      <div className='App'>
        <Header />
      </div>
      
      <div className='App-body'>
      {isLoggedIn ? <CourseList />: <Login />}
      
      </div>
    
      <div className='App-footer'>
        <Footer />
      </div>
     
    </div>
  );
}




App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;