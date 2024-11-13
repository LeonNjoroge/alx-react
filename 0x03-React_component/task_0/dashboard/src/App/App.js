import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];
  
    this.listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
    ];
    
  }
  
  render(){
    return (
      <div>
      
        <div className='header'>
          <Notifications listNotifications={this.listNotifications}/>
      
          <div className='App'>
            <Header />
          </div>
        </div>
  
        <div className='App-body'>
        {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses}/>: <Login />}
        
        </div>
      
        <div className='App-footer'>
          <Footer />
        </div>
       
      </div>
    );
  }
}



App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;