import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('Course List Test', ()=>{
    it(' check to test the component renders one cell',()=>{
        const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell={null}/>).find('th');
        expect(wrapper.length).toBe(1);
        expect(wrapper.prop('colSpan')).toBe("2");
    });
    it('  check to test the component renders correctly two td elements within a tr element',()=>{
        const wrapper = shallow(<CourseListRow />).find('td');
        expect(wrapper.length).toBe(2);
    });
})