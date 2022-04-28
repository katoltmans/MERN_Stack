import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Word = (props) => {
    const { path } = useParams();

    return (
        <div className="container">
            <h1>The word is: {path}</h1>
        </div>
    );
};

export default Word;
