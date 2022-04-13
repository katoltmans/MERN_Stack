import React, { useState } from "react";

// const [text, setText] = useState("");
// setText("state state I am setting state!!!");
// console.log(text);

// Outcome prediction: state state I am setting state!!!  ACTUAL: ReferenceError:useState is not defined
// Refactored Code:

const ChangeText = (props) => {
    const [text, setText] = useState("Check out state");

    const handleClick = () => {
        setText("state state I am setting state!!!");
        console.log(text);
    };

    return (
        <div>
            {text}
            <button onClick={handleClick}>Click To Change Text</button>
        </div>
    );
};

// Outcome prediction:
// Refactored Code:

// Outcome prediction:
// Refactored Code:

// Outcome prediction:
// Refactored+- Code:

export default ChangeText;
