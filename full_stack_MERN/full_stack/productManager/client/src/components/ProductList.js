import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../components/ProductList.module.css";

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

    const handleDelete = (productId) => {
        axios
            .delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res);
                setProducts(
                    products.filter((product) => product._id !== productId)
                );
            })
            .catch((err) => {
                console.log("error with delete request", err);
            });
    };

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
                        <button
                            onClick={() => handleDelete(product._id)}
                            className={styles.delete}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
