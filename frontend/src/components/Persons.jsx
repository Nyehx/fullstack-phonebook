const PersonInfo = ({ person, deleteFunction }) => (
    <li>
        {person.name}   {person.number}
        <button onClick={deleteFunction}>{"Delete Person"}</button>
    </li>
)

const Persons = ({ persons, deletePerson }) => (
    <ul>
        {persons.map(person =>
            <PersonInfo key={person.id} person={person} deleteFunction={() => deletePerson(person.id, person.name)} />
        )}
    </ul>
)
export default Persons