import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
// Import components
import AuthorList from "./components/AuthorList";
// Import styling
import { AppBar, Container, Typography } from "@material-ui/core";

const App = () => {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <AppBar position="relative">
                    <h1 align="left">Favorite Authors</h1>
                </AppBar>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AuthorList />} path="/" default />{" "}
                        //default path
                    </Routes>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default App;
