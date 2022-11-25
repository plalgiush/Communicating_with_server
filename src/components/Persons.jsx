import React from 'react';
import personService from '../services/persons'

const Persons = ({ names, setName, filter, setMessage }) => {

    const filteredData = names.filter(person => {
        if (filter === '') {
            return person
        } else {
            return person.name.includes(filter)
        }
    })

    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name} ?`)) {
            personService
                .deletePerson(id)
                .then(response => {
                    setMessage(
                        { warning : `Deleted of ${name} from server`}
                    )
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
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