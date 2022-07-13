import { useState } from 'react'
import Name from "./components/Name";

const App = () => {
    const [names, setName] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()

        const nameObject = {
            name: newName,
            phone: newNumber,
            id: names.length + 1,
        }

        const readyName = names.find(name => newName === name.name);

        if (readyName !== undefined) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setName(names.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }



    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    <div>names: <input value={newName} onChange={handleNameChange} /></div>
                    <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {names.map(name =>
                    <Name key={name.id} name={name} />
                )}
            </div>
        </div>
    )
}

export default App