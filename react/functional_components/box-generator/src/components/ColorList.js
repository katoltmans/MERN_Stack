import React, { useState } from "react";

const ColorList = (props) => {
    const { colors } = props;
    console.log("COLORS: ", colors);
    //const { colorName } = color;

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: color,
                        margin: "10px",
                        height: "100px",
                        width: "100px",
                    }}
                ></div>
            ))}
        </>
    );
};

export default ColorList;
