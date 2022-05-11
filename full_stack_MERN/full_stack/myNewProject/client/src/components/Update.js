import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams; //this process is identical to the one used in the Details.js component
    //set up hook states
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const navigate = useNavigate();

    //retrieve the current values for this person so we can pre-fill in the form
    //with what is currently in the db
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people/" + id) //remember the ending slash of the request
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                console.log(firstName, lastName);
            })
            .catch((err) => console.log(err));
    }, []); // empty array to prevent useEffect from running indefinitely

    const updatePerson = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/people/" + id, {
                firstName, //shortcut syntax for firstName: firstName,
                lastName, //shortcut syntax for lastName: lastName
            })
            .then((res) => {
                console.log(res);
                navigate("/home"); // this will take the user back to Main.js when finished
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </p>
                <input type="submit" />
            </form>
        </div>
    );
};
export default Update;
