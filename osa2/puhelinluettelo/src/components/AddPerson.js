import { useState } from 'react'

const AddPersons = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        console.log(event.target)
    
        const personObject = {
            name: newName,
            number: newNumber
        }

        if (!persons.find((person) => person.name === newName)) {
            setPersons(persons.concat(personObject))
            setNewName('') 
            setNewNumber('') 
        } else {
            alert(`${newName} is already added to phonebook`);
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}></input></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPersons;