import React, { useState } from "react";

const SetItemState = (props) => {
    const [state, setState] = useState({
        items: [],
        totalPrice: 0.0,
    });

    const handleClick = () => {
        state.items.push("toy mouse");
        setState({
            items: state.items,
            totalPrice: state.totalPrice + 10.99,
        });
        console.log(state.items);
    };

    return (
        <div>
            items=
            {state.items.map((item) => (
                <span>{item},</span>
            ))}{" "}
            price={state.totalPrice.toFixed(2)}
            <button onClick={handleClick}>Click To Update Items</button>
        </div>
    );
};

export default SetItemState;
