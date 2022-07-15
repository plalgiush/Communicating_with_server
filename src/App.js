import { useState } from 'react';
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
    const [names, setName] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>add a new</h2>
            <PersonForm names={names} newName={newName} newNumber={newNumber}
                        setName={setName} setNewName={setNewName} setNewNumber={setNewNumber} />

            <h2>Numbers</h2>
            <Persons names={names} filter={filter} setName={setName}/>
        </div>
    )
}

export default App