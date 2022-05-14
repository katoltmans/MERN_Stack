import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const PersonList = (props) => {
    /* We deconstruct getter and setter which were passed down
    via props by the parent component (App.js) to our child component (PersonList.js).
    Now we can easily use the getter and setter without having to write props.getter
    or props.setter every time: */
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people")
            .then((res) => {
                setPeople(res.data);
            })
            .catch((err) => {
                console.log("ERROR IN GET ALL", err);
            });
    }, []); //empty array is to prevent the useEffect from running indefinitely

    const removeFromDom = (personId) => {
        setPeople(people.filter((person) => person._id != personId));
    };

    return (
        <div>
            {/* map requires only ONE parent element */}
            {people.map((person, index) => {
                return (
                    <p key={index}>
                        <Link to={"/people/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        {/* the :id in App.js takes a user here */}
                        {/* Clicking this element will assign the "id" param to the
                        value of the document's _id field. */}
                        {/* This takes the app to a path similar to "localhost:3000/people/627837837af9898989c9848" */}
                        |<Link to={"/people/edit/" + person._id}>Edit</Link>|
                        <DeleteButton
                            personId={person._id}
                            successCallback={() => removeFromDom(person._id)}
                        />
                    </p>
                );
            })}
        </div>
    );
};
export default PersonList;
