import { useState, useEffect } from 'react';
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm"; 
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import personService from './services/persons'

const App = () => {
    const [names, setName] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setName(response.data)
            })
    },[])

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>add a new</h2>
            <PersonForm names={names} newName={newName} newNumber={newNumber}
                        setName={setName} setNewName={setNewName} setNewNumber={setNewNumber}
                        setMessage={setMessage} />

            <h2>Numbers</h2>
            <Persons names={names} setName={setName} filter={filter} setMessage={setMessage} />
        </div>
    )
}

export default App