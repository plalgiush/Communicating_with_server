import React from 'react';
import noteService from '../services/notes'

const Persons = ({ names, setName, filter }) => {

    const filteredData = names.filter(person => {
        if (filter === '') {
            return person
        } else {
            return person.name.includes(filter)
        }
    })

    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name} ?`)) {
            noteService
                .deletePerson(id)
                .then(response => {
                    const newNameList = names.filter((item) => item.name !== name);
                    setName(newNameList);
                })
        }
    }

    return (
        <div>
            {filteredData.map(item => (
                <div key={item.id}>{item.name} {item.phone} {item.number}
                    <button onClick={() => deletePerson(item.id, item.name)}>delete</button>
                </div>
            ))}
        </div>
    );
};

export default Persons;