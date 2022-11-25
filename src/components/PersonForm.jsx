import personService from '../services/persons'

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
        }

        const readyName = names.find(name => newName === name.name)

        if (readyName !== undefined) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
                personService
                    .update(readyName.id, nameObject)
                    .then(response => {
                        setMessage(
                            { success : `Updated number of ${readyName.name} `}
                        )
                        setName(names.map(name => name.id !== readyName.id ? name : response.data))
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch(error => { console.log(error, 123123);
                    
                        setMessage(
                            { mistake : `${error.response.data.error}`}
                        )
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    })
            }
        } else {           
            personService
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
                .catch(error => {
					setMessage(
                        { mistake : `${error.response.data.error}` }
                    )
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
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