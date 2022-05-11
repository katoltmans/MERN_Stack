import React, { useState } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = (props) => {
    const [people, setPeople] = useState([]);

    const removeFromDom = (personId) => {
        setPeople(people.filter((person) => person.id !== personId));
        //This could also be written in the List component
    };

    return (
        <div>
            {/* PersonForm and PersonList can both utilize the getter and setter
            established in their parent component: */}
            <PersonForm people={people} setPeople={setPeople} />
            <hr />
            <PersonList
                people={people}
                setPeople={setPeople}
                removeFromDom={removeFromDom}
            />
        </div>
    );
};

export default Main;
