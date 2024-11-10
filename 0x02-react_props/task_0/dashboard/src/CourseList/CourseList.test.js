import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";

describe('Course List Tests', ()=>{
    it('renders CourseList component without crashing', ()=>{
        const wrapper = shallow(<CourseList/>);
        expect(wrapper.exists()).toBe(true);
    });
    it('Check that it renders the 5 different rows', ()=>{
        const wrapper = shallow(<CourseList/>).find('CourseListRow');
        expect(wrapper.length).toBe(5);
    });
});