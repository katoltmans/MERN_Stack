import React, { useState } from "react";

const Form = (props) => {
    //state variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        //prevent data from bring lost on page load
        e.preventDefault();
        //keys will match variable names
        const newUser = { username, email, password };
        console.log(newUser);
        //save state values for created user
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        //create form
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
        </form>
    );
};
