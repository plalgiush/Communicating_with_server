import { useState, useEffect } from 'react';
import axios from "axios";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
    const [names, setName] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                setName(response.data)
            })
    },[])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>add a new</h2>
            <PersonForm names={names} newName={newName} newNumber={newNumber}
                        setName={setName} setNewName={setNewName} setNewNumber={setNewNumber} />

            <h2>Numbers</h2>
            <Persons names={names} filter={filter} />
        </div>
    )
}

export default App