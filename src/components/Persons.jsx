import React from 'react';

const Persons = ({ names, filter }) => {

    const filteredData = names.filter(person => {
        if (filter === '') {
            return person
        } else {
            return person.name.includes(filter)
        }
    })

    return (
        <div>
            {filteredData.map(item => (
                <div key={item.id}>{item.name} {item.phone} {item.number}</div>
            ))}
        </div>
    );
};

export default Persons;