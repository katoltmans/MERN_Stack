import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
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
