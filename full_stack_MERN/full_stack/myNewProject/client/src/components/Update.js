import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PersonForm from "./PersonForm";
import DeleteButton from "./DeleteButton";

const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one used in the Details.js component
    const [person, setPerson] = useState({});
    //retrieve the current values for this person so we can pre-fill in the form
    //with what is currently in the db
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people/" + id) //remember the ending slash of the request
            .then((res) => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []); // empty array to prevent useEffect from running indefinitely

    const updatePerson = (personParam) => {
        axios
            .put("http://localhost:8000/api/people/" + id, personParam)
            .then((res) => {
                console.log(res);
                navigate("/");
            });
    };

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <DeleteButton
                        personId={person._id}
                        successCallback={() => navigate("/")}
                    />
                </>
            )}
        </div>
    );
};
export default Update;
