import React from 'react';

const PersonForm = ({names, newName, newNumber, setName, setNewName, setNewNumber}) => {

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
        <form onSubmit={addName}>
            <div>
                <div>names: <input value={newName} onChange={handleNameChange} /></div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;