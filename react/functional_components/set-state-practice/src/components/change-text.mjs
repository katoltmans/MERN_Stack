import React, { useState } from "react";

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

export default ChangeText;
