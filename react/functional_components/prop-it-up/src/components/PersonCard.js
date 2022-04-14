import React, { useState } from "react";

const PersonCard = (props) => {
    const { person } = props;
    console.log("person: ", person);
    const { firstName, lastName, age, hairColor } = person;
    const [personAge, setPersonAge] = useState(age);

    const handleClick = () => {
        console.log(personAge);
        setPersonAge(personAge + 1);
    };
    return (
        <div>
            <h2>
                {person.lastName}, {person.firstName}
            </h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {person.hairColor}</p>
            <button onClick={handleClick}>
                Birthday Button for {person.firstName} {person.lastName}
            </button>
        </div>
    );
};

export default PersonCard;
