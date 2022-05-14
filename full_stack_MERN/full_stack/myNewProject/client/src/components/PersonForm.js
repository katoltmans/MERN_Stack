import React, { useState } from "react";

const PersonForm = (props) => {
    // bring in the parent state as props
    const { initialFirstName, initialLastName, onSubmitProps } = props;
    //keep track of what is being typed via the useState hook
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    //handler when the form us submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProps({ firstName, lastName });
    };

    return (
        <div>
            <p>
                <label>First Name</label>
                <br />
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </p>
            <p>
                <label>Last Name</label>
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </p>
            <input type="submit" />
        </div>
    );
};

export default PersonForm;
