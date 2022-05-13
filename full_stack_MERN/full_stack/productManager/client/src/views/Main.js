import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import styles from "../views/Main.module.css";

const Main = (props) => {
    const [products, setProducts] = useState([]);

    return (
        <div className={styles.container}>
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
};

export default Main;
