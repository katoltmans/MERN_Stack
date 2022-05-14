import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import styles from "../views/Main.module.css";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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

    const removeFromDom = (productId) => {
        axios
            .delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res);
                setProducts(
                    products.filter((product) => product._id !== productId)
                );
            })
            .catch((err) => {
                console.log("Error with delete request", err);
            });
    };

    const createProduct = (productParam) => {
        axios
            .post("http://localhost:8000/api/products", productParam)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error with create request", err);
            });
    };

    return (
        <div className={styles.container}>
            <h2>Product Manager</h2>
            <ProductForm
                onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDescription=""
            />
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;
