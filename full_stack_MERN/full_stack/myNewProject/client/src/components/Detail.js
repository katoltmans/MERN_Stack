import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    const [person, setPerson] = useState({});
    const { id } = useParams();
    //Reach router creates a key:value pair inside of our props object for every
    //variable found inside the "path" attribute of the Detail component. Id can be
    //deconstructed from props. The unique part of the "path" (:id) will have its value
    //assigned in the Link element's "to" attribute.

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/people" + id)
            .then((res) => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    );
};

export default Detail;
