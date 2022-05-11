import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PersonList = (props) => {
    /* We deconstruct getter and setter which were passed down
    via props by the parent component (App.js) to our child component (PersonList.js).
    Now we can easily use the getter and setter without having to write props.getter
    or props.setter every time: */
    const { removeFromDom, people, setPeople } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people")
            .then((res) => {
                console.log(res.data);
                setPeople(res.data);
            })
            .catch((err) => {
                console.log("ERROR IN GET ALL", err);
            });
    }, []); //empty array is to prevent the useEffect from running indefinitely

    const deletePerson = (personId) => {
        axios
            .delete("http:localhost:8000/api/people" + personId)
            .then((res) => {
                removeFromDom(personId);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {people.map((person, index) => {
                {
                    /* map requires only ONE parent element */
                }
                return (
                    <div key={index}>
                        <Link to={"/people/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        {/* the :id in App.js takes a user here */}
                        {/* Clicking this element will assign the "id" param to the
                        value of the document's _id field. */}
                        {/* This takes the app to a path similar to "localhost:3000/people/627837837af9898989c9848" */}
                        |<Link to={"/people/edit/" + person._id}>Edit</Link>|
                        <button
                            onClick={(e) => {
                                deletePerson(person._id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default PersonList;
