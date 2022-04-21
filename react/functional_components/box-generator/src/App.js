import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ColorForm from "./components/ColorForm.js";
import Color from "./components/ColorList.js";
import { useState } from "react";

function App() {
    const [colors, setColors] = useState([]);
    return (
        <>
            <Container>
                <Row className="input">
                    <ColorForm />
                </Row>
                <Row>
                    {colors.map((color) => {
                        return (
                            <Color
                                color={color}
                                colors={colors}
                                setColors={setColors}
                            />
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default App;
