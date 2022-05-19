import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import components
import ListAddToggle from "../components/ListAddToggle";
import PlayerList from "../components/PlayerList";

const ListView = () => {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    return (
        <div>
            <ListAddToggle>
                <PlayerList player={players} setPlayers={setPlayers} />
            </ListAddToggle>
        </div>
    );
};

export default ListView;
