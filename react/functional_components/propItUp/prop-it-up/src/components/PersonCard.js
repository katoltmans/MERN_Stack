import React from "react";

const PersonCard = (props) => {
    const { person } = props;
    console.log(person);
    return (
        <div>
            <h2>
                {person.lastName}, {person.firstName}
            </h2>
            <p>Age: {person.age}</p>
            <p>Hair Color: {person.hairColor}</p>
        </div>
    );
};

export default PersonCard;
