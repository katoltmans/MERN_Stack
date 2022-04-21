import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "./ColorList.module.css";

const ColorList = (props) => {
    const { colors } = props;
    console.log("COLORS: ", colors);
    //const { colorName } = color;

    return (
        <>
            {colors.map((color, index) => (
                <Col
                    key={index}
                    className="mb-4"
                    style={{
                        backgroundColor: color,
                        height: 100,
                        width: 100,
                    }}
                ></Col>
            ))}
        </>
    );
};

export default ColorList;
