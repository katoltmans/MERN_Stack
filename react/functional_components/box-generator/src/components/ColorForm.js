import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
//import styles from "./ColorForm.module.css";

const ColorForm = (props) => {
    //const [colors, setColors] = props;
    const [colors, setColors] = useState([]);
    const [colorName, setColorName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (colorName) {
            console.log("color submitted", colorName);

            colors.push(colorName);
        } else {
            setError("Please input a color");
        }
        // Create an array to hold input colors
        //setColors([...colors, colorName]);
        e.target.reset();
        setColors(colors);
        console.log("COLORS: ", colors);
    };

    return (
        <>
            {error && <p className="error">{error}</p>}
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="colorName"
                    value={colorName}
                    onChange={(e) => {
                        setColorName(e.target.value);
                    }}
                />
                <Button type="submit">Add</Button>
            </Form>
        </>
    );
};

export default ColorForm;
