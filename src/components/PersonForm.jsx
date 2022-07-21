import noteService from '../services/notes'

const PersonForm = ({names, newName, newNumber, setName, setNewName, setNewNumber, setMessage}) => {

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
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
                noteService
                    .update(readyName.id, nameObject)
                    .then(response => {
                        setMessage(
                            { success : `Updated number of ${readyName.name} `
                    }
                        )
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                        setName(names.map(name => name.id !== readyName.id ? name : response.data))
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch(error => {
                        setMessage(
                            { mistake : `Information of ${readyName.name} has already been removed from server`}
                        )
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                        setName(names.filter(n => n.id !== readyName.id))
                    })
            }
        } else {
            noteService
                .create(nameObject)
                .then(response => {
                    setMessage(
                        { success : `Added ${nameObject.name}` }
                    )
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                    setName(names.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                })
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