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
        const newUser = { firstName, lastName, email, password };
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
            <div className="inputField">
                <label className="flex1">First Name: </label>
                <input
                    className="flex1"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="inputField">
                <label className="flex1">Last Name: </label>
                <input
                    className="flex1"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="inputField">
                <label className="flex1">Email: </label>
                <input
                    className="flex1"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="inputField">
                <label className="flex1">Password: </label>
                <input
                    className="flex1"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="inputField">
                <label>Confirm Password: </label>
                <input
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="submit"></input>
            <h5>Your Form Data:</h5>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </form>
    );
};

export default Form;
