import React from 'react';

const Total = ({ parts }) => {
    const total = parts.reduce((prev, current) =>
        prev + current.exercises, 0
    )

    return (
        <b>total of {total} exercises</b>
    )
};

export default Total;