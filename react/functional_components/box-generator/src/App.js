import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ColorForm from "./components/ColorForm.js";
import ColorList from "./components/ColorList.js";
import { useState } from "react";

function App() {
    const [colors, setColors] = useState([]);
    return (
        <>
            <Container>
                <Row className="input">
                    <ColorForm colors={colors} setColors={setColors} />
                </Row>
                <Row>
                    <ColorList colors={colors} />
                </Row>
            </Container>
        </>
    );
}

export default App;
