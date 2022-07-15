import React, {useEffect} from 'react';
import axios from "axios";

const Persons = ({ names, filter, setName }) => {

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                setName(response.data)
            })
    },[])

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