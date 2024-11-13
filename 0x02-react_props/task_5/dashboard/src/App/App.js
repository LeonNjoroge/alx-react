import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils';

function App({isLoggedIn}) {
  let listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];

  let listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
  ]

  return (
    <div>
    
      <div className='header'>
        <Notifications listNotifications={listNotifications}/>
    
        <div className='App'>
          <Header />
        </div>
      </div>

      <div className='App-body'>
      {isLoggedIn ? <CourseList listCourses={listCourses}/>: <Login />}
      
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