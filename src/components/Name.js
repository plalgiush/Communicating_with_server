import React from 'react';

const Name = ({ name }) => {
    return (
        <div>{name.name} {name.phone}</div>
    );
};

export default Name;