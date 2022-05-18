import React, { useState } from "react";
import axios from "axios";
//import styles from "../components/ProductForm.module.css";
import { useNavigate } from "react-router-dom";

const AddPlayer = (props) => {
    const navigate = useNavigate();
    // Bring in props from parent component
    const { players, setPlayers } = props;
    // useState hooks to match database keys
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    // State for errors used for validation
    const [errors, setErrors] = useState({});

    //handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior on submit
        e.preventDefault();
        // Post request to create a new author
        axios
            .post("http://localhost:8000/api/players", {
                name,
                position,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPlayers([...players, res.data]);
                navigate("/players/list");
            })
            .catch((err) => {
                console.log("Error with post request (client)", err);
                setErrors(err.response.data.errors);
                console.log("ERROR:", errors);
            });
    };

    return (
        <div>
            <h2>App Player</h2>
            <p>
                <label>Player Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </p>
            <label>Preferred Position:</label>
            <select
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            >
                <option>Select a position</option>
                <option value="pitcher">pitcher</option>
                <option value="catcher">catcher</option>
                <option value="first baseman">first baseman</option>
                <option value="second baseman">second baseman</option>
                <option value="third baseman">third baseman</option>
                <option value="shortstop">shortstop</option>
                <option value="left fielder">left fielder</option>
                <option value="center fielder">center fielder</option>
                <option value="right fielder">right fielder</option>
            </select>
            <input type="submit" onClick={onSubmitHandler} />
        </div>
    );
};

export default AddPlayer;
