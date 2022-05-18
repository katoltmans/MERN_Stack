import React from "react";
import { NavLink } from "react-router-dom";

const ListAddToggle = () => {
    return (
        <div className="toggleBox">
            <NavLink className="NavLink" to="/players/list">
                List
            </NavLink>
            <span> | </span>
            <NavLink className="NavLink" to="/players/addplayer">
                Add Player
            </NavLink>
        </div>
    );
};

export default ListAddToggle;
