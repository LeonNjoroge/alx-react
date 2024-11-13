import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe('Login Component tests', ()=>{
    it('Shallow render the "Login" component to verify it renders without crashing', ()=>{
        const wrapper = shallow(< Login />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Verify that the components renders 2 "input" tags and 2 "label" tags', ()=>{
        const wrapper = shallow(< Login />);
        expect(wrapper.find('label').length).toBe(2);
        expect(wrapper.find('input').length).toBe(2);
    });
});