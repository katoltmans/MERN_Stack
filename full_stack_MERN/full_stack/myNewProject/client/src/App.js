import React, { useState } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from "./views/main.js";
//import PersonForm from "./components/PersonForm";
import Detail from "./components/Detail";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/*adding the default makes this the default path */}
                    <Route element={<Main />} path="/home" default />
                    <Route element={<Detail />} path="/people/:id" />
                    {/* The :id part of our path is a variable that we must give value to. */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
