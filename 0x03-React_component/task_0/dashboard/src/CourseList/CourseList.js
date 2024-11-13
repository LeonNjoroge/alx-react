import './CourseList.css';
import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types';


const CourseList = ({listCourses}) =>{
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
            </thead>
            <tbody>
            {listCourses.length === 0 ? (
          <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.credit}</td>
            </tr>
          ))
        )}
            </tbody>
        </table>
    );
};



const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired
});

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape).isRequired,
};

CourseList.defaultProps = {
    listCourses: [],
}



export default CourseList;