import React from 'react';
import Name from "./Name";
import Total from "./Total";

const Course = ({ courses }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course =>
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <div>
                        <Name course={course} />
                    </div>
                    <p>
                        <Total parts={course.parts}/>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Course;