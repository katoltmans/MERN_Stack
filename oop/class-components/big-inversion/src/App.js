import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
    return (
        <div className="App">
            <PersonCard
                lastName={"Peralta"}
                firstName={"Jake"}
                age={33}
                hairColor={"brown"}
            />
            <PersonCard
                lastName={"Santiago"}
                firstName={"Amy"}
                age={32}
                hairColor={"black"}
            />
            <PersonCard
                lastName={"Jeffords"}
                firstName={"Terry"}
                age={35}
                hairColor={"n/a"}
            />
            <PersonCard
                lastName={"Diaz"}
                firstName={"Rosa"}
                age={33}
                hairColor={"black"}
            />
        </div>
    );
}

export default App;
