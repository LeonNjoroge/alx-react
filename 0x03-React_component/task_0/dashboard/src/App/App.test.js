import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Tests', () =>{
    it('Renders without crashing', ()=>{
        const wrapper = shallow(< App />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Renders Notification Component',()=>{
       const wrapper = shallow(< App />);
        expect(wrapper.find('Notifications').exists()).toBe(true);
    });
    it('Renders Header Component',()=>{
        const wrapper = shallow(< App />);
         expect(wrapper.find('Header').exists()).toBe(true);
     });
     it('Renders Login Component',()=>{
        const wrapper = shallow(< App />);
         expect(wrapper.find('Login').exists()).toBe(true);
     });
     it('Renders Footer Component',()=>{
        const wrapper = shallow(< App />);
         expect(wrapper.find('Footer').exists()).toBe(true);
     });
     it('Doesnt Render CourseList Component',()=>{
        const wrapper = shallow(< App />);
         expect(wrapper.find('CourseList').exists()).toBe(false);
     });
     it('Doesnt Render Login Component',()=>{
        const wrapper = shallow(< App isLoggedIn={true}/>);
         expect(wrapper.find('Login').exists()).toBe(false);
     });
     it('Render CourseList Component',()=>{
        const wrapper = shallow(< App isLoggedIn={true}/>);
         expect(wrapper.find('CourseList').exists()).toBe(true);
     });
}); 
