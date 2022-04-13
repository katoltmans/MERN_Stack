import React, { useState } from "react";

const SetArray = (props) => {
    const [arr, setArr] = useState([]);

    const handleClick = () => {
        const tempArray = [];
        for (let i = 1; i <= 5; i++) {
            tempArray.push(i);
        }
        setArr(tempArray);
        console.log(arr);
    };

    return (
        <div>
            array={arr}
            <button onClick={handleClick}>Click To Display Array</button>
        </div>
    );
};

export default SetArray;
