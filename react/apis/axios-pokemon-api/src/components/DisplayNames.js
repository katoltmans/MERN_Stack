import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonNames = (props) => {
    const [pokeNames, setPokeNames] = useState(null);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then((response) => {
                setPokeNames(response.data.results);
            });
    }, []);

    return (
        <div>
            {pokeNames
                ? pokeNames.map((item, index) => {
                      return <div key={index}>{item.name}</div>;
                  })
                : null}
        </div>
    );
};

export default PokemonNames;
