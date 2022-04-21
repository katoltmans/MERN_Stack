import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "./ColorList.module.css";

const Color = (props) => {
    const { color, colors, setColors } = props;
    console.log("COLOR: ", color);
    //const { colorName } = color;

    return (
        <Col className="mb-4">
            <div>{color}</div>
        </Col>
    );
};

export default Color;
