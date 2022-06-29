import React from 'react';
import Name from "./Name";

const Course = ({ course }) => {
    return (
        <div>
             <h1>{course.name}</h1>
             <div>
                 <Name course={course} />
             </div>
        </div>
    );
};

export default Course;