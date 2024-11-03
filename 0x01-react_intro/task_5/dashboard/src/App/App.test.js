import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Tests', () =>{
    it('Renders without crashing', ()=>{
        const wrapper = shallow(< App />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Renders a div class App-header',()=>{
       const wrapper = shallow(< App />);
        expect(wrapper.exists('.App-header')).toBe(true);
    });
    it('Renders a div class App-body',()=>{
        const wrapper = shallow(< App />);
         expect(wrapper.exists('.App-body')).toBe(true);
     });
     it('Renders a div class App-footer',()=>{
        const wrapper = shallow(< App />);
         expect(wrapper.exists('.App-footer')).toBe(true);
     });
}); 
