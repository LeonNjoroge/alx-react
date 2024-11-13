import React from "react";
import Header from "./Header";
import {shallow} from 'enzyme';

describe('Head component test',()=>{
    it('Shallow render the "Header" component to verify it renders without crashing', ()=>{
        const wrapper = shallow(< Header />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Verify that the components render "img" and "h1" tags', ()=>{
        const wrapper = shallow(< Header />);
        expect(wrapper.exists('h1')).toBe(true);
        expect(wrapper.exists('img')).toBe(true);
    });
});