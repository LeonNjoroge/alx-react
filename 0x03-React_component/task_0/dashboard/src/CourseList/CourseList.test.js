import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";

describe('CourseList Component Tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it('renders CourseList component without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('displays "No course available yet" when listCourses is empty', () => {
        wrapper.setProps({ listCourses: [] });
        expect(wrapper.find('tbody').text()).toContain('No course available yet');
    });

    it('renders the correct number of courses when listCourses is populated', () => {
        const courses = [
            { id: 1, name: 'Course 1', credit: 3 },
            { id: 2, name: 'Course 2', credit: 4 },
        ];
        wrapper.setProps({ listCourses: courses });
        expect(wrapper.find('tbody tr').length).toBe(courses.length); // Two courses should render
    });

    it('does not render any course items if listCourses is not passed', () => {
        wrapper.setProps({ listCourses: [] });
        expect(wrapper.find('tbody tr').length).toBe(1); // No course items
    });
});