import React, { useState } from "react";

const AddName = (props) => {
    const [greeting, setGreeting] = useState("Knock knock, ");

    const handleClick = () => {
        setGreeting(greeting + "Neo");
        console.log(greeting);
    };

    return (
        <div>
            greeting={greeting}
            <button onClick={handleClick}>Click To Add Name To Greeting</button>
        </div>
    );
};

export default AddName;
