import React, { useState } from "react";
import axios from "axios";
//import styles from "../components/ProductForm.module.css";
import { useNavigate } from "react-router-dom";
import styles from "../components/AddPlayer.module.css";

const AddPlayer = (props) => {
    const navigate = useNavigate();
    // Bring in props from parent component
    const { players, setPlayers } = props;
    // useState hooks to match database keys
    const [name, setName] = useState("");
    const [position, setPosition] = useState();
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
                try {
                    setPlayers([...players, res.data]);
                    navigate("/players/list");
                } catch (error) {
                    console.error(error);
                }
            })
            .catch((err) => {
                console.log("Error with post request (client)", err);
                setErrors(err.response.data.error.errors);
                console.log("ERROR:", errors);
            });
    };

    return (
        <div className={styles.addPlayer}>
            <h2>Add Player</h2>
            <form onSubmit={onSubmitHandler}>
                <div className={styles.formInput}>
                    <label>Player Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name ? (
                        <p className={styles.error}>{errors.name.message}</p>
                    ) : null}
                </div>
                <div className={styles.formInput}>
                    <label>Preferred Position:</label>
                    <select
                        name="position"
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
                </div>

                <br />
                <button type="submit" className={styles.submit}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddPlayer;
