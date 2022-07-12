import { useState } from 'react'
import Note from "./components/Note";

const App = () => {
    const [numbers, setNumbers] = useState([])
    const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        const numberObject = {
            content: newName,
            id: numbers.length + 1,
        }

        const readyName = numbers.find(number => newName === number.content);

        if (readyName !== undefined) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setNumbers(numbers.concat(numberObject))
            setNewName('')
        }
    }



    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {numbers.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </div>
        </div>
    )
}

export default App