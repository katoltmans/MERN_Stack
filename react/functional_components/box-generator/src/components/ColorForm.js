import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import styles from "./ColorForm.module.css";
import { v4 } from "uuid";

const ChangeColor = (props) => {
    const [colors, setColors] = props;
    const [colorName, setColorName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (colorName) {
            console.log("color submitted", colorName, v4());

            const colorName = {
                colorName: colorName,
            };
        } else {
            setError("Please input a color");
        }
        // Create an array to hold input colors
        setColors([...colors, colorName]);
        e.target.reset();
        setColorName("");
    };

    return (
        <>
            {error && <p className="error">{error}</p>}
            <form>
                <input
                    type="text"
                    name="colorName"
                    value={colorName}
                    onChange={(e) => {
                        setColorName(e.target.value);
                    }}
                />
                <Button type="submit">Add</Button>
            </form>
        </>
    );
};

export default ChangeColor;
