import React, { useState, useEffect } from "react";

const DisplayNames = (props) => {
    const [names, setNames] = useState(0);

    useEffect(() => {
        console.log("Names");
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setNames({
                    name: response.results,
                });
            });
    }, []);

    return (
        <div>
            {names.name
                ? names.name.map((item, index) => {
                      return <div key={index}>{item.name}</div>;
                  })
                : null}
        </div>
    );
};

export default DisplayNames;
