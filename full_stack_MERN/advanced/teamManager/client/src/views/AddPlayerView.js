import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import components
import ListAddToggle from "../components/ListAddToggle";
import AddPlayer from "../components/AddPlayer";

const AddPlayerView = () => {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    return (
        <div>
            <ListAddToggle>
                <AddPlayer players={players} setPlayers={setPlayers} />
            </ListAddToggle>
        </div>
    );
};

export default AddPlayerView;
