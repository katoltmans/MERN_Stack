import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from "./views/main.js";
//import PersonForm from "./components/PersonForm";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/home" default /> //adding
                    the default makes this the default path
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
