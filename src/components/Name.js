import React from 'react';

const Name = ({ course }) => {
   const parts = course.parts

    return (
        parts.map(part =>
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>
        )
    );
};

export default Name;