import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Number = (props) => {
    const { path } = useParams();

    return (
        <div className="container">
            <h1>The number is: {path}</h1>
        </div>
    );
};

export default Number;
