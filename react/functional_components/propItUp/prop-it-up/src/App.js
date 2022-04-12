import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
    const people = [
        {
            id: 1,
            firstName: "Jake",
            lastName: "Peralta",
            age: 33,
            hairColor: "brown",
        },
        {
            id: 2,
            firstName: "Amy",
            lastName: "Santiago",
            age: 32,
            hairColor: "black",
        },
        {
            id: 3,
            firstName: "Terry",
            lastName: "Jeffords",
            age: 35,
            hairColor: "n/a",
        },
        {
            id: 4,
            firstName: "Rosa",
            lastName: "Diaz",
            age: 33,
            hairColor: "black",
        },
    ];
    return (
        <div className="App">
            {people.map((person) => {
                return <PersonCard key={person.id} person={person} />;
            })}
        </div>
    );
}

export default App;
