import React from 'react';
import Name from "./Name";
import Total from "./Total";

const Course = ({ courses }) => {
    return (
        courses.map(course =>
            <div>
                <h1>{course.name}</h1>
                <div>
                    <Name course={course} />
                </div>
                <p>
                    <Total parts={course.parts}/>
                </p>
            </div>
        )
    );
};

export default Course;