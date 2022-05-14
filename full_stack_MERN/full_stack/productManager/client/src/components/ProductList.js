import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import styles from "../components/ProductList.module.css";
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
    const { handleDelete, products, setProducts } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log("Error fetching data for list", err);
            });
    }, []);

    return (
        <div className={styles.list}>
            <h2>All Products:</h2>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <Link
                            to={`/products/${product._id}`}
                            style={{
                                color: "whitesmoke",
                                fontSize: "130%",
                                color: "lightcyan",
                            }}
                        >
                            {product.title}
                        </Link>
                        <br />
                        <Link to={`/product/edit/${product._id}`}>
                            <button className={styles.update}>Update</button>
                        </Link>
                        <DeleteButton
                            productId={product._id}
                            successCallback={() => Navigate("/")}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
