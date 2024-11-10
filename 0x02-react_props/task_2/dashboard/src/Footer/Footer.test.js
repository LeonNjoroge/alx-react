import React from "react";
import Footer from "./Footer";
import {shallow} from 'enzyme';


describe('Footer tests', ()=>{
    it('Shallow render the "Footer" component to verify it renders without crashing', ()=>{
        const wrapper = shallow(< Footer />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Verify that the components at the very least render the text “Copyright”', ()=>{
        const wrapper = shallow(< Footer />);
        expect(wrapper.find('p').text()).toContain('Copyright');
    });
});