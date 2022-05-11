import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Main from "./views/Main";
//import ProductForm from "./components/ProductForm";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/" default /> //default path
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
