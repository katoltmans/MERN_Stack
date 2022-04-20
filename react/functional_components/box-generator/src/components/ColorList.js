import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "./ColorList.module.css";

const Color = (props) => {
    const { color, colors, setColors } = props;
    console.log("COLOR: ", color);
    const { colorName } = color;
    const handleClick = () => {
        console.log("clicked");
        const updatedColors = colors.map((c) => {
            colors.push(colorName);
        });
    };
    return (
        <Col className="mb-4">
            <div>Color</div>
        </Col>
    );
};

export default Color;
