import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const { products, setProducts } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log("Error with getALL request", err);
            });
    }, []);

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <h3>{product.title}</h3>
                        <br />
                        <p>
                            {product.price}
                            <br />
                            {product.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
