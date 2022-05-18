import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink className="NavLink" to="/players/list">
                Manage Players
            </NavLink>
            <span> | </span>
            <NavLink className="NavLink" to="/status/game/:num">
                Manage Player Status
            </NavLink>
        </header>
    );
};

export default Header;
