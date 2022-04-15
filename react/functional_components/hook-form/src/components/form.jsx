import React, { useState } from "react";

const Form = (props) => {
    //state variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");

    const createUser = (e) => {
        //prevent data from being lost on page load
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

    const handleSubmit = (e) => {
        //prevent data from being lost on page load
        e.preventDefault();
        //general message if data is missing from the form
        if (firstName && lastName && email && password && confirmPassword) {
            console.log("Form Submitted");
        } else {
            setFormError("Please fill out all fields of the form");
        }
    };

    return (
        <>
            {formError && <h3 className="error">{formError}</h3>}
            <form onSubmit={createUser}>
                <div>
                    <div className="error">
                        {firstName && firstName.length < 2 && (
                            <p>First name must be at least 2 characters</p>
                        )}
                    </div>
                    <div className="inputField">
                        <label className="flex1">First Name: </label>
                        <input
                            className="flex1"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="error">
                        {lastName && lastName.length < 2 && (
                            <p>Last name must be at least 2 characters</p>
                        )}
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
                </div>
                <div>
                    <div className="error">
                        {email && email.length < 5 && (
                            <p>Email must be at least 5 characters</p>
                        )}
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
                </div>
                <div>
                    <div className="error">
                        {password && password.length < 5 && (
                            <p>Password must be at least 8 characters</p>
                        )}
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
        </>
    );
};

export default Form;
