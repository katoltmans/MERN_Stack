import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Main from "./views/Main";
import ProductDetail from "./components/ProductDetail";
import UpdateProduct from "./components/UpdateProduct";
//import ProductForm from "./components/ProductForm";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/" default /> //default path
                    <Route element={<ProductDetail />} path="/products/:id" />
                    <Route
                        element={<UpdateProduct />}
                        path="product/edit/:id"
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
